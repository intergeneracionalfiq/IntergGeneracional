/* Datos ficticios del prototipo InterGeneracional (exclusivamente demostrativos) */

const CATEGORIAS = {
  tec:  { nombre: "Tecnología y alfabetización digital", icon: "📱", color: "#7d9b84" },
  arte: { nombre: "Arte y creatividad",                  icon: "🎨", color: "#c97b5d" },
  bien: { nombre: "Bienestar y actividad física",        icon: "🧘", color: "#8fae9a" },
  cult: { nombre: "Cultura y aprendizaje",               icon: "📚", color: "#b8956a" }
};

const INSTITUCIONES = [
  { nombre: "Centro de Día Los Aromos", tipo: "Centro de día", barrio: "Candioti" },
  { nombre: "Residencia Nuevo Horizonte", tipo: "Residencia geriátrica", barrio: "Guadalupe" },
  { nombre: "Centro de Jubilados Unión y Esperanza", tipo: "Centro de jubilados", barrio: "Barrio Sur" },
  { nombre: "Centro Cultural La Esquina", tipo: "Centro cultural", barrio: "Centro" },
  { nombre: "Club Social Villa del Parque", tipo: "Club", barrio: "Villa del Parque" },
  { nombre: "Escuela Técnica N.º 478", tipo: "Escuela secundaria", barrio: "San Lorenzo" }
];

