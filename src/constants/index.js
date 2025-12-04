import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    visiro,
    mahinda,
    sliit,
    carrent,
    jobit,
    tripguide,
    threejs,
    csharp,
    net,
    python,
    netflix,
    af,
    csse,
    ssd,
    git1,
    linkedin,
    facebook,
    twitter,
    mail,
    fashow,
    mlflow_churn,
    ragml,
    yolo,
    xray,
    kaggle_house,
    sentiment,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "publication",
      title: "Research",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "C#.NET Developer ",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C sharp",
      icon: csharp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Dot Net",
      icon: net,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];


  const social = [
    {
      name: "github",
      icon: git1,
    },
    {
      name: "Linkedin",
      icon: linkedin,
    },
    {
      name: "facebook",
      icon: facebook,
    },
    {
      name: "twitter",
      icon: twitter,
    },
    {
      name: "mail",
      icon: mail,
    },
        
  ];
  
  const experiences = [
    {
      type: "work",
      title: "Software Engineer",
      company_name: "Visiro Global Solutions",
      icon: visiro,
      iconBg: "#E6DEDD",
      date: "December 2021 - February 2025",
      points: [
        "Led software development projects while contributing hands-on as a full-stack engineer, focusing on Saas based ERP system development and integration within Agile teams.",
        "Designed and developed ERP modules (HR, finance, inventory) using C#, ASP.NET MVC, Entity Framework, and SQL Server.",
        "Built and integrated REST APIs and front-end components using JavaScript, HTML, CSS, and jQuery.",
        "Maintained code quality with Git, supported testing, and contributed to deployment processes via Azure DevOps.",
        "Collaborated with analysts, QA, and clients to ensure technical solutions met business needs.",
      ],
    },
    {
      type: "work",
      title: "Trainee Software Engineer",
      company_name: "Flintec Transducers",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "December 2020 - December 2021",
      points: [
        "Developing and maintaining desktop and web applications using C# .NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      type: "education",
      title: "Sri Lanka Institute of Information Technology",
      icon: sliit,
      iconBg: "#E6DEDD",
      date: "January 2019 - March 2023",
      points: [
        "Completed BSc. (Hons) in Information Technology specializing in Software Engineering.",
        "Achieved a cumulative GPA of 3.0.",
        "Completed and published research project: Intelligent Herbal Plant Detecting System with Sinhala-Supported Social Media Platform.",
        "Selected to represent university at Microsoft Imagine Cup 2022.",
      ],
    },
    {
      type: "education",
      title: "Mahinda College, Galle",
      icon: mahinda,
      iconBg: "#E6DEDD",
      date: "2004 - 2018",
      points: [
        "Passed GCE Ordinary Level 2014 with 9 A's in English medium.",
        "Passed GCE Advanced Level 2018 in Biology Stream.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "End-to-End MLOps Pipeline",
      description:
        "Production-grade ML pipeline for customer churn prediction with experiments tracked in MLflow, 50-trial Optuna hyperparameter optimization, and a FastAPI REST endpoint with auto-generated Swagger docs. Optimized XGBoost achieved F1=0.5947 and AUC=0.8493. Demonstrates the full ML lifecycle: data preprocessing, experiment tracking, systematic optimization, model serialization, and API serving.",
      tags: [
        {
          name: "MLflow",
          color: "blue-text-gradient",
        },
        {
          name: "Optuna",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
        {
          name: "MLOps",
          color: "blue-text-gradient",
        },
      ],
      image: mlflow_churn,
      source_code_link: "https://github.com/GamithaManawadu/MLOps-Churn-Pipeline",
    },
    {
      name: "RAG ML Chatbot",
      description:
        "Built a Retrieval-Augmented Generation chatbot that answers ML questions by searching through my learning and project explanation files. Achieved 100% retrieval accuracy (8/8) and 0% hallucination rate (6/6 out-of-scope questions correctly refused). Compared two embedding models and found the smaller all-MiniLM-L6-v2 (384 dims) outperformed the larger BAAI/bge-base (768 dims). Built with LangChain, ChromaDB, Gemini, and Gradio.",
      tags: [
        {
          name: "LangChain",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
        {
          name: "Vector Databases",
          color: "pink-text-gradient",
        },
      ],
      image: ragml,
      source_code_link: "https://github.com/GamithaManawadu/RAG-ML-Chatbot",
    },
    {
      name: "Real-Time Object Detection Web App (YOLOv8)",
      description:
        "Full-featured Streamlit web app with 4 input modes (single image, batch, video with tracking, webcam), 5 YOLOv8 model sizes, detection heatmaps, image preprocessing controls, interactive Plotly charts, and CSV/JSON/PNG export. Deployed live on HuggingFace Spaces.",
      tags: [
        {
          name: "YOLOv8",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "pink-text-gradient",
        },
        {
          name: "Object Detection",
          color: "blue-text-gradient",
        },
      ],
      image: yolo,
      source_code_link: "https://github.com/GamithaManawadu/YOLO-Object-Detection-Web-App",
    },

    {
      name: "Medical X-Ray Classification with Grad-CAM Explainability",
      description:
        "Built a deep learning system to classify chest X-rays as Normal or Pneumonia using three CNN approaches. Frozen MobileNetV2 achieved 89.9% accuracy with 96.7% sensitivity. Implemented Grad-CAM heatmaps to prove the model focuses on lung regions, solving a nested model architecture challenge. Honestly documented why fine-tuning hurt on this small dataset (87.7% vs 89.9%).",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "Transfer Learning",
          color: "green-text-gradient",
        },
        {
          name: "Grad-CAM",
          color: "pink-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "pink-text-gradient",
        },
      ],
      image: xray,
      source_code_link: "https://github.com/GamithaManawadu/Medical-X-Ray-Classification-Normal-vs-Pneumonia",
    },

    {
      name: "House Price Prediction (Kaggle Rank #337)",
      description:
        "Kaggle competition submission using 11 engineered features, log-transformed target, and a weighted ensemble of 6 models (Ridge, Lasso, ElasticNet, GBR, XGBoost, LightGBM). Lasso achieved the best individual CV RMSE (0.1141) and automatically eliminated 130 out of 216 features. Scored RMSE 0.12098 on Kaggle leaderboard.",
      tags: [
        {
          name: "Feature Engineering",
          color: "blue-text-gradient",
        },
        {
          name: "Ensemble Methods",
          color: "green-text-gradient",
        },
        {
          name: "XGBoost",
          color: "pink-text-gradient",
        },
        {
          name: "Regression",
          color: "pink-text-gradient",
        },
      ],
      image: kaggle_house,
      source_code_link: "https://github.com/GamithaManawadu/House-Price-Prediction-for-Kaggle-Competition",
    },

    {
      name: "Sentiment Analysis (TF-IDF vs BERT vs RoBERTa)",
      description:
        "Compared traditional ML (TF-IDF + LogReg 89.5%) against transformers (DistilBERT 93.3%, RoBERTa 95.4%) for movie review sentiment analysis. Includes LIME explainability, 5-fold cross-validation, learning curves, ensemble methods, speed benchmarks (TF-IDF is 1573x faster than BERT), and a Gradio demo.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "BERT",
          color: "green-text-gradient",
        },
        {
          name: "RoBERTa",
          color: "pink-text-gradient",
        },
        {
          name: "Transformers",
          color: "pink-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: sentiment,
      source_code_link: "https://github.com/GamithaManawadu/Sentiment-Analysis-TF-IDF-vs-BERT",
    },


  ];
  
  export { services, technologies, experiences, testimonials, projects, social };