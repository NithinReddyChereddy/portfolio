
export const portfolioData = {
  name: "Nithin Reddy Chereddy",
  tagline: "Aspiring Data analyst",

  skills: {
    "Languages": [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "SQL" },
      { name: "HTML/CSS" }
    ],
    "Frontend": [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Streamlit" },
      { name: "Tailwind CSS" },
      { name: "TkinterDnD2" }
    ],
    "Backend": [
      { name: "Java Spring Boot" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "FastAPI" }
    ],
    "Databases & Tools": [
      { name: "PostgreSQL" },
      { name: "Java Collections" },
      { name: "Power BI" },
      { name: "Advanced Excel" }
    ],
    "Gen AI & Cloud": [
      { name: "Gemini API" },
      { name: "AI-Assisted Development" },
      { name: "Git & GitHub" },
      { name: "Cloud Hosting" }
    ]
  },

  experience: [
    {
      role: "DSA with Java/C++ with Industrial Practices",
      company: "Training Program",
      period: "Jun 2025 - Jul 2025",
      achievements: [
        "Gained hands-on experience in core Java & C++, focusing on object-oriented design and clean code practices.",
        "Learned and implemented key Data Structures (arrays, linked lists, stacks, queues, trees, graphs).",
        "Practiced algorithmic problem-solving using recursion, sorting, searching, and greedy techniques.",
        "Completed a project Hospital Management System (Java) – implemented modules for patient registration, appointment scheduling, staff records, and billing using OOP concepts, collections, and modular architecture."
      ],
      technologies: ["Java", "C++", "Data Structures", "Algorithms", "OOP"]
    },
    {
      role: "Bachelor of Technology - Computer Science and Engineering",
      company: "Lovely Professional University (LPU)",
      period: "2022 - Present",
      achievements: [
        "Architected a Client-Server Hospital Management system using React.js and Java Spring Boot with efficient OOP design.",
        "Developed a system-integrated AI Assistant using Gemini API with global hotkeys, drag-and-drop file support, and dynamic transparency.",
        "Built comprehensive, data-driven dashboards in Power BI and Excel to analyze complex global datasets and provide actionable insights.",
        "Utilized AI-assisted workflows to prototype full-stack application logic and architect scalable backend systems efficiently.",
        "Currently maintaining a CGPA of 7.3 in Bachelor of Technology - Computer Science and Engineering."
      ],
      technologies: ["Java Spring Boot", "React", "Python", "Power BI", "Gemini API"]
    },
    {
      role: "12th Grade (Intermediate Education)",
      company: "Sri Chaitanya Junior College",
      period: "2021 - 2023",
      achievements: [
        "Completed senior secondary education.",
        "Secured a strong academic percentage of 85."
      ],
      technologies: []
    }
  ],

  achievements: [
    {
      id: 1,
      label: "Professional Certifications",
      value: "6+",
      description: "Completed industry-grade certifications in Data Analytics, Power BI, and GenAI."
    },
    {
      id: 2,
      label: "Core Projects",
      value: "3+",
      description: "End-to-end full-stack and AI-assisted applications developed independently."
    },
    {
      id: 3,
      label: "Data Dashboards",
      value: "2+",
      description: "Comprehensive Power BI and Excel dashboards built for analytics and decision support."
    },
    {
      id: 4,
      label: "Core Technologies",
      value: "10+",
      description: "Languages, frameworks, and tools utilized across various personal and academic projects."
    }
  ],

  projects: [
    {
      id: 1,
      title: "Wildland Search & Rescue Missions – Power BI Dashboard",
      description: "A Power BI dashboard that analyzes global Wildland Search and Rescue missions, highlighting key metrics, trends, subject demographics, and mission insights. Accompanied by Excel dashboards analyzing regional crime rates.",
      techStack: ["Power BI", "Excel", "DAX", "Data Modeling"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiNTExZmRjMGMtMzZmOS00M2Y0LWEwYjUtODc5MjE0NGNmNzE0IiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
      github: "https://github.com/NithinReddyChereddy/PowerBI-Wildland-Search-Rescue-Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Dashboard themed
      size: "medium"
    },
    {
      id: 2,
      title: "California Crime Rate Analysis Dashboard | MS Excel",
      description: "Built an interactive dashboard using MS Excel to visualize California crime rates. Enhanced dashboard usability with interactive buttons, slicers, and an organized layout, enabling quick interpretation of crime trends.",
      techStack: ["MS Excel", "Data Analysis", "Dashboarding"],
      link: "https://github.com/NithinReddyChereddy/Califorina-crime-rate-dashboard-using-ms-excel",
      github: "https://github.com/NithinReddyChereddy/Califorina-crime-rate-dashboard-using-ms-excel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Data visualization themed image
      size: "large"
    },
    {
      id: 3,
      title: "California Crime Rate Analysis | Python",
      description: "Applied Exploratory Data Analysis, correlation analysis, grouping & aggregation, and crime categorization to uncover meaningful behavioral patterns. Visualized major crime classes using heatmaps, stacked bars, trend lines, county-wise comparison plots, and density visuals.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/NithinReddyChereddy/califorina-crime-rate-analysis-using-python",
      github: "https://github.com/NithinReddyChereddy/califorina-crime-rate-analysis-using-python",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", // Code / abstract logic themed image
      size: "medium"
    },
    {
      id: 4,
      title: "Hospital Management System",
      description: "A full-stack Client-Server web application mapping hospital administrative workflows. Highlights include an ER module prioritizing critical cases via Priority Queue algorithms, real-time medicine inventory tracking, seamless patient registration, and batch processing for fast discharges.",
      techStack: ["React.js", "Java Spring Boot", "Bootstrap", "Axios", "Java Collections"],
      link: "#",
      github: "https://github.com/NithinReddyChereddy",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", // Medical/Tech themed image
      size: "large"
    },
    {
      id: 5,
      title: "Stealth AI Productivity HUD",
      description: "A portable, system-wide desktop assistant requiring zero installation. Features global hotkeys for instant toggling, variable user-adjustable transparency, drag-and-drop .txt file loading, and a Gemini API integration for frictionless workflow integration.",
      techStack: ["Python", "TkinterDnD2", "Gemini API", "Global Hotkeys"],
      link: "#", // Update with your GitHub link
      github: "https://github.com/NithinReddyChereddy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", // AI/HUD themed image
      size: "medium"
    }
  ],

  about: {
    bio: "I am a Data Analyst & Full-Stack Developer focused on building high-utility applications with intuitive UX. From engineering Java-based healthcare management systems to architecting AI assistants with custom Stealth Mode functionality, I specialize in bridging the gap between robust backend logic and user-centric design. I leverage AI-augmented development workflows to rapidly prototype, iterate, and deploy scalable solutions that solve real-world problems.",
    extendedBio: "My journey merges software architecture with data-driven insights. I embrace modern engineering workflows, utilizing AI tools to assist in architecting scalable state-management, prototyping secure API endpoints, and translating complex logic into functional applications efficiently. I am actively seeking opportunities to apply my full-stack and analytical skillset to robust production environments.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nithin",
    highlights: [
      "Proficient in Full-Stack Dev (React.js, Spring Boot) and Data Analytics (Power BI)",
      "Experienced in Modern AI-Assisted Development Workflows",
      "Strong foundation in OOP and Data Structures & Algorithms",
      "Dedicated to clean code, modular architecture, and intuitive UI/UX"
    ]
  },
  certifications: [
    {
      id: 1,
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 2026",
      skills: ["Oracle", "Data Platform", "Foundations Associate"],
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=895861BDEE3328B9C740D55E03B07484B11D1B1B88A4EA0D8723D1F7D3F27BAA",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      id: 2,
      title: "TechA Data Analytics using Power BI Foundation Certification",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Power BI", "Data Analytics", "Data Quality", "Business Communication"],
      link: "/TechA Data Analytics using Power BI Foundation Certification.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "Power BI for Business Professionals",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Power BI", "Business Intelligence", "Decision Science", "EDA"],
      link: "/Power BI for Business Professionals.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 4,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata",
      date: "September 2025",
      skills: ["AI Analytics", "Predictive Modeling", "Process Automation", "AI Strategy"],
      link: "/ai powered data analytics job simulation (forage).pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 5,
      title: "Hands-On Data Visualization with Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Data Visualization", "Power BI", "Data Storytelling", "Dashboards"],
      link: "/Hands-On Data Visualization with Microsoft Power BI.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 6,
      title: "Master Generative AI & Generative AI tools",
      issuer: "Infosys Springboard",
      date: "December 2025",
      skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "AI-Assisted Dev"],
      link: "/master generative ai & generative ai tools.pdf",
      isPdf: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
  ],
  social: {
    github: "https://github.com/NithinReddyChereddy",
    linkedin: "https://www.linkedin.com/in/nithinch06/",
    email: "nithinreddychereddy@gmail.com"
  }
};
