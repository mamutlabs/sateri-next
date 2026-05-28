/**
 * Blog articles data for SATERI
 * Each article targets local SEO keywords for Santiago de los Caballeros, RD
 */

const ARTICLES = [
  {
    slug: 'como-elegir-aire-acondicionado-ideal-santiago',
    title: 'Cómo elegir el aire acondicionado ideal para su hogar en Santiago',
    metaTitle: 'Cómo elegir el aire acondicionado ideal para su hogar en Santiago',
    metaDescription: 'Guía completa para elegir el aire acondicionado correcto en Santiago de los Caballeros. Tipos, capacidad en BTU, eficiencia energética y recomendaciones para clima tropical.',
    excerpt: 'Elegir el aire acondicionado correcto en Santiago requiere considerar el clima tropical, el tamaño del espacio y la eficiencia energética. Esta guía le ayuda a tomar la mejor decisión.',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1631545806609-05548136406b?w=1200&auto=format',
    publishedAt: '2026-05-15',
    readTime: 7,
    sections: [
      {
        heading: 'El clima de Santiago exige la decisión correcta',
        paragraphs: [
          'Santiago de los Caballeros registra temperaturas promedio de 30°C durante la mayor parte del año, con picos que superan los 35°C entre mayo y septiembre. En este contexto, el aire acondicionado no es un lujo, sino una necesidad para mantener la comodidad y la productividad en el hogar.',
          'Sin embargo, elegir el equipo equivocado puede significar facturas eléctricas excesivas, reparaciones frecuentes o un espacio que nunca alcanza la temperatura deseada. A continuación le explicamos los factores clave para tomar una decisión informada.',
        ],
      },
      {
        heading: 'Tipos de aire acondicionado disponibles',
        paragraphs: [
          'El tipo split es el más popular en hogares dominicanos. Consiste en una unidad interior y una exterior conectadas por tuberías de refrigerante. Es silencioso, eficiente y disponible en capacidades desde 9,000 hasta 36,000 BTU.',
          'Los equipos tipo ventana son más económicos en precio inicial, pero consumen más energía y generan más ruido. Son una opción válida para espacios pequeños o temporales.',
          'Para hogares grandes o edificios comerciales, los sistemas centrales o multi-split permiten climatizar múltiples habitaciones desde una sola unidad exterior, optimizando el consumo y simplificando la instalación.',
        ],
      },
      {
        heading: 'Cómo calcular los BTU que necesita',
        paragraphs: [
          'La regla base para clima tropical es 600 BTU por metro cuadrado. Una habitación de 20 m² necesita aproximadamente 12,000 BTU. Sin embargo, varios factores modifican este cálculo.',
          'La exposición solar directa puede aumentar la necesidad hasta un 15%. Las cocinas requieren un 30% adicional por el calor de los electrodomésticos. Los espacios con techos altos (más de 2.7 metros) o muchas ventanas también necesitan mayor capacidad.',
          'Puede usar nuestra calculadora de BTU gratuita para obtener una estimación personalizada según las características de su espacio.',
        ],
      },
      {
        heading: 'Inverter vs. convencional: la diferencia en su factura',
        paragraphs: [
          'Los equipos inverter ajustan la velocidad del compresor según la demanda, en lugar de encender y apagar constantemente como los convencionales. Esto se traduce en un ahorro de entre 30% y 60% en la factura eléctrica.',
          'Aunque el precio inicial de un inverter es mayor, la inversión se recupera en 12 a 18 meses de uso regular en el clima de Santiago. Además, los equipos inverter tienen una vida útil más larga y generan menos desgaste mecánico.',
        ],
      },
      {
        heading: 'Marcas y disponibilidad en República Dominicana',
        paragraphs: [
          'Las marcas más comunes en el mercado dominicano incluyen LG, Samsung, Carrier, York, Midea y Daikin. Cada una tiene modelos con diferentes niveles de eficiencia energética, medidos por el coeficiente SEER.',
          'Un SEER de 16 o superior es recomendable para Santiago, donde los equipos funcionan muchas horas al día. Los modelos con SEER 20+ representan la mejor eficiencia disponible, aunque su precio es proporcionalmente mayor.',
        ],
      },
      {
        heading: 'La instalación importa tanto como el equipo',
        paragraphs: [
          'Un aire acondicionado mal instalado puede perder hasta un 30% de su eficiencia. La ubicación de las unidades, el dimensionamiento de las tuberías, la carga de refrigerante y el aislamiento eléctrico son factores que solo un técnico certificado puede evaluar correctamente.',
          'Antes de comprar, solicite una evaluación del espacio. Un técnico puede identificar si necesita reforzar el circuito eléctrico, si la pared soporta la unidad interior o si la ubicación de la unidad exterior permite una ventilación adecuada.',
        ],
      },
    ],
  },
  {
    slug: '5-senales-aire-acondicionado-necesita-reparacion',
    title: '5 señales de que su aire acondicionado necesita reparación',
    metaTitle: '5 señales de que su aire acondicionado necesita reparación',
    metaDescription: 'Aprenda a identificar las señales de alerta de su aire acondicionado antes de que falle por completo. Ruidos, olores, consumo elevado y más.',
    excerpt: 'No espere a que su aire deje de funcionar. Estas 5 señales le indican que su equipo necesita atención profesional antes de una avería mayor.',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&auto=format',
    publishedAt: '2026-05-18',
    readTime: 5,
    sections: [
      {
        heading: 'Prevenir es más barato que reparar',
        paragraphs: [
          'Un aire acondicionado no deja de funcionar de un momento a otro. Antes de fallar, envía señales que muchos propietarios ignoran hasta que la reparación se convierte en una emergencia costosa.',
          'Reconocer estas señales a tiempo le permite programar una revisión preventiva, evitar daños mayores en el compresor y extender la vida útil de su equipo.',
        ],
      },
      {
        heading: '1. El equipo enfría menos que antes',
        paragraphs: [
          'Si nota que su aire acondicionado tarda más en enfriar el espacio o que nunca alcanza la temperatura configurada, algo no está funcionando correctamente. Las causas más comunes incluyen niveles bajos de gas refrigerante, filtros obstruidos o un compresor que está perdiendo eficiencia.',
          'Un técnico puede medir la temperatura de salida del aire y compararla con los parámetros del fabricante para determinar si el rendimiento ha caído.',
        ],
      },
      {
        heading: '2. Ruidos inusuales durante el funcionamiento',
        paragraphs: [
          'Los zumbidos, clics repetitivos, chirridos o vibraciones fuertes no son normales. Un zumbido constante puede indicar un problema en el motor del ventilador. Los clics al encender o apagar pueden señalar un fallo en el relé de arranque. Las vibraciones excesivas sugieren que algún componente interno se ha soltado.',
          'No ignore los ruidos nuevos. Lo que hoy es un sonido menor puede convertirse en una reparación mayor si el componente afectado falla completamente.',
        ],
      },
      {
        heading: '3. Olores extraños al encender el equipo',
        paragraphs: [
          'Un olor a humedad o moho indica acumulación de hongos en el evaporador o en los conductos, lo cual además representa un riesgo para la salud. Un olor a quemado puede significar un cable recalentado o un problema en el motor.',
          'El olor a vinagre o ácido generalmente proviene de la acumulación de bacterias en la bandeja de drenaje. Una limpieza profunda profesional resuelve estos problemas y mejora la calidad del aire que respira su familia.',
        ],
      },
      {
        heading: '4. La factura eléctrica ha subido sin razón aparente',
        paragraphs: [
          'Si su consumo eléctrico aumentó significativamente sin que haya cambiado sus hábitos de uso, su aire acondicionado podría ser el responsable. Un equipo con filtros sucios, fugas de refrigerante o un compresor deteriorado trabaja más para lograr el mismo resultado, consumiendo más energía.',
          'Compare sus facturas de los últimos meses. Un aumento sostenido del 20% o más merece una inspección técnica del equipo.',
        ],
      },
      {
        heading: '5. El equipo se enciende y apaga constantemente',
        paragraphs: [
          'Este comportamiento, conocido como "ciclo corto", ocurre cuando el equipo arranca, funciona unos minutos y se apaga antes de alcanzar la temperatura deseada. Las causas pueden incluir un termostato defectuoso, un compresor sobrecalentado o un equipo sobredimensionado para el espacio.',
          'El ciclo corto no solo impide que el espacio se enfríe correctamente, sino que desgasta prematuramente el compresor, que es el componente más costoso de reemplazar.',
        ],
      },
      {
        heading: 'Qué hacer al detectar estas señales',
        paragraphs: [
          'Ante cualquiera de estas señales, lo recomendable es solicitar una revisión técnica profesional. Un diagnóstico temprano puede significar la diferencia entre una limpieza de filtros de bajo costo y el reemplazo de un compresor.',
          'El mantenimiento preventivo, idealmente cada 4 a 6 meses en clima tropical, es la mejor estrategia para evitar averías inesperadas y mantener su equipo funcionando al máximo rendimiento.',
        ],
      },
    ],
  },
  {
    slug: 'guia-mantenimiento-preventivo-plomeria-hogar',
    title: 'Guía de mantenimiento preventivo de plomería para su hogar',
    metaTitle: 'Guía de mantenimiento preventivo de plomería para su hogar',
    metaDescription: 'Evite filtraciones y tuberías tapadas con esta guía de mantenimiento preventivo de plomería. Consejos prácticos para hogares en Santiago de los Caballeros.',
    excerpt: 'Las filtraciones y los drenajes tapados son las emergencias de plomería más comunes en Santiago. Con mantenimiento preventivo, la mayoría se pueden evitar.',
    category: 'Plomería',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&auto=format',
    publishedAt: '2026-05-20',
    readTime: 6,
    sections: [
      {
        heading: 'La plomería invisible que sostiene su hogar',
        paragraphs: [
          'El sistema de plomería de un hogar trabaja silenciosamente detrás de las paredes y bajo los pisos. Cuando funciona bien, nadie piensa en él. Cuando falla, las consecuencias pueden incluir daños estructurales, moho y reparaciones costosas.',
          'En Santiago de los Caballeros, donde la calidad del agua y la presión del suministro varían según el sector, el mantenimiento preventivo es particularmente importante para extender la vida útil de tuberías, llaves y conexiones.',
        ],
      },
      {
        heading: 'Inspeccione regularmente las áreas húmedas',
        paragraphs: [
          'Revise mensualmente debajo de los lavamanos de cocina y baños, alrededor de los inodoros y detrás de la lavadora. Busque manchas de humedad, goteos activos, óxido en las conexiones o ablandamiento en la madera de los gabinetes.',
          'Las filtraciones pequeñas raramente se resuelven solas. Una gota por segundo desperdicia más de 11,000 litros de agua al año y puede causar daño estructural acumulativo en paredes y pisos.',
        ],
      },
      {
        heading: 'Cuide sus drenajes antes de que se tapen',
        paragraphs: [
          'Los drenajes se obstruyen gradualmente con acumulación de grasa, cabello, jabón y residuos de alimentos. Use filtros o rejillas en todos los desagües para atrapar los sólidos antes de que entren al sistema.',
          'Evite verter aceite de cocina por el fregadero. El aceite se solidifica dentro de las tuberías y crea obstrucciones difíciles de eliminar. Deposítelo en un recipiente y deséchelo con la basura sólida.',
          'Una vez al mes, vierta agua hirviendo por los desagües de la cocina para disolver acumulaciones leves de grasa. Para los baños, un tratamiento periódico con bicarbonato de sodio y vinagre ayuda a mantener los drenajes limpios.',
        ],
      },
      {
        heading: 'El calentador de agua necesita atención',
        paragraphs: [
          'Los calentadores de agua acumulan sedimentos minerales en el fondo del tanque con el tiempo. Esta acumulación reduce la eficiencia del equipo y puede acortar su vida útil significativamente.',
          'Se recomienda drenar parcialmente el calentador cada 6 meses para eliminar los sedimentos acumulados. Si nota que el agua caliente tarda más en llegar o que la temperatura es inconsistente, solicite una inspección técnica.',
        ],
      },
      {
        heading: 'Conozca la ubicación de sus llaves de paso',
        paragraphs: [
          'En una emergencia de plomería, cada minuto cuenta. Identifique y pruebe la llave de paso principal de su hogar, así como las llaves individuales de cada baño, la cocina y la lavandería.',
          'Asegúrese de que todas las llaves giren correctamente. Las que no se usan por mucho tiempo pueden agarrotarse con la cal y resultar imposibles de cerrar cuando más se necesitan.',
        ],
      },
      {
        heading: 'Cuándo llamar a un profesional',
        paragraphs: [
          'Algunas tareas de plomería requieren herramientas y conocimientos especializados. Llame a un plomero profesional si detecta: baja presión de agua en toda la casa, manchas de humedad en paredes o techos, olores persistentes de aguas negras, agua con color oxidado o si su factura de agua aumentó sin explicación.',
          'Un plomero certificado puede realizar una inspección con cámara para detectar problemas ocultos en tuberías empotradas sin necesidad de romper paredes, ahorrando tiempo y dinero en el diagnóstico.',
        ],
      },
    ],
  },
  {
    slug: 'como-proteger-electrodomesticos-fluctuaciones-electricas',
    title: 'Cómo proteger sus electrodomésticos de las fluctuaciones eléctricas',
    metaTitle: 'Cómo proteger sus electrodomésticos de las fluctuaciones eléctricas',
    metaDescription: 'Proteja sus electrodomésticos de apagones y picos de voltaje en República Dominicana. Reguladores, supresores y mejores prácticas para su hogar.',
    excerpt: 'Los apagones y picos de voltaje son una realidad en República Dominicana. Aprenda a proteger sus equipos más costosos con medidas preventivas efectivas.',
    category: 'Electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&auto=format',
    publishedAt: '2026-05-22',
    readTime: 6,
    sections: [
      {
        heading: 'Un problema que afecta a todos los hogares dominicanos',
        paragraphs: [
          'Las fluctuaciones de voltaje y los cortes de energía son una realidad cotidiana en República Dominicana. Cada apagón, cada pico de voltaje y cada bajón de tensión somete a sus electrodomésticos a un estrés que acorta su vida útil y puede causar daños irreparables.',
          'Las neveras, aires acondicionados, lavadoras y televisores son los equipos más vulnerables. Un solo pico de voltaje puede quemar la tarjeta electrónica de un aire acondicionado inverter, cuyo reemplazo puede costar casi tanto como un equipo nuevo.',
        ],
      },
      {
        heading: 'Reguladores de voltaje: la primera línea de defensa',
        paragraphs: [
          'Un regulador de voltaje estabiliza la corriente eléctrica que llega a sus equipos, manteniéndola dentro del rango seguro de operación (generalmente 110-120V en RD). Es especialmente importante para equipos con compresores como neveras y aires acondicionados.',
          'Cada equipo mayor debe tener su propio regulador, dimensionado correctamente según el consumo en vatios del electrodoméstico. Un regulador subdimensionado no protege adecuadamente y puede sobrecalentarse.',
        ],
      },
      {
        heading: 'Supresores de picos para equipos electrónicos',
        paragraphs: [
          'Los supresores de picos (surge protectors) son diferentes de las simples regletas de enchufes. Un supresor de picos genuino absorbe los excesos de voltaje antes de que lleguen a sus equipos.',
          'Son ideales para televisores, computadoras, consolas de videojuegos y otros equipos electrónicos sensibles. Busque modelos con certificación UL y una capacidad de absorción de al menos 1,000 joules.',
        ],
      },
      {
        heading: 'UPS: protección contra apagones súbitos',
        paragraphs: [
          'Un sistema de alimentación ininterrumpida (UPS) proporciona energía temporal durante un corte eléctrico, dándole tiempo para apagar sus equipos de forma ordenada. Es particularmente útil para computadoras de trabajo y equipos de red.',
          'Para el hogar, un UPS de 600-1000 VA es suficiente para mantener un router de internet y una computadora funcionando entre 15 y 30 minutos durante un apagón.',
        ],
      },
      {
        heading: 'Mejores prácticas después de un apagón',
        paragraphs: [
          'Cuando regresa la electricidad después de un corte, el voltaje puede ser inestable durante los primeros minutos. Espere al menos 3 a 5 minutos antes de encender equipos con compresor como neveras y aires acondicionados.',
          'Si tiene regulador de voltaje, este se encargará de estabilizar la corriente antes de alimentar el equipo. Sin regulador, el riesgo de daño por sobrevoltaje es mayor justo al regresar la energía.',
          'Mantenga desenchufados los equipos sensibles durante tormentas eléctricas. Los picos causados por rayos pueden superar la capacidad de protección de reguladores convencionales.',
        ],
      },
      {
        heading: 'Revise su instalación eléctrica',
        paragraphs: [
          'Una instalación eléctrica deficiente amplifica los problemas de voltaje. Cables subdimensionados, conexiones flojas, breakers inadecuados y la falta de sistema de tierra pueden poner en riesgo tanto sus equipos como su seguridad.',
          'Si su casa tiene más de 15 años y no se ha actualizado la instalación eléctrica, es recomendable solicitar una evaluación profesional. Un electricista certificado puede identificar puntos de riesgo y recomendar las mejoras necesarias.',
        ],
      },
    ],
  },
  {
    slug: 'beneficios-camaras-seguridad-cctv-hogar-negocio',
    title: 'Beneficios de instalar cámaras de seguridad CCTV en su hogar o negocio',
    metaTitle: 'Beneficios de instalar cámaras de seguridad CCTV en su hogar o negocio',
    metaDescription: 'Descubra por qué cada vez más hogares y negocios en Santiago instalan cámaras CCTV. Tipos, ubicación, almacenamiento y consideraciones de inversión.',
    excerpt: 'Las cámaras de seguridad ya no son exclusivas de empresas. Cada vez más hogares en Santiago las instalan como medida preventiva accesible y efectiva.',
    category: 'Seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format',
    publishedAt: '2026-05-25',
    readTime: 6,
    sections: [
      {
        heading: 'La seguridad residencial ha evolucionado',
        paragraphs: [
          'Las cámaras de seguridad CCTV han pasado de ser un artículo exclusivo de bancos y comercios a convertirse en una herramienta accesible para cualquier hogar. Los avances tecnológicos han reducido los costos significativamente mientras mejoran la calidad de imagen y las funcionalidades.',
          'En Santiago de los Caballeros, la instalación de cámaras residenciales ha crecido notablemente en los últimos años, particularmente en sectores como Los Jardines, Cerros de Gurabo, Villa Olga y Reparto del Este.',
        ],
      },
      {
        heading: 'Efecto disuasivo comprobado',
        paragraphs: [
          'La presencia visible de cámaras reduce significativamente la probabilidad de intentos de robo o vandalismo. Los intrusos tienden a evitar propiedades que cuentan con sistemas de videovigilancia, optando por objetivos más fáciles.',
          'Incluso cámaras básicas en puntos visibles como la entrada principal, el garaje y los accesos laterales envían un mensaje claro de que la propiedad está protegida y monitoreada.',
        ],
      },
      {
        heading: 'Monitoreo remoto desde su teléfono',
        paragraphs: [
          'Los sistemas modernos permiten ver las cámaras en tiempo real desde su celular, estando en cualquier lugar del mundo. Puede verificar quién está en la puerta, supervisar la llegada de los niños de la escuela o confirmar que el personal de limpieza completó su trabajo.',
          'Las cámaras con detección de movimiento envían alertas inmediatas a su teléfono cuando detectan actividad, permitiéndole reaccionar rápidamente ante cualquier situación inusual.',
        ],
      },
      {
        heading: 'Tipos de cámaras y dónde colocarlas',
        paragraphs: [
          'Las cámaras tipo domo son discretas y resistentes al vandalismo, ideales para interiores y áreas techadas. Las cámaras tipo bala tienen mayor alcance y son más visibles, recomendadas para exteriores y perímetros.',
          'Los puntos prioritarios de instalación son: la entrada principal, el garaje o estacionamiento, los accesos laterales o traseros, y el área del patio. Para negocios, se agregan la caja registradora, el almacén y las áreas de atención al público.',
          'Considere cámaras con visión nocturna infrarroja para áreas exteriores. La mayoría de los incidentes de seguridad ocurren durante la noche, y una cámara sin visión nocturna no captura imágenes útiles en la oscuridad.',
        ],
      },
      {
        heading: 'Almacenamiento: local vs. nube',
        paragraphs: [
          'El almacenamiento local en un DVR o NVR graba las imágenes en un disco duro dentro de su propiedad. La ventaja es que no tiene costo mensual recurrente. La desventaja es que si roban el grabador, se pierde la evidencia.',
          'El almacenamiento en la nube envía las grabaciones a servidores remotos, protegiéndolas de robo o daño físico. Requiere una suscripción mensual, pero garantiza que las grabaciones estarán disponibles cuando las necesite.',
          'La opción más recomendable es un sistema híbrido: grabación local para el día a día y respaldo en la nube para los eventos importantes detectados por movimiento.',
        ],
      },
      {
        heading: 'Consideraciones antes de instalar',
        paragraphs: [
          'La calidad de la instalación determina la efectividad del sistema. Cables mal protegidos, cámaras con ángulos ciegos o un grabador sin protección contra cortes eléctricos reducen significativamente la utilidad del sistema.',
          'Un técnico profesional evalúa los puntos vulnerables de su propiedad, recomienda el número y tipo de cámaras necesarias, y asegura que la instalación cumpla con las mejores prácticas de cableado y configuración.',
        ],
      },
    ],
  },
  {
    slug: 'como-reducir-factura-electrica-aire-acondicionado-inverter',
    title: 'Cómo reducir su factura eléctrica con un aire acondicionado inverter',
    metaTitle: 'Cómo reducir su factura eléctrica con aire acondicionado inverter',
    metaDescription: 'Descubra cuánto puede ahorrar con un aire inverter en República Dominicana. Comparación de consumo, retorno de inversión y consejos para maximizar el ahorro.',
    excerpt: 'Un aire acondicionado inverter puede reducir su factura eléctrica entre un 30% y 60%. Entenda cómo funciona y cuánto puede ahorrar en República Dominicana.',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format',
    publishedAt: '2026-05-28',
    readTime: 6,
    sections: [
      {
        heading: 'La factura eléctrica: el dolor de cabeza dominicano',
        paragraphs: [
          'En República Dominicana, la tarifa eléctrica es una de las más altas de América Latina. Para los hogares en Santiago de los Caballeros, donde el aire acondicionado funciona entre 8 y 14 horas diarias durante los meses calurosos, el costo energético puede representar una porción significativa del presupuesto familiar.',
          'La tecnología inverter representa la forma más efectiva de reducir este gasto sin sacrificar la comodidad. Pero para aprovecharla al máximo, es importante entender cómo funciona y qué prácticas complementarias maximizan el ahorro.',
        ],
      },
      {
        heading: 'Cómo funciona la tecnología inverter',
        paragraphs: [
          'Un aire acondicionado convencional opera en modo todo o nada: el compresor se enciende al 100% de potencia hasta alcanzar la temperatura deseada, luego se apaga completamente. Cuando la temperatura sube de nuevo, vuelve a arrancar a plena potencia. Cada arranque consume un pico de energía considerable.',
          'El sistema inverter, en cambio, varía la velocidad del compresor según la demanda. Cuando el espacio está lejos de la temperatura objetivo, trabaja a alta velocidad. A medida que se acerca, reduce gradualmente su potencia hasta mantenerse a una velocidad mínima constante.',
          'Este funcionamiento continuo a velocidad variable elimina los picos de consumo del arranque y mantiene la temperatura más estable, sin las oscilaciones de 2-3 grados típicas de los equipos convencionales.',
        ],
      },
      {
        heading: 'Cuánto se ahorra realmente',
        paragraphs: [
          'El ahorro real depende de las horas de uso diario, la temperatura configurada y las condiciones del espacio. En condiciones típicas de uso residencial en Santiago (10-12 horas diarias, temperatura de 24°C), un equipo inverter consume entre 30% y 50% menos que un convencional de la misma capacidad.',
          'Para un aire de 12,000 BTU funcionando 10 horas diarias, esto puede representar un ahorro mensual de entre RD$1,500 y RD$3,000 en la factura eléctrica, dependiendo de la tarifa vigente.',
        ],
      },
      {
        heading: 'Retorno de inversión',
        paragraphs: [
          'Un aire inverter de 12,000 BTU cuesta entre RD$5,000 y RD$12,000 más que un convencional equivalente, dependiendo de la marca y el modelo. Con un ahorro mensual promedio de RD$2,000, la diferencia se recupera en aproximadamente 6 a 12 meses.',
          'A partir de ese punto, todo el ahorro es ganancia neta. Considerando que la vida útil promedio de un equipo inverter es de 12 a 15 años, el ahorro acumulado puede ser muy significativo.',
        ],
      },
      {
        heading: 'Consejos para maximizar el ahorro',
        paragraphs: [
          'Configure la temperatura entre 23°C y 25°C. Cada grado por debajo de 24°C aumenta el consumo aproximadamente un 8%. Una temperatura de 24°C es cómoda para la mayoría de las personas y permite que el equipo trabaje a velocidad reducida.',
          'Mantenga puertas y ventanas cerradas mientras el aire está funcionando. Las infiltraciones de aire caliente obligan al compresor a trabajar más, anulando parte del beneficio del inverter.',
          'Limpie los filtros cada 2 a 4 semanas. Los filtros sucios reducen el flujo de aire y fuerzan al equipo a trabajar más para lograr el mismo enfriamiento. Es una tarea simple que cualquier persona puede hacer sin herramientas.',
          'Programe el encendido 30 minutos antes de llegar a casa en lugar de dejarlo funcionando todo el día. Los equipos inverter alcanzan la temperatura deseada rápidamente gracias a su modo de alta velocidad inicial.',
        ],
      },
      {
        heading: 'La instalación correcta es clave',
        paragraphs: [
          'Un equipo inverter mal instalado puede perder gran parte de sus beneficios de ahorro. La longitud de las tuberías, la carga de refrigerante, la ubicación de las unidades y la calidad de las conexiones eléctricas afectan directamente la eficiencia del sistema.',
          'Asegúrese de que la instalación sea realizada por un técnico certificado que siga las especificaciones del fabricante. Una instalación profesional incluye prueba de vacío, verificación de carga de refrigerante y medición de consumo eléctrico en operación.',
        ],
      },
    ],
  },
];

export function getAllArticles() {
  return ARTICLES.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

export function getAllSlugs() {
  return ARTICLES.map((a) => a.slug);
}
