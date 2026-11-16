import fatecLogo from '../assets/logos/fatec-white.png';
import programmersLogo from '../assets/logos/programmers.png';
import spsLogo from '../assets/logos/sps.png';

export type Lang = 'pt' | 'en';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  companyUrl?: string;
  logo?: string;
  logoStyle?: 'light' | 'dark' | 'raw';
  context?: LocalizedText;
  type: LocalizedText;
  period: LocalizedText;
  duration: LocalizedText;
  location: string;
  modality: LocalizedText;
  current?: boolean;
  description: LocalizedText;
  highlights: {
    pt: string[];
    en: string[];
  };
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  logo?: string;
  degree: LocalizedText;
  period: LocalizedText;
  status: LocalizedText;
  skills?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'data' | 'cloud' | 'ai';
  badgeLabel: string;
}

export type ProjectCategory = 'all' | 'data' | 'ai' | 'fullstack';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: LocalizedText;
  category: Exclude<ProjectCategory, 'all'>;
  featured?: boolean;
  role?: LocalizedText;
  description: LocalizedText;
  quote?: LocalizedText;
  architectureNote?: LocalizedText;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface TechGroup {
  id: string;
  title: LocalizedText;
  items: {
    name: string;
    detail: LocalizedText;
  }[];
}

export const profile = {
  name: 'Miguel Morandini',
  handle: 'miguelmorandini',
  avatarUrl: 'https://github.com/miguelmorandini.png',
  location: 'Matão, SP — Brasil',
  company: 'Programmers — AI, Data & Software',
  companyLogo: programmersLogo,
  institutionLogo: fatecLogo,
  companyUrl: 'https://www.programmers.com.br',
  githubUrl: 'https://github.com/miguelmorandini',
  linkedinUrl: 'https://www.linkedin.com/in/miguelmorandini',
  email: 'miguel_mmorandini@outlook.com',
  bannerTags: ['DATABRICKS', 'PYSPARK', 'DELTA LAKE', 'AWS', 'GEN AI'],
  headline: {
    pt: 'Data Engineer Intern & Desenvolvedor de Software',
    en: 'Data Engineer Intern & Software Developer',
  },
  tagline: {
    pt: 'Transformando dados brutos em arquiteturas escaláveis.',
    en: 'Transforming raw data into scalable architectures.',
  },
  intro: {
    pt: 'Graduando em Desenvolvimento de Software Multiplataforma pela Fatec Matão, com atuação prática em Engenharia de Dados, arquiteturas Lakehouse e soluções aplicadas de Inteligência Artificial.',
    en: 'Undergraduate student in Multiplatform Software Development at Fatec Matão, focused on Data Engineering, Lakehouse architectures, and applied Artificial Intelligence solutions.',
  },
  aboutParagraphs: {
    pt: [
      'Atuo na modelagem e construção de pipelines de dados robustos (ETL/ELT), aplicando boas práticas da Arquitetura Medalhão (Bronze, Silver e Gold) com Databricks, Delta Lake e governança de dados via Unity Catalog.',
      'Também conecto a engenharia de dados ao ecossistema de IA Generativa e desenvolvimento Full-Stack — criando desde aplicações analíticas distribuídas com PySpark e dbt até assistentes inteligentes com RAG e LLMs, além de sistemas web com impacto real na comunidade como o Cidade Integra.',
    ],
    en: [
      'I work on modeling and building robust data pipelines (ETL/ELT), applying best practices of the Medallion Architecture (Bronze, Silver, and Gold) with Databricks, Delta Lake, and governance via Unity Catalog.',
      'I also bridge data engineering with the GenAI ecosystem and Full-Stack software development — building everything from distributed analytical applications with PySpark and dbt to intelligent assistants powered by RAG and LLMs, as well as civic web platforms like Cidade Integra.',
    ],
  },
};

