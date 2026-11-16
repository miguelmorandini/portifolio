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
  location: 'MatÃ£o, SP â€” Brasil',
  company: 'Programmers â€” AI, Data & Software',
  companyUrl: 'https://www.programmers.com.br',
  companyLogo: programmersLogo,
  institutionLogo: fatecLogo,
  githubUrl: 'https://github.com/miguelmorandini',
  linkedinUrl: 'https://www.linkedin.com/in/miguelmorandini',
  email: 'miguel_mmorandini@outlook.com',
  bannerTags: ['DATABRICKS', 'PYSPARK', 'DELTA LAKE', 'AWS', 'GEN AI'],
  headline: {
    pt: 'Data Engineer Intern & Desenvolvedor de Software',
    en: 'Data Engineer Intern & Software Developer',
  },
  tagline: {
    pt: 'Transformando dados brutos em arquiteturas escalÃ¡veis.',
    en: 'Transforming raw data into scalable architectures.',
  },
  intro: {
    pt: 'Graduando em Desenvolvimento de Software Multiplataforma pela Fatec MatÃ£o, com atuaÃ§Ã£o prÃ¡tica em Engenharia de Dados, arquiteturas Lakehouse e soluÃ§Ãµes aplicadas de InteligÃªncia Artificial.',
    en: 'Undergraduate student in Multiplatform Software Development at Fatec MatÃ£o, focused on Data Engineering, Lakehouse architectures, and applied Artificial Intelligence solutions.',
  },
  aboutParagraphs: {
    pt: [
      'Atuo na modelagem e construÃ§Ã£o de pipelines de dados robustos (ETL/ELT), aplicando boas prÃ¡ticas da Arquitetura MedalhÃ£o (Bronze, Silver e Gold) com Databricks, Delta Lake e governanÃ§a de dados via Unity Catalog.',
      'TambÃ©m conecto a engenharia de dados ao ecossistema de IA Generativa e desenvolvimento Full-Stack â€” criando desde aplicaÃ§Ãµes analÃ­ticas distribuÃ­das com PySpark e dbt atÃ© assistentes inteligentes com RAG e LLMs, alÃ©m de sistemas web com impacto real na comunidade como o Cidade Integra.',
    ],
    en: [
      'I work on modeling and building robust data pipelines (ETL/ELT), applying best practices of the Medallion Architecture (Bronze, Silver, and Gold) with Databricks, Delta Lake, and governance via Unity Catalog.',
      'I also bridge data engineering with the GenAI ecosystem and Full-Stack software development â€” building everything from distributed analytical applications with PySpark and dbt to intelligent assistants powered by RAG and LLMs, as well as civic web platforms like Cidade Integra.',
    ],
  },
};

