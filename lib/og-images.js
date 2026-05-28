/**
 * OG image mapping — assigns a unique Unsplash image per service subtype
 * so social previews look different across pages.
 * Falls back to the Firestore imageUrl if no match is found.
 */

const U = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const OG_IMAGES = {
  // ── CLIMATIZACIÓN ──
  'instalacion-de-aire-acondicionado':            U('photo-1545259741-2ea3ebf61fa3'),
  'mantenimiento-de-aire-acondicionado':           U('photo-1631545806609-ec38b6f0e6a7', 2400),
  'reparacion-de-aire-acondicionado':              U('photo-1718203862467-c33159fdc504'),
  'reparacion-de-aire-acondicionado-inverter':     U('photo-1667983453881-4992fe86ab1b'),
  'reparacion-de-tarjeta-de-aire-acondicionado':   U('photo-1621905251189-08b45d6a269e'),
  'tecnico-de-aire-acondicionado-a-domicilio':     U('photo-1691351582808-329cde17ffa2'),

  // ── ELECTRICIDAD ──
  'reparacion-de-cortocircuitos-electricos':       U('photo-1621905252507-b35492cc74b4'),
  'instalacion-de-breakers-y-paneles-electricos':  U('photo-1660330589693-99889d60181e'),
  'reparacion-electrica':                          U('photo-1665242043190-0ef29390d289'),
  'instalacion-electrica':                         U('photo-1771463268644-73df02c4c23a'),
  'mantenimiento-electrico':                       U('photo-1597502310092-31cdaa35b46d'),
  'instalacion-de-lamparas-y-abanicos-de-techo':   U('photo-1621905251189-08b45d6a269e', 2400),
  'electricista-a-domicilio-24-horas':             U('photo-1621905252507-b35492cc74b4', 2400),

  // ── PLOMERÍA ──
  'instalacion-de-plomeria':                       U('photo-1558618666-fcd25c85cd64', 2400),
  'reparacion-de-tuberias':                        U('photo-1676210134188-4c05dd172f89'),
  'reparacion-de-filtraciones-y-fugas-de-agua':    U('photo-1620653713380-7a34b773fef8'),
  'limpieza-de-tinacos-y-cisternas':               U('photo-1517646287270-a5a9ca602e5c'),
  'instalacion-de-bombas-de-agua':                 U('photo-1676210133055-eab6ef033ce3'),
  'plomero-a-domicilio-24-horas':                  U('photo-1542013936693-884638332954'),
  'instalacion-de-inodoros-y-lavamanos':            U('photo-1585704032915-c3400ca199e7'),
  'destape-de-tuberias-y-desagues-con-maquina':    U('photo-1558618666-fcd25c85cd64'),

  // ── LÍNEA BLANCA ──
  'reparacion-de-estufas-a-gas':                   U('photo-1556910103-1c02745a8050'),
  'reparacion-de-nevera':                          U('photo-1584568694244-14fbdf83bd30', 2400),
  'reparacion-de-secadora':                        U('photo-1582735689369-4fe89db7114c'),
  'tecnico-de-lavadoras-a-domicilio':              U('photo-1610557892470-55d9e80c0bce'),
  'reparacion-de-neveras-y-refrigeradores':        U('photo-1584286595398-a59f21d313f5'),
  'tecnico-de-hornos-electricos-y-microondas':     U('photo-1556910103-1c02745a8050', 2400),
  'reparacion-de-lavadora':                        U('photo-1626806787461-102c1bfaaea1'),
  'reparacion-de-secadoras-a-gas-y-electricas':    U('photo-1626806787461-102c1bfaaea1', 2400),
  'mantenimiento-de-neveras-inverter':             U('photo-1584568694244-14fbdf83bd30'),
  'reparacion-de-lavadoras-automaticas':           U('photo-1604335399105-a0c585fd81a1'),
  'reparacion-de-lavavajillas':                    U('photo-1584286595398-a59f21d313f5', 2400),

  // ── LAVANDERÍA ──
  'lavanderia-a-domicilio':                        U('photo-1545173168-9f1947eebb7f', 2400),

  // ── LIMPIEZA ──
  'limpieza-de-muebles':                           U('photo-1555041469-a586c61ea9bc'),
  'pulido-de-pisos':                               U('photo-1584622650111-993a426fbf0a', 2400),
  'limpieza-de-cocinas':                           U('photo-1556909114-f6e7ad7d3136', 2400),

  // ── REFRIGERACIÓN COMERCIAL ──
  'reparacion-de-congeladores-y-cuartos-frios':    U('photo-1588523326759-4d870d03b306'),

  // ── SEGURIDAD ──
  'instalacion-de-camaras-de-seguridad-cctv':      U('photo-1589935447067-5531094415d1'),
  'reparacion-e-instalacion-de-intercoms':          U('photo-1528312635006-8ea0bc49ec63'),
};

/**
 * Get the OG image URL for a given slug.
 * Extracts the service subtype from the slug and looks it up.
 * @param {string} slug - e.g. "reparacion-de-aire-acondicionado-en-los-jardines"
 * @param {string} fallback - fallback URL (e.g. Firestore imageUrl)
 * @returns {string} image URL
 */
export function getOgImage(slug, fallback) {
  const match = slug.match(/^(.+?)-en-(.+)$/);
  if (!match) return fallback;

  const serviceKey = match[1];

  // Exact match
  if (OG_IMAGES[serviceKey]) return OG_IMAGES[serviceKey];

  // Partial match (subtype contains key or key contains subtype)
  const keys = Object.keys(OG_IMAGES);
  const partial = keys.find(k => serviceKey.includes(k) || k.includes(serviceKey));
  if (partial) return OG_IMAGES[partial];

  return fallback;
}