export const pillars = [
  {
    id: 'data',
    tag: '01 / LAKEHOUSE',
    title: {
      pt: 'Engenharia de Dados & Governança',
      en: 'Data Engineering & Governance',
    },
    description: {
      pt: 'Pipelines ETL/ELT escaláveis seguindo a Arquitetura Medalhão (Bronze → Silver → Gold) com Databricks, PySpark, Delta Lake, dbt Core e Unity Catalog.',
      en: 'Scalable ETL/ELT pipelines following the Medallion Architecture (Bronze → Silver → Gold) with Databricks, PySpark, Delta Lake, dbt Core, and Unity Catalog.',
    },
  },
  {
    id: 'ai',
    tag: '02 / GEN AI & VISION',
    title: {
      pt: 'IA Aplicada & Visão Computacional',
      en: 'Applied AI & Computer Vision',
    },
    description: {
      pt: 'Assistentes baseados em documentos com RAG, LangChain, VectorDB e Google Gemini API, além de aplicações interativas em tempo real com OpenCV e MediaPipe.',
      en: 'Document Q&A assistants built with RAG, LangChain, VectorDB, and Google Gemini API, alongside real-time interactive applications using OpenCV and MediaPipe.',
    },
  },
  {
    id: 'software',
    tag: '03 / SOFTWARE & SQL',
    title: {
      pt: 'Desenvolvimento & Bancos Relacionais',
      en: 'Software Engineering & Databases',
    },
    description: {
      pt: 'Experiência corporativa com C# / .NET, desenvolvimento web Full-Stack (React, JavaScript) e sólida base em modelagem relacional e SQL (SQL Server e Oracle).',
      en: 'Industry experience with C# / .NET, Full-Stack web development (React, JavaScript), and a solid foundation in relational modeling and SQL (SQL Server and Oracle).',
    },
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'programmers',
    role: {
      pt: 'Data Engineer Intern',
      en: 'Data Engineer Intern',
    },
    company: 'Programmers',
    logo: programmersLogo,
    logoStyle: 'light',
    companyUrl: 'https://www.programmers.com.br',
    context: {
      pt: 'AI, Data & Software',
      en: 'AI, Data & Software',
    },
    type: {
      pt: 'Estágio',
      en: 'Internship',
    },
    period: {
      pt: 'Jun 2026 – Atual',
      en: 'Jun 2026 – Present',
    },
    duration: {
      pt: '6 meses',
      en: '6 mos',
    },
    location: 'Matão, SP — Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    current: true,
    description: {
      pt: 'Atuação na área de Dados & IA desenvolvendo pipelines de ingestão e transformação, arquiteturas Lakehouse e soluções analíticas escaláveis.',
      en: 'Working in the Data & AI practice building ingestion and transformation pipelines, Lakehouse architectures, and scalable analytical solutions.',
    },
    highlights: {
      pt: [
        'Construção de pipelines ETL/ELT com Databricks, PySpark e Delta Lake.',
        'Organização de camadas de dados (Bronze, Silver, Gold) e governança com Unity Catalog.',
      ],
      en: [
        'Building ETL/ELT pipelines with Databricks, PySpark, and Delta Lake.',
        'Structuring Medallion data layers (Bronze, Silver, Gold) with Unity Catalog governance.',
      ],
    },
    skills: ['Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Python', 'SQL'],
  },
  {
    id: 'sps-agrivitta',
    role: {
      pt: 'Estagiário de Desenvolvimento de Software',
      en: 'Software Development Intern',
    },
    company: 'SPS Soluções em Tecnologia da Informação',
    logo: spsLogo,
    logoStyle: 'raw',
    context: {
      pt: 'Alocado na AgriVitta',
      en: 'Allocated at AgriVitta',
    },
    type: {
      pt: 'Estágio',
      en: 'Internship',
    },
    period: {
      pt: 'Mar 2025 – Mai 2026',
      en: 'Mar 2025 – May 2026',
    },
    duration: {
      pt: '1 ano e 3 meses',
      en: '1 yr 3 mos',
    },
    location: 'Matão, SP — Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    description: {
      pt: 'Contratado pela SPS Soluções em Tecnologia da Informação e alocado na AgriVitta, atuando no desenvolvimento em C#, criação de aplicação para relatório DRE (Demonstração do Resultado do Exercício) e melhorias em sistemas internos legados.',
      en: 'Hired by SPS Soluções em Tecnologia da Informação and allocated at AgriVitta, working on C# development, building an income statement (DRE) reporting application, and enhancing legacy internal systems.',
    },
    highlights: {
      pt: [
        'Desenvolvimento em C# utilizando Visual Studio e implementação de telas e layouts em HTML.',
        'Criação da aplicação de relatório DRE e evolução de sistema legado da área de orçamento.',
        'Criação e manutenção de consultas SQL em Oracle Developer para relatórios internos e suporte a áreas usuárias.',
        'Integração de funcionalidades ao ambiente SharePoint e correção de bugs em aplicações internas.',
      ],
      en: [
        'Developed C# applications in Visual Studio and implemented web interfaces and layouts in HTML.',
        'Built an internal DRE (Income Statement) reporting tool and enhanced a legacy budgeting system.',
        'Wrote and maintained SQL queries in Oracle Developer for internal reporting and business support.',
        'Integrated features with SharePoint and resolved bugs across internal applications.',
      ],
    },
    skills: ['C#', 'Visual Studio', 'Oracle Developer', 'SQL', 'HTML', 'SharePoint'],
  },
  {
    id: 'fatec-monitor',
    role: {
      pt: 'Monitor de Banco de Dados Relacional',
      en: 'Relational Database Teaching Assistant',
    },
    company: 'Fatec Matão',
    logo: fatecLogo,
    logoStyle: 'dark',
    type: {
      pt: 'Monitoria / Estágio',
      en: 'Internship',
    },
    period: {
      pt: 'Fev 2025 – Jul 2025',
      en: 'Feb 2025 – Jul 2025',
    },
    duration: {
      pt: '6 meses',
      en: '6 mos',
    },
    location: 'Matão, SP — Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    description: {
      pt: 'Suporte presencial e remoto a alunos na compreensão e aplicação de bancos de dados relacionais, promovendo aprendizado ativo, raciocínio lógico e melhoria no desempenho acadêmico.',
      en: 'Provided in-person and remote support to students in relational databases, fostering active learning, logical reasoning, and stronger academic performance.',
    },
    highlights: {
      pt: [
        'Apoio em modelagem de dados, normalização e consultas SQL no Microsoft SQL Server.',
        'Orientação na execução de exercícios práticos, trabalhos acadêmicos e mediação de dúvidas com base nos materiais da disciplina.',
        'Atendimento individual e coletivo adaptado às necessidades dos estudantes.',
      ],
      en: [
        'Guided students through data modeling, normalization, and SQL queries in Microsoft SQL Server.',
        'Supported practical exercises, academic projects, and active Q&A using course materials.',
        'Delivered tailored individual and group tutoring sessions.',
      ],
    },
    skills: ['Microsoft SQL Server', 'Modelagem de Dados', 'Normalização', 'SQL'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'fatec',
    institution: 'Fatec Matão — Faculdade de Tecnologia de São Paulo',
    logo: fatecLogo,
    degree: {
      pt: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
      en: 'Associate Degree in Multiplatform Software Development',
    },
    period: {
      pt: 'Jan 2024 – Dez 2026',
      en: 'Jan 2024 – Dec 2026',
    },
    status: {
      pt: 'Em andamento (Previsão Dez/2026)',
      en: 'In progress (Expected Dec 2026)',
    },
    skills: ['Microsoft SQL Server', 'HTML5', 'Engenharia de Software', 'Desenvolvimento Web'],
  },
  {
    id: 'ifsp',
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo — IFSP',
    degree: {
      pt: 'Curso Técnico em Alimentos Integrado ao Ensino Médio',
      en: 'Technical Course in Food Science Integrated with High School',
    },
    period: {
      pt: 'Jan 2021 – Dez 2023',
      en: 'Jan 2021 – Dec 2023',
    },
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'databricks-fundamentals',
    title: 'Academy Accreditation - Databricks Fundamentals',
    issuer: 'Databricks Academy',
    category: 'data',
    badgeLabel: 'Databricks',
  },
  {
    id: 'aws-cloud-developing',
    title: 'AWS Academy: Cloud Developing',
    issuer: 'AWS Academy Graduate',
    category: 'cloud',
    badgeLabel: 'AWS Cloud',
  },
  {
    id: 'aws-ml-foundations',
    title: 'AWS Academy: Machine Learning Foundations',
    issuer: 'AWS Academy Graduate',
    category: 'ai',
    badgeLabel: 'AWS ML',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'cidade-integra',
    title: 'Cidade Integra',
    subtitle: {
      pt: 'Plataforma Cívica de Zeladoria Urbana • Fatec Matão',
      en: 'Civic Urban Reporting Platform • Fatec Matão',
    },
    category: 'fullstack',
    featured: true,
    role: {
      pt: 'Desenvolvedor FullStack',
      en: 'Full-Stack Developer',
    },
    description: {
      pt: 'Projeto desenvolvido por estudantes de Desenvolvimento de Software Multiplataforma na Fatec Matão com o objetivo de conectar cidadãos e autoridades para a solução de problemas urbanos — facilitando o registro, acompanhamento e resolução de denúncias ligadas a infraestrutura, meio ambiente e serviços públicos.',
      en: 'Civic platform developed by Multiplatform Software Development students at Fatec Matão to connect citizens and local authorities — streamlining the reporting, tracking, and resolution of urban issues across infrastructure, environment, and public services.',
    },
    quote: {
      pt: '“Ver as ideias ganhando forma com propósito e foco em impacto real é muito motivador.”',
      en: '“Seeing ideas take shape with purpose and a focus on real-world impact is deeply motivating.”',
    },
    architectureNote: {
      pt: 'Impacto Social • Desenvolvimento Full-Stack em Equipe',
      en: 'Social Impact • Collaborative Full-Stack Engineering',
    },
    technologies: ['React', 'JavaScript', 'HTML5', 'SQL', 'Figma', 'Git'],
    githubUrl: 'https://github.com/miguelmorandini',
  },
  {
    id: 'sales-lakehouse',
    title: 'Sales Lakehouse with Databricks',
    subtitle: {
      pt: 'Arquitetura Medalhão Ponta a Ponta',
      en: 'End-to-End Medallion Architecture',
    },
    category: 'data',
    featured: true,
    description: {
      pt: 'Implementação completa de um Data Lakehouse seguindo a Arquitetura Medalhão (Bronze → Silver → Gold), com processamento distribuído em PySpark, armazenamento transacional em Delta Lake e governança de dados centralizada no Unity Catalog.',
      en: 'Complete Medallion Architecture (Bronze → Silver → Gold) implementation featuring distributed processing with Spark, transactional storage with Delta Lake, and centralized governance via Unity Catalog.',
    },
    architectureNote: {
      pt: 'Pipeline: Ingestão Bronze → Limpeza Silver → Agregação Gold',
      en: 'Pipeline: Bronze Ingestion → Silver Cleansing → Gold Marts',
    },
    technologies: ['Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'SQL'],
    githubUrl: 'https://github.com/miguelmorandini/lakehouse-build',
  },
  {
    id: 'byteword-dbt',
    title: 'ByteWord — Tech Game & dbt Analytics Pipeline',
    subtitle: {
      pt: 'Jogo Interativo + Pipeline Analítico Modern Data Stack',
      en: 'Interactive Game + Modern Data Stack Pipeline',
    },
    category: 'data',
    description: {
      pt: 'Jogo de adivinhação de termos de tecnologia construído com Streamlit e DuckDB, integrado a um pipeline analítico completo em dbt Core com ELT, macros Jinja, ranking marts e testes automatizados de qualidade de dados.',
      en: 'Tech word-guessing game powered by Streamlit and DuckDB, featuring an end-to-end dbt Core analytical pipeline with ELT transformations, Jinja macros, ranking marts, and automated data quality tests.',
    },
    architectureNote: {
      pt: 'ELT com DuckDB + dbt Core + Testes de Qualidade',
      en: 'DuckDB + dbt Core ELT + Data Quality Tests',
    },
    technologies: ['Python', 'dbt Core', 'DuckDB', 'Streamlit'],
    githubUrl: 'https://github.com/miguelmorandini/byteword',
    liveUrl: 'https://byte-word.streamlit.app/',
  },
  {
    id: 'chat-with-pdf-rag',
    title: 'Chat with PDF via RAG & Gemini',
    subtitle: {
      pt: 'Assistente Inteligente de Documentos com IA Generativa',
      en: 'GenAI Document Q&A Assistant',
    },
    category: 'ai',
    description: {
      pt: 'Aplicação interativa de perguntas e respostas sobre documentos PDF utilizando Retrieval-Augmented Generation (RAG), indexação vetorial e Google Gemini API para respostas contextualizadas.',
      en: 'Interactive document Q&A application using Retrieval-Augmented Generation (RAG), vector embeddings, and the Google Gemini API for grounded contextual answers.',
    },
    architectureNote: {
      pt: 'Embeddings → VectorDB → Retrieval → Gemini LLM',
      en: 'Embeddings → VectorDB → Retrieval → Gemini LLM',
    },
    technologies: ['Python', 'Gemini API', 'LangChain', 'VectorDB'],
    githubUrl: 'https://github.com/miguelmorandini/chat-com-rag',
    liveUrl: 'https://chat-com-pdf.streamlit.app/',
  },
  {
    id: 'airpong-cv',
    title: 'AirPong — Computer Vision Game',
    subtitle: {
      pt: 'Controle por Gestos em Tempo Real via Webcam',
      en: 'Real-Time Hand-Tracking Pong Game',
    },
    category: 'ai',
    description: {
      pt: 'Recriação do clássico jogo Pong controlado sem periféricos físicos, utilizando rastreamento de gestos das mãos em tempo real através da webcam com OpenCV e MediaPipe.',
      en: 'Classic Pong game reimagined with touchless controls, powered by real-time hand gesture tracking through the webcam using OpenCV and MediaPipe.',
    },
    architectureNote: {
      pt: 'Visão Computacional em Tempo Real (60 FPS target)',
      en: 'Real-Time Computer Vision Tracking',
    },
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/miguelmorandini/airpong',
    liveUrl: 'https://miguelmorandini.github.io/airpong/',
  },
];

