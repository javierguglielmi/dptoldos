export type MotorLevel = "yes" | "part" | "no";

export type MotorRow = {
  nombre: string;
  motor: string;
  motorLevel: MotorLevel;
  sensor: string;
  sensorLevel: MotorLevel;
  nota: string;
};

export const MOTOR_ROWS: MotorRow[] = [
  {
    nombre: "Brazo invisible",
    motor: "Sí",
    motorLevel: "yes",
    sensor: "Sí",
    sensorLevel: "yes",
    nota: "El sistema más habitual para motor y automatismo de viento.",
  },
  {
    nombre: "Brazo directo",
    motor: "Sí",
    motorLevel: "yes",
    sensor: "Opcional",
    sensorLevel: "part",
    nota: "Motor tubular sin problema; el sensor depende del anclaje.",
  },
  {
    nombre: "Capota",
    motor: "No",
    motorLevel: "no",
    sensor: "No",
    sensorLevel: "no",
    nota: "Estructura fija: se monta y se queda. No lleva motor.",
  },
  {
    nombre: "Vertical",
    motor: "No",
    motorLevel: "no",
    sensor: "No",
    sensorLevel: "no",
    nota: "Mecanismo de guías o cable, no acepta motor.",
  },
  {
    nombre: "Corredero",
    motor: "Según medida",
    motorLevel: "part",
    sensor: "No",
    sensorLevel: "no",
    nota: "Motorizable a partir de cierta luz entre apoyos y guía recta.",
  },
];

export type Paso = { num: string; titulo: string; texto: string };

export const PASOS: Paso[] = [
  {
    num: "01",
    titulo: "Escribes por WhatsApp",
    texto:
      "Cuatro preguntas fijas: tipo de toldo, medidas aproximadas, municipio y si lo quieres motorizado.",
  },
  {
    num: "02",
    titulo: "Precio orientativo",
    texto:
      "Te damos una horquilla de precio el mismo día laborable, sin compromiso y antes de la visita.",
  },
  {
    num: "03",
    titulo: "Visita de medición",
    texto:
      "Comprobamos el anclaje real, tomamos medidas y eliges tejido y color en la visita.",
  },
  {
    num: "04",
    titulo: "Instalación",
    texto:
      "Pocos días desde que confirmas el presupuesto; hasta 15 días en plena temporada de verano. Una mañana de trabajo en la mayoría de casos.",
  },
  {
    num: "05",
    titulo: "Garantía",
    texto:
      "2 años sobre producto e instalación. Si algo falla, vuelve el mismo instalador que lo montó.",
  },
];

export type HomeFaq = { q: string; a: string };

export const HOME_FAQS: HomeFaq[] = [
  {
    q: "¿Cuánto cuesta un toldo instalado?",
    a: "Depende del sistema, de las medidas y de si lleva motor. Por eso damos una horquilla orientativa por WhatsApp antes de la visita: así sabes el rango antes de la visita. El precio cerrado sale de la medición.",
  },
  {
    q: "¿Cuánto tardáis en instalar?",
    a: "Pocos días desde que confirmas el presupuesto. En plena temporada de verano puede llegar a 15 días. La instalación en sí suele ser una mañana.",
  },
  {
    q: "¿Qué cubre la garantía?",
    a: "2 años, y cubre tanto el producto como la instalación. Quedan fuera el mal uso y los daños por inclemencias del tiempo. La atención postventa la hace el mismo instalador que montó el toldo.",
  },
  {
    q: "¿Cómo elijo el tejido y el color?",
    a: "En la visita de medición, con la luz real de tu terraza delante.",
  },
  {
    q: "¿Se puede motorizar cualquier toldo?",
    a: "No. La capota y el vertical no admiten motor, y el corredero depende de la luz entre apoyos. El brazo invisible se motoriza siempre. Lo tienes resumido en la tabla de motorización.",
  },
];
