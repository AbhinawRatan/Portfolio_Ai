import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  MagnifyingGlassIcon, 
  TagIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

// Blog posts data
const blogPosts = [
  {
    id: 'ai-agents',
    title: 'Building Agentic Workflows: The Future of AI Automation',
    excerpt: 'Exploring how AI agents are revolutionizing automation and creating intelligent systems that can think, plan, and execute tasks autonomously.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AI & Development',
    tags: ['AI', 'Automation', 'Development'],
    path: '/blogs/ai-agents',
    featured: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'modern-web-dev',
    title: 'Modern Web Development: What Every Developer Should Know in 2025',
    excerpt: 'The web development landscape is evolving rapidly. Here\'s what you need to stay ahead of the curve and build better applications.',
    date: 'January 12, 2025',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Performance'],
    path: '/blogs/modern-web-dev',
    featured: true,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'ar101',
    title: 'AR 101: Getting Started with Augmented Reality',
    excerpt: 'In this blog I share my insights and basics of getting started in the world of Augmented Reality and XR Development in general.',
    date: 'December 20, 2024',
    readTime: '10 min read',
    category: 'AR/VR',
    tags: ['AR', 'XR', 'Development'],
    path: '/blogs/ar101',
    featured: false,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'jpeg',
    title: 'JPEG: The Beauty of Digital Photography',
    excerpt: 'I\'ve been capturing photographs for 5 years now and the beauty that a simple JPG holds is beyond anything.',
    date: 'November 15, 2024',
    readTime: '6 min read',
    category: 'Photography',
    tags: ['Photography', 'Digital Art', 'Creative'],
    path: '/blogs/jpeg',
    featured: false,
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 'imposter',
    title: 'Stable Diffusion: AI Art Generation',
    excerpt: 'Stable Diffusion is a deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images conditioned on text descriptions.',
    date: 'October 28, 2024',
    readTime: '7 min read',
    category: 'AI & Art',
    tags: ['AI', 'Art', 'Machine Learning'],
    path: '/blogs/imposter',
    featured: false,
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'daizy',
    title: 'Daizy Night: A Journey to the Hills',
    excerpt: 'A small blog about my journey to a small village in Pelling and how that moment was so captivating.',
    date: 'September 10, 2024',
    readTime: '5 min read',
    category: 'Personal',
    tags: ['Travel', 'Personal', 'Photography'],
    path: '/blogs/daizy',
    featured: false,
    color: 'from-yellow-500 to-orange-600'
  }
]

const categories = ['All', 'AI & Development', 'Web Development', 'AR/VR', 'Photography', 'AI & Art', 'Personal']

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

function BlogList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sharing my thoughts on technology, development, and creative projects. 
              From AI workflows to web development trends, explore my latest articles.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Highlighted posts covering the latest trends and insights
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                    <div className={`h-48 bg-gradient-to-br ${post.color} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-black">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={post.path} className="flex items-center gap-1">
                            Read More
                            <ArrowRightIcon className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`h-32 bg-gradient-to-br ${post.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <ClockIcon className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={post.path} className="flex items-center gap-1">
                          Read
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogList