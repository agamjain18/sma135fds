"use client"

import { useState, useEffect } from "react"
import { projectsData } from "@/data/projects" // Import projectsData from the new path

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
  "Next.js",
  "TypeScript",
  "AWS",
  "Docker",
  "GraphQL",
  "Tailwind CSS", // Added from project data
  "Provider", // Added from project data
  "Express.js", // Added from project data
  "Hardhat", // Added from project data
  "IPFS", // Added from project data
  "OpenAI", // Added from project data
  "Flask", // Added from project data
  "Pandas", // Added from project data
  "WebSocket", // Added from project data
  "Redis", // Added from project data
  "CoinGecko API", // Added from project data
  "WebRTC", // Added from project data
]

export const useSkillsFilter = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  useEffect(() => {
    if (selectedSkills.length === 0) {
      setFilteredProjects(projectsData)
    } else {
      const filtered = projectsData.filter((project) =>
        selectedSkills.every((skill) => project.techStack.includes(skill)),
      )
      setFilteredProjects(filtered)
    }
  }, [selectedSkills])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const clearFilters = () => {
    setSelectedSkills([])
  }

  return {
    selectedSkills,
    filteredProjects,
    allSkills,
    toggleSkill,
    clearFilters,
  }
}
