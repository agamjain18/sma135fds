"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-gray-200/20 dark:border-gray-800/20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Alex Johnson
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="h-4 w-4 text-blue-500" />
            <span>React, Next.js & TailwindCSS</span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500">© {currentYear} Alex Johnson. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
