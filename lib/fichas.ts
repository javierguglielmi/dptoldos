export type TecnicoItem = { t: string; d: string };
export type FaqItem = { q: string; a: string; pendiente?: boolean };

export type Ficha = {
  slug: string;
  nombre: string;
  h1: string;
  apertura: string;
  foto: string;
  img: string | null;
  imgAlt?: string;
  medidas: string;
  medidasPendiente: boolean;
  motorTitulo: string;
  motorNota: string;
  usoTitulo: string;
  usoNota: string;
  tecnico: TecnicoItem[];
  avisoTitulo?: string;
  avisoTexto?: string;
  faqs: FaqItem[];
  ctaTitulo: string;
  metaTitle: string;
  metaDescription: string;
};

export const ORDEN = [
  "brazo-invisible",
  "brazo-directo",
  "capota",
  "vertical",
  "corredero",
] as const;

export type FichaSlug = (typeof ORDEN)[number];

export const RESUMEN: Record<FichaSlug, string> = {
  "brazo-invisible":
    "El brazo queda oculto pegado a la lona con el toldo desplegado. Más proyección y línea limpia.",
  "brazo-directo":
    "Brazo y codo visibles por debajo. El sistema más simple y económico, en tres variantes de tensión.",
  capota:
    "Estructura fija semicircular para ventanas y escaparates. No se motoriza.",
  vertical:
    "Caída recta con guías o cable, para el sol bajo de la tarde. No se motoriza.",
  corredero:
    "Lona sobre guías para patios, interiores de manzana y verandas. Se abre y cierra a demanda.",
};

