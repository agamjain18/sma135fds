"use client"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import ExperienceSection from "@/components/experience-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// Project data structure
const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    techStack: ["React", "Node.js", "Firebase", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    name: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress analytics",
    techStack: ["Flutter", "Firebase", "Dart"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/fitness-app",
    liveLink: "https://fitness-app-demo.com",
  },
  {
    id: 3,
    name: "Real-time Chat Application",
    description: "WebSocket-based chat app with rooms, file sharing, and message encryption",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/chat-app",
    liveLink: "https://chat-demo.vercel.app",
  },
  {
    id: 4,
    name: "Blockchain Voting System",
    description: "Decentralized voting platform built with smart contracts and web3 integration",
    techStack: ["React", "Rust", "Solidity", "Web3"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/blockchain-voting",
    liveLink: "https://voting-dapp.vercel.app",
  },
  {
    id: 5,
    name: "AI-Powered Task Manager",
    description: "Smart task management with AI suggestions and automated scheduling",
    techStack: ["React", "Python", "TensorFlow", "Firebase"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/ai-tasks",
    liveLink: "https://ai-tasks-demo.com",
  },
  {
    id: 6,
    name: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices with data visualization",
    techStack: ["Flutter", "Node.js", "InfluxDB", "MQTT"],
    image: "/placeholder.svg?height=200&width=300",
    githubLink: "https://github.com/example/iot-dashboard",
    liveLink: "https://iot-demo.vercel.app",
  },
]

const allSkills = [
  "React",
  "Flutter",
  "Node.js",
  "Rust",
  "Python",
  "Firebase",
  "MongoDB",
  "TensorFlow",
  "Solidity",
  "Web3",
  "Socket.io",
  "Stripe",
  "Dart",
  "InfluxDB",
  "MQTT",
]

export default function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects /> {/* Projects component now handles its own data */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
