import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline'
import { Badge } from '../../../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

function ModernWebDev() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4">
              <TagIcon className="w-3 h-3 mr-1" />
              Web Development
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Modern Web Development: What Every Developer Should Know in 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The web development landscape is evolving rapidly. Here's what you need to stay ahead of the curve and build better applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>Abhinaw Ratan</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span>January 12, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">The Evolution of Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Web development has come a long way from simple HTML pages and basic CSS. Today's developers 
                    work with sophisticated frameworks, AI-powered tools, and complex architectures that would 
                    have seemed impossible just a few years ago.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Key Trends Shaping 2025:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>AI Integration:</strong> AI-powered coding assistants and automated testing</li>
                      <li>• <strong>Edge Computing:</strong> Faster performance with distributed processing</li>
                      <li>• <strong>JAMstack Evolution:</strong> Static site generation with dynamic capabilities</li>
                      <li>• <strong>WebAssembly:</strong> Near-native performance in the browser</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Essential Technologies for Modern Developers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The modern web developer's toolkit has expanded significantly. Here are the technologies 
                    you should focus on:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">⚛️ React & Next.js</h4>
                      <p className="text-sm text-muted-foreground">
                        React remains the most popular frontend framework, with Next.js providing 
                        server-side rendering and static site generation capabilities.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">🎨 Modern CSS</h4>
                      <p className="text-sm text-muted-foreground">
                        CSS Grid, Flexbox, and utility-first frameworks like Tailwind CSS are 
                        revolutionizing how we style applications.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">🔧 TypeScript</h4>
                      <p className="text-sm text-muted-foreground">
                        Type safety and better developer experience make TypeScript essential 
                        for large-scale applications.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">⚡ Vite & Build Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Fast build tools and hot module replacement improve development 
                        experience significantly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">The Rise of AI in Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI is transforming how we write code, debug applications, and solve problems. 
                    Here's how to leverage AI effectively:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">🤖 AI-Powered Coding Assistants</h4>
                      <p className="text-sm text-muted-foreground">
                        Tools like GitHub Copilot, Cursor, and CodeWhisperer are becoming indispensable 
                        for rapid development and code generation.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">🔍 Automated Testing</h4>
                      <p className="text-sm text-muted-foreground">
                        AI can generate test cases, identify edge cases, and even write comprehensive 
                        test suites automatically.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">🐛 Intelligent Debugging</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered debugging tools can identify performance bottlenecks, suggest 
                        optimizations, and even fix bugs automatically.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Performance & User Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Modern web applications need to be fast, accessible, and provide excellent user experiences. 
                    Here's what to focus on:
                  </p>
                  
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">🚀 Core Web Vitals</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Google's Core Web Vitals are crucial for SEO and user experience:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>LCP:</strong> Largest Contentful Paint - loading performance</li>
                      <li>• <strong>FID:</strong> First Input Delay - interactivity</li>
                      <li>• <strong>CLS:</strong> Cumulative Layout Shift - visual stability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">♿ Accessibility First</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Building accessible applications is not optional in 2025:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Semantic HTML and ARIA labels</li>
                      <li>• Color contrast and keyboard navigation</li>
                      <li>• Screen reader compatibility</li>
                      <li>• Automated accessibility testing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">The Future of Web Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While React continues to dominate, new frameworks are emerging with innovative approaches:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Svelte & SvelteKit</h4>
                        <p className="text-sm text-muted-foreground">
                          Compile-time optimizations and smaller bundle sizes make Svelte increasingly attractive.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Solid.js</h4>
                        <p className="text-sm text-muted-foreground">
                          Fine-grained reactivity and excellent performance without virtual DOM overhead.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Astro</h4>
                        <p className="text-sm text-muted-foreground">
                          Island architecture for optimal performance with minimal JavaScript.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">DevOps & Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Modern web development extends beyond just writing code. Understanding deployment 
                    and operations is crucial:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">🐳 Containerization</h4>
                      <p className="text-sm text-muted-foreground">
                        Docker and Kubernetes for consistent deployment across environments.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">🔄 CI/CD Pipelines</h4>
                      <p className="text-sm text-muted-foreground">
                        Automated testing, building, and deployment with GitHub Actions or similar tools.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">☁️ Cloud Platforms</h4>
                      <p className="text-sm text-muted-foreground">
                        Serverless functions, edge computing, and managed services for scalability.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">📊 Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time monitoring, logging, and error tracking for production applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Skills for the Future</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    To stay relevant in 2025 and beyond, developers need to focus on these areas:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">🧠 Problem-Solving & Systems Thinking</h4>
                      <p className="text-sm text-muted-foreground">
                        Understanding how different parts of a system interact and being able to 
                        solve complex problems efficiently.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">🤝 Collaboration & Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        Working effectively with designers, product managers, and other developers 
                        in remote and hybrid environments.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">📚 Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        The ability to quickly learn new technologies and adapt to changing requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Conclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The web development landscape in 2025 is more exciting and dynamic than ever. 
                    While the core principles of building great user experiences remain constant, 
                    the tools and technologies we use continue to evolve rapidly.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Success in modern web development requires balancing technical expertise with 
                    soft skills, staying curious about new technologies, and always keeping the 
                    user experience at the center of everything you build.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      🚀 Ready to level up your web development skills? Check out my projects and 
                      tutorials to see these concepts in action!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

export default ModernWebDev