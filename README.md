# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with **Next.js 15**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features a modern black theme, interactive skills filtering, animated text rotation, and comprehensive project showcases with multiple image support.

## ✨ Features

#### 🎨 **Modern Design**
- **Dark/Light Theme Toggle** with persistent storage
- **Glassmorphism Effects** with backdrop blur and 3D depth
- **Gradient Animations** and floating elements
- **Responsive Design** optimized for all devices
- **Modern Typography** with gradient text effects
- **Instant Loading Animations** - no delays or loading states

#### 🏠 **Hero Section**
- **Large Profile Picture** (224px) with animated gradient ring
- **Instant 3D Skill Icons** - Two lines of glassmorphism skill icons visible immediately
- **Seamless Continuous Animation** - Icons flow without gaps or empty spaces
- **Square Icon Design** with realistic glass effects and shadows
- **Professional Layout** with centered content and smooth scrolling
- **Call-to-Action Buttons** with hover animations and smooth navigation

### 🛠️ **Interactive Skills Section**
- **Clickable Skill Tags** for filtering projects
- **Multi-Skill Filtering** - show projects using multiple technologies
- **Real-time Filter Updates** with smooth animations
- **Clear Filters** functionality with active count display
- **Skill Categories** organized by Frontend, Backend, and Cloud & Tools

### 📁 **Project Showcase**
- **Project Cards** with hover effects and quick actions
- **Multiple Image Support** - carousel with navigation
- **Tech Stack Badges** with gradient styling
- **Project Status Indicators** (Live, Beta, Demo)
- **Full-Screen Project Details** with dedicated pages

### 📄 **Project Detail Pages**
- **Image Carousel** with thumbnail navigation
- **Comprehensive Information** - tech stack, languages, features
- **Interactive Elements** - navigation arrows, image indicators
- **Responsive Layout** with sidebar information
- **Direct Links** to live demos and source code

### 📞 **Contact Section**
- **Contact Form** with validation and loading states
- **Social Media Links** with hover animations
- **Contact Information** cards with icons
- **Professional Layout** with glassmorphism effects

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### **UI Components**
- **shadcn/ui** - Modern component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

### **Styling**
- **CSS Variables** for theme switching
- **Custom Animations** with keyframes
- **Responsive Grid** layouts
- **Glassmorphism** effects

## 📂 Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── globals.css              # Global styles and theme variables
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Main portfolio page
│   └── project/
│       └── [id]/
│           └── page.tsx         # Dynamic project detail pages
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── about.tsx                # About section component
│   ├── contact.tsx              # Contact section with form
│   ├── footer.tsx               # Footer component
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section with animations
│   ├── project-card.tsx         # Individual project cards
│   ├── projects.tsx               # Projects section
│   ├── skills.tsx               # Interactive skills section
│   └── theme-provider.tsx       # Theme context provider
├── data/
│   └── projects.ts              # Project data and TypeScript interfaces
├── hooks/
│   └── use-skills-filter.ts     # Custom hook for skills filtering
├── lib/
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
\`\`\`

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm

### **Installation**

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### **Personal Information**
Update your personal details in the following files:

**\`components/header.tsx\`**
\`\`\`typescript
// Update name and title
<h1>Your Name</h1>
<p>Your Title</p>
\`\`\`

**\`components/hero.tsx\`**
\`\`\`typescript
// Update rotating text array
const rotatingTexts = [
  "Your Primary Role",
  "Your Secondary Role",
  // Add more roles...
]
\`\`\`

**\`components/contact.tsx\`**
\`\`\`typescript
// Update contact information
const contactInfo = [
  { label: "Email", value: "your@email.com" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  // Update other contact details...
]
\`\`\`

### **Projects Data**
Update your projects in **\`data/projects.ts\`**:

\`\`\`typescript
export const projectsData: Project[] = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Short description",
    detailedDescription: "Detailed description for project page",
    techStack: ["React", "Node.js", "MongoDB"],
    languages: ["JavaScript", "TypeScript"],
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      // Add more images...
    ],
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://your-project.vercel.app",
    year: "2024",
    status: "Live",
    features: [
      "Feature 1",
      "Feature 2",
      // Add more features...
    ],
  },
  // Add more projects...
]
\`\`\`

### **Skills Configuration**
Update your skills in **\`hooks/use-skills-filter.ts\`**:

\`\`\`typescript
const allSkills = [
  "React",
  "Next.js",
  "TypeScript",
  // Add your skills...
]
\`\`\`

### **Theme Customization**
Modify colors in **\`tailwind.config.js\`** and **\`app/globals.css\`**:

\`\`\`css
:root {
  --primary: your-color-hsl;
  --secondary: your-color-hsl;
  /* Customize other CSS variables */
}
\`\`\`

## 🎨 Customization

### **Colors**
- Primary colors are defined in CSS variables
- Gradient combinations can be customized in component files
- Dark mode colors are automatically generated

### **Animations**
- Framer Motion animations can be adjusted in component files
- CSS animations are defined in \`globals.css\`
- Animation durations and easing can be customized

### **Layout**
- Grid layouts are responsive and can be modified
- Spacing uses Tailwind's spacing scale
- Component layouts can be rearranged as needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components adapt to different screen sizes with:
- Responsive grid layouts
- Adaptive typography scaling
- Touch-friendly interactions
- Mobile-optimized navigation

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### **Netlify**
1. Build the project: \`npm run build\`
2. Deploy the \`out\` folder to Netlify
3. Configure redirects for client-side routing

### **Other Platforms**
The portfolio works on any static hosting platform:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 🔧 Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
\`\`\`

## 📦 Dependencies

### **Core**
- \`next\` - React framework
- \`react\` - UI library
- \`typescript\` - Type safety

### **Styling**
- \`tailwindcss\` - CSS framework
- \`framer-motion\` - Animations
- \`lucide-react\` - Icons

### **UI Components**
- \`@radix-ui/react-*\` - Headless components
- \`class-variance-authority\` - Component variants
- \`tailwind-merge\` - Tailwind class merging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the icon set
- **Next.js** team for the amazing framework

## 📞 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: your@email.com
- 💬 GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio-website/issues)
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
