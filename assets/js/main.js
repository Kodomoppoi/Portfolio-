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
    proj1_desc: "Intelligent real estate discovery pipeline and semantic AI extraction with Streamlit dashboard.",
    proj2_desc: "Modern editorial portfolio with lightweight client-side bilingual internationalization.",
    proj3_desc: "Smart travel app simulation and optimized tourism itinerary planning.",
    tag_teamwork: "Teamwork",
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
    lang_beginner: "Beginner",
    back_to_portfolio: "Back to Portfolio",
    vps_category: "Fullstack / EPS-MDS (UnB)",
    vps_tagline: "Travel app simulation and smart tourism itinerary planning.",
    meta_role_label: "Role",
    meta_period_label: "Period",
    meta_type_label: "Type",
    meta_type_academic: "Academic (UnB / FGA)",
    meta_status_label: "Status",
    meta_status_finished: "Finished",
    vps_exp_title: "Project Experience",
    vps_exp_p1: "Vai pela Sombra was a university project developed at UnB. My technical role involved developing the header and specific backend functions integrated into the broader scope of the application.",
    vps_exp_p2: "The team had more than 10 members, weekly meetings, continuous documentation, and team rotation. Beyond mastering practical GitHub collaboration and workflows, my greatest takeaway was learning how to communicate, align ideas, and genuinely work together as a team.",
    vps_tech_title: "Technologies Used",
    vps_learn_title: "Learnings & Disciplines",
    vps_learn_item1: "Agile workflow in practice, with sprint planning, backlog management, and incremental MVP delivery.",
    vps_learn_item2: "Structured Pull Request reviews, merge conflict resolution, and continuous integration (CI/CD) pipelines.",
    vps_learn_item3: "Transparent communication and constant alignment across different development and documentation tracks.",
    vps_btn_repo: "Access Project Repository on GitHub",
    vps_prev_project: "Previous: Web Portfolio",
    res_category: "Python / AI Extraction & Streamlit Dashboard",
    res_tagline: "Intelligent property discovery pipeline, portal crawler and semantic AI extraction with Pydantic.",
    res_role_val: "Developer & AI Architect",
    res_type_val: "Open Source / AI & Data",
    res_status_val: "v1.0.0 (Finished)",
    res_about_title: "About the Project",
    res_about_p1: "Traditional web scrapers rely on brittle CSS/XPath selectors that constantly break with layout changes. This project solves that problem using a semantic pipeline powered by LLMs and structured Pydantic schemas, enabling standardized real estate extraction across any portal worldwide without building site-specific scrapers.",
    res_tech_title: "Technologies Used",
    res_arch_title: "Architecture & Key Takeaways",
    res_arch_item1: "Autonomous real estate portal discovery via DuckDuckGo with AI pre-curation and deep routing matching.",
    res_arch_item2: "DOM token condensation algorithm achieving ~75% noise reduction, optimizing inference costs and TPM limits.",
    res_arch_item3: "Structured extraction of property types, prices, suites, amenities, and financing highlights validated via Pydantic.",
    res_arch_item4: "Interactive analytical Streamlit dashboard with real-time scraping, deduplication, and CSV/JSON export.",
    res_btn_repo: "Access Repository on GitHub",
    res_btn_video: "Video Showcase (YouTube)",
    res_next_project: "Next: Web Portfolio"
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
    proj1_desc: "Pipeline inteligente de descoberta de imóveis e extração semântica com IA e dashboard Streamlit.",
    proj2_desc: "Portfólio editorial moderno com internacionalização bilíngue nativa client-side.",
    proj3_desc: "Simulação de aplicativo de viagens e planejamento inteligente de roteiros turísticos.",
    tag_teamwork: "Trabalho em Equipe",
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
    lang_beginner: "Iniciante",
    back_to_portfolio: "Voltar ao Portfolio",
    vps_category: "Fullstack / EPS-MDS (UnB)",
    vps_tagline: "Simulação de um aplicativo de viagens e planejamento inteligente de itinerários turísticos.",
    meta_role_label: "Função",
    meta_period_label: "Período",
    meta_type_label: "Tipo",
    meta_type_academic: "Acadêmico (UnB / FGA)",
    meta_status_label: "Status",
    meta_status_finished: "Pronto",
    vps_exp_title: "Experiência no Projeto",
    vps_exp_p1: "O Vai pela Sombra foi um projeto desenvolvido na faculdade (UnB). Minha atuação envolveu a criação do header e de funções pontuais para integrar ao escopo maior da aplicação.",
    vps_exp_p2: "A equipe contava com mais de 10 integrantes, reuniões semanais, documentação contínua e rotacionamento de times. Por isso, além de dominar o fluxo prático de versionamento e colaboração no GitHub, o maior ganho pessoal foi aprender a lidar, alinhar ideias e trabalhar de verdade em equipe.",
    vps_tech_title: "Tecnologias Utilizadas",
    vps_learn_title: "Aprendizado & Disciplinas",
    vps_learn_item1: "Fluxo de trabalho ágil na prática, com planejamento de sprints, backlog e entregas incrementais de MVP.",
    vps_learn_item2: "Revisões estruturadas de Pull Requests, resolução de conflitos de merge e pipelines de integração contínua.",
    vps_learn_item3: "Comunicação transparente e alinhamento constante entre diferentes frentes de desenvolvimento e documentação.",
    vps_btn_repo: "Acessar Repositorio do Projeto no GitHub",
    vps_prev_project: "Anterior: Web Portfolio",
    res_category: "Python / Extração com IA & Dashboard Streamlit",
    res_tagline: "Pipeline inteligente de descoberta de imóveis, rastreamento de portais e extração semântica com IA e Pydantic.",
    res_role_val: "Desenvolvedor & Arquiteto de IA",
    res_type_val: "Open Source / IA & Dados",
    res_status_val: "v1.0.0 (Pronto)",
    res_about_title: "Sobre o Projeto",
    res_about_p1: "Scrapers tradicionais dependem de seletores CSS/XPath frágeis que quebram facilmente com mudanças de layout. Este projeto resolve esse problema utilizando um pipeline semântico com modelos de linguagem (LLMs) e validação estruturada com Pydantic, permitindo extrair dados imobiliários padronizados de qualquer portal do mundo sem necessidade de criar scrapers específicos para cada site.",
    res_tech_title: "Tecnologias Utilizadas",
    res_arch_title: "Arquitetura & Aprendizado",
    res_arch_item1: "Descoberta autônoma de portais imobiliários via DuckDuckGo com pré-curadoria e filtragem por IA.",
    res_arch_item2: "Algoritmo de condensação de tokens do DOM com redução de cerca de 75% de ruído, otimizando custos e limites de TPM de IA.",
    res_arch_item3: "Extração estruturada de tipologias, valores, suítes, comodidades e condições de financiamento com validação Pydantic.",
    res_arch_item4: "Interface analítica interativa com Streamlit para exploração em tempo real, deduplicação de anúncios e exportação CSV/JSON.",
    res_btn_repo: "Acessar Repositorio no GitHub",
    res_btn_video: "Vídeo Demonstrativo (YouTube)",
    res_next_project: "Próximo: Web Portfolio"
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
