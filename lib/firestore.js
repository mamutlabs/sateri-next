// Firestore REST API helper — works in Next.js Server Components & serverless
const PROJECT = 'hacpen-ai-industrial';
const DATABASE = 'ai-studio-8d8b5450-7cfb-4bdf-953f-a488ca9f3c8e';
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/${DATABASE}/documents`;

/** Convert Firestore REST field value to plain JS value */
function parseValue(val) {
  if (val === undefined || val === null) return null;
  if ('stringValue' in val) return val.stringValue;
  if ('integerValue' in val) return Number(val.integerValue);
  if ('doubleValue' in val) return val.doubleValue;
  if ('booleanValue' in val) return val.booleanValue;
  if ('arrayValue' in val) return (val.arrayValue.values || []).map(parseValue);
  if ('mapValue' in val) return parseFields(val.mapValue.fields || {});
  if ('nullValue' in val) return null;
  return null;
}

/** Convert Firestore REST fields object to plain JS object */
function parseFields(fields = {}) {
  return Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, parseValue(v)])
  );
}

/** Get a single document by collection + id */
export async function getDocument(collection, id) {
  const res = await fetch(`${BASE}/${collection}/${id}`, { cache: 'force-cache' });
  if (!res.ok) return null;
  const data = await res.json();
  return { id, ...parseFields(data.fields) };
}

/** Run a structured query and return array of docs */
export async function runQuery(collectionId, filters = []) {
  const where = filters.length === 1
    ? {
        fieldFilter: {
          field: { fieldPath: filters[0].field },
          op: filters[0].op || 'EQUAL',
          value: { stringValue: filters[0].value },
        },
      }
    : filters.length > 1
    ? {
        compositeFilter: {
          op: 'AND',
          filters: filters.map(f => ({
            fieldFilter: {
              field: { fieldPath: f.field },
              op: f.op || 'EQUAL',
              value: { stringValue: f.value },
            },
          })),
        },
      }
    : undefined;

  const body = {
    structuredQuery: {
      from: [{ collectionId }],
      ...(where ? { where } : {}),
    },
  };

  const res = await fetch(`${BASE}:runQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'force-cache',
  });

  if (!res.ok) return [];
  const results = await res.json();

  return results
    .filter(r => r.document)
    .map(r => {
      const id = r.document.name.split('/').pop();
      return { id, ...parseFields(r.document.fields) };
    });
}
