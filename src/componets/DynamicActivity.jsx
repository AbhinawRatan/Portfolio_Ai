import React, { useState, useEffect } from 'react'

const DynamicActivity = () => {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const activities = [
    {
      type: "🚀 Recently Deployed",
      title: "Airebot Interview Platform",
      description: "Just shipped a new AI-powered interview bot with advanced conversation capabilities",
      time: "2 hours ago",
      status: "live",
      tech: ["React", "Node.js", "OpenAI"]
    },
    {
      type: "💻 Currently Building",
      title: "Solanastables Dashboard",
      description: "Working on real-time stablecoin analytics with beautiful data visualizations",
      time: "Active now",
      status: "development",
      tech: ["React", "Solana", "D3.js"]
    },
    {
      type: "📚 Learning",
      title: "WebXR Development",
      description: "Diving deep into augmented reality web experiences and spatial computing",
      time: "This week",
      status: "learning",
      tech: ["WebXR", "Three.js", "AR.js"]
    },
    {
      type: "🎨 Designing",
      title: "Portfolio Redesign",
      description: "Crafting a more immersive and interactive portfolio experience",
      time: "In progress",
      status: "design",
      tech: ["Figma", "Framer", "CSS"]
    },
    {
      type: "🔧 Optimizing",
      title: "Performance Tuning",
      description: "Achieved 31% bundle size reduction and implemented lazy loading",
      time: "Just completed",
      status: "completed",
      tech: ["Vite", "Webpack", "Optimization"]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [activities.length])

  const activity = activities[currentActivity]

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-green-500'
      case 'development': return 'bg-blue-500'
      case 'learning': return 'bg-purple-500'
      case 'design': return 'bg-pink-500'
      case 'completed': return 'bg-emerald-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'live': return 'Live'
      case 'development': return 'Building'
      case 'learning': return 'Learning'
      case 'design': return 'Designing'
      case 'completed': return 'Done'
      default: return 'Active'
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-6 shadow-lg border border-indigo-100 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(activity.status)} animate-pulse`}></div>
            <h3 className="text-lg font-bold text-gray-800">Latest Activity</h3>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(activity.status)}`}>
            {getStatusText(activity.status)}
          </span>
        </div>

        <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="mb-3">
            <p className="text-sm text-indigo-600 font-medium mb-1">{activity.type}</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h4>
            <p className="text-gray-600 leading-relaxed">{activity.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {activity.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">{activity.time}</span>
          </div>
        </div>

        {/* Activity indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentActivity(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentActivity 
                  ? 'bg-indigo-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DynamicActivity