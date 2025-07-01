export interface Project {
  id: number
  name: string
  description: string
  detailedDescription: string
  techStack: string[]
  languages: string[]
  images: string[] // Changed from single image to array of images
  githubLink: string
  liveLink: string
  year?: string
  status?: string
  features?: string[]
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    detailedDescription:
      "A robust e-commerce platform built from the ground up, featuring secure payment processing via Stripe, a comprehensive admin dashboard for product and order management, and real-time inventory updates. Designed for scalability and a seamless user experience.",
    techStack: ["React", "Node.js", "Firebase", "Stripe", "Tailwind CSS"],
    languages: ["TypeScript", "JavaScript"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600&text=Dashboard",
      "/placeholder.svg?height=400&width=600&text=Products",
      "/placeholder.svg?height=400&width=600&text=Checkout",
    ],
    githubLink: "https://github.com/example/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
    year: "2024",
    status: "Live",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Stripe payment gateway integration",
      "Admin panel for product, order, and user management",
      "Real-time inventory updates",
      "Responsive design for all devices",
    ],
  },
  {
    id: 2,
    name: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
    detailedDescription:
      "A comprehensive mobile fitness application developed with Flutter, offering personalized workout plans, detailed progress tracking, and social features to connect with friends. Integrates with Firebase for backend services and real-time data synchronization.",
    techStack: ["Flutter", "Firebase", "Dart", "Provider"],
    languages: ["Dart"],
    images: [
      "/placeholder.svg?height=400&width=600&text=Fitness+App",
      "/placeholder.svg?height=400&width=600&text=Workouts",
      "/placeholder.svg?height=400&width=600&text=Progress",
      "/placeholder.svg?height=400&width=600&text=Social",
    ],
    githubLink: "https://github.com/example/fitness-app",
    liveLink: "https://fitness-app-demo.com",
    year: "2024",
    status: "Beta",
    features: [
      "Customizable workout routines",
      "Activity tracking (steps, calories, distance)",
      "Progress charts and analytics",
      "Social feed and friend challenges",
      "Push notifications for workout reminders",
      "Offline data synchronization",
    ],
  },
  {
    id: 3,
    name: "Real-time Chat Application",
    description: "WebSocket-based chat app with rooms, file sharing, and message encryption.",
    detailedDescription:
      "A modern real-time chat application built using WebSockets (Socket.io) for instant messaging. Features include private and group chat rooms, file sharing capabilities, end-to-end message encryption, and user presence indicators. Backend powered by Node.js and MongoDB.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    languages: ["JavaScript", "TypeScript"],
    images: [
      "/placeholder.svg?height=400&width=600&text=Chat+App",
      "/placeholder.svg?height=400&width=600&text=Messages",
      "/placeholder.svg?height=400&width=600&text=Rooms",
      "/placeholder.svg?height=400&width=600&text=Files",
    ],
    githubLink: "https://github.com/example/chat-app",
    liveLink: "https://chat-demo.vercel.app",
    year: "2023",
    status: "Live",
    features: [
      "Real-time messaging with WebSockets",
      "Private and public chat rooms",
      "File and image sharing",
      "User presence (online/offline)",
      "Message encryption (client-side)",
      "Scalable backend with MongoDB",
    ],
  },
  {
    id: 4,
    name: "Blockchain Voting System",
    description: "Decentralized voting platform built with smart contracts and web3 integration.",
    detailedDescription:
      "A secure and transparent decentralized voting system leveraging blockchain technology. Smart contracts on Ethereum ensure immutable vote records and verifiable results. Frontend built with React and Web3.js for seamless interaction with the blockchain.",
    techStack: ["React", "Rust", "Solidity", "Web3", "Hardhat"],
    languages: ["JavaScript", "Solidity", "Rust"],
    images: [
      "/placeholder.svg?height=400&width=600&text=Voting+System",
      "/placeholder.svg?height=400&width=600&text=Ballot",
      "/placeholder.svg?height=400&width=600&text=Results",
      "/placeholder.svg?height=400&width=600&text=Blockchain",
    ],
    githubLink: "https://github.com/example/blockchain-voting",
    liveLink: "https://voting-dapp.vercel.app",
    year: "2023",
    status: "Demo",
    features: [
      "Decentralized and tamper-proof voting",
      "Smart contract deployment on Ethereum",
      "User registration and voter verification",
      "Real-time vote counting",
      "Transparent and auditable results",
      "Metamask integration for wallet connection",
    ],
  },
  {
    id: 5,
    name: "AI-Powered Task Manager",
    description: "Smart task management with AI suggestions and automated scheduling.",
    detailedDescription:
      "An intelligent task management application that uses AI to provide smart suggestions for task prioritization and automated scheduling. Built with React for the frontend, Python (Flask) for the AI backend, and Firebase for data storage and authentication.",
    techStack: ["React", "Python", "TensorFlow", "Firebase", "Flask"],
    languages: ["JavaScript", "Python"],
    images: [
      "/placeholder.svg?height=400&width=600&text=AI+Tasks",
      "/placeholder.svg?height=400&width=600&text=Dashboard",
      "/placeholder.svg?height=400&width=600&text=AI+Suggestions",
      "/placeholder.svg?height=400&width=600&text=Analytics",
    ],
    githubLink: "https://github.com/example/ai-tasks",
    liveLink: "https://ai-tasks-demo.com",
    year: "2024",
    status: "Live",
    features: [
      "AI-driven task prioritization",
      "Automated task scheduling",
      "User-friendly interface for task creation and management",
      "Reminders and notifications",
      "Integration with calendar services",
      "Progress tracking and analytics",
    ],
  },
  {
    id: 6,
    name: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices with data visualization.",
    detailedDescription:
      "A real-time IoT monitoring dashboard designed for visualizing sensor data from various devices. Features include customizable widgets, historical data analysis, and alert notifications. Built with Flutter for cross-platform compatibility and Node.js for the backend with InfluxDB.",
    techStack: ["Flutter", "Node.js", "InfluxDB", "MQTT", "Docker"],
    languages: ["Dart", "JavaScript"],
    images: [
      "/placeholder.svg?height=400&width=600&text=IoT+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Sensors",
      "/placeholder.svg?height=400&width=600&text=Charts",
      "/placeholder.svg?height=400&width=600&text=Alerts",
    ],
    githubLink: "https://github.com/example/iot-dashboard",
    liveLink: "https://iot-demo.vercel.app",
    year: "2023",
    status: "Live",
    features: [
      "Real-time sensor data visualization",
      "Customizable dashboard widgets",
      "Historical data analysis and charting",
      "Configurable alert system",
      "MQTT protocol integration for device communication",
      "Scalable data storage with InfluxDB",
    ],
  },
  {
    id: 7,
    name: "Social Media Analytics",
    description: "Comprehensive social media analytics platform with sentiment analysis and engagement tracking.",
    detailedDescription:
      "An advanced social media analytics platform providing insights into audience engagement, sentiment, and trend analysis. Utilizes Python for data processing and machine learning, with a React frontend for interactive dashboards. Deployed on AWS with GraphQL API.",
    techStack: ["React", "Python", "MongoDB", "AWS", "GraphQL", "Pandas"],
    languages: ["JavaScript", "Python"],
    images: [
      "/placeholder.svg?height=400&width=600&text=Social+Analytics",
      "/placeholder.svg?height=400&width=600&text=Dashboard",
      "/placeholder.svg?height=400&width=600&text=Sentiment",
      "/placeholder.svg?height=400&width=600&text=Reports",
    ],
    githubLink: "https://github.com/example/social-analytics",
    liveLink: "https://social-analytics-demo.com",
    year: "2024",
    status: "Beta",
    features: [
      "Real-time social media data ingestion",
      "Sentiment analysis of posts and comments",
      "Audience demographics and engagement metrics",
      "Trend identification and forecasting",
      "Customizable reports and dashboards",
      "Scalable cloud infrastructure on AWS",
    ],
  },
  {
    id: 8,
    name: "Cryptocurrency Tracker",
    description: "Real-time crypto portfolio tracker with price alerts, news integration, and trading insights.",
    detailedDescription:
      "A dynamic cryptocurrency portfolio tracker that provides real-time price updates, personalized alerts, and integrated news feeds. Users can manage their crypto holdings, view historical data, and gain insights into market trends. Built with React and Node.js.",
    techStack: ["React", "Node.js", "TypeScript", "WebSocket", "Redis", "CoinGecko API"],
    languages: ["TypeScript", "JavaScript"],
    images: [
      "/placeholder.svg?height=400&width=600&text=Crypto+Tracker",
      "/placeholder.svg?height=400&width=600&text=Portfolio",
      "/placeholder.svg?height=400&width=600&text=Charts",
      "/placeholder.svg?height=400&width=600&text=News",
    ],
    githubLink: "https://github.com/example/crypto-tracker",
    liveLink: "https://crypto-tracker-demo.vercel.app",
    year: "2023",
    status: "Live",
    features: [
      "Real-time cryptocurrency price tracking",
      "Portfolio management and value calculation",
      "Customizable price alerts",
      "Integrated crypto news feed",
      "Historical price charts",
      "Secure user authentication",
    ],
  },
]
