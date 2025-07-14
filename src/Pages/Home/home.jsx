import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Scroller from '../../componets/scroller'
import Contact from '../../componets/contact'
import Footer from '../../componets/footer'
import LazyImage from '../../componets/LazyImage'
import DynamicActivity from '../../componets/DynamicActivity'
import AnimatedBackground from '../../componets/AnimatedBackground'
import { socials } from '../../data'

import { HeroSm,HeroMd,Logo,BoyImage,HeroLg } from '../../assets'
import { portfolioData } from '../../data'

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Dynamically import the large background image only when needed
  useEffect(() => {
    const loadBackground = async () => {
      try {
        const { Background } = await import('../../assets')
        setBackgroundImage(Background)
      } catch (error) {
        console.error('Failed to load background image:', error)
      }
    }
    
    // Load background image with a delay to prioritize above-the-fold content
    const timer = setTimeout(loadBackground, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className='border-black border-x-2 relative overflow-hidden'>
      {/* Hero Section with Enhanced Visuals */}
      <section className='relative min-h-screen flex items-center py-20'>
        <AnimatedBackground variant="hero" />
        
        <div className='container mx-auto gap-8 px-4 flex flex-col lg:flex-row items-center relative z-10'>
          {/* Hero Image */}
          <div className={`lg:flex-1 lg:order-2 mb-12 lg:mb-0 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className='relative group'>
              <picture className='flex drop-shadow-[20px_-20px_0_rgb(139,92,246,0.3)]
                    border-4 border-white/20 rounded-tl-[150px] rounded-br-[150px]
                    rounded-xl overflow-hidden backdrop-blur-sm bg-white/10
                    transition-all duration-500 group-hover:scale-105 group-hover:rotate-1
                  '>
                <source srcSet={HeroSm} width='363' height='222' 
                media='(max-width: 400px)' type='image/png' />
                <source srcSet={HeroMd} width='608' height='372' 
                media='(max-width: 768px)' type='image/jpg' />
                <LazyImage 
                  src={HeroLg} 
                  width='870' 
                  height='532' 
                  alt="Abhinaw working on innovative projects"
                  className="w-full h-auto relative z-10"
                />
              </picture>
              
              {/* Floating tech badges around the image */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-float">
                React.js
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-float animation-delay-1000">
                AI/ML
              </div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-float animation-delay-2000">
                WebXR
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className={`lg:flex-1 py-10 lg:py-20 text-center lg:text-left transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="animate-fadeInUp">
              <h2 className='text-2xl md:text-3xl font-bold mb-4 animate-fadeInLeft'>
                Hi 👋 I'm <span className="text-gradient">Abhinaw</span>
              </h2>
              <h1 className='text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fadeInLeft animation-delay-1000'>
                Developer
                <span className='text-violet-500 animate-pulse text-glow'>.</span>
              </h1>
              <p className='text-lg lg:text-xl max-w-2xl mb-8 text-gray-700 leading-relaxed animate-fadeInLeft animation-delay-2000'>
                I am a passionate computer science student crafting innovative digital experiences. 
                <br className="hidden lg:block" />
                Specializing in <span className="font-semibold text-purple-600">AI-powered applications</span>, 
                <span className="font-semibold text-blue-600"> WebXR development</span>, and 
                <span className="font-semibold text-green-600"> modern web technologies</span>.
              </p>
              
              <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fadeInUp animation-delay-2000'>
                <HashLink 
                  to='#work' 
                  className='group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 
                           hover:from-violet-600 hover:to-purple-700 text-white font-semibold
                           transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                           hover-lift animate-glow'
                >
                  <span className="flex items-center gap-2">
                    Selected Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </HashLink>
                
                <Link 
                  to='/contact'
                  className='group px-8 py-4 rounded-xl border-2 border-violet-500 text-violet-600 
                           hover:bg-violet-500 hover:text-white font-semibold
                           transform transition-all duration-300 hover:scale-105 hover-lift
                           flex items-center gap-2'
                >
                  Let's Talk
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Social Links with Enhanced Design */}
              <div className='animate-fadeInUp animation-delay-4000'>
                <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">Connect With Me</h3>
                <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>
                  {socials.map((item, index) => (
                    <li key={index} className="transform transition-all duration-300 hover:scale-110">
                      <a 
                        target='_blank' 
                        href={item.link} 
                        rel='noopener noreferrer'
                        className='group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm
                                 border border-white/50 hover:bg-white hover:shadow-lg
                                 transition-all duration-300 hover-lift'
                      >
                        <LazyImage 
                          src={item.icon} 
                          alt={item.alt} 
                          width='24' 
                          height='24'
                          className="w-6 h-6 group-hover:scale-110 transition-transform"
                        />
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Activity Section */}
      <section className="py-16 px-4 relative">
        <AnimatedBackground variant="default" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What I'm Working On
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time updates on my latest projects, learning adventures, and creative endeavors
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <DynamicActivity />
          </div>
        </div>
      </section>
      
      <Scroller
        text={"🌟Have a project in mind?🌟 Let's get things moving! Have a project in mind?🌟 Let's get things moving! 🌟Have a project in mind?🌟 Let's get things moving!🌟Have a project in mind?🌟Let's get things moving!" }
        Link="/contact"
      />
      
      {/* Enhanced Work Section */}
      <section 
        id="work" 
        className={`px-4 pb-12 border-black border-t-2 relative min-h-screen ${
          backgroundImage ? 'bg-fixed' : ''
        }`} 
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : { backgroundColor: '#1e1b4b' }}
      >
        <AnimatedBackground variant="work" />
        
        <div className='container mx-auto relative z-10'>
          <div className='text-white text-center py-16'>
            <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fadeInUp text-glow'>
              Selected Work
            </h1>
            <p className='max-w-3xl mx-auto text-xl leading-relaxed animate-fadeInUp animation-delay-1000'>
              I specialize in creating innovative solutions across development, video editing, graphics design, 
              and ABAP development. Each project showcases my commitment to excellence and creative problem-solving.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-28'>
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-500 hover:scale-105 
                          animate-fadeInUp md:even:mt-12 hover-lift
                          ${index % 2 === 0 ? 'md:hover:-rotate-1' : 'md:hover:rotate-1'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <a 
                  target='_blank' 
                  href={item.link} 
                  rel='noopener noreferrer'
                  className='block'
                >
                  <div className='relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black/50 backdrop-blur-sm'>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <LazyImage 
                      src={item.thumbnail} 
                      alt={item.alt} 
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className='glass mx-4 -mt-8 relative z-10 p-6 rounded-xl text-lg backdrop-blur-xl'>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className='font-bold text-white text-xl mb-1 group-hover:text-purple-300 transition-colors'>
                          {item.tittle}
                        </h3>
                        <p className='text-purple-200 font-medium'>
                          {item.category}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <svg className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fadeInUp">
            <Link 
              to={'/work'} 
              className="group inline-flex items-center gap-4 text-2xl font-bold text-white 
                       hover:text-purple-300 transition-colors duration-300"
            >
              View all work
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section */}
      <section id='blog' className='border-black border-t-2 px-4 py-20 relative bg-gradient-to-br from-gray-50 to-purple-50'>
        <AnimatedBackground variant="default" />
        
        <div className='container mx-auto relative z-10'>
          <div className='text-center py-16'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-gradient animate-fadeInUp'>
              Latest Blogs
            </h1>
            <p className='max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fadeInUp animation-delay-1000'>
              Sharing my journey through stories, insights, and experiences. 
              Join me as I explore technology, creativity, and life adventures.
            </p>
          </div>
          
          <div className='grid lg:grid-cols-3 gap-12 items-center'>
            {/* Left Column */}
            <div className="space-y-12 animate-fadeInLeft">
              <div className="group hover-lift">
                <h3 className='text-2xl font-bold mb-4 text-purple-600 group-hover:text-purple-700 transition-colors'>JPEG Chronicles</h3>
                <p className='mb-6 text-gray-700 leading-relaxed'>
                  Five years of capturing moments through my lens. Discover the beauty and stories 
                  that simple JPEG files can hold, from street photography to digital art.
                </p>
                <Link 
                  to={'/Blogs/jpeg'} 
                  className='inline-flex items-center gap-2 font-bold text-lg text-purple-600 
                           hover:text-purple-700 group-hover:gap-4 transition-all'
                >
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="group hover-lift">
                <h3 className='text-2xl font-bold mb-4 text-blue-600 group-hover:text-blue-700 transition-colors'>AR 101</h3>
                <p className='mb-6 text-gray-700 leading-relaxed'>
                  Your gateway into Augmented Reality and XR development. Essential insights, 
                  tutorials, and real-world applications in spatial computing.
                </p>
                <Link 
                  to={'/Blogs/AR101'} 
                  className='inline-flex items-center gap-2 font-bold text-lg text-blue-600 
                           hover:text-blue-700 group-hover:gap-4 transition-all'
                >
                  Explore AR
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Center Image */}
            <div className='flex justify-center animate-scaleIn animation-delay-1000'>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <LazyImage 
                  src={BoyImage} 
                  alt="Abhinaw's Blog Journey" 
                  className='relative border-4 border-white rounded-full object-cover w-80 h-80 
                           shadow-2xl group-hover:scale-105 transition-transform duration-500'
                  width='320'
                  height='320'
                />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-12 animate-fadeInRight">
              <div className="group hover-lift">
                <h3 className='text-2xl font-bold mb-4 text-green-600 group-hover:text-green-700 transition-colors'>Daizy Night</h3>
                <p className='mb-6 text-gray-700 leading-relaxed'>
                  A captivating journey to a hidden village in Darjeeling. Experience the magic 
                  of mountain nights and discover moments that take your breath away.
                </p>
                <Link 
                  to={'/Blogs/daizy'} 
                  className='inline-flex items-center gap-2 font-bold text-lg text-green-600 
                           hover:text-green-700 group-hover:gap-4 transition-all'
                >
                  Journey Here
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="group hover-lift">
                <h3 className='text-2xl font-bold mb-4 text-orange-600 group-hover:text-orange-700 transition-colors'>Stable Diffusion</h3>
                <p className='mb-6 text-gray-700 leading-relaxed'>
                  Exploring the frontier of AI-generated art. Deep dive into Stable Diffusion, 
                  text-to-image models, and the future of creative AI.
                </p>
                <Link 
                  to={'/Blogs/imposter'} 
                  className='inline-flex items-center gap-2 font-bold text-lg text-orange-600 
                           hover:text-orange-700 group-hover:gap-4 transition-all'
                >
                  Discover AI Art
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