export const FICHAS: Record<FichaSlug, Ficha> = {
  "brazo-invisible": {
    slug: "brazo-invisible",
    nombre: "Brazo invisible",
    h1: "Toldo de brazo invisible en el Baix Llobregat",
    apertura:
      "El toldo de brazo invisible, también llamado brazo extensible, usa un brazo articulado con tensión interna de cable o cinta tipo kevlar que queda oculto pegado a la lona cuando el toldo está desplegado. Da más proyección y una línea más limpia que un brazo directo. DP Toldos lo instala a medida en el Baix Llobregat.",
    foto: "Toldo de brazo invisible desplegado en terraza, visto desde abajo: la lona limpia, sin brazo a la vista. Instalación propia.",
    img: "/assets/brazo-invisible.webp",
    imgAlt:
      "Toldo de brazo invisible desplegado sobre una terraza, con lona beige y brazos pegados a la lona",
    medidas: "6 m de línea · 3,75 m de salida",
    medidasPendiente: false,
    motorTitulo: "Sí, se motoriza",
    motorNota:
      "Somfy preferente, con sensores de sol y viento. El sistema más habitual para motorizar.",
    usoTitulo: "Terrazas amplias",
    usoNota:
      "Cuando quieres mucha sombra desde arriba y que no se vea el mecanismo con el toldo abierto.",
    tecnico: [
      {
        t: "Cómo distinguirlo del brazo directo",
        d: "El criterio es el toldo abierto: en el invisible no se ve el brazo, en el directo se ve el brazo y el codo por debajo.",
      },
      {
        t: "Tensión interna",
        d: "Un cable o cinta tipo kevlar dentro del brazo lo mantiene pegado a la lona. Es lo que permite más salida manteniendo la línea limpia.",
      },
      {
        t: "Acabados",
        d: "Cofre, semi cofre o monobloc. Son opciones de acabado independientes del tipo de brazo; el monobloc es exclusivo del invisible.",
      },
      {
        t: "Motorización",
        d: "Se motoriza sin problema. Somfy preferente, con sensor de sol y de viento; si hay que ajustar presupuesto, otra marca nueva y con garantía.",
      },
    ],
    avisoTitulo: "Cuidado: hay dos cosas llamadas “brazo invisible”",
    avisoTexto:
      "Otras webs usan brazo invisible para los brazos que se esconden dentro del cofre al recoger el toldo. Aquí hablamos de otra cosa: el brazo queda oculto cuando el toldo está desplegado, que es justo cuando lo estás mirando. Si estás comparando presupuestos, pregunta a qué se refiere cada uno.",
    faqs: [
      {
        q: "¿Qué diferencia hay con el brazo directo?",
        a: "Se ve con el toldo abierto: en el brazo invisible el brazo queda oculto pegado a la lona; en el brazo directo el brazo y el codo quedan a la vista por debajo.",
      },
      {
        q: "¿Qué medidas puede tener?",
        a: "Hasta 6 m de línea y 3,75 m de salida.",
      },
      {
        q: "¿Se puede motorizar?",
        a: "Sí. Somfy preferente, con sensores de sol y viento.",
      },
      {
        q: "¿Por qué es más caro que el brazo directo?",
        a: "Por la tensión interna que necesita para mantenerse oculto: es el mecanismo el que sube el precio, no la lona.",
      },
    ],
    ctaTitulo: "Pide precio para tu brazo invisible",
    metaTitle: "Toldo de brazo invisible en el Baix Llobregat · DP Toldos",
    metaDescription:
      "Toldo de brazo invisible a medida: brazo oculto pegado a la lona con el toldo desplegado, hasta 6 m de línea y 3,75 m de salida. Instalación propia en el Baix Llobregat.",
  },
  "brazo-directo": {
    slug: "brazo-directo",
    nombre: "Brazo directo",
    h1: "Toldo de brazo directo en el Baix Llobregat",
    apertura:
      "El toldo de brazo directo va anclado a la pared o a una barra de carga y, con el toldo desplegado, el brazo y el codo quedan visibles por debajo. Es el sistema más simple y económico. Existe en variante sin tensión, semi-tensión y con tensión, según cuánto viento y cuánta proyección necesite el espacio.",
    foto: "Toldo de brazo directo en balcón, desplegado: se ven el brazo y el codo por debajo de la lona. Instalación propia.",
    img: "/assets/brazo-directo.webp",
    imgAlt:
      "Toldo de brazo directo con lona crema desplegado sobre la ventana de una fachada de ladrillo, con el brazo y el mando de manivela a la vista",
    medidas: "Pendiente de confirmar",
    medidasPendiente: true,
    motorTitulo: "Sí, se motoriza",
    motorNota:
      "Somfy preferente. Si va motorizado, recomendamos la variante con tensión.",
    usoTitulo: "Balcones y ventanas",
    usoNota:
      "La opción directa cuando el presupuesto manda y el espacio no está muy expuesto.",
    tecnico: [
      {
        t: "Sin tensión",
        d: "Más barato. La lona se mueve más con el viento y destensa antes. Ideal para balcones resguardados.",
      },
      {
        t: "Semi-tensión",
        d: "El punto intermedio entre las dos variantes: algo más de firmeza sin el coste del sistema con tensión.",
      },
      {
        t: "Con tensión",
        d: "Muelle interno: lona firme y estable, aguanta mejor el viento y permite más salida. Recomendado para terrazas expuestas o toldos motorizados.",
      },
      {
        t: "Anclaje y usos",
        d: "Va a la pared o a una barra de carga. Además de balcones y terrazas se usa en ventanas.",
      },
    ],
    faqs: [
      {
        q: "¿Con tensión o sin tensión, cuál me conviene?",
        a: "Sin tensión si el espacio está resguardado y el presupuesto es ajustado. Con tensión si hay viento, necesitas mucha salida o lo quieres motorizado.",
      },
      {
        q: "¿Sirve para ventanas?",
        a: "Sí. Para ventanas trabajamos brazo directo y capota.",
      },
      {
        q: "¿Es más barato que el brazo invisible?",
        a: "Sí, generalmente. El mecanismo es más simple.",
      },
      {
        q: "¿Se puede motorizar?",
        a: "Sí. Somfy preferente, con sensores de sol y viento.",
      },
    ],
    ctaTitulo: "Pide precio para tu brazo directo",
    metaTitle: "Toldo de brazo directo en el Baix Llobregat · DP Toldos",
    metaDescription:
      "Toldo de brazo directo a medida, en variante sin tensión, semi-tensión y con tensión. Motorizable. Instalación propia en el Baix Llobregat.",
  },
  capota: {
    slug: "capota",
    nombre: "Capota",
    h1: "Toldo capota en el Baix Llobregat",
    apertura:
      "El toldo capota es una estructura fija semicircular, sin brazos articulados. Protege el hueco de una ventana o de un escaparate y marca la fachada con un aire más decorativo y tradicional que los sistemas de brazo. DP Toldos lo instala a medida en el Baix Llobregat.",
    foto: "Capota semicircular sobre escaparate o ventana, vista frontal de fachada. Instalación propia.",
    img: "/assets/capota.webp",
    imgAlt:
      "Toldo capota semicircular con lona de rayas azul claro y faldón ondulado sobre la ventana de una fachada",
    medidas: "Pendiente de confirmar",
    medidasPendiente: true,
    motorTitulo: "No se motoriza",
    motorNota: "Su propio mecanismo es fijo: no admite motor ni sensor.",
    usoTitulo: "Ventanas y escaparates",
    usoNota:
      "Más para huecos de fachada y negocio que para dar sombra a una terraza grande.",
    tecnico: [
      {
        t: "Estructura fija",
        d: "No se repliega como los toldos de brazo: se monta y se queda. Eso también la hace sencilla de mantener.",
      },
      {
        t: "Sin motorización",
        d: "No se puede motorizar por su propio mecanismo. No hay opción de motor ni de sensor de viento.",
      },
      {
        t: "Dónde tiene sentido",
        d: "Ventanas y escaparates de negocio, donde importa proteger el hueco y dar identidad a la fachada.",
      },
      {
        t: "Medidas",
        d: "Pendiente de confirmar con el instalador. Preferimos no publicar un rango que no podamos sostener; en la visita te damos el máximo real para tu hueco.",
      },
    ],
    faqs: [
      {
        q: "¿Se puede motorizar un toldo capota?",
        a: "No. Su mecanismo es fijo y no admite motor.",
      },
      {
        q: "¿Para qué espacios sirve?",
        a: "Ventanas y escaparates, más que terrazas grandes.",
      },
      {
        q: "¿Es fijo o se puede recoger?",
        a: "Es una estructura fija: no se repliega como los toldos de brazo.",
      },
      {
        q: "¿Qué medidas máximas tiene?",
        a: "Es un dato que estamos confirmando con el instalador. Te lo decimos en la visita, medido sobre tu hueco real.",
        pendiente: true,
      },
    ],
    ctaTitulo: "Pide precio para tu capota",
    metaTitle: "Toldo capota en el Baix Llobregat · DP Toldos",
    metaDescription:
      "Toldo capota a medida: estructura fija semicircular para ventanas y escaparates. Instalación propia en el Baix Llobregat.",
  },
  vertical: {
    slug: "vertical",
    nombre: "Vertical",
    h1: "Toldo vertical en el Baix Llobregat",
    apertura:
      "El toldo vertical, en versión estor con anclajes o con guías, baja la lona en caída recta: es la solución para cortar el sol bajo de la tarde en terrazas y balcones. DP Toldos lo instala a medida en el Baix Llobregat, con guías o con cable según lo que permita el espacio.",
    foto: "Toldo vertical bajado en una terraza a última hora de la tarde, con el sol lateral de frente. Instalación propia.",
    img: "/assets/vertical.webp",
    imgAlt:
      "Toldos verticales con tejido técnico gris bajados entre los pilares de una pérgola junto a una piscina",
    medidas: "Pendiente de confirmar",
    medidasPendiente: true,
    motorTitulo: "No se motoriza",
    motorNota: "Su propio mecanismo de guías o cable no acepta motor.",
    usoTitulo: "Sol bajo de tarde",
    usoNota:
      "Cuando el problema entra de lado y un toldo de brazo, que da sombra desde arriba, no lo resuelve.",
    tecnico: [
      {
        t: "Dos variantes",
        d: "Estor con anclajes, o vertical con guías. La elección depende del espacio y de los puntos de fijación disponibles.",
      },
      {
        t: "Sin motorización",
        d: "No se puede motorizar. El accionamiento es manual.",
      },
      {
        t: "Cuándo elegirlo",
        d: "Para sol de tarde o lateral. Es un uso distinto al de un toldo de brazo, que cubre el sol que viene desde arriba.",
      },
      {
        t: "Medidas",
        d: "Pendiente de confirmar con el instalador. Se resuelve a medida sobre el hueco de tu terraza.",
      },
    ],
    faqs: [
      {
        q: "¿Se puede motorizar?",
        a: "No. El mecanismo del vertical no admite motor.",
      },
      {
        q: "¿Cuándo conviene un vertical en vez de un toldo de brazo?",
        a: "Cuando el problema es el sol bajo o lateral de la tarde, no el sol que cae desde arriba.",
      },
      {
        q: "¿Qué diferencia hay entre estor con anclajes y vertical con guías?",
        a: "Estamos confirmando con el instalador la diferencia práctica entre las dos variantes. Preferimos no explicarla a medias: en la visita te dice cuál encaja en tu terraza y por qué.",
        pendiente: true,
      },
      {
        q: "¿Qué medidas máximas tiene?",
        a: "Dato pendiente de confirmar. Se hace a medida según el hueco.",
        pendiente: true,
      },
    ],
    ctaTitulo: "Pide precio para tu toldo vertical",
    metaTitle: "Toldo vertical en el Baix Llobregat · DP Toldos",
    metaDescription:
      "Toldo vertical a medida, estor con anclajes o con guías, para cortar el sol bajo de la tarde. Instalación propia en el Baix Llobregat.",
  },
  corredero: {
    slug: "corredero",
    nombre: "Corredero",
    h1: "Toldo corredero en el Baix Llobregat",
    apertura:
      "El toldo corredero desplaza la lona sobre guías, así que se abre y se cierra a demanda: es la solución para patios, interiores de manzana y espacios tipo veranda. DP Toldos lo instala a medida en el Baix Llobregat, con o sin ondas decorativas según el acabado que busques.",
    foto: "Toldo corredero sobre un patio interior de manzana, media lona recogida y ondas marcadas. Instalación propia.",
    img: "/assets/corredero.webp",
    imgAlt:
      "Toldo corredero de lona color arena sobre guías, cubriendo una terraza con tumbona y mesa",
    medidas: "A medida según el espacio",
    medidasPendiente: true,
    motorTitulo: "Caso por caso",
    motorNota:
      "Motorizarlo es difícil: lo evaluamos en la visita y no lo ofrecemos como estándar.",
    usoTitulo: "Patios y verandas",
    usoNota:
      "Espacios cerrados por los lados o con techo acristalado, donde un brazo no tiene dónde apoyarse.",
    tecnico: [
      {
        t: "Dos variantes",
        d: "Cortina corredera, o corredero con ondas y sin ondas. Las ondas son una decisión de acabado.",
      },
      {
        t: "Motorización",
        d: "Es difícil de motorizar. Se evalúa caso por caso en la visita y no se ofrece como opción estándar.",
      },
      {
        t: "Verandas",
        d: "Las instalaciones tipo veranda se resuelven con este sistema: no es un tipo de toldo aparte.",
      },
      {
        t: "Medidas",
        d: "Se hace a medida según el espacio. El rango máximo está pendiente de confirmar con el instalador.",
      },
    ],
    faqs: [
      {
        q: "¿Sirve para una veranda?",
        a: "Sí. Las verandas se resuelven con el sistema corredero; no es un tipo de toldo distinto.",
      },
      {
        q: "¿Se puede motorizar?",
        a: "Es difícil. Se evalúa caso por caso y no lo ofrecemos como estándar.",
      },
      {
        q: "¿Para qué espacios funciona mejor?",
        a: "Patios, interiores de manzana y espacios con techo acristalado.",
      },
      {
        q: "¿Qué medidas máximas tiene?",
        a: "Se hace a medida según el espacio; el rango máximo está pendiente de confirmar con el instalador.",
        pendiente: true,
      },
    ],
    ctaTitulo: "Pide precio para tu toldo corredero",
    metaTitle: "Toldo corredero en el Baix Llobregat · DP Toldos",
    metaDescription:
      "Toldo corredero a medida sobre guías, para patios, interiores de manzana y verandas. Instalación propia en el Baix Llobregat.",
  },
};

export const COMUNES: { k: string; v: string }[] = [
  {
    k: "Materiales",
    v: "Lona acrílica principalmente; también fibra de vidrio o Soltís según el proyecto. Estructura de aluminio con algunas piezas en acero.",
  },
  {
    k: "Garantía",
    v: "2 años. Cubre el producto y la instalación. Excluye el mal uso y los daños por inclemencias del tiempo.",
  },
  {
    k: "Motorización",
    v: "Somfy preferente, con sensores de sol y viento. Para ajustar presupuesto, alternativa de otra marca nueva y con garantía.",
  },
  {
    k: "Precio",
    v: "Sin rango fijo publicado: por WhatsApp te damos un orientativo “desde” y el presupuesto personalizado sale tras la visita.",
  },
  {
    k: "Proceso",
    v: "WhatsApp con tres o cuatro preguntas → precio orientativo → visita a domicilio para medir, obligatoria → instalación en pocos días, hasta 15 en plena temporada de verano.",
  },
  {
    k: "Zona",
    v: "Baix Llobregat, con prioridad en Sant Just Desvern, Esplugues, Castelldefels, Gavà, Sant Joan Despí y Begues.",
  },
];
