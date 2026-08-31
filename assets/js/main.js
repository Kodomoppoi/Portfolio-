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
    res_story_title: "Project Origin",
    res_story_p1: "Following my father's retirement, my family spent countless hours searching for houses across multiple real estate portals, which created a tense atmosphere at home. Faced with this dilemma, I decided to turn the adversity into a practical solution: building a web scraping tool.",
    res_story_p2: "In the project, the actual scraping is handled by dedicated tools to extract raw data, while AI plays a dynamic role in structuring and formatting the information. The biggest hurdle proved to be integrating the AI, especially when relying on free-tier API keys with the constant risk of excessive token consumption. In this new wave, anyone building tools knows how easy it is to exhaust an entire quota in a single request or break the pipeline due to strict rate limits (TPM/RPM).",
    res_about_title: "About the Project",
    res_about_p1: "Traditional web scrapers rely on brittle CSS/XPath selectors that constantly break with layout changes. This project solves that problem using a semantic pipeline powered by LLMs and structured Pydantic schemas, enabling standardized real estate extraction across any portal worldwide without building site-specific scrapers.",
    res_tech_title: "Technologies Used",
    res_challenges_title: "Engineering & AI Challenges",
    res_ch1_title: "Rate Limits & Micro-Batches:",
    res_ch1_desc: " Lower-cost and free tier providers enforce strict request and TPM limits (e.g. 6,000 TPM). Required architecting a micro-batching execution pipeline with smart rate-limiting to prevent quota exhaustion.",
    res_ch2_title: "DOM Condensation & Token Economy:",
    res_ch2_desc: " Raw portal HTML consumes tens of thousands of unnecessary tokens. The scraper had to be adapted to pre-process and strip DOM noise, cutting ~75% of text payload before dispatching to the LLM.",
    res_ch3_title: "Model Quirks (e.g. Qwen <think> Reasoning Blocks):",
    res_ch3_desc: " Certain open-weights reasoning models inject unsolicited thinking tokens (<think>) that pollute the response and, depending on how output is parsed, break execution. Implemented strict output sanitizers to preserve clean deserialization.",
    res_ch4_title: "Smaller Models & Strict Prompt Anchoring:",
    res_ch4_desc: " Cheaper and smaller models tend to hallucinate or drop fields without severe constraints. Required building strict prompt anchoring techniques and schema enforcement via Pydantic to maintain structured consistency.",
    res_learn_title: "Key Learnings & Disciplines",
    res_badge_scraping: "Web Scraping",
    res_learn_item1: "Building resilient web scraping pipelines with aggressive DOM pre-processing and dynamic JavaScript handling via Playwright.",
    res_learn_item2: "Practical mastery of Token Economy: context budgeting, minimizing inference cost, and avoiding rate-limit bottlenecks.",
    res_btn_repo: "Access Repository on GitHub",
    res_btn_video: "Video Showcase (YouTube)",
    res_next_project: "Next: Web Portfolio",
    wp_category: "Frontend / UI Design",
    wp_tagline: "Responsive personal portfolio with modern editorial design and native client-side bilingual internationalization.",
    wp_role_val: "Frontend & Design",
    wp_type_val: "Personal Website",
    wp_status_val: "Finished",
    wp_tech_title: "Technologies Used",
    wp_learn_title: "Learnings & Decisions",
    wp_learn_item1: "Building a cohesive design system with CSS custom properties for editorial typography, neutral palettes, and harmonic spacing.",
    wp_learn_item2: "Implementing an instant language toggle (EN/PT) with declarative i18n dictionaries and localStorage state persistence.",
    wp_learn_item3: "Optimizing performance, semantic HTML5 structure, and responsive multi-device layouts without bulky frameworks.",
    wp_btn_repo: "Access Portfolio Repository on GitHub",
    wp_prev_project: "Previous: Real Estate Scraper",
    wp_next_project: "Next: Vai pela Sombra"
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
    res_story_title: "Origem do Projeto",
    res_story_p1: "Após a aposentadoria do meu pai, minha família passou a procurar casas em diversos sites por horas a fio, deixando o clima em casa um pouco tenso. Diante desse dilema, decidi transformar a adversidade em uma solução prática: criar uma ferramenta de scraping.",
    res_story_p2: "No projeto, o scraping real é feito com ferramentas dedicadas para gerar os dados brutos, enquanto a IA assume um papel mais dinâmico para estruturar e formatar as informações. O maior desafio acabou sendo justamente a integração da IA, especialmente ao tentar encaixar chaves gratuitas e a preocupação constante com o alto consumo de tokens. Nessa nova era, quem desenvolve sabe como é fácil estourar a quota em uma única requisição ou ter o fluxo travado por limites rígidos de taxa de envio (TPM/RPM).",
    res_about_title: "Sobre o Projeto",
    res_about_p1: "Scrapers tradicionais dependem de seletores CSS/XPath frágeis que quebram facilmente com mudanças de layout. Este projeto resolve esse problema utilizando um pipeline semântico com modelos de linguagem (LLMs) e validação estruturada com Pydantic, permitindo extrair dados imobiliários padronizados de qualquer portal do mundo sem necessidade de criar scrapers específicos para cada site.",
    res_tech_title: "Tecnologias Utilizadas",
    res_challenges_title: "Desafios de Engenharia & IA",
    res_ch1_title: "Limites de Taxa e Micro-Batches:",
    res_ch1_desc: " Modelos em camadas gratuitas ou de menor custo impõem limites severos de requisição e TPM (ex: 6.000 TPM). Foi necessário arquitetar processamento em micro-batches com throttling inteligente para não estourar quotas.",
    res_ch2_title: "Condensação de Texto & Economia de Tokens:",
    res_ch2_desc: " O HTML bruto de portais consome dezenas de milhares de tokens desnecessários. O scraper precisou ser modificado para realizar limpeza prévia do DOM, reduzindo cerca de 75% do ruído antes de enviar o payload para a IA.",
    res_ch3_title: "Vícios de Modelos (ex: Módulo <think> do Qwen):",
    res_ch3_desc: " Certos modelos de raciocínio inserem blocos não solicitados de reflexão (<think>) que poluem a resposta e dependendo de como o código recebe o output da IA, acaba por quebrar o funcionamento. Foi necessário aplicar tratamentos de sanitização para garantir JSONs puros prontos para desserialização.",
    res_ch4_title: "Modelos Menores e Necessidade de Ancoragem Rígida:",
    res_ch4_desc: " Modelos mais compactos e baratos tendem a alucinar ou ignorar campos sem constraints severas. Foi necessário aplicar técnicas mais rigorosas de ancoragem de prompt e validação com Pydantic para manter a integridade dos dados.",
    res_learn_title: "O que Aprendi",
    res_badge_scraping: "Web Scraping",
    res_learn_item1: "Construção de rotinas de extração robustas focadas em pré-processamento eficiente e tratamento de sites dinâmicos com Playwright.",
    res_learn_item2: "Domínio prático de Token Economy: cálculo de orçamentos de contexto, redução de custos de inferência e gestão de rate-limits.",
    res_btn_repo: "Acessar Repositorio no GitHub",
    res_btn_video: "Vídeo Demonstrativo (YouTube)",
    res_next_project: "Próximo: Web Portfolio",
    wp_category: "Frontend / UI Design",
    wp_tagline: "Portfólio pessoal responsivo com design editorial moderno e internacionalização bilíngue nativa.",
    wp_role_val: "Frontend & Design",
    wp_type_val: "Website Pessoal",
    wp_status_val: "Pronto",
    wp_tech_title: "Tecnologias Utilizadas",
    wp_learn_title: "Aprendizado & Decisões",
    wp_learn_item1: "Construção de design system coeso com variáveis CSS para tipografia editorial, tons neutros e espaçamentos harmônicos.",
    wp_learn_item2: "Implementação de alternador de idioma instantâneo (EN/PT) com dicionário i18n declarativo e persistência em localStorage.",
    wp_learn_item3: "Otimização de performance, semântica HTML e responsividade multi-dispositivo sem dependência de frameworks pesados.",
    wp_btn_repo: "Acessar Repositório do Portfólio no GitHub",
    wp_prev_project: "Anterior: Real Estate Scraper",
    wp_next_project: "Próximo: Vai pela Sombra"
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
