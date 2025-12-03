import React, { useState } from "react";
import "./App.css";

const skillsCloudInfra = [
  "Fundamentos de AWS (EC2, S3, IAM, VPC, CloudWatch)",
  "Redes básicas (TCP/IP, HTTP/HTTPS, DNS)"
];

const skillsContainers = [
  "Docker (imágenes, contenedores, redes)",
  "Bash scripting básico",
  "Git / GitHub"
];

const skillsDev = [
  "JavaScript",
  "Node.js",
  "React",
  "Redux",
  "C / C++",
  "SQL / MySQL",
  "HTML",
  "CSS3",
  "Arduino",
  "ESP8266"
];

// Detalles de cada skill (podés editar estos textos)
const skillDetails = {
  "Fundamentos de AWS (EC2, S3, IAM, VPC, CloudWatch)":
    "Conocimiento en los servicios fundamentales de AWS utilizados para desplegar aplicaciones: EC2 para cómputo, S3 para almacenamiento, IAM para permisos, VPC para redes privadas y CloudWatch para monitoreo.",
  "Redes básicas (TCP/IP, HTTP/HTTPS, DNS)":
    "Comprensión de cómo se comunican los sistemas: modelo cliente-servidor, protocolos TCP/IP, petición/respuesta HTTP, cifrado mediante HTTPS y resolución de nombres con DNS.",
  "Docker (imágenes, contenedores, redes)":
    "Uso de Docker para empaquetar aplicaciones en contenedores, crear imágenes reproducibles y gestionar redes entre servicios.",
  "Bash scripting básico":
    "Automatización de tareas repetitivas en entornos Linux/Unix mediante scripts sencillos con Bash.",
  "Git / GitHub":
    "Control de versiones del código, trabajo con ramas, pull requests y colaboración en repositorios remotos.",
  "JavaScript":
    "Lenguaje principal para desarrollo web, lógica de frontend y herramientas de build modernas.",
  "Node.js":
    "Ejecución de JavaScript del lado del servidor, APIs, herramientas de línea de comandos y scripts.",
  "React":
    "Construcción de interfaces de usuario basadas en componentes, manejo de estado y SPA.",
  "Redux":
    "Manejo de estado global para aplicaciones React de tamaño medio/grande.",
  "C / C++":
    "Lenguajes de programación de bajo nivel usados para entender mejor la memoria y la lógica de sistemas.",
  "SQL / MySQL":
    "Modelado de datos relacional, consultas, joins y administración básica de bases de datos.",
  "HTML":
    "Estructura semántica de páginas web y maquetación básica.",
  "CSS3":
    "Estilos y diseño responsivo, uso de flexbox y grid.",
  "Arduino":
    "Programación de microcontroladores para prototipos electrónicos y proyectos de domótica.",
  "ESP8266":
    "Microcontrolador con WiFi para proyectos IoT, domótica y control remoto."
};

const projects = [
  {
    title: "Servidor Local para Gestión Comercial",
    tech: "MySQL · PHP · HTML · CSS3",
    description:
      "Sistema local para gestionar stock y ventas de comercio, con base de datos MySQL, backend en PHP y front-end en HTML/CSS."
  },
  {
    title: "Domótica con Arduino / ESP8266",
    tech: "Arduino · ESP8266 · C/C++",
    description:
      "Automatización básica de luces y sensores utilizando microcontroladores y comunicación WiFi."
  },
  {
    title: "Aplicación del Clima en React",
    tech: "React · JavaScript · APIs",
    description:
      "Aplicación que consume una API del clima, maneja estados y componentes reutilizables con diseño responsive."
  },
  {
    title: "Sistema de Fichaje en Node.js",
    tech: "Node.js · Express · SQL",
    description:
      "Back-end con endpoints REST para registrar asistencia y almacenar datos en una base de datos."
  }
];

const experience = [
  {
    company: "PROSEGUR ARGENTINA",
    role: "Técnico de Campo Junior",
    period: "Septiembre 2023 – Actualidad",
    details: [
      "Diagnóstico y reparación de cajeros automáticos (GRG, Diebold, Wincor).",
      "Soporte técnico en campo y remoto.",
      "Reparación de software y hardware crítico.",
      "Trabajo bajo SLA estrictos y gestión de stock técnico."
    ]
  },
  {
    company: "INNOVA IT",
    role: "Técnico en Electrónica y Telecomunicaciones",
    period: "2022 – 2023",
    details: [
      "Mantenimiento y reparación electrónica.",
      "Instalación y configuración de equipos de telecomunicaciones.",
      "Cableado estructurado y soporte en redes."
    ]
  },
  {
    company: "SAYTRA / Agropecuaria GUSMAR",
    role: "Administrativo",
    period: "Julio 2022 – Octubre 2022",
    details: [
      "Gestión administrativa general.",
      "Soporte técnico interno y tareas de organización."
    ]
  }
];

