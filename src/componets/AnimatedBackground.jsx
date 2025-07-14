import React from 'react'

const AnimatedBackground = ({ variant = 'default', className = '' }) => {
  const FloatingElement = ({ size, color, animationDelay, position }) => (
    <div
      className={`absolute ${size} ${color} rounded-full opacity-20 animate-float`}
      style={{
        left: position.x,
        top: position.y,
        animationDelay: animationDelay,
        animationDuration: '6s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out'
      }}
    />
  )

  const renderDefault = () => (
    <>
      {/* Floating geometric shapes */}
      <FloatingElement 
        size="w-20 h-20" 
        color="bg-gradient-to-br from-purple-400 to-pink-400" 
        animationDelay="0s"
        position={{ x: '10%', y: '20%' }}
      />
      <FloatingElement 
        size="w-16 h-16" 
        color="bg-gradient-to-br from-blue-400 to-purple-400" 
        animationDelay="2s"
        position={{ x: '80%', y: '30%' }}
      />
      <FloatingElement 
        size="w-12 h-12" 
        color="bg-gradient-to-br from-indigo-400 to-blue-400" 
        animationDelay="4s"
        position={{ x: '70%', y: '70%' }}
      />
      <FloatingElement 
        size="w-24 h-24" 
        color="bg-gradient-to-br from-pink-400 to-purple-400" 
        animationDelay="1s"
        position={{ x: '15%', y: '80%' }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 via-transparent to-pink-50/20"></div>
    </>
  )

  const renderHero = () => (
    <>
      {/* Large background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 opacity-40"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </>
  )

  const renderWork = () => (
    <>
      {/* Dynamic grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }, (_, i) => (
            <div 
              key={i} 
              className="border-r border-white/20 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      
      {/* Animated diagonal lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent top-1/4 animate-shimmer"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 animate-shimmer animation-delay-1000"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent top-3/4 animate-shimmer animation-delay-2000"></div>
      </div>
      
      {/* Corner accent elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
    </>
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === 'hero' && renderHero()}
      {variant === 'work' && renderWork()}
      {variant === 'default' && renderDefault()}
    </div>
  )
}

export default AnimatedBackground