export const techGroups: TechGroup[] = [
  {
    id: 'data-eng',
    title: {
      pt: 'Engenharia de Dados & Analytics',
      en: 'Data Engineering & Analytics',
    },
    items: [
      { name: 'Databricks', detail: { pt: 'Lakehouse & Workflows', en: 'Lakehouse & Workflows' } },
      { name: 'PySpark', detail: { pt: 'Processamento Distribuído', en: 'Distributed Processing' } },
      { name: 'Delta Lake', detail: { pt: 'Armazenamento ACID', en: 'ACID Storage Layer' } },
      { name: 'Unity Catalog', detail: { pt: 'Governança de Dados', en: 'Data Governance' } },
      { name: 'dbt Core', detail: { pt: 'Transformação & Testes', en: 'Transformations & Tests' } },
      { name: 'DuckDB', detail: { pt: 'OLAP Embutido', en: 'In-Process OLAP' } },
      { name: 'SQL Server', detail: { pt: 'Modelagem & T-SQL', en: 'Modeling & T-SQL' } },
      { name: 'Oracle', detail: { pt: 'Banco Relacional', en: 'Relational Database' } },
      { name: 'Power BI', detail: { pt: 'Visualização & BI', en: 'BI & Dashboards' } },
    ],
  },
  {
    id: 'ai-ml',
    title: {
      pt: 'IA Generativa & Visão Computacional',
      en: 'Generative AI & Computer Vision',
    },
    items: [
      { name: 'Gemini API', detail: { pt: 'LLMs & Multimodal', en: 'LLMs & Multimodal' } },
      { name: 'LangChain', detail: { pt: 'Orquestração RAG', en: 'RAG Orchestration' } },
      { name: 'VectorDB', detail: { pt: 'Busca Semântica', en: 'Semantic Retrieval' } },
      { name: 'OpenCV', detail: { pt: 'Visão Computacional', en: 'Computer Vision' } },
      { name: 'MediaPipe', detail: { pt: 'Rastreamento de Gestos', en: 'Hand Tracking' } },
      { name: 'Streamlit', detail: { pt: 'Data & AI Apps', en: 'Data & AI Apps' } },
    ],
  },
  {
    id: 'software-cloud',
    title: {
      pt: 'Software, Cloud & Ferramentas',
      en: 'Software, Cloud & Tooling',
    },
    items: [
      { name: 'Python', detail: { pt: 'Dados, IA & Scripts', en: 'Data, AI & Scripting' } },
      { name: 'C# / .NET', detail: { pt: 'Sistemas Corporativos', en: 'Enterprise Systems' } },
      { name: 'JavaScript', detail: { pt: 'Web Frontend', en: 'Web Frontend' } },
      { name: 'React', detail: { pt: 'Interfaces Modernas', en: 'Modern UIs' } },
      { name: 'HTML5', detail: { pt: 'Estrutura Semântica', en: 'Semantic Markup' } },
      { name: 'AWS', detail: { pt: 'Cloud & ML Academy', en: 'Cloud & ML Academy' } },
      { name: 'Figma', detail: { pt: 'Prototipação UI', en: 'UI Prototyping' } },
      { name: 'Git', detail: { pt: 'Versionamento', en: 'Version Control' } },
    ],
  },
];

