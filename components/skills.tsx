"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Code, X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSkillsFilter } from "@/hooks/use-skills-filter"

const Skills = () => {
  const { selectedSkills, toggleSkill, clearFilters, allSkills } = useSkillsFilter()

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl mb-6">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Click on skills to filter projects below and see my expertise in action
          </p>

          {/* Filter Status */}
          <AnimatePresence>
            {selectedSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-flex items-center gap-4 bg-blue-50 dark:bg-blue-950/20 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800 mb-8"
              >
                <Filter className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {selectedSkills.length} skill{selectedSkills.length > 1 ? "s" : ""} selected
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-6 px-2 text-xs bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={selectedSkills.includes(skill) ? "default" : "secondary"}
                  className={`w-full cursor-pointer px-4 py-3 text-sm font-medium transition-all duration-300 justify-center ${
                    selectedSkills.includes(skill)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg border-0"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md"
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Frontend",
              skills: ["React", "Flutter", "Next.js", "TypeScript"],
              color: "from-blue-600 to-cyan-600",
            },
            {
              title: "Backend",
              skills: ["Node.js", "Python", "Rust", "MongoDB"],
              color: "from-purple-600 to-pink-600",
            },
            {
              title: "Cloud & Tools",
              skills: ["Firebase", "AWS", "Docker", "Git"],
              color: "from-green-600 to-teal-600",
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4`}
              >
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
