"use client"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const Hero = () => {
  // Base skills data
  const baseSkills = [
    { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "JS", color: "from-yellow-400 to-yellow-600", icon: "🟨" },
    { name: "Node", color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "Python", color: "from-green-500 to-blue-500", icon: "🐍" },
    { name: "Firebase", color: "from-orange-400 to-red-500", icon: "🔥" },
  ]

  // Carefully spaced positions to prevent overlapping - minimum 60px apart
  const nonOverlappingPositions = [
    { top: "-30px", left: "-60px" }, // Top-left corner
    { top: "-25px", right: "-55px" }, // Top-right corner
    { top: "50%", left: "-70px", transform: "translateY(-50%)" }, // Middle-left
    { top: "50%", right: "-70px", transform: "translateY(-50%)" }, // Middle-right
    { bottom: "-30px", left: "-60px" }, // Bottom-left corner
    { bottom: "-25px", right: "-55px" }, // Bottom-right corner
    { top: "15px", left: "-45px" }, // Upper-left
    { top: "20px", right: "-40px" }, // Upper-right
    { bottom: "15px", left: "-45px" }, // Lower-left
    { bottom: "20px", right: "-40px" }, // Lower-right
    { top: "30%", left: "-65px", transform: "translateY(-50%)" }, // Upper-middle-left
    { top: "70%", right: "-65px", transform: "translateY(-50%)" }, // Lower-middle-right
  ]

  const [profileSkills, setProfileSkills] = useState([])

  // Function to shuffle array ensuring no duplicates
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Function to check if two positions would overlap (within 50px)
  const checkOverlap = (pos1, pos2) => {
    // Convert positions to approximate pixel coordinates for overlap checking
    const getCoords = (pos) => {
      let x = 0,
        y = 0

      if (pos.left) x = Number.parseInt(pos.left.replace("px", ""))
      if (pos.right) x = -Number.parseInt(pos.right.replace("px", ""))
      if (pos.top) y = Number.parseInt(pos.top.replace("px", ""))
      if (pos.bottom) y = -Number.parseInt(pos.bottom.replace("px", ""))

      return { x, y }
    }

    const coords1 = getCoords(pos1)
    const coords2 = getCoords(pos2)

    const distance = Math.sqrt(Math.pow(coords1.x - coords2.x, 2) + Math.pow(coords1.y - coords2.y, 2))

    return distance < 50 // 50px minimum distance
  }

  // Generate non-overlapping random positions
  const generateNonOverlappingPositions = () => {
    const shuffledPositions = shuffleArray(nonOverlappingPositions)
    const selectedPositions = []

    // Select first 5 positions that don't overlap
    for (let i = 0; i < shuffledPositions.length && selectedPositions.length < 5; i++) {
      const currentPos = shuffledPositions[i]
      let overlaps = false

      // Check if current position overlaps with any selected position
      for (let j = 0; j < selectedPositions.length; j++) {
        if (checkOverlap(currentPos, selectedPositions[j])) {
          overlaps = true
          break
        }
      }

      if (!overlaps) {
        selectedPositions.push(currentPos)
      }
    }

    // If we don't have 5 positions, fill with remaining positions
    while (selectedPositions.length < 5) {
      const remainingPositions = shuffledPositions.filter((pos) => !selectedPositions.includes(pos))
      if (remainingPositions.length > 0) {
        selectedPositions.push(remainingPositions[0])
      } else {
        break
      }
    }

    return selectedPositions
  }

  // Generate random positions on component mount
  useEffect(() => {
    const nonOverlappingPositions = generateNonOverlappingPositions()
    const skillsWithRandomPositions = baseSkills.map((skill, index) => ({
      ...skill,
      position: nonOverlappingPositions[index],
    }))
    setProfileSkills(skillsWithRandomPositions)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-950" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Profile Image Section with Skills Around It */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8 mt-8 relative z-[100] inline-block"
          >
            {/* Container for profile and surrounding skills - extra padding for non-overlapping */}
            <div className="relative" style={{ padding: "80px 90px" }}>
              {/* Floating Skills Around Profile - Non-overlapping random positions */}
              {profileSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1.2 + index * 0.15 },
                    scale: { duration: 0.6, delay: 1.2 + index * 0.15 },
                    rotate: { duration: 0.8, delay: 1.2 + index * 0.15 },
                    y: {
                      duration: 2.5 + index * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    },
                  }}
                  className="absolute z-[120]"
                  style={{
                    top: skill.position?.top,
                    left: skill.position?.left,
                    right: skill.position?.right,
                    bottom: skill.position?.bottom,
                    transform: skill.position?.transform,
                  }}
                >
                  {/* 3D Glassmorphism Circle with enhanced styling */}
                  <div
                    className={`
                    w-16 h-16 md:w-20 md:h-20
                    bg-gradient-to-br ${skill.color}
                    rounded-full
                    shadow-2xl shadow-black/40 dark:shadow-black/60
                    border-2 border-white/50 dark:border-white/30
                    relative overflow-hidden
                    backdrop-blur-xl
                    hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer
                    group
                  `}
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%), linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      backdropFilter: "blur(25px)",
                      WebkitBackdropFilter: "blur(25px)",
                    }}
                  >
                    {/* Enhanced glass highlight */}
                    <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 bg-white/40 rounded-full blur-sm" />

                    {/* Secondary highlight */}
                    <div className="absolute top-1 left-1 w-3 h-3 md:w-4 md:h-4 bg-white/60 rounded-full blur-sm" />

                    {/* Skill Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name with better styling */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <span className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-bold drop-shadow-lg bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 backdrop-blur-sm whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>

                    {/* Enhanced 3D depth shadow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 md:w-16 md:h-4 bg-black/30 rounded-full blur-lg" />

                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Profile Image Container */}
              <div className="relative inline-block">
                {/* Enhanced Static Ring */}
                <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full z-[110]">
                  <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-black" />
                  </div>
                </div>

                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-25 animate-pulse z-[105]" />

                {/* Profile Image */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-6 border-white dark:border-gray-900 shadow-2xl z-[110]">
                  <img
                    src="/placeholder.svg?height=224&width=224"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Enhanced Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-900 shadow-lg z-[120]"
                >
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Name Section - Moved below profile image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 relative z-[100]"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Hi, I'm Alex Johnson
              </span>
            </h1>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 relative z-20"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            >
              <Briefcase className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 px-8 py-4 text-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 px-8 py-4 text-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <Download className="mr-3 h-6 w-6 group-hover:bounce transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col items-center relative z-20"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Scroll to explore my journey</p>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="cursor-pointer group"
              onClick={() => scrollToSection("about")}
            >
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 flex items-center justify-center transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <ArrowDown className="h-6 w-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
