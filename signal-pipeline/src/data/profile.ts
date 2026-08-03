export const profile = {
  name: 'Ahmed Abdeljaoued',
  role: 'Senior Data Engineer & Technical Lead',
  company: 'Alexander Thamm GmbH',
  companyUrl: 'https://www.alexanderthamm.com/',
  location: 'Berlin, Germany',
  email: 'abdeljaoued.ahmed@gmail.com',
  site: 'ahmedabdeljaoued.github.io',
  cv: '/documents/Lebenslauf_Ahmed_Abdeljaoued.pdf',
  linkedin: 'https://www.linkedin.com/in/ahmed-abdeljaoued',
  github: 'https://github.com/ahmedabdeljaoued',
  tagline:
    'I lead the delivery of Azure lakehouse platforms, Databricks and PySpark pipelines, and analytics products — from solution design to production.',
  typedPhrases: [
    'Ahmed Abdeljaoued.',
    'Ahmed.',
    'A. Abdeljaoued.',
    'Ahmed Abdeljaoued.',
  ],
  about: [
    'I am a Senior Data Engineer and Technical Lead at Alexander Thamm GmbH, specializing in Azure-based data platforms, Databricks, PySpark, and modern analytics solutions. I design, develop, and maintain scalable data platforms, production-grade ETL/ELT pipelines, business intelligence solutions, and cloud-native applications.',
    'Besides data engineering, I lead development teams, consult clients on technical solutions, translate business requirements into technical designs, estimate work packages, and drive technical decision-making. Based in Berlin, Germany.',
  ],
  skills: [
    {
      category: 'Data Engineering',
      items: [
        'Azure Databricks',
        'PySpark',
        'Python',
        'SQL',
        'Delta Lake',
        'ETL / ELT',
        'Data Warehousing',
        'Data Modeling',
        'Data Pipelines',
        'Performance Optimization',
      ],
    },
    {
      category: 'Microsoft Azure',
      items: [
        'Azure Data Factory',
        'Azure Storage',
        'Azure SQL',
        'Unity Catalog',
        'Databricks Jobs',
      ],
    },
    {
      category: 'Business Intelligence',
      items: [
        'Power BI',
        'Power BI Administration',
        'Row-Level Security (RLS)',
        'Role-Based Access Control (RBAC)',
        'Dashboard Development',
        'Data Analytics',
      ],
    },
    {
      category: 'Software Development',
      items: [
        'Next.js',
        'NestJS',
        'TypeScript',
        'REST APIs',
        'Webhooks',
        'Full Stack Development',
      ],
    },
    {
      category: 'Leadership',
      items: [
        'Technical Leadership',
        'Client Consulting',
        'Solution Design',
        'Requirements Engineering',
        'Work Package Estimation',
        'Agile Development',
        'Stakeholder Management',
        'Team Leadership',
      ],
    },
  ],
  education: [
    {
      school: 'Hochschule für Technik und Wirtschaft Berlin',
      degree: 'Master Media Computer Science',
      dates: 'October 2016 to February 2019',
      summary:
        'Graduated with a Master of International Media Computer Science. Coursework covered machine learning with Python, business analytics, and data visualization.',
    },
    {
      school: 'Hochschule für Technik und Wirtschaft Berlin',
      degree: 'Master Applied Computer Science',
      dates: 'October 2014 to September 2016',
      summary:
        'Projects included a mobile application for public health and system development frameworks using Agile methods.',
    },
    {
      school: "Institut Superieur de l'Informatique — Tunis",
      degree: 'B.A. Computer Network Administration',
      dates: 'September 2010 to July 2013',
      summary:
        'Bachelor thesis on deploying security information systems with open source tools at the National Agency for Computer Security.',
    },
  ],
} as const;
