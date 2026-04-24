const year = document.querySelector("#year");
const languageToggle = document.querySelector("#languageToggle");
const descriptionMeta = document.querySelector("#meta-description");
const ogTitleMeta = document.querySelector("#meta-og-title");
const ogDescriptionMeta = document.querySelector("#meta-og-description");
const languageOptions = Array.from(document.querySelectorAll("[data-lang-option]"));

const translations = {
  es: {
    meta: {
      title: "Javier Bordallo Platero | Data & AI Engineer",
      description:
        "Javier Bordallo Platero, Data & AI Engineer especializado en datos, simulación, automatización y arquitecturas de IA aplicadas.",
      ogTitle: "Javier Bordallo Platero | Data & AI Engineer",
      ogDescription:
        "Perfil profesional orientado a datos, simulación, automatización y soluciones de IA aplicadas a negocio."
    },
    header: {
      ariaLabel: "Navegación principal"
    },
    brand: {
      ariaLabel: "Ir al inicio"
    },
    nav: {
      profile: "Perfil",
      experience: "Experiencia",
      skills: "Capacidades",
      solutions: "Soluciones",
      contact: "Contacto"
    },
    languageToggle: {
      ariaLabel: "Cambiar idioma"
    },
    hero: {
      ariaLabel: "Presentación principal",
      title: "Pensemos en ser más libres.",
      copy: "Diseño de soluciones con datos, simulación e inteligencia artificial aplicadas a problemas reales.",
      actionsAriaLabel: "Acciones principales",
      primaryCta: "Qué puedo construir",
      secondaryCta: "Hablemos"
    },
    profilePanel: {
      ariaLabel: "Resumen rápido",
      label: "Perfil actual",
      originLabel: "Origen",
      originValue: "Villagarcía de la Torre, Badajoz",
      locationLabel: "Residencia",
      locationValue: "Gijón, Asturias",
      foundationLabel: "Base técnica",
      foundationValue: "Datos, simulación y desarrollo",
      stackLabel: "Stack principal",
      stackValue: "Python, C#, SQL, Power BI, Kubernetes e IA aplicada"
    },
    profileSection: {
      ariaLabel: "Perfil profesional",
      label: "Perfil",
      title: "Formación científica, mentalidad de ingeniería y foco absoluto en resolver.",
      paragraph1:
        "Estoy terminando el grado en Física y esa base condiciona mi forma de trabajar: entender sistemas, modelar el problema correcto y apoyarme en herramientas técnicas potentes para llegar a una solución clara.",
      paragraph2:
        "Mi perfil ha evolucionado desde el análisis de datos hasta la ingeniería de datos y, ahora, hacia la construcción de arquitecturas y productos apoyados en IA. Me interesa especialmente hacer que soluciones avanzadas sean útiles, sostenibles y económicamente razonables para quien las necesita."
    },
    experienceSection: {
      ariaLabel: "Trayectoria profesional",
      label: "Experiencia",
      title: "Una progresión natural desde los datos hacia sistemas más inteligentes.",
      intro:
        "Cuento con 4 años de experiencia en el sector, formación continua y una atención constante a las últimas novedades, siempre con foco en llevar esa evolución a soluciones reales."
    },
    timeline: {
      analystTitle: "Analista de datos",
      analystCopy:
        "Empecé trabajando con análisis, visualización y soporte a la toma de decisiones mediante Python, SQL, Power BI y procesos de tratamiento de datos.",
      simulationTitle: "Ingeniero de datos especializado en simulación",
      simulationCopy:
        "Pasé a construir soluciones más técnicas y me convertí en el referente en simulación dentro del equipo de datos, trabajando sobre problemas donde no basta con medir: hay que modelar y anticipar comportamiento.",
      aiEngineerCopy:
        "Actualmente investigo y desarrollo arquitecturas con agentes de IA, asistentes, automatizaciones y despliegues tanto en Kubernetes como en entornos locales, buscando soluciones prácticas y bien planteadas."
    },
    skillsSection: {
      label: "Capacidades",
      title: "Trabajo bien cuando el problema exige pensar, modelar y construir.",
      intro:
        "No me limito a una sola capa del stack. Puedo moverme desde el análisis hasta la implantación técnica, manteniendo siempre el objetivo de negocio a la vista."
    },
    skills: {
      analyticsCopy:
        "Análisis exploratorio, SQL, visualización y cuadros de mando enfocados a decisiones operativas y seguimiento real.",
      modelingTitle: "Simulación y modelado",
      modelingCopy:
        "Diseño de modelos y enfoque cuantitativo para entender sistemas complejos y evaluar escenarios antes de ejecutarlos.",
      automationTitle: "Automatización y software",
      automationCopy:
        "Desarrollo de herramientas con Python y C# para eliminar trabajo manual, conectar piezas y llevar una solución hasta producción.",
      aiTitle: "IA aplicada y agentes",
      aiCopy:
        "Arquitecturas de IA, asistentes, bots y agentes conectados con datos, procesos y despliegues locales o sobre Kubernetes."
    },
    solutionsSection: {
      ariaLabel: "Tipos de soluciones",
      label: "Soluciones",
      title: "Estas son las clases de sistemas que más sentido tiene construir conmigo."
    },
    projects: {
      dataTag: "Datos",
      dataTitle: "Pipelines, reporting y automatización operativa",
      dataCopy:
        "Sistemas que unifican datos, reducen tareas repetitivas y convierten la información dispersa en procesos fiables y accionables.",
      dataStack: "Python · SQL · Power BI",
      modelingTag: "Modelado",
      modelingTitle: "Simulación para soporte a decisiones",
      modelingCopy:
        "Soluciones para analizar escenarios, probar hipótesis y entender el impacto de cambios complejos antes de llevarlos a operación.",
      modelingStack: "Modelado · Análisis · Ingeniería",
      aiTag: "IA aplicada",
      aiTitle: "Asistentes, bots y arquitecturas con agentes",
      aiCopy:
        "Diseños de soluciones de IA conectadas con conocimiento, herramientas y procesos reales, desplegables en local o en infraestructura cloud-native.",
      aiStack: "LLMs · Agentes · Kubernetes"
    },
    contactSection: {
      label: "Contacto",
      title: "Si el reto mezcla datos, software e IA, probablemente podamos entendernos.",
      copy:
        "Esta primera versión deja preparado el espacio para compartir canales reales de contacto y empezar a convertir la web en una base seria de marca personal.",
      emailLabel: "Email",
      linkedinValue: "Perfil profesional",
      githubValue: "Repos y pruebas"
    },
    footer: {
      backToTop: "Volver arriba"
    }
  },
  en: {
    meta: {
      title: "Javier Bordallo Platero | Data & AI Engineer",
      description:
        "Javier Bordallo Platero, Data & AI Engineer focused on data, simulation, automation, and applied AI architectures.",
      ogTitle: "Javier Bordallo Platero | Data & AI Engineer",
      ogDescription:
        "Professional profile focused on data, simulation, automation, and AI solutions applied to business."
    },
    header: {
      ariaLabel: "Main navigation"
    },
    brand: {
      ariaLabel: "Go to homepage"
    },
    nav: {
      profile: "Profile",
      experience: "Experience",
      skills: "Capabilities",
      solutions: "Solutions",
      contact: "Contact"
    },
    languageToggle: {
      ariaLabel: "Change language"
    },
    hero: {
      ariaLabel: "Main introduction",
      title: "Let us think about being freer.",
      copy: "I design solutions with data, simulation, and artificial intelligence applied to real problems.",
      actionsAriaLabel: "Main actions",
      primaryCta: "What I can build",
      secondaryCta: "Let us talk"
    },
    profilePanel: {
      ariaLabel: "Quick summary",
      label: "Current profile",
      originLabel: "Origin",
      originValue: "Villagarcía de la Torre, Badajoz",
      locationLabel: "Based in",
      locationValue: "Gijón, Asturias",
      foundationLabel: "Technical foundation",
      foundationValue: "Data, simulation, and development",
      stackLabel: "Core stack",
      stackValue: "Python, C#, SQL, Power BI, Kubernetes, and applied AI"
    },
    profileSection: {
      ariaLabel: "Professional profile",
      label: "Profile",
      title: "Scientific training, an engineering mindset, and a strong focus on solving real problems.",
      paragraph1:
        "I am finishing a degree in Physics, and that background shapes how I work: understanding systems, modeling the right problem, and relying on strong technical tools to reach a clear solution.",
      paragraph2:
        "My profile has evolved from data analysis to data engineering and now toward building AI-powered architectures and products. I am especially interested in making advanced solutions useful, sustainable, and economically sound for the people who need them."
    },
    experienceSection: {
      ariaLabel: "Professional journey",
      label: "Experience",
      title: "A natural progression from data toward more intelligent systems.",
      intro:
        "I bring 4 years of experience in the field, continuous learning in this domain, and constant attention to the latest developments, always focused on turning that evolution into real solutions."
    },
    timeline: {
      analystTitle: "Data Analyst",
      analystCopy:
        "I started by working on analysis, visualization, and decision-support processes using Python, SQL, Power BI, and data processing workflows.",
      simulationTitle: "Data Engineer specialized in simulation",
      simulationCopy:
        "I moved on to building more technical solutions and became the simulation reference within the data team, working on problems where measuring is not enough: you need to model and anticipate behavior.",
      aiEngineerCopy:
        "I currently research and develop AI agent architectures, assistants, automations, and deployments both on Kubernetes and in local environments, always aiming for practical and well-grounded solutions."
    },
    skillsSection: {
      label: "Capabilities",
      title: "I work best when a problem demands thinking, modeling, and building.",
      intro:
        "I am not limited to a single layer of the stack. I can move from analysis to technical implementation while always keeping the business goal in sight."
    },
    skills: {
      analyticsCopy:
        "Exploratory analysis, SQL, visualization, and dashboards focused on operational decisions and real-world tracking.",
      modelingTitle: "Simulation and modeling",
      modelingCopy:
        "Model design and quantitative thinking to understand complex systems and evaluate scenarios before executing them.",
      automationTitle: "Automation and software",
      automationCopy:
        "Building tools with Python and C# to remove manual work, connect systems, and take solutions all the way to production.",
      aiTitle: "Applied AI and agents",
      aiCopy:
        "AI architectures, assistants, bots, and agents connected to data, processes, and deployments either locally or on Kubernetes."
    },
    solutionsSection: {
      ariaLabel: "Types of solutions",
      label: "Solutions",
      title: "These are the kinds of systems that make the most sense to build with me."
    },
    projects: {
      dataTag: "Data",
      dataTitle: "Pipelines, reporting, and operational automation",
      dataCopy:
        "Systems that unify data, reduce repetitive work, and turn scattered information into reliable and actionable processes.",
      dataStack: "Python · SQL · Power BI",
      modelingTag: "Modeling",
      modelingTitle: "Simulation for decision support",
      modelingCopy:
        "Solutions to analyze scenarios, test hypotheses, and understand the impact of complex changes before taking them into operation.",
      modelingStack: "Modeling · Analysis · Engineering",
      aiTag: "Applied AI",
      aiTitle: "Assistants, bots, and agent-based architectures",
      aiCopy:
        "AI solution designs connected to knowledge, tools, and real processes, deployable locally or on cloud-native infrastructure.",
      aiStack: "LLMs · Agents · Kubernetes"
    },
    contactSection: {
      label: "Contact",
      title: "If the challenge blends data, software, and AI, we will probably understand each other.",
      copy:
        "This first version leaves the space ready to share real contact channels and start turning the site into a serious foundation for a personal brand.",
      emailLabel: "Email",
      linkedinValue: "Professional profile",
      githubValue: "Repos and experiments"
    },
    footer: {
      backToTop: "Back to top"
    }
  }
};

function getNestedValue(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function detectInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("preferred-language");

  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function updateToggleState(language) {
  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === language);
  });
}

function applyTranslations(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.meta.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.meta.description);
  }

  if (ogTitleMeta) {
    ogTitleMeta.setAttribute("content", dictionary.meta.ogTitle);
  }

  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute("content", dictionary.meta.ogDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedValue(dictionary, key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = getNestedValue(dictionary, key);

    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  updateToggleState(language);
}

function toggleLanguage() {
  const currentLanguage = document.documentElement.lang === "es" ? "es" : "en";
  const nextLanguage = currentLanguage === "es" ? "en" : "es";

  window.localStorage.setItem("preferred-language", nextLanguage);
  applyTranslations(nextLanguage);
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const initialLanguage = detectInitialLanguage();
applyTranslations(initialLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", toggleLanguage);
}