export const uiLabels = {
  nav: {
    about: { pt: 'Sobre', en: 'About' },
    experience: { pt: 'Experiência', en: 'Experience' },
    projects: { pt: 'Projetos', en: 'Projects' },
    education: { pt: 'Formação', en: 'Education' },
    stack: { pt: 'Stack', en: 'Stack' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    status: { pt: 'Data Engineer Intern @ Programmers • Matão, SP', en: 'Data Engineer Intern @ Programmers • Matão, SP' },
    viewProjects: { pt: 'Ver Projetos', en: 'Explore Projects' },
    viewExperience: { pt: 'Minha Trajetória', en: 'My Journey' },
    gradLabel: { pt: 'Graduação', en: 'Degree' },
    gradValue: { pt: 'Fatec Matão • 2024–2026', en: 'Fatec Matão • 2024–2026' },
    focusLabel: { pt: 'Arquitetura Principal', en: 'Core Architecture' },
    focusValue: { pt: 'Lakehouse (Bronze → Silver → Gold)', en: 'Lakehouse (Bronze → Silver → Gold)' },
  },
  sections: {
    aboutEyebrow: { pt: '01. Sobre Mim', en: '01. About Me' },
    aboutTitle: {
      pt: 'Da engenharia de software à arquitetura de dados e IA.',
      en: 'From software engineering to data architecture and AI.',
    },
    expEyebrow: { pt: '02. Experiência Profissional', en: '02. Work Experience' },
    expTitle: {
      pt: 'Onde já atuei e o que venho construindo.',
      en: 'Where I have worked and what I have been building.',
    },
    projEyebrow: { pt: '03. Projetos & Impacto', en: '03. Featured Projects' },
    projTitle: {
      pt: 'Pipelines de dados, assistentes de IA e projetos com propósito.',
      en: 'Data pipelines, AI assistants, and purpose-driven software.',
    },
    eduEyebrow: { pt: '04. Formação & Certificações', en: '04. Education & Certifications' },
    eduTitle: {
      pt: 'Base acadêmica sólida e certificações em Cloud & Dados.',
      en: 'Academic foundation and Cloud & Data credentials.',
    },
    stackEyebrow: { pt: '05. Tecnologias & Ferramentas', en: '05. Technologies & Tools' },
    stackTitle: {
      pt: 'Ferramentas que uso no dia a dia.',
      en: 'Tools I use to build and ship.',
    },
    contactEyebrow: { pt: '06. Contato', en: '06. Get in Touch' },
    contactTitle: {
      pt: 'Vamos conversar sobre Dados, IA ou Desenvolvimento?',
      en: "Let's connect on Data, AI, or Software Engineering.",
    },
    contactSubtitle: {
      pt: 'Aberto a conexões técnicas, troca de ideias sobre arquitetura Lakehouse, projetos open-source e oportunidades na área de Engenharia de Dados e Software.',
      en: 'Open to technical conversations, Lakehouse architecture discussions, open-source collaboration, and opportunities in Data & Software Engineering.',
    },
  },
  filters: {
    all: { pt: 'Todos', en: 'All' },
    data: { pt: 'Dados & Lakehouse', en: 'Data & Lakehouse' },
    ai: { pt: 'IA & Visão', en: 'AI & Vision' },
    fullstack: { pt: 'Full-Stack & Cívico', en: 'Full-Stack & Civic' },
  },
  misc: {
    currentBadge: { pt: 'Atual', en: 'Present' },
    featuredBadge: { pt: 'Destaque', en: 'Featured' },
    viewOnGithub: { pt: 'Código no GitHub', en: 'GitHub Repo' },
    viewLiveDemo: { pt: 'Acessar App', en: 'Live Demo' },
    academicHeading: { pt: 'Formação Acadêmica', en: 'Academic Background' },
    certsHeading: { pt: 'Cursos & Certificações', en: 'Courses & Certifications' },
    copyHandle: { pt: 'Copiar @miguelmorandini', en: 'Copy @miguelmorandini' },
    copied: { pt: 'Copiado!', en: 'Copied!' },
    sendEmail: { pt: 'Enviar E-mail', en: 'Send Email' },
    footerNote: {
      pt: 'Desenvolvido por Miguel Morandini • Matão, SP',
      en: 'Built by Miguel Morandini • Matão, SP',
    },
  },
};
