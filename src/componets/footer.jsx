import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeartIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

import { Button } from '../components/ui/button'
import { socials } from '../data'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">
                Abhinaw <span className="text-primary">Ratan</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative solutions with AI, 
                modern web technologies, and exceptional user experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
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
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Recent Posts */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Recent Posts</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/blogs/ai-agents" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Agentic Workflows
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs/modern-web-dev" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Modern Web Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs/ar101" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    AR Development 101
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs/jpeg" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Digital Photography
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center text-muted-foreground text-sm mb-4 md:mb-0"
          >
            <span>© {currentYear} Abhinaw Ratan. Made with</span>
            <HeartIcon className="w-4 h-4 mx-1 text-red-500" />
            <span>and lots of ☕</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <ArrowUpIcon className="w-4 h-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer