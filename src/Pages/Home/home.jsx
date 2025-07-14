import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CodeBracketIcon, 
  CubeTransparentIcon, 
  LightBulbIcon, 
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

// Import shadcn/ui components
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

import { HeroSm, HeroMd, HeroLg } from '../../assets'
import { portfolioData, socials } from '../../data'

// Dynamic typing animation
const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, delay])

  return <span>{displayText}</span>
}

// Latest activity data (simulated dynamic content)
const latestActivity = [
  { type: "code", text: "Pushed 3 commits to agentic-homelab project", time: "2 hours ago" },
  { type: "blog", text: "Published new blog post about AI development", time: "1 day ago" },
  { type: "project", text: "Deployed new portfolio website", time: "3 days ago" },
  { type: "achievement", text: "Reached 1000 GitHub stars", time: "1 week ago" }
]

// Skills data with dynamic progression
const skillsData = [
  { name: "React & Next.js", level: 95, icon: <CodeBracketIcon className="w-6 h-6" /> },
  { name: "Node.js & Python", level: 90, icon: <CommandLineIcon className="w-6 h-6" /> },
  { name: "AI & Machine Learning", level: 85, icon: <CubeTransparentIcon className="w-6 h-6" /> },
  { name: "Cloud & DevOps", level: 80, icon: <RocketLaunchIcon className="w-6 h-6" /> },
  { name: "System Design", level: 88, icon: <PuzzlePieceIcon className="w-6 h-6" /> },
  { name: "Problem Solving", level: 93, icon: <LightBulbIcon className="w-6 h-6" /> }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <SparklesIcon className="w-3 h-3 mr-1" />
                    Available for work
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {currentTime.toLocaleTimeString()}
                  </Badge>
                </motion.div>

                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                    Hi 👋 I'm Abhinaw
                  </h2>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                    <TypewriterText text="Full Stack" delay={300} />
                    <br />
                    <span className="text-primary">Developer</span>
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  I'm a passionate computer science student specializing in building exceptional digital experiences. 
                  I create modern web applications, AI-powered solutions, and scalable systems that solve real-world problems.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <HashLink to="#work" className="flex items-center gap-2">
                      <RocketLaunchIcon className="w-4 h-4" />
                      View My Work
                    </HashLink>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Let's Connect
                    </Link>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  {socials.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                    >
                      <img src={social.icon} alt={social.alt} className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <picture>
                  <source srcSet={HeroSm} width="363" height="222" media="(max-width: 400px)" type="image/png" />
                  <source srcSet={HeroMd} width="608" height="372" media="(max-width: 768px)" type="image/jpg" />
                  <img 
                    src={HeroLg} 
                    width="870" 
                    height="532" 
                    alt="Abhinaw working on computer"
                    className="w-full h-auto"
                  />
                </picture>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-lg p-2"
                >
                  <BoltIcon className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Activity Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Activity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what I've been working on recently
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-4 max-w-2xl mx-auto"
          >
            {latestActivity.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {skill.icon}
                      </div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work that showcases my skills in programming and software development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.tittle}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.tittle}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {project.category}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <RocketLaunchIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always excited to collaborate on interesting projects. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
