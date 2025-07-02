"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Calendar, Award, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  const [skillPositions, setSkillPositions] = useState<
    Array<{ top: string; left: string; right?: string; bottom?: string }>
  >([])

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Firebase", icon: "🔥" },
  ]

  const experienceStats = [
    {
      icon: Calendar,
      value: "5+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      value: "50+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "20+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      value: "15+",
      label: "Technologies",
      color: "from-orange-500 to-red-500",
    },
  ]

  // Position pool for skills around profile picture
  const positionPool = [
    { top: "-30px", left: "-40px" },
    { top: "-20px", right: "-50px" },
    { top: "20px", right: "-45px" },
    { bottom: "-10px", right: "-40px" },
    { bottom: "30px", left: "-35px" },
    { top: "50%", left: "-55px", transform: "translateY(-50%)" },
    { top: "50%", right: "-60px", transform: "translateY(-50%)" },
    { top: "-35px", left: "50%", transform: "translateX(-50%)" },
    { bottom: "-35px", left: "50%", transform: "translateX(-50%)" },
    { top: "10px", left: "-30px" },
    { bottom: "10px", right: "-30px" },
    { top: "70%", left: "-45px" },
  ]

  // Function to check if two positions overlap
  const checkOverlap = (pos1: any, pos2: any) => {
    const getCoordinates = (pos: any) => {
      let x = 0,
        y = 0
      if (pos.left) x = Number.parseInt(pos.left)
      if (pos.right) x = -Number.parseInt(pos.right)
      if (pos.top) y = Number.parseInt(pos.top)
      if (pos.bottom) y = -Number.parseInt(pos.bottom)
      return { x, y }
    }

    const coord1 = getCoordinates(pos1)
    const coord2 = getCoordinates(pos2)
    const distance = Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2))
    return distance < 50 // Minimum 50px distance
  }

  // Generate non-overlapping positions
  const generateNonOverlappingPositions = () => {
    const shuffled = [...positionPool].sort(() => Math.random() - 0.5)
    const selected = []

    for (let i = 0; i < shuffled.length && selected.length < 5; i++) {
      const candidate = shuffled[i]
      const overlaps = selected.some((pos) => checkOverlap(candidate, pos))

      if (!overlaps) {
        selected.push(candidate)
      }
    }

    // Fill remaining slots if needed
    while (selected.length < 5) {
      selected.push(shuffled[selected.length])
    }

    return selected
  }

  useEffect(() => {
    setSkillPositions(generateNonOverlappingPositions())
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-black dark:to-blue-950/20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block mb-8"
          >
            {/* Profile Picture Container with Skills */}
            <div className="relative p-20 inline-block">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative z-[110]">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Profile"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Animated Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/50 dark:border-blue-500/50 scale-110"
                />
              </div>

              {/* Floating Skills Around Profile */}
              {skillPositions.map((position, index) => (
                <motion.div
                  key={`${skills[index].name}-${index}`}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                    y: {
                      duration: 2 + index * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 12,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute z-[120] cursor-pointer"
                  style={position}
                >
                  <div className="relative group">
                    {/* Main Circle */}
                    <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Glass Highlight */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent dark:from-white/20 pointer-events-none" />
                      <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/60 dark:bg-white/40 blur-sm" />

                      {/* Skill Icon */}
                      <span className="text-2xl relative z-10">{skills[index].icon}</span>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                    </div>

                    {/* Skill Label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skills[index].name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Aagam Jain
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
              Full Stack Developer & UI/UX Designer
            </p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {experienceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>

                  {/* Label */}
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="mr-2">View My Work</span>
              <ExternalLink className="h-4 w-4" />
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-3 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-3 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-3 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600"
            >
              <ArrowDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
