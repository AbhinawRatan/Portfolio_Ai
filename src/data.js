
import { Darjelling} from "./assets"
import { JuetAR} from "./assets"
import {Cookaway,
    Youtube,
    Github,
    Instagram,
    LinkedIn,Resume} from "./assets"
import { Telegram} from "./assets"

export const portfolioData = [
    {
        tittle: "Agentic HomeLab System",
        thumbnail: Cookaway,
        alt: "AI-powered home automation system",
        category: "AI & Automation",
        link: "https://github.com/AbhinawRatan/agentic-homelab",
        description: "An intelligent home automation system using AI agents to manage containers, monitor health, and provide real-time insights."
    },
    {
        tittle: "Modern Portfolio Website",
        thumbnail: JuetAR,
        alt: "Modern portfolio website with shadcn/ui",
        category: "Web Development",
        link: "https://github.com/AbhinawRatan/modern-portfolio",
        description: "A modern, responsive portfolio website built with React, Tailwind CSS, and shadcn/ui components."
    },
    {
        tittle: "Airebot - AI Interview Assistant",
        thumbnail: Telegram,
        alt: "AI-powered interview preparation bot",
        category: "AI Application",
        link: "https://www.airebot.live",
        description: "An AI-enabled interview bot that helps candidates prepare for technical interviews with personalized feedback."
    },
    {
        tittle: "Solanastables Dashboard",
        thumbnail: Darjelling,
        alt: "Cryptocurrency dashboard for Solana stablecoins",
        category: "Blockchain & DeFi",
        link: "https://github.com/AbhinawRatan/StarBoard-Metrics",
        description: "A comprehensive dashboard for tracking Solana-based stablecoin metrics and market data."
    },
    {
        tittle: "Wellness Whisper",
        thumbnail: Cookaway,
        alt: "AI-powered mental health support bot",
        category: "Healthcare AI",
        link: "https://github.com/tknishh/wellness-whisper-peerlist",
        description: "A therapist bot providing AI-powered mental health support and wellness tracking."
    },
    {
        tittle: "Snap AR Bootcamp",
        thumbnail: JuetAR,
        alt: "Augmented reality development bootcamp",
        category: "AR/VR Education",
        link: "https://www.youtube.com/live/WC7NTRAvC7c?feature=share",
        description: "Educational content and tutorials for getting started with Snap AR development."
    }
]

export const socials = [
    {
        name: "LinkedIn",
        icon: LinkedIn,
        alt: "Follow me on LinkedIn",
        link: "https://www.linkedin.com/in/abhinaw-ratan-76183a144/"
    },
    {
        name: "GitHub",
        icon: Github,
        alt: "Check out my GitHub",
        link: "https://github.com/AbhinawRatan"
    },
    {
        name: "Twitter",
        icon: Instagram, // Using Instagram icon as placeholder
        alt: "Follow me on Twitter",
        link: "https://x.com/ratanabhinaww"
    },
    {
        name: "Instagram",
        icon: Instagram,
        alt: "Follow me on Instagram",
        link: "https://www.instagram.com/abhinawratan/"
    },
    {
        name: "YouTube",
        icon: Youtube,
        alt: "Subscribe to my YouTube channel",
        link: "https://www.youtube.com/@abhinawratan"
    }
]

export const skills = [
    {
        category: "Frontend Development",
        items: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Vue.js", level: 75 }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 85 },
            { name: "Express.js", level: 82 },
            { name: "FastAPI", level: 78 },
            { name: "PostgreSQL", level: 80 }
        ]
    },
    {
        category: "AI & Machine Learning",
        items: [
            { name: "OpenAI API", level: 88 },
            { name: "LangChain", level: 85 },
            { name: "Prompt Engineering", level: 92 },
            { name: "Vector Databases", level: 75 },
            { name: "RAG Systems", level: 82 }
        ]
    },
    {
        category: "DevOps & Cloud",
        items: [
            { name: "Docker", level: 85 },
            { name: "AWS", level: 78 },
            { name: "GitHub Actions", level: 82 },
            { name: "Linux", level: 88 },
            { name: "Kubernetes", level: 70 }
        ]
    }
]

export const experiences = [
    {
        title: "Full Stack Developer",
        company: "Freelance",
        duration: "2023 - Present",
        description: "Building modern web applications and AI-powered solutions for clients worldwide.",
        technologies: ["React", "Node.js", "AI/ML", "Cloud"]
    },
    {
        title: "AI Development Intern",
        company: "Tech Startup",
        duration: "2023 - 2024",
        description: "Developed AI agents and automation systems for business processes.",
        technologies: ["Python", "OpenAI", "LangChain", "Docker"]
    },
    {
        title: "Web Developer",
        company: "Local Business",
        duration: "2022 - 2023",
        description: "Created responsive websites and improved user experiences for local businesses.",
        technologies: ["HTML", "CSS", "JavaScript", "React"]
    }
]

export const achievements = [
    {
        title: "Open Source Contributor",
        description: "Active contributor to various open-source projects on GitHub",
        date: "2023 - Present"
    },
    {
        title: "AI Hackathon Winner",
        description: "Won first place in AI/ML hackathon for innovative chatbot solution",
        date: "2024"
    },
    {
        title: "Technical Blog Writer",
        description: "Published articles on AI development and modern web technologies",
        date: "2023 - Present"
    }
]

// Dynamic content for homepage
export const latestUpdates = [
    {
        type: "project",
        title: "Released Agentic HomeLab System",
        description: "Built an AI-powered home automation system with Docker integration",
        timestamp: "2 days ago",
        url: "https://github.com/AbhinawRatan/agentic-homelab"
    },
    {
        type: "blog",
        title: "Published: Modern Web Development in 2025",
        description: "Comprehensive guide to staying current with web development trends",
        timestamp: "1 week ago",
        url: "/blogs/modern-web-dev"
    },
    {
        type: "achievement",
        title: "Reached 1000+ GitHub Stars",
        description: "Combined stars across all repositories milestone achieved",
        timestamp: "2 weeks ago",
        url: "https://github.com/AbhinawRatan"
    }
]