const education = [
  {
    title: "Técnico Informático – EEST N°1",
    period: "2019 – 2022",
    details: [
      "Desarrollo de software (HTML, CSS3, SQL, PHP).",
      "Proyectos individuales con Arduino y Nodemcu ESP8266.",
      "Desarrollo de servidores locales con MySQL.",
      "Programación en C++."
    ]
  },
  {
    title: "Full Stack Web Developer – Soy Henry",
    period: "2021 – 2022",
    details: [
      "Desarrollo front-end y back-end.",
      "Proyectos con Node.js, React y JavaScript en equipos e individualmente."
    ]
  },
  {
    title: "Licenciatura en Psicología",
    period: "En curso",
    details: []
  }
];

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill((current) =>
      current === skill ? null : skill // si clickeás la misma, se cierra
    );
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <h1>Mateo Rodríguez</h1>
          <p className="hero-role">Candidato a SRE / DevOps (en formación)</p>
          <p className="hero-contact">
            San Martín 1129 · +54 2926 417264 ·{" "}
            <a
              href="mailto:rodriguezmateo583@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              rodriguezmateo583@gmail.com
            </a>
          </p>
          <p className="hero-contact">
            <a
              href="https://www.linkedin.com/in/mateo-rodriguez-832759235/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      <main>
        <section className="container">
          <h2>Sobre mí</h2>
          <div className="container">
            <p>
              Soy <strong>candidato a SRE/DevOps en formación</strong>, con una
              base técnica fuerte en soporte, electrónica, desarrollo web y
              resolución de problemas. Actualmente estoy desarrollando
              habilidades en <strong>AWS</strong>, <strong>Docker</strong>,{" "}
              <strong>Linux</strong>, redes y automatización para conseguir mi
              primera oportunidad en el área de infraestructura y confiabilidad.
            </p>
            <p>
              Me destaca el <strong>aprendizaje rápido</strong>, el{" "}
              <strong>pensamiento lógico</strong> y la experiencia trabajando
              bajo presión con equipos críticos como cajeros automáticos y
              sistemas de hardware/software en producción.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="card">
              <h3>Cloud & Infraestructura</h3>
              <ul className="skill-list">
                {skillsCloudInfra.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className={`skill-chip ${
                        selectedSkill === s ? "skill-chip-active" : ""
                      }`}
                      onClick={() => handleSkillClick(s)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Contenedores & Automatización</h3>
              <ul className="skill-list">
                {skillsContainers.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className={`skill-chip ${
                        selectedSkill === s ? "skill-chip-active" : ""
                      }`}
                      onClick={() => handleSkillClick(s)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Programación & Desarrollo</h3>
              <div className="skills-chips-wrap">
                {skillsDev.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`skill-chip ${
                      selectedSkill === s ? "skill-chip-active" : ""
                    }`}
                    onClick={() => handleSkillClick(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedSkill && (
            <div className="card skill-detail-card">
              <h3>Detalle de skill</h3>
              <p className="skill-detail-title">{selectedSkill}</p>
              <p className="skill-detail-text">
                {skillDetails[selectedSkill] ||
                  "Descripción en preparación para esta habilidad."}
              </p>
            </div>
          )}
        </section>

        <section className="section">
          <h2>Proyectos Destacados</h2>
          <div className="cards-grid">
            {projects.map((p) => (
              <article className="card project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="project-tech">{p.tech}</p>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Experiencia Profesional</h2>
          {experience.map((job) => (
            <article className="card" key={job.company}>
              <h3>
                {job.company} — <span className="muted">{job.role}</span>
              </h3>
              <p className="muted">{job.period}</p>
              <ul>
                {job.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section">
          <h2>Educación</h2>
          {education.map((edu) => (
            <article className="card" key={edu.title}>
              <h3>{edu.title}</h3>
              <p className="muted">{edu.period}</p>
              {edu.details.length > 0 && (
                <ul>
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="section">
          <h2>Contacto</h2>
          <div className="card contact-card">
            <p>
              📧 Email:{" "}
              <a href="mailto:rodriguezmateo583@gmail.com">
                rodriguezmateo583@gmail.com
              </a>
            </p>
            <p>📱 Teléfono: +54 2926 417264</p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mateo-rodriguez-832759235/"
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} · Portfolio SRE / DevOps — Mateo Rodríguez
      </footer>
    </div>
  );
}

export default App;