const TALLERISTAS = [
  {
    id: "lucia", foto: "assets/images/tallerista-lucia.jpg", nombre: "Lucía Fernández", especialidad: "Tecnología y alfabetización digital",
    presentacion: "Acompaño a personas mayores a perderle el miedo al celular.",
    bio: "Licenciada en Comunicación. Desde hace 5 años diseña capacitaciones digitales para adultos mayores en centros de día y bibliotecas populares de Santa Fe.",
    experiencia: "5 años trabajando en capacitación digital.",
    especialidades: ["WhatsApp y videollamadas", "Fotografía con el celular", "Trámites online"],
    talleres: 18, valoracion: 4.9, verificado: true,
    historial: ["Tu celular, tus posibilidades — Centro de Día Los Aromos (2026)", "Trámites digitales sin miedo — Centro de Jubilados Unión y Esperanza (2025)", "Fotos y recuerdos — Residencia Nuevo Horizonte (2025)"],
    comentarios: [["Elsa, 74", "Lucía tuvo mucha paciencia y nos enseñó cosas que ahora usamos todos los días."], ["Roberto, 81", "Ahora hago videollamadas con mis nietos en Córdoba."]]
  },
  {
    id: "mariana", foto: "assets/images/tallerista-mariana.jpg", nombre: "Mariana López", especialidad: "Arte y creatividad",
    presentacion: "Artista plástica. Creo espacios para expresarse con color.",
    bio: "Profesora de Artes Visuales egresada del Liceo Municipal. Coordina talleres de pintura para adultos desde hace 10 años.",
    experiencia: "10 años en docencia artística.",
    especialidades: ["Pintura acrílica", "Acuarela", "Collage"],
    talleres: 24, valoracion: 4.8, verificado: true,
    historial: ["Pintura y expresión — Centro Cultural La Esquina (2026)", "Acuarela en el parque — Club Social Villa del Parque (2025)"],
    comentarios: [["Nélida, 69", "Descubrí que puedo pintar. Me cambió las tardes de los viernes."], ["Carlos, 77", "Un ambiente muy cálido y respetuoso."]]
  },
  {
    id: "diego", foto: "assets/images/tallerista-diego.jpg", nombre: "Diego Martínez", especialidad: "Bienestar y actividad física",
    presentacion: "Profesor de Educación Física especializado en adultos mayores.",
    bio: "Profesor de Educación Física con posgrado en actividad física adaptada. Trabaja movilidad, equilibrio y prevención de caídas.",
    experiencia: "8 años en actividad física adaptada.",
    especialidades: ["Movilidad articular", "Equilibrio", "Gimnasia suave"],
    talleres: 31, valoracion: 4.9, verificado: true,
    historial: ["Movimiento y bienestar — Residencia Nuevo Horizonte (2026)", "Caminatas costaneras — Centro de Jubilados Unión y Esperanza (2025)"],
    comentarios: [["Marta, 80", "Me siento más segura al caminar."], ["Hugo, 72", "Diego explica cada ejercicio con claridad."]]
  },
  {
    id: "patricia", foto: "assets/images/tallerista-patricia.jpg", nombre: "Patricia Gómez", especialidad: "Cultura y aprendizaje · Cocina",
    presentacion: "Cocinera y narradora. Las recetas también cuentan historias.",
    bio: "Gastronómica y gestora cultural. Combina cocina tradicional santafesina con relatos y memoria colectiva.",
    experiencia: "6 años coordinando talleres de cocina comunitaria.",
    especialidades: ["Cocina tradicional", "Memoria y relato", "Recetas familiares"],
    talleres: 15, valoracion: 4.7, verificado: true,
    historial: ["Cocina y recuerdos — Centro de Día Los Aromos (2026)", "Sabores del litoral — Centro Cultural La Esquina (2025)"],
    comentarios: [["Irma, 83", "Compartimos las recetas de nuestras madres. Muy emocionante."]]
  },
  {
    id: "tomas", foto: "assets/images/tallerista-tomas.jpg", nombre: "Tomás Acosta", especialidad: "Música",
    presentacion: "Músico y docente. Cantar juntos nos hace bien.",
    bio: "Profesor de música del ISM (UNL). Coordina coros comunitarios y talleres de guitarra para principiantes.",
    experiencia: "7 años dirigiendo coros comunitarios.",
    especialidades: ["Coro", "Guitarra inicial", "Folklore"],
    talleres: 20, valoracion: 4.8, verificado: true,
    historial: ["Coro de las tardes — Centro de Jubilados Unión y Esperanza (2026)", "Guitarra para principiantes — Club Social Villa del Parque (2025)"],
    comentarios: [["Alicia, 71", "El coro es lo mejor de mi semana."]]
  },
  {
    id: "valentina", foto: "assets/images/tallerista-valentina.jpg", nombre: "Valentina Ruiz", especialidad: "Idiomas",
    presentacion: "Estudiante avanzada de Traductorado. Idiomas para viajar y conversar.",
    bio: "Estudiante avanzada del Traductorado de Inglés e Italiano. Ofrece talleres conversacionales con enfoque intergeneracional.",
    experiencia: "3 años dando clases particulares y grupales.",
    especialidades: ["Italiano conversacional", "Inglés básico"],
    talleres: 9, valoracion: 4.6, verificado: false,
    historial: ["Italiano para el viaje — Centro Cultural La Esquina (2026)"],
    comentarios: [["Ángel, 76", "Por fin puedo leer las cartas de mi nonno."]]
  },
  {
    id: "osvaldo", foto: "assets/images/tallerista-osvaldo.jpg", nombre: "Osvaldo Benítez", especialidad: "Carpintería · Oficios",
    presentacion: "Carpintero jubilado. Enseño a los chicos lo que la madera me enseñó a mí.",
    bio: "Maestro carpintero con más de 45 años de oficio en su taller de barrio San Lorenzo. Desde que se jubiló, transmite su experiencia a adolescentes de escuelas técnicas y secundarias: un ejemplo de cómo los adultos mayores también son quienes enseñan.",
    experiencia: "45 años de oficio; 3 años enseñando en escuelas.",
    especialidades: ["Carpintería tradicional", "Uso seguro de herramientas", "Restauración de muebles"],
    talleres: 11, valoracion: 4.9, verificado: true,
    historial: ["Manos a la madera — Escuela Técnica N.º 478 (2026)", "Restauramos los bancos del aula — Escuela Secundaria Almirante Brown (2025)"],
    comentarios: [["Mateo, 15 (estudiante)", "Don Osvaldo sabe muchísimo y tiene una paciencia enorme. Hicimos nuestra primera banqueta."], ["Prof. Silvia R. (escuela)", "Los chicos esperan el taller toda la semana."]]
  }
];

