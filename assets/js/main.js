/* ==========================================================================
   MAIN JS - Janeiro Portfolio Interactivity & Bilingual Language Switcher
   ========================================================================== */

// Dicionario de Traducoes (Ingles e Portugues)
const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    btn_resume: "Resume PDF",
    hero_title: "Developing with foresight and wisdom.",
    hero_location: "Brasília, DF",
    hero_education: "Undergrad Student @ UnB",
    hero_bio: "I'm <strong>Juan</strong>, I focus on <strong>making applications and solutions</strong>.",
    skill_design: "Design",
    projects_title: "Featured Projects",
    projects_subtitle: "Click on any project to read the full case study",
    proj1_desc: "Interactive real-time metrics platform with advanced data visualization.",
    proj2_desc: "Full e-commerce platform with seamless checkout, payment integration and inventory management.",
    proj3_desc: "Financial intelligence and portfolio forecasting engine with statistical predictive modeling.",
    proj4_desc: "Distributed authentication microservice, rate limiting and smart routing engine.",
    proj5_desc: "AWS Cloud infrastructure automation with managed Kubernetes (EKS) and CI/CD pipelines.",
    proj6_desc: "Cross-platform mobile application with offline-first local database and push notifications.",
    exp_title1: "Undergraduate Student",
    exp_company1: "University of Brasília (UnB) - 2022 - Present",
    exp_desc1: "Pursuing higher education, developing academic projects, studying algorithms, software architecture and hands-on application engineering.",
    languages_title: "Languages",
    lang_en: "English -",
    lang_advanced: "Advanced",
    lang_pt: "Portuguese -",
    lang_fluent: "Fluent",
    lang_es: "Spanish -",
    lang_intermediate: "Intermediate",
    lang_zh: "Chinese -",
    lang_beginner: "Beginner"
  },
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    btn_resume: "Currículo PDF",
    hero_title: "Desenvolvendo com visão e sabedoria.",
    hero_location: "Brasília, DF",
    hero_education: "Estudante de Graduação na UnB",
    hero_bio: "Sou o <strong>Juan</strong>, focado em <strong>desenvolver aplicações e soluções</strong>.",
    skill_design: "Design",
    projects_title: "Projetos em Destaque",
    projects_subtitle: "Clique em qualquer projeto para abrir a explicação completa",
    proj1_desc: "Plataforma interativa de métricas em tempo real com visualização avançada de dados.",
    proj2_desc: "Loja virtual completa com checkout integrado, gateway de pagamento e gestão de estoque.",
    proj3_desc: "Software de inteligência financeira e previsão de investimentos com modelos preditivos.",
    proj4_desc: "Microsserviço de autenticação distribuída, rate limiting e roteamento inteligente.",
    proj5_desc: "Automação de infraestrutura em nuvem na AWS com Kubernetes gerenciado (EKS) e CI/CD.",
    proj6_desc: "Aplicativo mobile multiplataforma com sincronização offline-first e notificações push.",
    exp_title1: "Estudante de Graduação",
    exp_company1: "Universidade de Brasília (UnB) - 2022 - Presente",
    exp_desc1: "Cursando ensino superior, desenvolvendo projetos acadêmicos, estudando algoritmos, arquitetura de software e engenharia de aplicações práticas.",
    languages_title: "Idiomas",
    lang_en: "Inglês -",
    lang_advanced: "Avançado",
    lang_pt: "Português -",
    lang_fluent: "Fluente",
    lang_es: "Espanhol -",
    lang_intermediate: "Intermediário",
    lang_zh: "Chinês -",
    lang_beginner: "Iniciante"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Gerenciamento do Idioma (Default: English)
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langBadgeEn = document.getElementById('lang-badge-en');
  const langBadgePt = document.getElementById('lang-badge-pt');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Atualizar indicadores visuais no botao
    if (langBadgeEn && langBadgePt) {
      if (lang === 'en') {
        langBadgeEn.classList.add('active');
        langBadgePt.classList.remove('active');
      } else {
        langBadgePt.classList.add('active');
        langBadgeEn.classList.remove('active');
      }
    }

    // Traduzir todos os elementos marcados com data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  // Aplicar idioma inicial salvo
  setLanguage(currentLang);

  // Event listener no botao de alternancia
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'pt' : 'en';
      setLanguage(nextLang);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.classList.toggle('nav-menu-open');
    });
  }

  // 3. Smooth Scroll for Anchor Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (window.innerWidth <= 600 && navMenu) {
            navMenu.style.display = 'none';
          }
        }
      }
    });
  });

  // 4. Inicializacao do sistema
  console.log('Portfolio initialized successfully. Language: ' + currentLang);
});
