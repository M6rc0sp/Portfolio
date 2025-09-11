import { ref, computed } from 'vue'

export type Language = 'pt' | 'en'

const currentLanguage = ref<Language>('pt')

const translations = {
    pt: {
        // Header
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
        resume: 'Currículo',
        fullStackDeveloper: 'Desenvolvedor Full Stack',

        // Home
        heroTitle: 'Marcos Paulo Barbosa',
        heroSubtitle: 'Desenvolvedor Full Stack',
        heroDescription: 'Transformo ideias em sistemas escaláveis e de alto desempenho com Vue, React, Node e Laravel — sempre adaptando a stack às necessidades do projeto.',
        mainStack: 'Stack Principal',
        viewProjects: 'Ver Projetos',
        talkToMe: 'Falar comigo',

        // About
        aboutTitle: 'Sobre Mim',
        aboutDescription: 'Desenvolvedor Full Stack com mais de 6 anos de experiência, criando soluções robustas e escaláveis para setores como governo, finanças e e-commerce. Especializado em segurança, performance e automação de processos.',
        technologies: 'Tecnologias',
        integrations: 'Integrações',
        aboutExperience: 'Experiência',
        yearsExperience: '6+ anos',
        governmentProjects: 'projetos governamentais',
        financialSystems: 'sistemas financeiros',
        softwareArchitecture: 'arquitetura de software',
        bestPractices: 'boas práticas de desenvolvimento',
        techStack1: 'Apps escaláveis com Vue.js, Node.js, Laravel e Docker',
        techStack2: 'Modelagem e otimização de bancos PostgreSQL, MongoDB, MySQL e deploy em GCP',
        techStack3: 'CI/CD, GitHub Actions, PM2 para automação e entrega contínua',
        principles: 'Princípios SOLID, Clean Code, DDD, TDD',
        patterns: 'Padrões: Repository, Factory, Strategy, Observer',
        ssrInertia: 'SSR via Inertia.js',
        automations: 'Automações com Python e Ruby',
        payments: 'Pagamentos: Asaas, Santander, Mercado Pago',
        apis: 'APIs: Nuvemshop, Twilio',
        complexSystems: 'desenvolvendo sistemas complexos com foco em escalabilidade e performance',
        specialistIn: 'Especialista em',
        experienceIn: 'Experiência em',
        and: 'e',
        withHighSecurityStandards: 'com altos padrões de segurança',

        // Projects
        projectsTitle: 'Projetos',
        financialSystem: 'Sistema Financeiro',
        projectEducation: 'Educação',
        government: 'Governo',
        eCommerce: 'E-commerce',
        publicSecurity: 'Segurança Pública',
        fundoAguia: 'Fundo Águia',
        fundoAguiaDesc: 'Plataforma financeira completa com carteira digital, transações seguras, notificações em tempo real e controle de acesso por perfis. Integração PIX via API Santander, garantindo confiabilidade e escalabilidade.',
        sistemaEducacional: 'Sistema Educacional',
        sistemaEducacionalDesc: 'Plataforma de ensino com controle por perfis (alunos, pais, professores), sistema de notas e subdomínios para múltiplas filiais.',
        portalMunicipal: 'Portal Municipal',
        portalMunicipalDesc: 'Plataforma governamental com autenticação JWT, publicação de conteúdo institucional e arquitetura multi-tenant com subdomínios por município.',
        appAssinaturas: 'App de Assinaturas',
        appAssinaturasDesc: 'Plataforma de assinaturas integrada à Nuvemshop e Asaas, com múltiplos métodos de pagamento (PIX, cartão, boleto) e interface híbrida Vue.js/React.',
        sisgp: 'SISGP - Sistema de Gestão Policial',
        sisgpDesc: 'Sistema crítico de gestão de recursos humanos policiais desenvolvido para a Controladoria-Geral do RN. Inclui redundância de banco de dados, protocolos avançados de segurança e arquitetura escalável com Laravel, AdminLTE, Docker e PostgreSQL.',
        brinkids: 'Brinkids',
        brinkidsDesc: 'Sistema para gerenciamento de loja de recreação infantil, com cálculo automático de tempo e preços, além de identificação de responsáveis por fotos.',
        recreioInfantil: 'Recreio Infantil',
        sistemaPalestras: 'Sistema de Palestras e Vídeo Aulas',
        sistemaPalestrasDesc: 'Plataforma de cadastro e gerenciamento de palestras e vídeo aulas para a UFRN. Desenvolvida de forma independente em todas as etapas de full-stack development.',
        sistemaAutomacao: 'Sistema de Automação Governamental',
        sistemaAutomacaoDesc: 'Automatizações em Python, sistema de chamados em Laravel e chatbot WhatsApp para integração de dados internos de instituição governamental.',

        // Contact
        contactTitle: 'Contato',
        gmail: 'Gmail',
        outlook: 'Outlook',
        sendEmail: 'Enviar email',

        // Footer
        allRightsReserved: 'Todos os direitos reservados',
        backToTop: 'Voltar ao topo'
    },
    en: {
        // Header
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        resume: 'Resume',
        fullStackDeveloper: 'Full Stack Developer',

        // Home
        heroTitle: 'Marcos Paulo Barbosa',
        heroSubtitle: 'Full Stack Developer',
        heroDescription: 'I transform ideas into scalable, high-performance systems with Vue, React, Node, and Laravel — always adapting the stack to project needs.',
        mainStack: 'Main Stack',
        viewProjects: 'View Projects',
        talkToMe: 'Talk to me',

        // About
        aboutTitle: 'About Me',
        aboutDescription: 'Full Stack Developer with 6+ years of experience building robust, scalable solutions across government, finance, and e-commerce sectors. Specialized in security, performance, and process automation.',
        technologies: 'Technologies',
        integrations: 'Integrations',
        aboutExperience: 'Experience',
        yearsExperience: '6+ years',
        governmentProjects: 'government projects',
        financialSystems: 'financial systems',
        softwareArchitecture: 'software architecture',
        bestPractices: 'best development practices',
        techStack1: 'Scalable apps with Vue.js, Node.js, Laravel and Docker',
        techStack2: 'Database design and optimization with PostgreSQL, MongoDB, MySQL, deployed on GCP',
        techStack3: 'CI/CD pipelines, GitHub Actions, PM2 for automation and continuous delivery',
        principles: 'SOLID Principles, Clean Code, DDD, TDD',
        patterns: 'Patterns: Repository, Factory, Strategy, Observer',
        ssrInertia: 'SSR via Inertia.js',
        automations: 'Automations with Python and Ruby',
        payments: 'Payments: Asaas, Santander, Mercado Pago',
        apis: 'APIs: Nuvemshop, Twilio',
        complexSystems: 'developing complex systems focused on scalability and performance',
        specialistIn: 'Specialist in',
        experienceIn: 'Experience in',
        and: 'and',
        withHighSecurityStandards: 'with high security standards',

        // Projects
        projectsTitle: 'Projects',
        financialSystem: 'Financial System',
        projectEducation: 'Education',
        government: 'Government',
        eCommerce: 'E-commerce',
        publicSecurity: 'Public Security',
        fundoAguia: 'Fundo Águia',
        fundoAguiaDesc: 'Comprehensive financial platform with secure digital wallet, real-time transactions and notifications, and profile-based access control. PIX integration via Santander API ensured reliability and scalability.',
        sistemaEducacional: 'Educational System',
        sistemaEducacionalDesc: 'Educational platform with role-based access (students, parents, teachers), grading system and subdomain support for multiple branches.',
        portalMunicipal: 'Municipal Portal',
        portalMunicipalDesc: 'Government platform with JWT authentication, institutional content publishing and multi-tenant architecture with subdomains per municipality.',
        appAssinaturas: 'Subscription App',
        appAssinaturasDesc: 'Subscription platform integrated with Nuvemshop and Asaas, supporting multiple payment methods (PIX, card, boleto) and hybrid Vue.js/React interface.',
        sisgp: 'SISGP - Police Management System',
        sisgpDesc: 'Critical HR management system for police forces, developed for the Comptroller General of RN. Features database redundancy, advanced security protocols and a scalable architecture with Laravel, AdminLTE, Docker and PostgreSQL.',
        brinkids: 'Brinkids',
        brinkidsDesc: 'Management system for a children’s recreation store, with automated time and price calculations and guardian identification through photos.',
        recreioInfantil: 'Children\'s Recreation',
        sistemaPalestras: 'Lectures and Video Lessons System',
        sistemaPalestrasDesc: 'Platform for lecture registration and video lesson uploads at UFRN, independently developed across all stages of full-stack development.',
        sistemaAutomacao: 'Government Automation System',
        sistemaAutomacaoDesc: 'Python-based automations, a ticketing system in Laravel, and a WhatsApp chatbot integrating internal data from a government institution.',

        // Contact
        contactTitle: 'Contact',
        gmail: 'Gmail',
        outlook: 'Outlook',
        sendEmail: 'Send email',

        // Resume
        resumeTitle: 'Resume',
        downloadResume: 'Download Resume',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        languages: 'Languages',

        // Footer
        allRightsReserved: 'All rights reserved',
        backToTop: 'Back to top'
    }
}

export const useI18n = () => {
    const t = (key: string) => {
        return translations[currentLanguage.value][key as keyof typeof translations.pt] || key
    }

    const setLanguage = (lang: Language) => {
        currentLanguage.value = lang
        localStorage.setItem('language', lang)
    }

    const getCurrentLanguage = () => currentLanguage.value

    // Load language from localStorage on mount
    const initLanguage = () => {
        const saved = localStorage.getItem('language') as Language
        if (saved && (saved === 'pt' || saved === 'en')) {
            currentLanguage.value = saved
        }
    }

    return {
        t,
        setLanguage,
        getCurrentLanguage,
        initLanguage,
        currentLanguage: computed(() => currentLanguage.value)
    }
}