export const pillars = [
  {
    id: 'data',
    tag: '01 / LAKEHOUSE',
    title: {
      pt: 'Engenharia de Dados & GovernanÃ§a',
      en: 'Data Engineering & Governance',
    },
    description: {
      pt: 'Pipelines ETL/ELT escalÃ¡veis seguindo a Arquitetura MedalhÃ£o (Bronze â†’ Silver â†’ Gold) com Databricks, PySpark, Delta Lake, dbt Core e Unity Catalog.',
      en: 'Scalable ETL/ELT pipelines following the Medallion Architecture (Bronze â†’ Silver â†’ Gold) with Databricks, PySpark, Delta Lake, dbt Core, and Unity Catalog.',
    },
  },
  {
    id: 'ai',
    tag: '02 / GEN AI & VISION',
    title: {
      pt: 'IA Aplicada & VisÃ£o Computacional',
      en: 'Applied AI & Computer Vision',
    },
    description: {
      pt: 'Assistentes baseados em documentos com RAG, LangChain, VectorDB e Google Gemini API, alÃ©m de aplicaÃ§Ãµes interativas em tempo real com OpenCV e MediaPipe.',
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
      pt: 'ExperiÃªncia corporativa com C# / .NET, desenvolvimento web Full-Stack (React, JavaScript) e sÃ³lida base em modelagem relacional e SQL (SQL Server e Oracle).',
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
      pt: 'EstÃ¡gio',
      en: 'Internship',
    },
    period: {
      pt: 'Jun 2026 â€“ Atual',
      en: 'Jun 2026 â€“ Present',
    },
    duration: {
      pt: '6 meses',
      en: '6 mos',
    },
    location: 'MatÃ£o, SP â€” Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    current: true,
    description: {
      pt: 'AtuaÃ§Ã£o na Ã¡rea de Dados & IA desenvolvendo pipelines de ingestÃ£o e transformaÃ§Ã£o, arquiteturas Lakehouse e soluÃ§Ãµes analÃ­ticas escalÃ¡veis.',
      en: 'Working in the Data & AI practice building ingestion and transformation pipelines, Lakehouse architectures, and scalable analytical solutions.',
    },
    highlights: {
      pt: [
        'ConstruÃ§Ã£o de pipelines ETL/ELT com Databricks, PySpark e Delta Lake.',
        'OrganizaÃ§Ã£o de camadas de dados (Bronze, Silver, Gold) e governanÃ§a com Unity Catalog.',
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
      pt: 'EstagiÃ¡rio de Desenvolvimento de Software',
      en: 'Software Development Intern',
    },
    company: 'SPS SoluÃ§Ãµes em Tecnologia da InformaÃ§Ã£o',
    logo: spsLogo,
    logoStyle: 'raw',
    context: {
      pt: 'Alocado na AgriVitta',
      en: 'Allocated at AgriVitta',
    },
    type: {
      pt: 'EstÃ¡gio',
      en: 'Internship',
    },
    period: {
      pt: 'Mar 2025 â€“ Mai 2026',
      en: 'Mar 2025 â€“ May 2026',
    },
    duration: {
      pt: '1 ano e 3 meses',
      en: '1 yr 3 mos',
    },
    location: 'MatÃ£o, SP â€” Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    description: {
      pt: 'Contratado pela SPS SoluÃ§Ãµes em Tecnologia da InformaÃ§Ã£o e alocado na AgriVitta, atuando no desenvolvimento em C#, criaÃ§Ã£o de aplicaÃ§Ã£o para relatÃ³rio DRE (DemonstraÃ§Ã£o do Resultado do ExercÃ­cio) e melhorias em sistemas internos legados.',
      en: 'Hired by SPS SoluÃ§Ãµes em Tecnologia da InformaÃ§Ã£o and allocated at AgriVitta, working on C# development, building an income statement (DRE) reporting application, and enhancing legacy internal systems.',
    },
    highlights: {
      pt: [
        'Desenvolvimento em C# utilizando Visual Studio e implementaÃ§Ã£o de telas e layouts em HTML.',
        'CriaÃ§Ã£o da aplicaÃ§Ã£o de relatÃ³rio DRE e evoluÃ§Ã£o de sistema legado da Ã¡rea de orÃ§amento.',
        'CriaÃ§Ã£o e manutenÃ§Ã£o de consultas SQL em Oracle Developer para relatÃ³rios internos e suporte a Ã¡reas usuÃ¡rias.',
        'IntegraÃ§Ã£o de funcionalidades ao ambiente SharePoint e correÃ§Ã£o de bugs em aplicaÃ§Ãµes internas.',
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
    company: 'Fatec MatÃ£o',
    logo: fatecLogo,
    logoStyle: 'dark',
    type: {
      pt: 'Monitoria / EstÃ¡gio',
      en: 'Internship',
    },
    period: {
      pt: 'Fev 2025 â€“ Jul 2025',
      en: 'Feb 2025 â€“ Jul 2025',
    },
    duration: {
      pt: '6 meses',
      en: '6 mos',
    },
    location: 'MatÃ£o, SP â€” Brasil',
    modality: {
      pt: 'Presencial',
      en: 'On-site',
    },
    description: {
      pt: 'Suporte presencial e remoto a alunos na compreensÃ£o e aplicaÃ§Ã£o de bancos de dados relacionais, promovendo aprendizado ativo, raciocÃ­nio lÃ³gico e melhoria no desempenho acadÃªmico.',
      en: 'Provided in-person and remote support to students in relational databases, fostering active learning, logical reasoning, and stronger academic performance.',
    },
    highlights: {
      pt: [
        'Apoio em modelagem de dados, normalizaÃ§Ã£o e consultas SQL no Microsoft SQL Server.',
        'OrientaÃ§Ã£o na execuÃ§Ã£o de exercÃ­cios prÃ¡ticos, trabalhos acadÃªmicos e mediaÃ§Ã£o de dÃºvidas com base nos materiais da disciplina.',
        'Atendimento individual e coletivo adaptado Ã s necessidades dos estudantes.',
      ],
      en: [
        'Guided students through data modeling, normalization, and SQL queries in Microsoft SQL Server.',
        'Supported practical exercises, academic projects, and active Q&A using course materials.',
        'Delivered tailored individual and group tutoring sessions.',
      ],
    },
    skills: ['Microsoft SQL Server', 'Modelagem de Dados', 'NormalizaÃ§Ã£o', 'SQL'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'fatec',
    institution: 'Fatec MatÃ£o â€” Faculdade de Tecnologia de SÃ£o Paulo',
    logo: fatecLogo,
    degree: {
      pt: 'TecnÃ³logo em Desenvolvimento de Software Multiplataforma',
      en: 'Associate Degree in Multiplatform Software Development',
    },
    period: {
      pt: 'Jan 2024 â€“ Dez 2026',
      en: 'Jan 2024 â€“ Dec 2026',
    },
    status: {
      pt: 'Em andamento (PrevisÃ£o Dez/2026)',
      en: 'In progress (Expected Dec 2026)',
    },
    skills: ['Microsoft SQL Server', 'HTML5', 'Engenharia de Software', 'Desenvolvimento Web'],
  },
  {
    id: 'ifsp',
    institution: 'Instituto Federal de EducaÃ§Ã£o, CiÃªncia e Tecnologia de SÃ£o Paulo â€” IFSP',
    degree: {
      pt: 'Curso TÃ©cnico em Alimentos Integrado ao Ensino MÃ©dio',
      en: 'Technical Course in Food Science Integrated with High School',
    },
    period: {
      pt: 'Jan 2021 â€“ Dez 2023',
      en: 'Jan 2021 â€“ Dec 2023',
    },
    status: {
      pt: 'ConcluÃ­do',
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
      pt: 'Plataforma CÃ­vica de Zeladoria Urbana â€¢ Fatec MatÃ£o',
      en: 'Civic Urban Reporting Platform â€¢ Fatec MatÃ£o',
    },
    category: 'fullstack',
    featured: true,
    role: {
      pt: 'Desenvolvedor FullStack',
      en: 'Full-Stack Developer',
    },
    description: {
      pt: 'Projeto desenvolvido por estudantes de Desenvolvimento de Software Multiplataforma na Fatec MatÃ£o com o objetivo de conectar cidadÃ£os e autoridades para a soluÃ§Ã£o de problemas urbanos â€” facilitando o registro, acompanhamento e resoluÃ§Ã£o de denÃºncias ligadas a infraestrutura, meio ambiente e serviÃ§os pÃºblicos.',
      en: 'Civic platform developed by Multiplatform Software Development students at Fatec MatÃ£o to connect citizens and local authorities â€” streamlining the reporting, tracking, and resolution of urban issues across infrastructure, environment, and public services.',
    },
    quote: {
      pt: 'â€œVer as ideias ganhando forma com propÃ³sito e foco em impacto real Ã© muito motivador.â€',
      en: 'â€œSeeing ideas take shape with purpose and a focus on real-world impact is deeply motivating.â€',
    },
    architectureNote: {
      pt: 'Impacto Social â€¢ Desenvolvimento Full-Stack em Equipe',
      en: 'Social Impact â€¢ Collaborative Full-Stack Engineering',
    },
    technologies: ['React', 'JavaScript', 'HTML5', 'SQL', 'Figma', 'Git'],
    githubUrl: 'https://github.com/miguelmorandini',
  },
  {
    id: 'sales-lakehouse',
    title: 'Sales Lakehouse with Databricks',
    subtitle: {
      pt: 'Arquitetura MedalhÃ£o Ponta a Ponta',
      en: 'End-to-End Medallion Architecture',
    },
    category: 'data',
    featured: true,
    description: {
      pt: 'ImplementaÃ§Ã£o completa de um Data Lakehouse seguindo a Arquitetura MedalhÃ£o (Bronze â†’ Silver â†’ Gold), com processamento distribuÃ­do em PySpark, armazenamento transacional em Delta Lake e governanÃ§a de dados centralizada no Unity Catalog.',
      en: 'Complete Medallion Architecture (Bronze â†’ Silver â†’ Gold) implementation featuring distributed processing with Spark, transactional storage with Delta Lake, and centralized governance via Unity Catalog.',
    },
    architectureNote: {
      pt: 'Pipeline: IngestÃ£o Bronze â†’ Limpeza Silver â†’ AgregaÃ§Ã£o Gold',
      en: 'Pipeline: Bronze Ingestion â†’ Silver Cleansing â†’ Gold Marts',
    },
    technologies: ['Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'SQL'],
    githubUrl: 'https://github.com/miguelmorandini/lakehouse-build',
  },
  {
    id: 'byteword-dbt',
    title: 'ByteWord â€” Tech Game & dbt Analytics Pipeline',
    subtitle: {
      pt: 'Jogo Interativo + Pipeline AnalÃ­tico Modern Data Stack',
      en: 'Interactive Game + Modern Data Stack Pipeline',
    },
    category: 'data',
    description: {
      pt: 'Jogo de adivinhaÃ§Ã£o de termos de tecnologia construÃ­do com Streamlit e DuckDB, integrado a um pipeline analÃ­tico completo em dbt Core com ELT, macros Jinja, ranking marts e testes automatizados de qualidade de dados.',
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
      pt: 'AplicaÃ§Ã£o interativa de perguntas e respostas sobre documentos PDF utilizando Retrieval-Augmented Generation (RAG), indexaÃ§Ã£o vetorial e Google Gemini API para respostas contextualizadas.',
      en: 'Interactive document Q&A application using Retrieval-Augmented Generation (RAG), vector embeddings, and the Google Gemini API for grounded contextual answers.',
    },
    architectureNote: {
      pt: 'Embeddings â†’ VectorDB â†’ Retrieval â†’ Gemini LLM',
      en: 'Embeddings â†’ VectorDB â†’ Retrieval â†’ Gemini LLM',
    },
    technologies: ['Python', 'Gemini API', 'LangChain', 'VectorDB'],
    githubUrl: 'https://github.com/miguelmorandini/chat-com-rag',
    liveUrl: 'https://chat-com-pdf.streamlit.app/',
  },
  {
    id: 'airpong-cv',
    title: 'AirPong â€” Computer Vision Game',
    subtitle: {
      pt: 'Controle por Gestos em Tempo Real via Webcam',
      en: 'Real-Time Hand-Tracking Pong Game',
    },
    category: 'ai',
    description: {
      pt: 'RecriaÃ§Ã£o do clÃ¡ssico jogo Pong controlado sem perifÃ©ricos fÃ­sicos, utilizando rastreamento de gestos das mÃ£os em tempo real atravÃ©s da webcam com OpenCV e MediaPipe.',
      en: 'Classic Pong game reimagined with touchless controls, powered by real-time hand gesture tracking through the webcam using OpenCV and MediaPipe.',
    },
    architectureNote: {
      pt: 'VisÃ£o Computacional em Tempo Real (60 FPS target)',
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
      { name: 'PySpark', detail: { pt: 'Processamento DistribuÃ­do', en: 'Distributed Processing' } },
      { name: 'Delta Lake', detail: { pt: 'Armazenamento ACID', en: 'ACID Storage Layer' } },
      { name: 'Unity Catalog', detail: { pt: 'GovernanÃ§a de Dados', en: 'Data Governance' } },
      { name: 'dbt Core', detail: { pt: 'TransformaÃ§Ã£o & Testes', en: 'Transformations & Tests' } },
      { name: 'DuckDB', detail: { pt: 'OLAP Embutido', en: 'In-Process OLAP' } },
      { name: 'SQL Server', detail: { pt: 'Modelagem & T-SQL', en: 'Modeling & T-SQL' } },
      { name: 'Oracle', detail: { pt: 'Banco Relacional', en: 'Relational Database' } },
      { name: 'Power BI', detail: { pt: 'VisualizaÃ§Ã£o & BI', en: 'BI & Dashboards' } },
    ],
  },
  {
    id: 'ai-ml',
    title: {
      pt: 'IA Generativa & VisÃ£o Computacional',
      en: 'Generative AI & Computer Vision',
    },
    items: [
      { name: 'Gemini API', detail: { pt: 'LLMs & Multimodal', en: 'LLMs & Multimodal' } },
      { name: 'LangChain', detail: { pt: 'OrquestraÃ§Ã£o RAG', en: 'RAG Orchestration' } },
      { name: 'VectorDB', detail: { pt: 'Busca SemÃ¢ntica', en: 'Semantic Retrieval' } },
      { name: 'OpenCV', detail: { pt: 'VisÃ£o Computacional', en: 'Computer Vision' } },
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
      { name: 'HTML5', detail: { pt: 'Estrutura SemÃ¢ntica', en: 'Semantic Markup' } },
      { name: 'AWS', detail: { pt: 'Cloud & ML Academy', en: 'Cloud & ML Academy' } },
      { name: 'Figma', detail: { pt: 'PrototipaÃ§Ã£o UI', en: 'UI Prototyping' } },
      { name: 'Git', detail: { pt: 'Versionamento', en: 'Version Control' } },
    ],
  },
];

export const uiLabels = {
  nav: {
    about: { pt: 'Sobre', en: 'About' },
    experience: { pt: 'ExperiÃªncia', en: 'Experience' },
    projects: { pt: 'Projetos', en: 'Projects' },
    education: { pt: 'FormaÃ§Ã£o', en: 'Education' },
    stack: { pt: 'Stack', en: 'Stack' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    status: { pt: 'Data Engineer Intern @ Programmers â€¢ MatÃ£o, SP', en: 'Data Engineer Intern @ Programmers â€¢ MatÃ£o, SP' },
    viewProjects: { pt: 'Ver Projetos', en: 'Explore Projects' },
    viewExperience: { pt: 'Minha TrajetÃ³ria', en: 'My Journey' },
    gradLabel: { pt: 'GraduaÃ§Ã£o', en: 'Degree' },
    gradValue: { pt: 'Fatec MatÃ£o â€¢ 2024â€“2026', en: 'Fatec MatÃ£o â€¢ 2024â€“2026' },
    focusLabel: { pt: 'Arquitetura Principal', en: 'Core Architecture' },
    focusValue: { pt: 'Lakehouse (Bronze â†’ Silver â†’ Gold)', en: 'Lakehouse (Bronze â†’ Silver â†’ Gold)' },
  },
  sections: {
    aboutEyebrow: { pt: '01. Sobre Mim', en: '01. About Me' },
    aboutTitle: {
      pt: 'Da engenharia de software Ã  arquitetura de dados e IA.',
      en: 'From software engineering to data architecture and AI.',
    },
    expEyebrow: { pt: '02. ExperiÃªncia Profissional', en: '02. Work Experience' },
    expTitle: {
      pt: 'Onde jÃ¡ atuei e o que venho construindo.',
      en: 'Where I have worked and what I have been building.',
    },
    projEyebrow: { pt: '03. Projetos & Impacto', en: '03. Featured Projects' },
    projTitle: {
      pt: 'Pipelines de dados, assistentes de IA e projetos com propÃ³sito.',
      en: 'Data pipelines, AI assistants, and purpose-driven software.',
    },
    eduEyebrow: { pt: '04. FormaÃ§Ã£o & CertificaÃ§Ãµes', en: '04. Education & Certifications' },
    eduTitle: {
      pt: 'Base acadÃªmica sÃ³lida e certificaÃ§Ãµes em Cloud & Dados.',
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
      pt: 'Aberto a conexÃµes tÃ©cnicas, troca de ideias sobre arquitetura Lakehouse, projetos open-source e oportunidades na Ã¡rea de Engenharia de Dados e Software.',
      en: 'Open to technical conversations, Lakehouse architecture discussions, open-source collaboration, and opportunities in Data & Software Engineering.',
    },
  },
  filters: {
    all: { pt: 'Todos', en: 'All' },
    data: { pt: 'Dados & Lakehouse', en: 'Data & Lakehouse' },
    ai: { pt: 'IA & VisÃ£o', en: 'AI & Vision' },
    fullstack: { pt: 'Full-Stack & CÃ­vico', en: 'Full-Stack & Civic' },
  },
  misc: {
    currentBadge: { pt: 'Atual', en: 'Present' },
    featuredBadge: { pt: 'Destaque', en: 'Featured' },
    viewOnGithub: { pt: 'CÃ³digo no GitHub', en: 'GitHub Repo' },
    viewLiveDemo: { pt: 'Acessar App', en: 'Live Demo' },
    academicHeading: { pt: 'FormaÃ§Ã£o AcadÃªmica', en: 'Academic Background' },
    certsHeading: { pt: 'Cursos & CertificaÃ§Ãµes', en: 'Courses & Certifications' },
    copyHandle: { pt: 'Copiar @miguelmorandini', en: 'Copy @miguelmorandini' },
    copied: { pt: 'Copiado!', en: 'Copied!' },
    sendEmail: { pt: 'Enviar E-mail', en: 'Send Email' },
    footerNote: {
      pt: 'Desenvolvido por Miguel Morandini â€¢ MatÃ£o, SP',
      en: 'Built by Miguel Morandini â€¢ MatÃ£o, SP',
    },
  },
};
