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
        heroDescription: 'Transformo ideias em sistemas escaláveis com Vue, React, Node e Laravel — adaptando a stack conforme o projeto.',
        mainStack: 'Stack Principal',
        viewProjects: 'Ver Projetos',
        talkToMe: 'Falar comigo',

        // About
        aboutTitle: 'Sobre Mim',
        aboutDescription: 'Desenvolvedor Full Stack com mais de 6 anos de experiência, especializado na criação de soluções robustas e escaláveis, com foco em segurança, desempenho e automação de processos.',
        technologies: 'Tecnologias',
        integrations: 'Integrações',
        aboutExperience: 'Experiência',
        yearsExperience: '6+ anos',
        governmentProjects: 'projetos governamentais',
        financialSystems: 'sistemas financeiros',
        softwareArchitecture: 'arquitetura de software',
        bestPractices: 'boas práticas de desenvolvimento',
        techStack1: 'Vue.js, Node.js, Laravel, Docker',
        techStack2: 'PostgreSQL, MongoDB, MySQL, GCP',
        techStack3: 'CI/CD, GitHub Actions, PM2',
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
        fundoAguiaDesc: 'Sistema financeiro completo com carteira digital, transações, notificações em tempo real, controle de acesso por perfis e integração PIX via API Santander.',
        sistemaEducacional: 'Sistema Educacional',
        sistemaEducacionalDesc: 'Plataforma educacional com controle por perfis (alunos, pais, professores), sistema de notas e estrutura de subdomínios por filial.',
        portalMunicipal: 'Portal Municipal',
        portalMunicipalDesc: 'Sistema governamental com autenticação JWT, publicação de conteúdo institucional e arquitetura multi-tenant com subdomínios por município.',
        appAssinaturas: 'App de Assinaturas',
        appAssinaturasDesc: 'Plataforma de assinaturas com integração Nuvemshop e Asaas, múltiplos métodos de pagamento (PIX, cartão, boleto) e interface híbrida Vue.js/React.',
        sisgp: 'SISGP - Sistema de Gestão Policial',
        sisgpDesc: 'Sistema crítico de gestão de recursos humanos policiais desenvolvido para a Controladoria-Geral do RN. Implementa redundância de banco de dados e protocolos avançados de segurança para dados sensíveis. Desenvolvido com Laravel, AdminLTE, Docker e PostgreSQL.',
        brinkids: 'Brinkids',
        brinkidsDesc: 'Sistema de gerenciamento de loja de recreação infantil com cálculos de tempo, preço e identificação dos responsáveis por meio de fotos.',
        recreioInfantil: 'Recreio Infantil',
        sistemaPalestras: 'Sistema de Palestras e Vídeo Aulas',
        sistemaPalestrasDesc: 'Sistema de cadastro para palestras e upload de vídeo aulas desenvolvido para o professor orientador na UFRN, atuando de forma independente em todas as etapas do desenvolvimento full-stack.',
        sistemaAutomacao: 'Sistema de Automação Governamental',
        sistemaAutomacaoDesc: 'Automatizações com Python, sistema de chamados em Laravel e chatbot para WhatsApp integrando dados internos de instituição governamental.',

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
        heroDescription: 'I transform ideas into scalable systems with Vue, React, Node and Laravel — adapting the stack according to the project.',
        mainStack: 'Main Stack',
        viewProjects: 'View Projects',
        talkToMe: 'Talk to me',

        // About
        aboutTitle: 'About Me',
        aboutDescription: 'Full Stack Developer with more than 6 years of experience, specialized in creating robust and scalable solutions, with focus on security, performance and process automation.',
        technologies: 'Technologies',
        integrations: 'Integrations',
        aboutExperience: 'Experience',
        yearsExperience: '6+ years',
        governmentProjects: 'government projects',
        financialSystems: 'financial systems',
        softwareArchitecture: 'software architecture',
        bestPractices: 'best development practices',
        techStack1: 'Vue.js, Node.js, Laravel, Docker',
        techStack2: 'PostgreSQL, MongoDB, MySQL, GCP',
        techStack3: 'CI/CD, GitHub Actions, PM2',
        principles: 'SOLID Principles, Clean Code, DDD, TDD',
        patterns: 'Patterns: Repository, Factory, Strategy, Observer',
        ssrInertia: 'SSR via Inertia.js',
        automations: 'Automations with Python and Ruby',
        payments: 'Payments: Asaas, Santander, Mercado Pago',
        apis: 'APIs: Nuvemshop, Twilio',
        complexSystems: 'developing complex systems with focus on scalability and performance',
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
        fundoAguiaDesc: 'Complete financial system with digital wallet, transactions, real-time notifications, profile-based access control and PIX integration via Santander API.',
        sistemaEducacional: 'Educational System',
        sistemaEducacionalDesc: 'Educational platform with profile control (students, parents, teachers), grading system and subdomain structure per branch.',
        portalMunicipal: 'Municipal Portal',
        portalMunicipalDesc: 'Government system with JWT authentication, institutional content publishing and multi-tenant architecture with subdomains per municipality.',
        appAssinaturas: 'Subscription App',
        appAssinaturasDesc: 'Subscription platform with Nuvemshop and Asaas integration, multiple payment methods (PIX, card, boleto) and hybrid Vue.js/React interface.',
        sisgp: 'SISGP - Police Management System',
        sisgpDesc: 'Critical police human resources management system developed for the General Comptroller of RN. Implements database redundancy and advanced security protocols for sensitive data. Developed with Laravel, AdminLTE, Docker and PostgreSQL.',
        brinkids: 'Brinkids',
        brinkidsDesc: 'Child recreation store management system with time, price calculations and identification of guardians through photos.',
        recreioInfantil: 'Children\'s Recreation',
        sistemaPalestras: 'Lectures and Video Lessons System',
        sistemaPalestrasDesc: 'Registration system for lectures and upload of video lessons developed for the advisor teacher at UFRN, acting independently in all stages of full-stack development.',
        sistemaAutomacao: 'Government Automation System',
        sistemaAutomacaoDesc: 'Automations with Python, ticketing system in Laravel and WhatsApp chatbot integrating internal data from government institution.',

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
