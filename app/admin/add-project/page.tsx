"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Eye, EyeOff, Upload, X, Plus, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [authError, setAuthError] = useState("")

  // Form states
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    detailedDescription: "",
    image: "",
    technologies: [] as string[],
    githubUrl: "",
    liveUrl: "",
  })

  const [newTech, setNewTech] = useState("")
  const [imageMethod, setImageMethod] = useState<"url" | "upload">("url")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState("")

  // Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === "admin" && credentials.password === "portfolio2024") {
      setIsAuthenticated(true)
      setAuthError("")
    } else {
      setAuthError("Invalid username or password")
    }
  }

  // Image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a valid image file")
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size must be less than 5MB")
      return
    }

    setIsUploading(true)
    setUploadError("")

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setUploadedImage(result)
      setFormData((prev) => ({ ...prev, image: result }))
      setIsUploading(false)
    }
    reader.onerror = () => {
      setUploadError("Failed to upload image")
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }

  // Remove uploaded image
  const removeUploadedImage = () => {
    setUploadedImage(null)
    setFormData((prev) => ({ ...prev, image: "" }))
  }

  // Add technology
  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()],
      }))
      setNewTech("")
    }
  }

  // Remove technology
  const removeTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.title ||
      !formData.category ||
      !formData.shortDescription ||
      !formData.detailedDescription ||
      !formData.image ||
      formData.technologies.length === 0
    ) {
      alert("Please fill in all required fields")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Project data:", formData)
    alert("Project added successfully!")

    // Reset form
    setFormData({
      title: "",
      category: "",
      shortDescription: "",
      detailedDescription: "",
      image: "",
      technologies: [],
      githubUrl: "",
      liveUrl: "",
    })
    setUploadedImage(null)
  }

  // Authentication screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Access Required
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Please enter your credentials to add a new project
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={credentials.password}
                      onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                      className="h-12 pr-12"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {authError && <p className="text-red-500 text-sm text-center">{authError}</p>}

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  // Main form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Add New Project
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Fill in the details to add a new project to your portfolio
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Project Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter project title"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                        placeholder="e.g., Web App, Mobile App"
                        required
                      />
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2">
                    <Label htmlFor="shortDescription">Short Description *</Label>
                    <Input
                      id="shortDescription"
                      value={formData.shortDescription}
                      onChange={(e) => setFormData((prev) => ({ ...prev, shortDescription: e.target.value }))}
                      placeholder="Brief description for project cards"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="detailedDescription">Detailed Description *</Label>
                    <Textarea
                      id="detailedDescription"
                      value={formData.detailedDescription}
                      onChange={(e) => setFormData((prev) => ({ ...prev, detailedDescription: e.target.value }))}
                      placeholder="Detailed description for project pages"
                      rows={4}
                      required
                    />
                  </div>

                  {/* Image Section */}
                  <div className="space-y-4">
                    <Label>Project Image *</Label>

                    {/* Image Method Toggle */}
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={imageMethod === "url" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setImageMethod("url")}
                      >
                        URL
                      </Button>
                      <Button
                        type="button"
                        variant={imageMethod === "upload" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setImageMethod("upload")}
                      >
                        Upload
                      </Button>
                    </div>

                    {imageMethod === "url" ? (
                      <Input
                        value={formData.image}
                        onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                        placeholder="Enter image URL"
                        required
                      />
                    ) : (
                      <div className="space-y-4">
                        {!uploadedImage ? (
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="image-upload"
                            />
                            <label htmlFor="image-upload" className="cursor-pointer">
                              <div className="flex flex-col items-center gap-2">
                                {isUploading ? (
                                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                ) : (
                                  <Upload className="h-8 w-8 text-gray-400" />
                                )}
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {isUploading ? "Uploading..." : "Click to upload image"}
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                              </div>
                            </label>
                          </div>
                        ) : (
                          <div className="relative">
                            <img
                              src={uploadedImage || "/placeholder.svg"}
                              alt="Uploaded"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={removeUploadedImage}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}

                        {uploadError && <p className="text-red-500 text-sm">{uploadError}</p>}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <Label>Technologies Used *</Label>

                    <div className="flex gap-2">
                      <Input
                        value={newTech}
                        onChange={(e) => setNewTech(e.target.value)}
                        placeholder="Add technology"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                      />
                      <Button type="button" onClick={addTechnology} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {formData.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechnology(tech)}
                            className="ml-1 hover:text-red-500"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="githubUrl">GitHub URL</Label>
                      <Input
                        id="githubUrl"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))}
                        placeholder="https://github.com/..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="liveUrl">Live Demo URL</Label>
                      <Input
                        id="liveUrl"
                        value={formData.liveUrl}
                        onChange={(e) => setFormData((prev) => ({ ...prev, liveUrl: e.target.value }))}
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Add Project
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Project Card Preview */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      {formData.image ? (
                        <Image
                          src={formData.image || "/placeholder.svg"}
                          alt={formData.title || "Project"}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=225&width=400"
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{formData.title || "Project Title"}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formData.shortDescription || "Short description will appear here"}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {formData.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        {formData.githubUrl && (
                          <Button size="sm" variant="outline">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        )}
                        {formData.liveUrl && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
