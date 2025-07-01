"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSkillsFilter } from "@/hooks/use-skills-filter"
import ProjectCard from "@/components/project-card"
import type { Project } from "@/data/projects"

const Projects = () => {
  const { selectedSkills, filteredProjects, clearFilters } = useSkillsFilter()

  const openProjectDetail = (project: Project) => {
    // Store project data in sessionStorage for the detail page
    sessionStorage.setItem("selectedProject", JSON.stringify(project))
    // Navigate to project detail page
    window.location.href = `/project/${project.id}`
  }

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl mb-6">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {selectedSkills.length > 0
              ? `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""} with: ${selectedSkills.join(", ")}`
              : `A showcase of ${filteredProjects.length} recent projects demonstrating my expertise`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSkills.join(",")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                selectedSkills={selectedSkills}
                onClick={() => openProjectDetail(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Projects Found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              No projects match the selected skill combination. Try adjusting your filters or explore all projects.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Show All Projects
            </Button>
          </motion.div>
        )}

        {/* View More */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
