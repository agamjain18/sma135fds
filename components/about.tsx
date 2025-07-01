"use client"

import { motion } from "framer-motion"
import { User, Code2, Rocket, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years Experience",
      description: "Building scalable applications",
    },
    {
      icon: Rocket,
      title: "50+ Projects",
      description: "Delivered successfully",
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Active contributor",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make
              a difference. My journey in tech started with curiosity and has evolved into a deep love for building
              applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in modern web technologies like React and Next.js, mobile development with Flutter, and
              backend systems using Node.js and cloud platforms. I'm particularly excited about emerging technologies
              like AI, blockchain, and IoT.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers,
              or exploring the latest tech trends. I believe in continuous learning and sharing knowledge with the
              community.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                          <highlight.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{highlight.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
