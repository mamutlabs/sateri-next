/**
 * Content enrichment for SEO pages with short Firestore content.
 * Generates supplemental paragraphs based on service subtype and sector.
 * Only used when existing content is < 150 words.
 */

const SERVICE_CONTENT = {
  // ── CLIMATIZACIÓN ──
  'instalacion-de-aire-acondicionado': (sector) => [
    `La instalación correcta de un aire acondicionado en ${sector} es fundamental para garantizar su rendimiento y durabilidad. Un equipo mal instalado puede consumir hasta un 30% más de energía y reducir su vida útil significativamente.`,
    `Nuestros técnicos evalúan el espacio, calculan la capacidad en BTU necesaria según el tamaño de la habitación y la orientación solar, y recomiendan la ubicación óptima para la unidad interior y exterior. Trabajamos con sistemas split, inverter y multi-split.`,
    `El proceso incluye: montaje de soporte con nivelación, conexión de tuberías de cobre con soldadura de plata, tendido eléctrico independiente con breaker dedicado, prueba de presurización con nitrógeno para detectar fugas, carga de gas refrigerante R-410A y prueba de funcionamiento completa.`,
  ],
  'mantenimiento-de-aire-acondicionado': (sector) => [
    `El mantenimiento preventivo de su aire acondicionado en ${sector} evita averías costosas y mantiene el equipo funcionando con máxima eficiencia energética. Se recomienda realizarlo cada 3 a 4 meses en clima tropical.`,
    `El servicio incluye limpieza profunda de filtros, serpentín del evaporador y condensador, verificación del nivel de gas refrigerante, revisión de conexiones eléctricas, limpieza del drenaje de condensado y medición de temperaturas de entrada y salida.`,
    `Un aire sin mantenimiento acumula polvo y bacterias que afectan la calidad del aire interior y pueden causar problemas respiratorios. Además, un serpentín sucio obliga al compresor a trabajar más, aumentando el consumo eléctrico y el riesgo de fallas mecánicas.`,
  ],
  'reparacion-de-aire-acondicionado': (sector) => [
    `Si su aire acondicionado en ${sector} no enfría, gotea agua, hace ruido extraño o no enciende, nuestros técnicos certificados diagnostican el problema el mismo día de su solicitud.`,
    `Las fallas más comunes incluyen: fuga de gas refrigerante, compresor dañado, capacitor quemado, tarjeta electrónica defectuosa, motor del ventilador atascado y obstrucción en el drenaje de condensado. Cada diagnóstico incluye explicación clara del problema y presupuesto antes de proceder.`,
    `Reparamos todas las marcas disponibles en el mercado dominicano: Samsung, LG, Carrier, Daikin, Midea, Gree, entre otras. Utilizamos repuestos originales o compatibles certificados, y cada reparación incluye garantía por escrito.`,
  ],
  'reparacion-de-aire-acondicionado-inverter': (sector) => [
    `Los aires acondicionados inverter requieren técnicos especializados para su reparación en ${sector}. La tecnología inverter utiliza un compresor de velocidad variable controlado por una tarjeta electrónica que necesita diagnóstico especializado.`,
    `Las fallas comunes en equipos inverter incluyen: errores en la tarjeta de control (códigos de error en pantalla), sensor de temperatura dañado, problemas en el módulo IPM del compresor, fuga de gas en sistema de alta presión y fallas en la comunicación entre unidad interior y exterior.`,
    `Nuestros técnicos cuentan con herramientas de diagnóstico electrónico para leer códigos de error y medir variables del sistema inverter. No aplicamos métodos de reparación convencional que pueden dañar componentes sensibles del equipo.`,
  ],
  'reparacion-de-tarjeta-de-aire-acondicionado': (sector) => [
    `La tarjeta electrónica es el cerebro del aire acondicionado. Cuando falla en ${sector}, el equipo puede mostrar códigos de error, no encender, o comportarse de manera errática. Nuestros técnicos diagnostican y reparan tarjetas a nivel de componente.`,
    `Reparamos tarjetas de control de unidad interior y exterior, módulos de potencia IPM, tarjetas de display y receptores de señal infrarroja. Cuando la reparación no es viable, reemplazamos la tarjeta con una compatible certificada.`,
    `El diagnóstico incluye medición de voltajes, verificación de componentes (capacitores, transistores, relés) y prueba de funcionamiento completa. Este enfoque de reparación a nivel de componente puede ahorrarle hasta un 60% versus el reemplazo completo de la tarjeta.`,
  ],
  'tecnico-de-aire-acondicionado-a-domicilio': (sector) => [
    `Enviamos técnicos de aire acondicionado certificados directamente a su hogar o negocio en ${sector}. No necesita trasladar el equipo ni buscar un taller — el diagnóstico y la reparación se realizan en sitio.`,
    `Nuestro servicio a domicilio cubre instalación, mantenimiento preventivo, reparación de fallas, recarga de gas refrigerante y diagnóstico de problemas eléctricos o mecánicos. Atendemos equipos split, inverter, de ventana y centrales.`,
    `Al solicitar el servicio, le asignamos un técnico disponible en su zona de ${sector} y le confirmamos la hora estimada de llegada. El técnico llega con herramientas, equipo de diagnóstico y repuestos comunes para resolver la mayoría de los problemas en una sola visita.`,
  ],

  // ── PLOMERÍA ──
  'instalacion-de-plomeria': (sector) => [
    `La instalación de plomería en ${sector} abarca desde la conexión de un grifo hasta el sistema completo de agua fría, caliente y drenaje de una construcción nueva. Nuestros plomeros certificados trabajan con los más altos estándares de calidad.`,
    `Instalamos tuberías de PVC, CPVC y cobre para agua fría y caliente, inodoros, lavamanos, fregaderos, duchas, calentadores de agua (eléctricos y solares), cisternas, bombas de agua y sistemas de filtración. Cada instalación incluye prueba de presión para garantizar cero fugas.`,
    `Antes de comenzar, presentamos un presupuesto detallado con materiales y mano de obra. Respetamos los plazos acordados y dejamos el área de trabajo limpia. Todos nuestros materiales son de marcas certificadas disponibles en el mercado dominicano.`,
  ],
  'reparacion-de-tuberias': (sector) => [
    `Una tubería rota o con fuga en ${sector} requiere atención inmediata para evitar daños estructurales, humedad en paredes y pisos, y desperdicio de agua. SATERI envía un plomero certificado el mismo día de la solicitud.`,
    `Reparamos tuberías de PVC, CPVC, cobre y galvanizado. Nuestros plomeros localizan fugas con métodos no invasivos para minimizar la demolición innecesaria. Cuando se requiere picar, restauramos el acabado al finalizar.`,
    `Las causas más comunes de fallas en tuberías incluyen: corrosión por antigüedad, golpe de ariete por presión excesiva, raíces de árboles que penetran el drenaje, juntas mal selladas y materiales de baja calidad en la instalación original.`,
  ],
  'reparacion-de-filtraciones-y-fugas-de-agua': (sector) => [
    `Las filtraciones de agua en ${sector} pueden causar daños graves si no se atienden a tiempo: humedad en paredes, moho, deterioro de pisos y techos, y facturas de agua elevadas. Nuestros plomeros detectan y reparan la fuente del problema.`,
    `Utilizamos métodos de detección de fugas que minimizan la necesidad de demolición: pruebas de presión, inspección visual de juntas y válvulas, y rastreo del recorrido de la tubería. Una vez localizada la fuga, reparamos con materiales certificados.`,
    `Los tipos de filtraciones más comunes incluyen: fugas en juntas de tuberías, goteras desde el techo por tuberías dañadas, humedad ascendente por impermeabilización deficiente y fugas en válvulas de paso o llaves de cierre.`,
  ],
  'destape-de-tuberias-y-desagues-con-maquina': (sector) => [
    `El destape profesional de tuberías en ${sector} resuelve obstrucciones que los métodos caseros no pueden eliminar. Utilizamos máquinas de cable rotativo y equipos de hidropresión para limpiar drenajes de cocina, baño y piso.`,
    `Las obstrucciones más comunes incluyen: acumulación de grasa en tuberías de cocina, cabello y jabón en drenajes de baño, raíces que penetran tuberías de drenaje exterior, objetos extraños y sedimento calcáreo por agua dura.`,
    `Nuestro servicio incluye diagnóstico de la obstrucción, destape con máquina profesional, limpieza del tramo afectado y recomendaciones para prevenir futuras obstrucciones. En casos severos donde la tubería está colapsada, realizamos el reemplazo del tramo dañado.`,
  ],
  'instalacion-de-bombas-de-agua': (sector) => [
    `La instalación de bombas de agua en ${sector} es esencial para mantener presión constante en residencias y negocios. Instalamos bombas centrífugas, periféricas, sumergibles y sistemas de presión constante con variador de frecuencia.`,
    `El proceso incluye: evaluación del caudal y presión necesarios, selección de la bomba adecuada según el número de pisos y puntos de consumo, instalación eléctrica con protección térmica, conexión hidráulica con válvulas de retención y prueba de funcionamiento.`,
    `Una bomba mal dimensionada puede generar presión insuficiente o excesiva, causar golpe de ariete y dañar tuberías y accesorios. Nuestros técnicos calculan correctamente las necesidades de su propiedad en ${sector} para instalar el equipo adecuado.`,
  ],
  'instalacion-de-inodoros-y-lavamanos': (sector) => [
    `La instalación profesional de inodoros y lavamanos en ${sector} garantiza un funcionamiento correcto, sin fugas ni problemas de drenaje. Instalamos piezas sanitarias de todas las marcas disponibles en el mercado dominicano.`,
    `El servicio incluye: retiro de la pieza existente (si aplica), preparación de la superficie, instalación con anillo de cera y pernos de anclaje, conexión de suministro de agua con mangueras flexibles de acero inoxidable, y prueba de descarga y llenado.`,
    `Un inodoro mal instalado puede generar fugas de agua en la base, movimiento que deteriora el sello, y problemas de descarga. Nuestros plomeros aseguran la nivelación correcta y el sellado hermético para evitar estos problemas.`,
  ],
  'plomero-a-domicilio-24-horas': (sector) => [
    `Disponemos de plomeros para atención a domicilio en ${sector} durante horario laboral extendido. Para emergencias como tuberías rotas o fugas activas, priorizamos la asignación inmediata de un técnico en su zona.`,
    `Nuestro servicio a domicilio cubre: reparación de fugas, destape de tuberías, instalación de accesorios, reparación de inodoros, cambio de llaves y grifos, instalación de calentadores de agua y diagnóstico de problemas de presión.`,
    `Al contactarnos, evaluamos la urgencia de su caso y le asignamos un plomero disponible en ${sector}. El técnico llega con herramientas y materiales básicos para resolver la mayoría de los problemas en una sola visita, sin necesidad de volver otro día.`,
  ],

  // ── ELECTRICIDAD ──
  'instalacion-electrica': (sector) => [
    `La instalación eléctrica en ${sector} debe cumplir con las normas de seguridad para proteger a los ocupantes y los equipos conectados. Nuestros electricistas certificados realizan instalaciones residenciales y comerciales completas.`,
    `El servicio incluye: tendido de cableado calibre adecuado, instalación de tomacorrientes y apagadores, montaje de paneles de distribución con breakers, circuitos dedicados para equipos de alto consumo (A/C, estufa eléctrica) y puesta a tierra del sistema.`,
    `Una instalación eléctrica deficiente es la principal causa de incendios residenciales. Cables subdimensionados, conexiones sueltas y falta de protección térmica representan riesgos graves. Nuestros electricistas siguen las normas NEC aplicables y utilizan materiales certificados.`,
  ],
  'reparacion-electrica': (sector) => [
    `Los problemas eléctricos en ${sector} requieren atención profesional inmediata. Tomacorrientes que no funcionan, breakers que se disparan constantemente, luces que parpadean y olores a quemado son señales de fallas que pueden ser peligrosas.`,
    `Nuestros electricistas diagnostican la causa raíz del problema: cableado deteriorado, conexiones sueltas, sobrecarga de circuitos, cortocircuitos, o fallas en el panel de distribución. Cada diagnóstico incluye explicación clara y presupuesto antes de proceder.`,
    `Reparamos circuitos residenciales y comerciales, reemplazamos cableado antiguo o deteriorado, balanceamos cargas en paneles de distribución y corregimos instalaciones que no cumplen con las normas de seguridad eléctrica.`,
  ],
  'reparacion-de-cortocircuitos-electricos': (sector) => [
    `Un cortocircuito eléctrico en ${sector} puede provocar daños a equipos conectados, incendios y electrocución. Cuando un breaker se dispara repetidamente o detecta olor a quemado, es fundamental llamar a un electricista certificado de inmediato.`,
    `Las causas más comunes de cortocircuitos incluyen: cables pelados que hacen contacto entre sí, tomacorrientes dañados con conexiones expuestas, equipos con fallas internas, sobrecarga del circuito y deterioro del aislamiento por antigüedad o roedores.`,
    `Nuestro diagnóstico incluye pruebas de aislamiento con megóhmetro, medición de resistencia en cada circuito y localización del punto exacto de la falla. Reparamos el tramo afectado y verificamos que todo el sistema funcione correctamente antes de dar por terminado el trabajo.`,
  ],
  'instalacion-de-breakers-y-paneles-electricos': (sector) => [
    `El panel eléctrico es el centro de distribución de energía de su propiedad en ${sector}. Un panel obsoleto, con breakers inadecuados o sin capacidad suficiente, representa un riesgo de seguridad y puede dañar sus equipos electrónicos.`,
    `Instalamos paneles de distribución nuevos con breakers termomagnéticos de la capacidad adecuada para cada circuito. Realizamos el balanceo de cargas entre fases para optimizar el consumo y prevenir sobrecargas.`,
    `El proceso incluye: evaluación de la carga total del inmueble, selección del panel y breakers adecuados, montaje con barra de tierra y neutro independientes, etiquetado de cada circuito y prueba de funcionamiento con medición de voltaje en cada salida.`,
  ],
  'instalacion-de-lamparas-y-abanicos-de-techo': (sector) => [
    `La instalación de lámparas y abanicos de techo en ${sector} requiere conocimiento eléctrico para garantizar una conexión segura y un montaje firme. Un abanico mal instalado puede caerse o causar vibraciones molestas.`,
    `Instalamos lámparas LED, chandeliers, plafones, apliqués de pared, abanicos de techo con y sin luz, y ventiladores industriales. Cada instalación incluye verificación de la capacidad del circuito y refuerzo de la caja eléctrica del techo si es necesario.`,
    `Para abanicos de techo, verificamos que la caja de soporte sea rated para ventiladores (no todas las cajas eléctricas soportan el peso y la vibración). Instalamos el soporte adecuado, balanceamos las aspas y probamos todas las velocidades.`,
  ],
  'electricista-a-domicilio-24-horas': (sector) => [
    `Enviamos electricistas certificados directamente a su hogar o negocio en ${sector} durante nuestro horario laboral. Para emergencias eléctricas que representan riesgo inmediato, priorizamos la asignación de un técnico disponible en su zona.`,
    `Nuestro servicio a domicilio cubre: diagnóstico de fallas eléctricas, reparación de cortocircuitos, instalación de tomacorrientes y apagadores, cambio de breakers, instalación de lámparas y abanicos, y revisión general del sistema eléctrico.`,
    `Cada electricista llega equipado con herramientas de diagnóstico profesional: multímetro digital, detector de voltaje sin contacto, pinza amperimétrica y megóhmetro para pruebas de aislamiento. La mayoría de los problemas se resuelven en una sola visita.`,
  ],
  'mantenimiento-electrico': (sector) => [
    `El mantenimiento eléctrico preventivo en ${sector} detecta problemas antes de que se conviertan en fallas costosas o peligrosas. Se recomienda una revisión completa al menos una vez al año.`,
    `El servicio incluye: inspección visual de cableado y conexiones, medición de voltaje y amperaje en cada circuito, verificación del sistema de puesta a tierra, revisión de breakers y su calibración, limpieza de terminales y ajuste de conexiones flojas.`,
    `Las conexiones flojas generan calor por resistencia, lo cual deteriora el aislamiento del cable y puede provocar un incendio. El mantenimiento preventivo detecta estos puntos calientes y los corrige antes de que representen un riesgo.`,
  ],

  // ── LÍNEA BLANCA ──
  'reparacion-de-nevera': (sector) => [
    `Si su nevera en ${sector} no enfría, enfría demasiado, hace ruido, gotea agua o acumula escarcha excesiva, nuestros técnicos certificados diagnostican y reparan el problema el mismo día.`,
    `Las fallas más comunes incluyen: compresor dañado o débil, fuga de gas refrigerante, termostato descalibrado, ventilador del evaporador trabado, timer de descongelación defectuoso y obstrucción en el sistema de drenaje de descongelación.`,
    `Reparamos neveras de una y dos puertas, refrigeradores side-by-side, french door y bottom freezer de todas las marcas: Samsung, LG, Whirlpool, Frigidaire, Mabe y más. Utilizamos repuestos originales o compatibles certificados.`,
  ],
  'reparacion-de-neveras-y-refrigeradores': (sector) => [
    `La reparación profesional de neveras y refrigeradores en ${sector} extiende la vida útil de su equipo y evita el gasto de reemplazarlo prematuramente. Nuestros técnicos diagnostican con precisión antes de recomendar cualquier reparación.`,
    `Atendemos problemas de enfriamiento insuficiente, formación de hielo excesiva, ruidos anormales, fugas de agua, compresor que no arranca, luces internas apagadas y puertas que no sellan correctamente. Cada reparación incluye garantía por escrito.`,
    `El diagnóstico incluye verificación de temperaturas con termómetro digital, medición de amperaje del compresor, prueba de continuidad en componentes eléctricos y revisión del sistema de refrigeración para detectar fugas de gas.`,
  ],
  'mantenimiento-de-neveras-inverter': (sector) => [
    `Las neveras inverter requieren mantenimiento especializado en ${sector} para mantener su eficiencia energética superior. La tecnología inverter utiliza un compresor de velocidad variable que necesita condiciones óptimas para funcionar correctamente.`,
    `El mantenimiento incluye: limpieza del serpentín del condensador (acumula polvo que reduce la eficiencia), verificación del sellado de puertas con empaque magnético, revisión del ventilador del evaporador, limpieza del sistema de drenaje y medición de temperaturas.`,
    `Una nevera inverter con el condensador sucio puede consumir hasta un 20% más de energía. El mantenimiento periódico cada 6 meses mantiene el consumo bajo y previene fallas en el compresor, que es el componente más costoso de reemplazar.`,
  ],
  'reparacion-de-lavadora': (sector) => [
    `Si su lavadora en ${sector} no centrifuga, no drena, hace ruido excesivo, no llena de agua o no enciende, nuestros técnicos diagnostican y reparan el problema en su hogar sin necesidad de trasladar el equipo.`,
    `Las fallas más comunes incluyen: bomba de drenaje obstruida, correa desgastada o rota, rodamientos del tambor dañados, electroválvula de entrada de agua defectuosa, tarjeta electrónica con fallas y motor quemado o con escobillas gastadas.`,
    `Reparamos lavadoras de carga superior y frontal, automáticas y semiautomáticas, de todas las marcas disponibles en República Dominicana. El técnico llega con herramientas y repuestos comunes para resolver la mayoría de los problemas en una sola visita.`,
  ],
  'reparacion-de-lavadoras-automaticas': (sector) => [
    `Las lavadoras automáticas en ${sector} combinan componentes mecánicos y electrónicos que requieren diagnóstico especializado. Un código de error en la pantalla puede indicar desde un sensor desconectado hasta una falla en la tarjeta de control.`,
    `Atendemos fallas como: ciclo de lavado incompleto, centrifugado débil o ausente, vibración excesiva durante el ciclo, fugas de agua por debajo o por la puerta, error de balanceo de carga y problemas con el dispensador de detergente.`,
    `Nuestros técnicos utilizan manuales técnicos por modelo para interpretar códigos de error y realizar diagnósticos precisos. Esto evita el reemplazo innecesario de piezas y reduce el costo de la reparación.`,
  ],
  'tecnico-de-lavadoras-a-domicilio': (sector) => [
    `Enviamos técnicos especializados en lavadoras directamente a su hogar en ${sector}. El diagnóstico y la reparación se realizan en sitio — no necesita desconectar ni trasladar su equipo.`,
    `Nuestro servicio a domicilio atiende lavadoras de todas las marcas y modelos: Samsung, LG, Whirlpool, Mabe, Frigidaire, Electrolux y más. Cubrimos tanto lavadoras de carga superior como frontal, automáticas y con tecnología inverter.`,
    `El técnico evaluará el problema, le explicará el diagnóstico y le presentará un presupuesto antes de proceder. Si usted aprueba, la mayoría de las reparaciones se completan en la misma visita. Incluimos garantía por escrito en cada reparación.`,
  ],
  'reparacion-de-secadora': (sector) => [
    `Si su secadora en ${sector} no calienta, no gira, hace ruido o tarda demasiado en secar la ropa, nuestros técnicos diagnostican y reparan el problema directamente en su hogar.`,
    `Las fallas más comunes incluyen: resistencia de calentamiento quemada, termostato de seguridad disparado, correa del tambor rota, motor del ventilador de escape obstruido, sensor de humedad sucio y acumulación de pelusa en el ducto de ventilación.`,
    `La acumulación de pelusa en el ducto de ventilación es la causa principal de fallas en secadoras y también representa un riesgo de incendio. Nuestro servicio incluye limpieza del ducto cuando se detecta obstrucción.`,
  ],
  'reparacion-de-secadoras-a-gas-y-electricas': (sector) => [
    `Reparamos secadoras tanto eléctricas como a gas en ${sector}. Las secadoras a gas requieren conocimiento adicional de conexiones de gas y sistemas de encendido que nuestros técnicos dominan.`,
    `En secadoras eléctricas atendemos: resistencias quemadas, termostatos defectuosos, motores dañados y problemas en la tarjeta de control. En secadoras a gas: válvulas de gas defectuosas, ignitores desgastados, sensores de llama y reguladores de presión.`,
    `Independientemente del tipo de secadora, verificamos siempre el ducto de ventilación exterior. Un ducto obstruido o demasiado largo reduce la eficiencia del secado y puede causar sobrecalentamiento del equipo.`,
  ],
  'reparacion-de-estufas-a-gas': (sector) => [
    `La reparación de estufas a gas en ${sector} requiere técnicos con conocimiento en sistemas de gas y componentes eléctricos de encendido. Una estufa con problemas de gas puede representar un riesgo serio de seguridad.`,
    `Las fallas más comunes incluyen: quemadores obstruidos que no encienden uniformemente, válvulas de gas que no regulan correctamente, sistema de encendido eléctrico defectuoso, horno que no mantiene la temperatura y fugas de gas en conexiones.`,
    `Nuestros técnicos realizan prueba de fugas con solución jabonosa en todas las conexiones después de cada reparación. Verificamos el color de la llama (azul = combustión correcta) y ajustamos la mezcla aire-gas si es necesario.`,
  ],
  'reparacion-de-congeladores-y-cuartos-frios': (sector) => [
    `Los congeladores y cuartos fríos en ${sector} son críticos para negocios de alimentos, farmacias y laboratorios. Una falla puede significar pérdidas significativas de inventario. SATERI ofrece atención prioritaria para estos equipos.`,
    `Reparamos congeladores verticales, horizontales (chest freezers), vitrinas refrigeradas, cuartos fríos de media y baja temperatura. Atendemos fallas de compresor, fuga de gas, sistemas de descongelación, controles de temperatura y motores de ventilador.`,
    `Para cuartos fríos comerciales, realizamos mantenimiento preventivo programado que incluye: limpieza de condensadores, verificación de presiones de refrigerante, revisión de sellos de puerta, calibración de termostatos y prueba de alarmas de temperatura.`,
  ],
  'reparacion-de-lavavajillas': (sector) => [
    `Si su lavavajillas en ${sector} no lava bien, no drena, deja residuos en los platos o tiene fugas de agua, nuestros técnicos diagnostican y reparan el problema sin necesidad de desinstalar el equipo.`,
    `Las fallas más comunes incluyen: bomba de circulación débil, brazos aspersores obstruidos, electroválvula de entrada de agua defectuosa, bomba de drenaje atascada, dosificador de detergente trabado y resistencia de secado quemada.`,
    `Un lavavajillas que no lava correctamente generalmente tiene los brazos aspersores obstruidos con residuos de comida o calcio. Nuestro servicio incluye limpieza profunda de los componentes internos además de la reparación de la falla reportada.`,
  ],
  'tecnico-de-hornos-electricos-y-microondas': (sector) => [
    `Reparamos hornos eléctricos, hornos de convección y microondas directamente en su hogar en ${sector}. Estos equipos contienen componentes de alto voltaje que requieren técnicos capacitados para su manipulación segura.`,
    `En hornos eléctricos atendemos: resistencias superiores e inferiores quemadas, termostatos desajustados, selectores de función defectuosos, ventiladores de convección y problemas con el temporizador o la tarjeta de control.`,
    `En microondas reparamos: magnetrones, transformadores de alto voltaje, diodos, capacitores y paneles de control táctil. Un microondas que enciende pero no calienta generalmente tiene el magnetrón dañado, que es el componente que genera las microondas.`,
  ],

  // ── LAVANDERÍA ──
  'lavanderia-a-domicilio': (sector) => [
    `Nuestro servicio de lavandería a domicilio en ${sector} incluye recogida y entrega de ropa directamente en su puerta. Solo necesita programar la recogida y nosotros nos encargamos del resto.`,
    `Lavamos, secamos y doblamos su ropa con productos de calidad que cuidan las telas. Separamos por colores y tipo de tejido para evitar daños. Ofrecemos servicio estándar (48 horas) y express (24 horas) según disponibilidad.`,
    `El servicio se cobra por libra de ropa. Aceptamos ropa de uso diario, ropa de cama, toallas y manteles. Para prendas delicadas o con requerimientos especiales, consulte disponibilidad al momento de la recogida. Cubrimos los principales sectores de ${sector} y toda el área de Santiago.`,
  ],

  // ── LIMPIEZA ──
  'limpieza-de-muebles': (sector) => [
    `La limpieza profesional de muebles tapizados en ${sector} elimina suciedad profunda, ácaros, bacterias y manchas que la aspiradora convencional no alcanza. Utilizamos equipos de extracción con agua caliente y productos biodegradables.`,
    `Limpiamos sofás, sillones, sillas de comedor tapizadas, colchones, almohadas y cojines. Trabajamos con todo tipo de telas: microfibra, lino, algodón, terciopelo, cuero sintético y cuero genuino (con productos especializados para cada material).`,
    `El proceso incluye: aspirado profundo para remover polvo y partículas, pretratamiento de manchas con productos específicos según el tipo de mancha, lavado por extracción con agua caliente a presión, y secado acelerado con ventilación dirigida.`,
  ],
  'limpieza-de-cocinas': (sector) => [
    `La limpieza profunda de cocinas en ${sector} va más allá de la limpieza diaria. Eliminamos grasa acumulada, residuos carbonizados, manchas en superficies y bacterias en áreas que normalmente no se alcanzan durante la limpieza regular.`,
    `El servicio incluye: desengrase de campana extractora y filtros, limpieza interior y exterior de electrodomésticos (horno, microondas, nevera), desinfección de superficies de trabajo, limpieza de azulejos y juntas, y pulido de fregadero y grifería.`,
    `Utilizamos desengrasantes industriales biodegradables que eliminan la grasa sin dañar las superficies. Para superficies delicadas como granito, mármol o acero inoxidable, aplicamos productos específicos que limpian sin rayar ni opacar.`,
  ],
  'limpieza-de-tinacos-y-cisternas': (sector) => [
    `La limpieza de tinacos y cisternas en ${sector} es fundamental para la salud de su familia. El agua almacenada acumula sedimentos, algas, bacterias y en algunos casos larvas de mosquitos que contaminan el agua de consumo.`,
    `El proceso incluye: vaciado completo del tanque, remoción de sedimentos y residuos del fondo, cepillado de paredes interiores, desinfección con solución de hipoclorito de sodio en la concentración adecuada, enjuague final y llenado.`,
    `Se recomienda limpiar tinacos y cisternas al menos cada 6 meses. Nuestros técnicos verifican también el estado de la tapa, flotador, válvula de llenado y tuberías de entrada y salida para detectar problemas antes de que afecten la calidad del agua.`,
  ],
  'pulido-de-pisos': (sector) => [
    `El pulido profesional de pisos en ${sector} devuelve el brillo y la apariencia original a pisos de mosaico, granito, mármol y terrazo que se han opacado por el uso y el tiempo.`,
    `El proceso incluye varias etapas: desbaste inicial con piedras de diamante gruesas para nivelar, pulido intermedio con piedras de grano medio para suavizar, pulido fino para lograr brillo, y cristalizado final con ácido oxálico o producto cristalizador para sellar y proteger.`,
    `Un piso correctamente pulido y cristalizado resiste mejor las manchas, es más fácil de limpiar y mantiene su brillo por meses. Recomendamos el re-cristalizado cada 6-12 meses dependiendo del tráfico del área.`,
  ],

  // ── SEGURIDAD ──
  'instalacion-de-camaras-de-seguridad-cctv': (sector) => [
    `La instalación de cámaras de seguridad CCTV en ${sector} protege su propiedad las 24 horas del día con monitoreo en tiempo real desde su teléfono. Diseñamos el sistema según las necesidades específicas de su inmueble.`,
    `Instalamos cámaras tipo bullet, domo, PTZ y mini domo en configuraciones de 4, 8, 16 o más canales. Los sistemas incluyen grabador DVR o NVR con disco duro para almacenamiento local y configuración de acceso remoto desde smartphone y computadora.`,
    `El proceso incluye: evaluación de puntos vulnerables del inmueble, diseño del plano de cámaras con ángulos de cobertura, tendido de cableado (coaxial o UTP según el sistema), montaje e instalación de cámaras, configuración del grabador y la app de monitoreo remoto.`,
  ],
  'reparacion-e-instalacion-de-intercoms': (sector) => [
    `Los sistemas de intercomunicación en ${sector} permiten comunicarse entre diferentes áreas de su residencia o edificio y controlar el acceso de visitantes. Instalamos y reparamos intercoms de audio, video y sistemas con apertura eléctrica de puerta.`,
    `Instalamos sistemas de intercomunicación alámbricos e inalámbricos, videoporteros con pantalla y cámara, y sistemas multi-apartamento para edificios residenciales. Cada instalación incluye prueba de audio, video y función de apertura de puerta.`,
    `Las fallas más comunes en intercoms incluyen: audio distorsionado o ausente, pantalla de video sin imagen, botón de apertura de puerta que no funciona, interferencia en sistemas inalámbricos y fuentes de alimentación dañadas por fluctuaciones de voltaje.`,
  ],
};

