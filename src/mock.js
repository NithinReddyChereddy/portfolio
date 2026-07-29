export const portfolioData = {
  name: "Nithin Reddy Chereddy",
  tagline: "Data Analyst | AI & Automation Developer",

  skills: {
    "Programming": [
      { name: "Python" },
      { name: "SQL" },
      { name: "C++" }
    ],
    "Data Analytics": [
      { name: "Power BI" },
      { name: "DAX" },
      { name: "EDA" },
      { name: "Data Modeling" },
      { name: "Data Visualization" },
      { name: "Business Intelligence" }
    ],
    "Libraries": [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" }
    ],
    "Databases": [
      { name: "MySQL" }
    ],
    "AI & Automation": [
      { name: "Gemini API" },
      { name: "Prompt Engineering" },
      { name: "AI-assisted Development" },
      { name: "Rapid Prototyping" },
      { name: "Workflow Automation" },
      { name: "Cursor" },
      { name: "Claude Code" },
      { name: "AntiGravity" }
    ],
    "Tools": [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Excel" },
      { name: "Jupyter Notebook" },
      { name: "Hadoop" },
      { name: "Hive" }
    ]
  },

  experience: [
    {
      role: "Data Visualization Intern",
      company: "Infosys Springboard",
      period: "Ongoing",
      achievements: [
        "Learning industry-standard data visualization and business intelligence using Power BI.",
        "Building interactive dashboards and reports for business decision-making.",
        "Working with data cleaning, transformation and visualization best practices.",
        "Developing KPI reporting, dashboard storytelling and business analytics skills.",
        "Applying analytical thinking to practical data analytics use cases."
      ],
      technologies: ["Power BI", "Data Visualization", "Business Intelligence", "Data Analytics"]
    },
    {
      role: "Industrial Training",
      company: "DSA with Java/C++ with Industrial Practices",
      period: "Jun 2025 – Jul 2025",
      achievements: [
        "Strengthened programming fundamentals using Java and C++.",
        "Implemented core Data Structures including arrays, linked lists, stacks, queues, trees and graphs.",
        "Practiced algorithmic problem-solving through sorting, searching, recursion and greedy algorithms.",
        "Improved object-oriented programming and clean coding practices."
      ],
      technologies: ["Java", "C++", "Data Structures", "Algorithms", "Object-Oriented Programming"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      school: "Lovely Professional University",
      period: "2023 – Present",
      grade: "CGPA: 7.5",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    },
    {
      id: 2,
      degree: "Intermediate Education",
      major: "MPC",
      school: "Sri Chaitanya boys Junior College",
      period: "2021 – 2023",
      grade: "Percentage: 85%",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    }
  ],

  achievements: [
    {
      id: 1,
      label: "Professional Certifications",
      value: "7",
      description: "Completed industry-grade certifications in Data Analytics, Power BI, and Oracle Cloud AI."
    },
    {
      id: 2,
      label: "Portfolio Projects",
      value: "5",
      description: "End-to-end projects involving AI engineering, data analysis, and workflow automation."
    },
    {
      id: 3,
      label: "Interactive Dashboards",
      value: "3",
      description: "Dashboards built for automated reporting, decision support, and self-service analytics."
    },
    {
      id: 4,
      label: "Analytical Tools",
      value: "10+",
      description: "Proficient in languages, BI tools, APIs, and libraries utilized for data-driven applications."
    }
  ],

  projects: [
    {
      id: 1,
      title: "DataSynth AI",
      description: "An AI-powered self-service data analytics platform that transforms CSV/XLSX datasets into interactive dashboards, automated reports, and AI-generated business insights. Features automated data profiling, trend and correlation analysis, conversational dataset exploration, and AI-generated insights via Gemini API.",
      techStack: ["Python", "FastAPI", "Pandas", "NumPy", "Gemini API"],
      link: "https://datasynth-ai-ten.vercel.app/",
      github: "https://github.com/NithinReddyChereddy/DataSynth-AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      size: "large"
    },
    {
      id: 2,
      title: "Wildland Search & Rescue Dashboard",
      description: "Built an interactive Power BI dashboard for operational search and rescue analysis featuring KPI tracking, DAX measures, drill-down reports, slicers and performance monitoring to identify operational bottlenecks and resource utilization trends.",
      techStack: ["Power BI", "DAX", "Data Modeling"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiNTExZmRjMGMtMzZmOS00M2Y0LWEwYjUtODc5MjE0NGNmNzE0IiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
      github: "https://github.com/NithinReddyChereddy/PowerBI-Wildland-Search-Rescue-Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      size: "medium"
    },
    {
      id: 3,
      title: "California Crime Rate Analysis Dashboard | MS Excel",
      description: "Built an interactive dashboard using MS Excel to visualize California crime rates. Enhanced dashboard usability with interactive buttons, slicers, and an organized layout, enabling quick interpretation of crime trends.",
      techStack: ["MS Excel", "Data Analysis", "Dashboarding"],
      link: "https://www.linkedin.com/posts/nithinch06_exceldashboard-dataanalysis-crimedata-activity-7316845302538219521-vVdb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEgcRBYB7q-4pOH_lUF5V7Kfru4RCFg4Qfg",
      github: "https://github.com/NithinReddyChereddy/Califorina-crime-rate-dashboard-using-ms-excel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      size: "large"
    },
    {
      id: 4,
      title: "California Crime Analysis",
      description: "Performed exploratory data analysis on over 20,000 crime records using Python to identify geographical and temporal crime patterns through automated data cleaning, preprocessing, visualization and statistical analysis.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
      link: "https://www.linkedin.com/posts/nithinch06_datascience-crimeanalysis-python-activity-7316856173259890689-MRyZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEgcRBYB7q-4pOH_lUF5V7Kfru4RCFg4Qfg",
      github: "https://github.com/NithinReddyChereddy/califorina-crime-rate-analysis-using-python",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      size: "medium"
    },
    {
      id: 5,
      title: "GenAI Stealth Mode Assistant",
      description: "A high-utility, user-focused system assistant powered by Gemini API, designed with a 'bring-your-own-key' model. Features include global hotkey activation, stealth mode transparency control, file drag-and-drop support, and AI-driven workflow optimization.",
      techStack: ["Python", "Gemini API", "Tkinter", "AI-Augmented Workflows"],
      link: "https://github.com/NithinReddyChereddy",
      github: "https://github.com/NithinReddyChereddy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      size: "medium"
    }
  ],

  about: {
    bio: "I am a Computer Science student specializing in Data Science with a strong interest in Data Analytics, Artificial Intelligence, and intelligent software development. I enjoy transforming raw data into actionable insights while building AI-assisted applications and automation solutions using modern development tools and APIs.",
    extendedBio: "My experience includes developing data analytics applications with Python, FastAPI, Gemini API, Power BI, SQL, and workflow automation. I regularly use AI-native development environments such as Cursor, Claude Code, and AntiGravity to accelerate prototyping, debugging, and application development while maintaining a strong understanding of software engineering fundamentals.\n\nI am passionate about combining business intelligence with AI-powered solutions and continuously expanding my knowledge of LLM applications, AI agents, and enterprise automation. I enjoy solving real-world problems through analytical thinking, rapid experimentation, and continuous learning.",
    image: process.env.PUBLIC_URL + "/formals.jpeg",
    highlights: [
      "Transforming data into insights with Power BI, Excel, and SQL",
      "Building AI-assisted applications with Python, FastAPI, and Gemini API",
      "Accelerating software engineering with Cursor, Claude Code, and AntiGravity",
      "Applying analytical thinking to workflow automation and business intelligence"
    ]
  },

  certifications: [
    {
      id: 1,
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 2026",
      skills: ["Oracle", "Data Platform", "SQL", "Cloud Databases"],
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=895861BDEE3328B9C740D55E03B07484B11D1B1B88A4EA0D8723D1F7D3F27BAA",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "January 2026",
      skills: ["OCI", "Generative AI", "Machine Learning", "Cloud AI Services"],
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=55ED73A826D7AC53F1DC8E85E867DBD0F30AB948FB2FA686FB4141A7ABDCA7E4",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 3,
      title: "TechA Data Analytics using Power BI Foundation Certification",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Power BI", "Data Analytics", "Data Quality", "Business Communication"],
      link: "TechA Data Analytics using Power BI Foundation Certification.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 4,
      title: "Power BI for Business Professionals",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Power BI", "Business Intelligence", "Decision Science", "EDA"],
      link: "Power BI for Business Professionals.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 5,
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata (Forage)",
      date: "September 2025",
      skills: ["AI Analytics", "Predictive Modeling", "Process Automation", "Data Insights"],
      link: "ai powered data analytics job simulation (forage).pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 6,
      title: "Hands-On Data Visualization with Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Data Visualization", "Power BI", "Data Storytelling", "Dashboards"],
      link: "Hands-On Data Visualization with Microsoft Power BI.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 7,
      title: "Master Generative AI & Generative AI tools",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "AI-Assisted Dev"],
      link: "master generative ai & generative ai tools.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ],

  social: {
    github: "https://github.com/NithinReddyChereddy",
    linkedin: "https://www.linkedin.com/in/nithinch06/",
    email: process.env.REACT_APP_EMAIL || "Email hidden (see live site)",
    phone: process.env.REACT_APP_PHONE || "Phone hidden (see live site)",
    location: "Ongole, Andhra Pradesh"
  }
};
