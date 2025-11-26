// Datos mock de estudiantes para autenticación
export interface Student {
  id: string;
  username: string;
  password: string;
  personalInfo: {
    matricula: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string;
    curp: string;
    email: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
  };
  academicInfo: {
    carrera: string;
    planEstudios: string;
    semestre: number;
    creditosObtenidos: number;
    creditosTotales: number;
    promedioGeneral: number;
    estatusAcademico: string;
  };
  historialAcademico: Array<{
    semestre: number;
    periodo: string;
    materias: Array<{
      clave: string;
      nombre: string;
      creditos: number;
      calificacion: number;
      estado: string;
    }>;
    promedioSemestral: number;
  }>;
}

export const mockStudents: Student[] = [
  {
    id: "1",
    username: "juan.perez",
    password: "123456",
    personalInfo: {
      matricula: "2021001234",
      nombre: "Juan Carlos",
      apellidoPaterno: "Pérez",
      apellidoMaterno: "García",
      fechaNacimiento: "15/05/2003",
      curp: "PEGJ030515HDFRRC09",
      email: "juan.perez@universidad.edu.mx",
      telefono: "55-1234-5678",
      direccion: "Av. Universidad 123, Col. Centro",
      ciudad: "Ciudad de México",
      estado: "CDMX",
      codigoPostal: "01000",
    },
    academicInfo: {
      carrera: "Ingeniería en Sistemas Computacionales",
      planEstudios: "ISC-2020",
      semestre: 6,
      creditosObtenidos: 180,
      creditosTotales: 300,
      promedioGeneral: 8.7,
      estatusAcademico: "Regular",
    },
    historialAcademico: [
      {
        semestre: 1,
        periodo: "Agosto - Diciembre 2021",
        materias: [
          { clave: "MAT101", nombre: "Cálculo Diferencial", creditos: 5, calificacion: 85, estado: "Aprobado" },
          { clave: "PRG101", nombre: "Fundamentos de Programación", creditos: 5, calificacion: 90, estado: "Aprobado" },
          { clave: "FIS101", nombre: "Física I", creditos: 4, calificacion: 80, estado: "Aprobado" },
          { clave: "QUI101", nombre: "Química General", creditos: 4, calificacion: 82, estado: "Aprobado" },
          { clave: "COM101", nombre: "Comunicación Oral y Escrita", creditos: 3, calificacion: 88, estado: "Aprobado" },
        ],
        promedioSemestral: 8.5,
      },
      {
        semestre: 2,
        periodo: "Enero - Mayo 2022",
        materias: [
          { clave: "MAT102", nombre: "Cálculo Integral", creditos: 5, calificacion: 88, estado: "Aprobado" },
          { clave: "PRG102", nombre: "Programación Orientada a Objetos", creditos: 5, calificacion: 92, estado: "Aprobado" },
          { clave: "FIS102", nombre: "Física II", creditos: 4, calificacion: 83, estado: "Aprobado" },
          { clave: "MAT103", nombre: "Álgebra Lineal", creditos: 4, calificacion: 86, estado: "Aprobado" },
          { clave: "ING101", nombre: "Inglés I", creditos: 3, calificacion: 90, estado: "Aprobado" },
        ],
        promedioSemestral: 8.8,
      },
      {
        semestre: 3,
        periodo: "Agosto - Diciembre 2022",
        materias: [
          { clave: "MAT201", nombre: "Ecuaciones Diferenciales", creditos: 5, calificacion: 85, estado: "Aprobado" },
          { clave: "PRG201", nombre: "Estructuras de Datos", creditos: 5, calificacion: 91, estado: "Aprobado" },
          { clave: "ELE101", nombre: "Circuitos Eléctricos", creditos: 4, calificacion: 80, estado: "Aprobado" },
          { clave: "MAT204", nombre: "Probabilidad y Estadística", creditos: 4, calificacion: 87, estado: "Aprobado" },
          { clave: "ING102", nombre: "Inglés II", creditos: 3, calificacion: 89, estado: "Aprobado" },
        ],
        promedioSemestral: 8.6,
      },
      {
        semestre: 4,
        periodo: "Enero - Mayo 2023",
        materias: [
          { clave: "PRG301", nombre: "Base de Datos", creditos: 5, calificacion: 93, estado: "Aprobado" },
          { clave: "PRG302", nombre: "Análisis y Diseño de Algoritmos", creditos: 5, calificacion: 89, estado: "Aprobado" },
          { clave: "SIS201", nombre: "Arquitectura de Computadoras", creditos: 4, calificacion: 84, estado: "Aprobado" },
          { clave: "MAT301", nombre: "Métodos Numéricos", creditos: 4, calificacion: 86, estado: "Aprobado" },
          { clave: "ADM101", nombre: "Fundamentos de Administración", creditos: 3, calificacion: 88, estado: "Aprobado" },
        ],
        promedioSemestral: 8.8,
      },
      {
        semestre: 5,
        periodo: "Agosto - Diciembre 2023",
        materias: [
          { clave: "PRG401", nombre: "Desarrollo Web", creditos: 5, calificacion: 94, estado: "Aprobado" },
          { clave: "PRG402", nombre: "Ingeniería de Software", creditos: 5, calificacion: 90, estado: "Aprobado" },
          { clave: "SIS301", nombre: "Sistemas Operativos", creditos: 4, calificacion: 87, estado: "Aprobado" },
          { clave: "RED101", nombre: "Redes de Computadoras", creditos: 4, calificacion: 85, estado: "Aprobado" },
          { clave: "CON101", nombre: "Contabilidad Financiera", creditos: 3, calificacion: 82, estado: "Aprobado" },
        ],
        promedioSemestral: 8.8,
      },
      {
        semestre: 6,
        periodo: "Enero - Mayo 2024",
        materias: [
          { clave: "PRG501", nombre: "Desarrollo Móvil", creditos: 5, calificacion: 92, estado: "Aprobado" },
          { clave: "PRG502", nombre: "Inteligencia Artificial", creditos: 5, calificacion: 88, estado: "Aprobado" },
          { clave: "SEG101", nombre: "Seguridad Informática", creditos: 4, calificacion: 86, estado: "Aprobado" },
          { clave: "PRY101", nombre: "Gestión de Proyectos", creditos: 4, calificacion: 90, estado: "Aprobado" },
          { clave: "EMP101", nombre: "Emprendimiento", creditos: 3, calificacion: 85, estado: "Aprobado" },
        ],
        promedioSemestral: 8.8,
      },
    ],
  },
  {
    id: "2",
    username: "maria.lopez",
    password: "password123",
    personalInfo: {
      matricula: "2021005678",
      nombre: "María Fernanda",
      apellidoPaterno: "López",
      apellidoMaterno: "Martínez",
      fechaNacimiento: "22/08/2002",
      curp: "LOMM020822MDFPRT04",
      email: "maria.lopez@universidad.edu.mx",
      telefono: "55-9876-5432",
      direccion: "Calle Reforma 456, Col. Juárez",
      ciudad: "Ciudad de México",
      estado: "CDMX",
      codigoPostal: "06600",
    },
    academicInfo: {
      carrera: "Licenciatura en Administración de Empresas",
      planEstudios: "LAE-2020",
      semestre: 5,
      creditosObtenidos: 155,
      creditosTotales: 280,
      promedioGeneral: 9.2,
      estatusAcademico: "Regular",
    },
    historialAcademico: [
      {
        semestre: 1,
        periodo: "Agosto - Diciembre 2021",
        materias: [
          { clave: "ADM101", nombre: "Introducción a la Administración", creditos: 5, calificacion: 95, estado: "Aprobado" },
          { clave: "MAT101", nombre: "Matemáticas para Negocios", creditos: 5, calificacion: 90, estado: "Aprobado" },
          { clave: "CON101", nombre: "Contabilidad Básica", creditos: 4, calificacion: 92, estado: "Aprobado" },
          { clave: "ECO101", nombre: "Introducción a la Economía", creditos: 4, calificacion: 93, estado: "Aprobado" },
          { clave: "COM101", nombre: "Comunicación Empresarial", creditos: 3, calificacion: 94, estado: "Aprobado" },
        ],
        promedioSemestral: 9.3,
      },
      {
        semestre: 2,
        periodo: "Enero - Mayo 2022",
        materias: [
          { clave: "ADM201", nombre: "Proceso Administrativo", creditos: 5, calificacion: 92, estado: "Aprobado" },
          { clave: "MAT201", nombre: "Estadística para Negocios", creditos: 5, calificacion: 91, estado: "Aprobado" },
          { clave: "CON201", nombre: "Contabilidad de Costos", creditos: 4, calificacion: 93, estado: "Aprobado" },
          { clave: "ECO201", nombre: "Microeconomía", creditos: 4, calificacion: 90, estado: "Aprobado" },
          { clave: "DER101", nombre: "Derecho Empresarial", creditos: 3, calificacion: 95, estado: "Aprobado" },
        ],
        promedioSemestral: 9.2,
      },
      {
        semestre: 3,
        periodo: "Agosto - Diciembre 2022",
        materias: [
          { clave: "ADM301", nombre: "Recursos Humanos", creditos: 5, calificacion: 94, estado: "Aprobado" },
          { clave: "FIN101", nombre: "Finanzas Corporativas", creditos: 5, calificacion: 92, estado: "Aprobado" },
          { clave: "MKT101", nombre: "Fundamentos de Marketing", creditos: 4, calificacion: 95, estado: "Aprobado" },
          { clave: "ECO301", nombre: "Macroeconomía", creditos: 4, calificacion: 89, estado: "Aprobado" },
          { clave: "ING101", nombre: "Inglés de Negocios I", creditos: 3, calificacion: 93, estado: "Aprobado" },
        ],
        promedioSemestral: 9.3,
      },
      {
        semestre: 4,
        periodo: "Enero - Mayo 2023",
        materias: [
          { clave: "ADM401", nombre: "Administración Estratégica", creditos: 5, calificacion: 93, estado: "Aprobado" },
          { clave: "FIN201", nombre: "Análisis Financiero", creditos: 5, calificacion: 91, estado: "Aprobado" },
          { clave: "MKT201", nombre: "Investigación de Mercados", creditos: 4, calificacion: 94, estado: "Aprobado" },
          { clave: "OPE101", nombre: "Administración de Operaciones", creditos: 4, calificacion: 90, estado: "Aprobado" },
          { clave: "ING201", nombre: "Inglés de Negocios II", creditos: 3, calificacion: 92, estado: "Aprobado" },
        ],
        promedioSemestral: 9.2,
      },
      {
        semestre: 5,
        periodo: "Agosto - Diciembre 2023",
        materias: [
          { clave: "EMP101", nombre: "Emprendimiento e Innovación", creditos: 5, calificacion: 96, estado: "Aprobado" },
          { clave: "MKT301", nombre: "Marketing Digital", creditos: 5, calificacion: 94, estado: "Aprobado" },
          { clave: "FIN301", nombre: "Planeación Financiera", creditos: 4, calificacion: 90, estado: "Aprobado" },
          { clave: "ETI101", nombre: "Ética Empresarial", creditos: 4, calificacion: 92, estado: "Aprobado" },
          { clave: "NEG101", nombre: "Negocios Internacionales", creditos: 3, calificacion: 91, estado: "Aprobado" },
        ],
        promedioSemestral: 9.3,
      },
    ],
  },
];

export const authenticateStudent = (username: string, password: string): Student | null => {
  const student = mockStudents.find(
    (s) => s.username === username && s.password === password
  );
  return student || null;
};