/**
 * Returns supplemental content paragraphs for a page.
 * Only returns content if the existing Firestore content is short.
 * @param {string} slug - Page slug (e.g., "reparacion-de-aires-acondicionados-en-los-jardines")
 * @param {string} existingContent - Current content from Firestore
 * @returns {string[]} Array of paragraphs to append
 */
export function getEnrichmentContent(slug, existingContent = '') {
  const existingWords = existingContent ? existingContent.split(/\s+/).length : 0;
  if (existingWords >= 150) return [];

  // Extract service subtype and sector from slug
  // e.g., "reparacion-de-aires-acondicionados-en-los-jardines" → subtype: "reparacion-de-aires-acondicionados", sector: "Los Jardines"
  const enMatch = slug.match(/^(.+?)-en-(.+)$/);
  if (!enMatch) return [];

  const serviceKey = enMatch[1];
  const sectorRaw = enMatch[2];
  const sector = sectorRaw
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  // Try exact match first, then try partial matches
  let templateFn = SERVICE_CONTENT[serviceKey];

  if (!templateFn) {
    // Try matching by removing variations
    const keys = Object.keys(SERVICE_CONTENT);
    const match = keys.find(k => serviceKey.includes(k) || k.includes(serviceKey));
    if (match) templateFn = SERVICE_CONTENT[match];
  }

  if (!templateFn) return [];
  return templateFn(sector);
}
