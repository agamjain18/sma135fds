"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Code,
  CheckCircle,
  Globe,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import type { Project } from "@/data/projects"
import { projectsData } from "@/data/projects"

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to get project from sessionStorage first
    const storedProject = sessionStorage.getItem("selectedProject")
    if (storedProject) {
      setProject(JSON.parse(storedProject))
      setLoading(false)
      return
    }

    // Fallback: find project by ID
    const projectId = Number.parseInt(params.id)
    const foundProject = projectsData.find((p) => p.id === projectId)
    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [params.id])

  const goBack = () => {
    window.history.back()
  }

  if (loading) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </ThemeProvider>
    )
  }

  if (!project) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <Button onClick={goBack} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <ProjectDetailContent project={project} onBack={goBack} />
    </ThemeProvider>
  )
}

const ProjectDetailContent = ({ project, onBack }: { project: Project; onBack: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/20 dark:border-gray-800/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Back to Portfolio
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Carousel */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900" />

        <div className="relative container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                {project.status && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    {project.status}
                  </Badge>
                )}
                {project.year && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {project.name}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.detailedDescription || project.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.techStack.length}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {project.techStack.includes("Flutter") ? "Mobile" : "Web"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.status || "Complete"}</p>
                </div>
              </div>
            </motion.div>

            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-800">
                <div className="aspect-video relative">
                  <img
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />

                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">
                      {currentImageIndex + 1} / {project.images.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? "border-blue-500 shadow-lg"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  <Code className="mr-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-md hover:shadow-lg transition-shadow"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Programming Languages */}
              {project.languages && project.languages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                    <Code className="mr-3 h-8 w-8 text-green-600 dark:text-green-400" />
                    Programming Languages
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.languages.map((lang) => (
                      <Badge
                        key={lang}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 shadow-md hover:shadow-lg transition-shadow"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                    <CheckCircle className="mr-3 h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Links</h3>
                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="w-full border-2 bg-transparent">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Details</h3>
                    <div className="space-y-4">
                      {project.year && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Year</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{project.year}</span>
                        </div>
                      )}
                      {project.status && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Status</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                            {project.status}
                          </Badge>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Platform</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {project.techStack.includes("Flutter") ? "Mobile & Web" : "Web"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Images</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{project.images.length}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200/20 dark:border-gray-800/20 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto text-center">
          <Button onClick={onBack} variant="outline" size="lg" className="bg-transparent">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Button>
        </div>
      </footer>
    </div>
  )
}

export default ProjectDetailPage
