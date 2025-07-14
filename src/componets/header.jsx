import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Logo } from '../assets/'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '#blog', label: 'Blog', isHash: true },
    { 
      to: 'https://drive.google.com/file/d/1ebdXjuU1O0QmhHZZ8IFRqJPCCNfBQNx8/view?usp=sharing', 
      label: 'Resume', 
      isExternal: true 
    }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-2xl shadow-purple-500/10 border-white/20' 
        : 'bg-white/90 backdrop-blur-sm border-black'
    } border-2 border-b-2`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[250px_1fr_200px] items-center">
          
          {/* Logo/Brand */}
          <Link 
            to='/' 
            className={`group flex items-center py-4 px-6 border-r-2 transition-all duration-300 ${
              isScrolled ? 'border-white/20' : 'border-black'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className={`font-bold text-xl transition-colors ${
                  isScrolled ? 'text-white' : 'text-gray-800'
                } group-hover:text-purple-500`}>
                  Abhinaw Ratan
                </h1>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-purple-200' : 'text-purple-600'
                }`}>
                  Full Stack Developer
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={item.to} className="relative">
                  {item.isHash ? (
                    <HashLink
                      to={item.to}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                        isScrolled 
                          ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      } group`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </HashLink>
                  ) : item.isExternal ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                        isScrolled 
                          ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      } group flex items-center gap-2`}
                    >
                      {item.label}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `
                        relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 group
                        ${isActive 
                          ? (isScrolled ? 'text-purple-300 bg-white/10' : 'text-purple-600 bg-purple-50')
                          : (isScrolled 
                              ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                              : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            )
                        }
                      `}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link 
            to='/contact'
            className={`hidden md:flex items-center justify-center gap-2 py-4 px-6 border-l-2 font-semibold transition-all duration-300 hover:scale-105 group ${
              isScrolled 
                ? 'border-white/20 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                : 'border-black bg-violet-200 hover:bg-violet-300 text-gray-800'
            }`}
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-purple-50'
            }`}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-white' : 'bg-gray-700'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-white' : 'bg-gray-700'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 border-t-2' : 'max-h-0'
        } ${isScrolled ? 'border-white/20' : 'border-black'}`}>
          <nav className="py-4">
            <ul className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <li key={item.to}>
                  {item.isHash ? (
                    <HashLink
                      to={item.to}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isScrolled 
                          ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      }`}
                    >
                      {item.label}
                    </HashLink>
                  ) : item.isExternal ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isScrolled 
                          ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      } flex items-center gap-2`}
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `
                        block px-4 py-3 rounded-lg font-medium transition-all duration-300
                        ${isActive 
                          ? (isScrolled ? 'text-purple-300 bg-white/10' : 'text-purple-600 bg-purple-50')
                          : (isScrolled 
                              ? 'text-white hover:bg-white/10 hover:text-purple-200' 
                              : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            )
                        }
                      `}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to='/contact'
                  className={`block px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                      : 'bg-violet-200 hover:bg-violet-300 text-gray-800'
                  }`}
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header