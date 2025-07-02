"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Eye, EyeOff, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: string
}

export default function AddProjectPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  })
  const [authError, setAuthError] = useState("")

  const [projectData, setProjectData] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    longDescription: "",
    image: "",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    category: "",
  })

  const [currentTech, setCurrentTech] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Simple authentication (in real app, this would be more secure)
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError("")

    // Replace with your actual credentials
    if (authData.username === "admin" && authData.password === "portfolio2024") {
      setIsAuthenticated(true)
    } else {
      setAuthError("Invalid username or password")
    }
  }

  const handleAddTechnology = () => {
    if (currentTech.trim() && !projectData.technologies.includes(currentTech.trim())) {
      setProjectData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, currentTech.trim()],
      }))
      setCurrentTech("")
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setProjectData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate unique ID
      const newProject: Project = {
        ...projectData,
        id: Date.now().toString(),
      }

      // Here you would typically send to your backend/database
      console.log("New project to add:", newProject)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setProjectData({
        title: "",
        description: "",
        longDescription: "",
        image: "",
        technologies: [],
        githubUrl: "",
        liveUrl: "",
        category: "",
      })

      alert("Project added successfully!")
    } catch (error) {
      console.error("Error adding project:", error)
      alert("Error adding project. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Admin Access Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={authData.username}
                    onChange={(e) => setAuthData((prev) => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={authData.password}
                      onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {authError && <p className="text-sm text-red-500 text-center">{authError}</p>}

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Add New Project</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={projectData.title}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter project title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      value={projectData.category}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Web App, Mobile App, API"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description *</Label>
                    <Textarea
                      id="description"
                      value={projectData.description}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description for project cards"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Detailed Description *</Label>
                    <Textarea
                      id="longDescription"
                      value={projectData.longDescription}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, longDescription: e.target.value }))}
                      placeholder="Detailed description for project page"
                      rows={6}
                      required
                    />
                  </div>
                </div>

                {/* Technical Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Technical Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="image">Project Image URL *</Label>
                    <Input
                      id="image"
                      type="url"
                      value={projectData.image}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, image: e.target.value }))}
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="githubUrl">GitHub URL</Label>
                    <Input
                      id="githubUrl"
                      type="url"
                      value={projectData.githubUrl}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, githubUrl: e.target.value }))}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="liveUrl">Live Demo URL</Label>
                    <Input
                      id="liveUrl"
                      type="url"
                      value={projectData.liveUrl}
                      onChange={(e) => setProjectData((prev) => ({ ...prev, liveUrl: e.target.value }))}
                      placeholder="https://your-project.com"
                    />
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <Label>Technologies Used *</Label>
                    <div className="flex gap-2">
                      <Input
                        value={currentTech}
                        onChange={(e) => setCurrentTech(e.target.value)}
                        placeholder="Add technology"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTechnology())}
                      />
                      <Button type="button" onClick={handleAddTechnology} size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {projectData.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {tech}
                          <X
                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                            onClick={() => handleRemoveTechnology(tech)}
                          />
                        </Badge>
                      ))}
                    </div>
                    {projectData.technologies.length === 0 && (
                      <p className="text-sm text-muted-foreground">Add at least one technology</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Preview */}
              {projectData.title && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Preview</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {projectData.image && (
                          <div className="flex-shrink-0">
                            <img
                              src={projectData.image || "/placeholder.svg"}
                              alt={projectData.title}
                              className="w-32 h-24 object-cover rounded-lg"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=96&width=128"
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold">{projectData.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{projectData.category}</p>
                          <p className="text-sm mb-3">{projectData.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {projectData.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <Link href="/">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !projectData.title ||
                    !projectData.description ||
                    projectData.technologies.length === 0
                  }
                >
                  {isSubmitting ? "Adding Project..." : "Add Project"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