const TALLERES = [
  { id: 1, img: "assets/images/taller-celular.jpg", nombre: "Tu celular, tus posibilidades", cat: "tec", inst: "Centro de Día Los Aromos", barrio: "Candioti", tallerista: "lucia",
    inicio: "2026-11-17", fin: "2026-12-15", horario: "Martes, 10:00 a 11:30", vacantes: 12,
    desc: "Aprendizaje práctico sobre WhatsApp, videollamadas, fotografías y herramientas digitales cotidianas." },
  { id: 2, img: "assets/images/taller-pintura.jpg", nombre: "Pintura y expresión", cat: "arte", inst: "Centro Cultural La Esquina", barrio: "Centro", tallerista: "mariana",
    inicio: "2026-11-20", fin: "2026-12-18", horario: "Viernes, 16:00 a 17:30", vacantes: 15,
    desc: "Exploración del color y distintas técnicas de pintura en un espacio de expresión libre y sin exigencias." },
  { id: 3, img: "assets/images/taller-movimiento.jpg", nombre: "Movimiento y bienestar", cat: "bien", inst: "Residencia Nuevo Horizonte", barrio: "Guadalupe", tallerista: "diego",
    inicio: "2026-11-18", fin: "2026-12-16", horario: "Miércoles, 10:30 a 11:30", vacantes: 10,
    desc: "Ejercicios suaves de movilidad, equilibrio y respiración para sentirse mejor día a día." },
  { id: 4, img: "assets/images/taller-cocina.jpg", nombre: "Cocina y recuerdos", cat: "cult", inst: "Centro de Día Los Aromos", barrio: "Candioti", tallerista: "patricia",
    inicio: "2026-11-21", fin: "2026-12-19", horario: "Sábados, 15:00 a 17:00", vacantes: 8,
    desc: "Recetas tradicionales que despiertan memorias y se comparten en grupo." },
  { id: 5, img: "assets/images/taller-coro.jpg", nombre: "Coro de las tardes", cat: "cult", inst: "Centro de Jubilados Unión y Esperanza", barrio: "Barrio Sur", tallerista: "tomas",
    inicio: "2026-12-01", fin: "2027-03-30", horario: "Lunes, 17:00 a 18:30", vacantes: 25,
    desc: "Canto grupal de repertorio popular y folklore. No hace falta experiencia previa." },
  { id: 6, img: "assets/images/taller-italiano.jpg", nombre: "Italiano para el viaje", cat: "cult", inst: "Centro Cultural La Esquina", barrio: "Centro", tallerista: "valentina",
    inicio: "2027-02-10", fin: "2027-05-12", horario: "Miércoles, 18:00 a 19:30", vacantes: 14,
    desc: "Conversación básica en italiano para viajar, leer y reencontrarse con las raíces familiares." },
  { id: 7, img: "assets/images/taller-tramites.jpg", nombre: "Trámites digitales sin miedo", cat: "tec", inst: "Club Social Villa del Parque", barrio: "Villa del Parque", tallerista: "lucia",
    inicio: "2026-11-12", fin: "2026-12-10", horario: "Jueves, 10:00 a 11:30", vacantes: 10,
    desc: "Turnos médicos, home banking y trámites online de forma segura y paso a paso." },
  { id: 8, img: "assets/images/taller-acuarela.jpg", nombre: "Acuarela en el parque", cat: "arte", inst: "Club Social Villa del Parque", barrio: "Villa del Parque", tallerista: "mariana",
    inicio: "2027-03-05", fin: "2027-04-30", horario: "Viernes, 9:30 a 11:00", vacantes: 12,
    desc: "Pintura al aire libre con acuarelas, observando la naturaleza del barrio." },
  { id: 9, img: "assets/images/taller-caminata.jpg", nombre: "Caminatas costaneras", cat: "bien", inst: "Centro de Jubilados Unión y Esperanza", barrio: "Costanera", tallerista: "diego",
    inicio: "2026-11-14", fin: "2026-12-19", horario: "Sábados, 8:30 a 9:30", vacantes: 20,
    desc: "Caminatas grupales guiadas con ejercicios de estiramiento junto a la Laguna Setúbal." },
  { id: 10, img: "assets/images/taller-carpinteria.jpg", nombre: "Manos a la madera: carpintería con experiencia", cat: "cult", inst: "Escuela Técnica N.º 478", barrio: "San Lorenzo", tallerista: "osvaldo",
    inicio: "2026-11-16", fin: "2026-12-14", horario: "Lunes, 14:00 a 16:00", vacantes: 16,
    desc: "Taller intergeneracional al revés: un maestro carpintero jubilado enseña a adolescentes de la escuela a trabajar la madera con seguridad, desde el diseño hasta la pieza terminada." }
];

const ESPACIOS = [
  { nombre: "Salón de usos múltiples", inst: "Centro Cultural La Esquina", barrio: "Centro", capacidad: 20,
    caract: "Espacio accesible, ventilación y mobiliario.", disp: "Tardes de lunes a jueves." },
  { nombre: "Quincho y patio", inst: "Club Social Villa del Parque", barrio: "Villa del Parque", capacidad: 30,
    caract: "Planta baja, sanitarios accesibles, espacio al aire libre.", disp: "Mañanas de martes a sábado." },
  { nombre: "Sala de lectura", inst: "Centro de Jubilados Unión y Esperanza", barrio: "Barrio Sur", capacidad: 12,
    caract: "Ambiente tranquilo, mesas y proyector.", disp: "Lunes y miércoles por la mañana." }
];

const TELEFONO_DEMO = "(0342) 455-0000";

/* Fecha "de hoy" simulada para el filtro "Próximos a comenzar".
   Fija para que la demo muestre siempre los mismos resultados. */
const FECHA_DEMO = "2026-11-06";


