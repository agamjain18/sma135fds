"use client"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
  Award,
  Users,
  Target,
  TrendingUp,
  Code,
  Globe,
  Mail,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ExperienceDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const experienceId = Number.parseInt(params.id as string)

  // Extended experience data with full details
  const experienceDetails = {
    1: {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      status: "Current",
      type: "Full-time",
      salary: "$120,000 - $140,000",
      companyLogo: "/placeholder-logo.png",
      website: "https://techcorp.com",
      companySize: "500-1000 employees",
      industry: "Technology & Software",
      description:
        "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions for enterprise-level applications.",
      detailedDescription: `As a Senior Full Stack Developer at TechCorp Solutions, I lead a team of 5 developers in creating cutting-edge web applications that serve over 100,000 users daily. My role encompasses both technical leadership and hands-on development, focusing on scalable architecture and performance optimization.

      I've been instrumental in migrating legacy systems to modern cloud-based solutions, resulting in significant cost savings and improved system reliability. My expertise in React, Node.js, and AWS has enabled the company to deliver robust solutions that meet enterprise-grade requirements.

      Beyond coding, I mentor junior developers, conduct code reviews, and establish best practices that have improved our team's productivity by 40%. I also collaborate closely with product managers and designers to ensure technical feasibility and optimal user experience.`,
      responsibilities: [
        "Lead development of scalable web applications using React, Node.js, and AWS",
        "Mentor and guide a team of 5 junior developers",
        "Architect microservices solutions for enterprise applications",
        "Implement CI/CD pipelines and DevOps best practices",
        "Collaborate with cross-functional teams on product strategy",
        "Conduct code reviews and establish development standards",
        "Optimize application performance and scalability",
        "Research and implement new technologies and frameworks",
      ],
      achievements: [
        "Increased application performance by 40% through optimization techniques",
        "Led team of 5 developers to deliver 15+ major features",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Reduced system downtime by 80% through improved monitoring",
        "Mentored 3 junior developers who were promoted to mid-level roles",
        "Architected microservices solution handling 1M+ requests daily",
        "Established coding standards adopted company-wide",
        "Led migration of legacy systems saving $200K annually",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Redis",
        "GraphQL",
        "Jest",
        "Cypress",
        "Jenkins",
      ],
      projects: [
        {
          name: "E-Commerce Platform Redesign",
          description: "Led complete redesign of company's main e-commerce platform",
          impact: "Increased conversion rate by 25%",
          technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          name: "Microservices Migration",
          description: "Migrated monolithic application to microservices architecture",
          impact: "Improved scalability and reduced deployment time by 60%",
          technologies: ["Docker", "Kubernetes", "AWS", "Node.js"],
        },
        {
          name: "Real-time Analytics Dashboard",
          description: "Built comprehensive analytics dashboard for business intelligence",
          impact: "Enabled data-driven decisions resulting in 15% revenue increase",
          technologies: ["React", "D3.js", "WebSocket", "Redis"],
        },
      ],
      teamSize: "5 direct reports",
      reportingTo: "Engineering Manager",
      workEnvironment: "Hybrid (3 days office, 2 days remote)",
      companyBenefits: [
        "Health, Dental, Vision Insurance",
        "401(k) with company matching",
        "Flexible PTO policy",
        "Professional development budget ($3,000/year)",
        "Stock options",
        "Remote work flexibility",
      ],
      skills: [
        { name: "Technical Leadership", level: 95 },
        { name: "React Development", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "AWS Cloud Services", level: 85 },
        { name: "Team Management", level: 80 },
        { name: "System Architecture", level: 92 },
      ],
    },
    2: {
      id: 2,
      position: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "Mar 2020 - Dec 2021",
      status: "Completed",
      type: "Full-time",
      salary: "$85,000 - $95,000",
      companyLogo: "/placeholder-logo.png",
      website: "https://startupxyz.com",
      companySize: "50-100 employees",
      industry: "SaaS & Technology",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create responsive user interfaces.",
      detailedDescription: `At StartupXYZ, I was part of a dynamic team building innovative SaaS solutions for small to medium businesses. Working in a fast-paced startup environment, I wore multiple hats - from frontend development to backend architecture, and even DevOps tasks.

      I was responsible for building client projects from conception to deployment, working directly with clients to understand their requirements and deliver custom solutions. This role significantly enhanced my ability to work independently and manage multiple projects simultaneously.

      The startup environment taught me to be resourceful, adaptable, and efficient. I learned to make quick decisions, prioritize features based on business impact, and deliver MVPs that could be iterated upon based on user feedback.`,
      responsibilities: [
        "Develop full-stack web applications using Vue.js and Python",
        "Collaborate with designers to implement responsive UI/UX",
        "Build and maintain RESTful APIs and database schemas",
        "Implement automated testing and deployment processes",
        "Work directly with clients to gather requirements",
        "Optimize application performance and user experience",
        "Maintain and update existing client applications",
        "Participate in code reviews and technical discussions",
      ],
      achievements: [
        "Built 15+ client projects from scratch within tight deadlines",
        "Reduced bug reports by 35% through comprehensive testing",
        "Implemented automated testing suite increasing code coverage to 85%",
        "Improved application load times by 50% through optimization",
        "Successfully delivered projects for 20+ satisfied clients",
        "Contributed to 40% increase in client retention rate",
        "Mentored 2 intern developers during summer program",
      ],
      technologies: [
        "Vue.js",
        "Python",
        "Django",
        "MongoDB",
        "Docker",
        "AWS",
        "JavaScript",
        "HTML/CSS",
        "Git",
        "Jest",
        "Postman",
      ],
      projects: [
        {
          name: "CRM Dashboard",
          description: "Built comprehensive CRM system for sales teams",
          impact: "Increased sales team productivity by 30%",
          technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
        },
        {
          name: "Inventory Management System",
          description: "Developed real-time inventory tracking system",
          impact: "Reduced inventory errors by 60%",
          technologies: ["Vue.js", "Python", "MongoDB", "WebSocket"],
        },
      ],
      teamSize: "8 person development team",
      reportingTo: "Lead Developer",
      workEnvironment: "Fully Remote",
      companyBenefits: [
        "Health Insurance",
        "Flexible working hours",
        "Professional development allowance",
        "Home office setup budget",
        "Equity participation",
      ],
      skills: [
        { name: "Vue.js Development", level: 85 },
        { name: "Python/Django", level: 80 },
        { name: "Database Design", level: 75 },
        { name: "API Development", level: 82 },
        { name: "Client Communication", level: 78 },
      ],
    },
    3: {
      id: 3,
      position: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "Jun 2018 - Feb 2020",
      status: "Completed",
      type: "Full-time",
      salary: "$65,000 - $75,000",
      companyLogo: "/placeholder-logo.png",
      website: "https://digitalagencypro.com",
      companySize: "100-200 employees",
      industry: "Digital Marketing & Web Development",
      description:
        "Specialized in creating interactive and responsive web interfaces. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      detailedDescription: `At Digital Agency Pro, I specialized in frontend development for high-profile client websites and web applications. Working in an agency environment exposed me to diverse projects across various industries, from e-commerce to corporate websites.

      I collaborated closely with designers, project managers, and backend developers to deliver exceptional user experiences. This role honed my skills in translating design mockups into functional, responsive websites while maintaining cross-browser compatibility and optimal performance.

      The agency environment taught me to work efficiently under tight deadlines while maintaining high quality standards. I learned to communicate effectively with clients and stakeholders, presenting technical concepts in accessible terms.`,
      responsibilities: [
        "Develop responsive websites using HTML, CSS, JavaScript, and React",
        "Collaborate with UX/UI designers to implement pixel-perfect designs",
        "Ensure cross-browser compatibility and mobile responsiveness",
        "Optimize websites for performance and SEO",
        "Integrate with various CMS platforms and third-party APIs",
        "Conduct browser testing and debugging",
        "Maintain and update existing client websites",
        "Participate in client meetings and project planning",
      ],
      achievements: [
        "Delivered 25+ responsive websites for diverse clients",
        "Improved average page load speeds by 50% across all projects",
        "Mentored 3 junior developers and interns",
        "Achieved 98% client satisfaction rate",
        "Implemented reusable component library used across 15+ projects",
        "Led frontend development for agency's largest client project",
        "Reduced development time by 30% through process improvements",
      ],
      technologies: ["JavaScript", "React", "HTML5", "CSS3", "SASS", "Webpack", "Git", "jQuery", "Bootstrap", "Gulp"],
      projects: [
        {
          name: "E-commerce Website Redesign",
          description: "Complete redesign of major retail client's website",
          impact: "Increased online sales by 45%",
          technologies: ["React", "SASS", "Webpack", "Stripe API"],
        },
        {
          name: "Corporate Website Portfolio",
          description: "Built websites for 10+ corporate clients",
          impact: "Generated $500K+ in agency revenue",
          technologies: ["JavaScript", "HTML/CSS", "WordPress", "jQuery"],
        },
      ],
      teamSize: "12 person creative team",
      reportingTo: "Frontend Team Lead",
      workEnvironment: "On-site (NYC Office)",
      companyBenefits: [
        "Health and Dental Insurance",
        "Paid vacation and sick leave",
        "Professional development opportunities",
        "Team building events",
        "Transit benefits",
      ],
      skills: [
        { name: "React Development", level: 80 },
        { name: "CSS/SASS", level: 85 },
        { name: "JavaScript", level: 78 },
        { name: "Responsive Design", level: 90 },
        { name: "Performance Optimization", level: 75 },
      ],
    },
    4: {
      id: 4,
      position: "Junior Web Developer",
      company: "WebSolutions Inc",
      location: "Austin, TX",
      duration: "Aug 2017 - May 2018",
      status: "Completed",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      companyLogo: "/placeholder-logo.png",
      website: "https://websolutions.com",
      companySize: "20-50 employees",
      industry: "Web Development Services",
      description:
        "Started career developing websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
      detailedDescription: `My first professional role as a Junior Web Developer at WebSolutions Inc was where I laid the foundation of my career. This position provided me with hands-on experience in web development fundamentals and introduced me to professional development practices.

      Working under the guidance of senior developers, I learned not just coding skills but also project management, client communication, and the importance of writing clean, maintainable code. This role was crucial in shaping my understanding of the software development lifecycle.

      The supportive environment at WebSolutions allowed me to grow rapidly, taking on increasingly complex projects and responsibilities. By the end of my tenure, I was contributing significantly to client projects and had developed a strong foundation in both frontend and backend technologies.`,
      responsibilities: [
        "Develop websites using HTML, CSS, JavaScript, and PHP",
        "Assist in database design and implementation using MySQL",
        "Collaborate with senior developers on client projects",
        "Perform website maintenance and updates",
        "Test websites across different browsers and devices",
        "Learn and implement new technologies and frameworks",
        "Participate in team meetings and project planning",
        "Document code and create technical specifications",
      ],
      achievements: [
        "Completed 10+ client projects successfully",
        "Learned 5 new technologies within first 6 months",
        "Received 'Rising Star' award for exceptional performance",
        "Contributed to 20% increase in team productivity",
        "Built first e-commerce website independently",
        "Achieved 100% on-time project delivery record",
        "Mentored new intern developer",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap", "Git", "WordPress"],
      projects: [
        {
          name: "Small Business Websites",
          description: "Built websites for 8+ local small businesses",
          impact: "Helped businesses establish online presence",
          technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        },
        {
          name: "E-commerce Platform",
          description: "First independent e-commerce project",
          impact: "Generated $50K+ in sales for client",
          technologies: ["PHP", "MySQL", "JavaScript", "PayPal API"],
        },
      ],
      teamSize: "5 person development team",
      reportingTo: "Senior Web Developer",
      workEnvironment: "On-site (Austin Office)",
      companyBenefits: [
        "Health Insurance",
        "Paid time off",
        "Learning and development budget",
        "Flexible hours",
        "Team lunch Fridays",
      ],
      skills: [
        { name: "HTML/CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "PHP", level: 70 },
        { name: "MySQL", level: 68 },
        { name: "Problem Solving", level: 72 },
      ],
    },
  }

  const experience = experienceDetails[experienceId as keyof typeof experienceDetails]

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
        </div>
      </div>
    )
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-8">
          <Button variant="ghost" onClick={() => router.push("/")} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Building className="h-10 w-10 text-white" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className={getStatusColor(experience.status)}>{experience.status}</Badge>
                <Badge className={getTypeColor(experience.type)}>{experience.type}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{experience.position}</h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-4">{experience.company}</h2>

              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{experience.companySize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Role Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {experience.detailedDescription}
                </p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Key Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Notable Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">{project.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Company Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Industry</h4>
                  <p className="text-gray-600 dark:text-gray-300">{experience.industry}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Company Size</h4>
                  <p className="text-gray-600 dark:text-gray-300">{experience.companySize}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Work Environment</h4>
                  <p className="text-gray-600 dark:text-gray-300">{experience.workEnvironment}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Team Structure</h4>
                  <p className="text-gray-600 dark:text-gray-300">{experience.teamSize}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Reporting To</h4>
                  <p className="text-gray-600 dark:text-gray-300">{experience.reportingTo}</p>
                </div>
                {experience.website && (
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={experience.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Company Website
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Skills Developed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experience.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {experience.companyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Interested in My Experience?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'd love to discuss how my experience at {experience.company} and other roles can contribute to your
              team's success.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ExperienceDetailPage
