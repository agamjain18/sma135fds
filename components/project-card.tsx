"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  selectedSkills: string[]
  onClick: (project: Project) => void
}

const ProjectCard = ({ project, index, selectedSkills, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800">
        {/* Project Image with Multiple Images Indicator */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.images[0] || "/placeholder.svg"}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Multiple Images Indicator */}
          {project.images.length > 1 && (
            <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <ImageIcon className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">{project.images.length}</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Status Badge */}
          {project.status && (
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                {project.status}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            {project.year && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {project.year}
              </div>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedSkills.includes(tech) ? "default" : "outline"}
                  className={`text-xs transition-all duration-200 ${
                    selectedSkills.includes(tech)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-md"
                      : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-700">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 bg-transparent"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
