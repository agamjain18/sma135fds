"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const ExperienceSection = () => {
  const router = useRouter()

  const experiences = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      status: "Current",
      type: "Full-time",
      description:
        "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      companyLogo: "/placeholder-logo.png",
      website: "https://techcorp.com",
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "Mar 2020 - Dec 2021",
      status: "Completed",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create responsive user interfaces.",
      achievements: [
        "Built 15+ client projects from scratch",
        "Reduced bug reports by 35%",
        "Implemented automated testing suite",
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
      companyLogo: "/placeholder-logo.png",
      website: "https://startupxyz.com",
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "Jun 2018 - Feb 2020",
      status: "Completed",
      type: "Full-time",
      description:
        "Specialized in creating interactive and responsive web interfaces. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      achievements: [
        "Delivered 25+ responsive websites",
        "Improved page load speeds by 50%",
        "Mentored 3 junior developers",
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
      companyLogo: "/placeholder-logo.png",
      website: "https://digitalagencypro.com",
    },
    {
      id: 4,
      position: "Junior Web Developer",
      company: "WebSolutions Inc",
      location: "Austin, TX",
      duration: "Aug 2017 - May 2018",
      status: "Completed",
      type: "Full-time",
      description:
        "Started career developing websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
      achievements: ["Completed 10+ client projects", "Learned 5 new technologies", "Received 'Rising Star' award"],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      companyLogo: "/placeholder-logo.png",
      website: "https://websolutions.com",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "current":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "full-time":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "part-time":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "contract":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "freelance":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const handleExperienceClick = (experienceId: number) => {
    router.push(`/experience/${experienceId}`)
  }

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through my professional career, showcasing growth, achievements, and the technologies I've
            mastered along the way.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>
                </div>

                {/* Experience Card */}
                <Card
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  } hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105`}
                  onClick={() => handleExperienceClick(exp.id)}
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                          <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <span className="font-medium">{exp.company}</span>
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(exp.status)}>{exp.status}</Badge>
                        <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>

                    {/* Technologies Preview */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            +{exp.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Click to view more indicator */}
                    <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view full details →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
