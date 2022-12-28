import React from 'react'
import { socials } from '../../data'
import Scroller from '../../componets/scroller'
import { Ai3 } from '../../assets'

function About() {
  return (
    <>

    <section className='py-12 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>My Story</h1>
        <p className='mb-2 text-lg'>
        I am Abhinaw Ratan, a third-year engineering student with a passion for web development. As an aspiring full stack
        web developer, I am constantly seeking to expand my skillset and knowledge of the latest technologies and best
        practices. I am dedicated to producing high-quality work and am always looking for opportunities to learn and grow
        as a developer.
        </p>
       
        <div className='text-lg font-bold'>Find me on:</div>

        <div className='mb-8'>

          <ul className='flex gap-6'>
            {socials.map((item, index) => (
              <li key={index}>
                <a target='_blank' href={item.link} rel='noopener noreferrer'
                className='py-2 flex flex-col md:flex-row gap-3 items-center justify-center'>
                <img src={item.icon} alt={item.alt} width='' height='' />
                {item.name}
                </a>
              </li>
            ))}
    
          </ul>
        </div>
        <div className='text-lg font-bold'>Skills:</div>
        <div className='mb-8'>
          <ul className='flex flex-wrap gap-4'>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>HTML</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>CSS</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>JavaScript</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>React</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Node</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>MongoDB</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Python</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Django</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>C++</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>SparkAR</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Git</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Linux</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Firebase</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Unity</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Blender</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Lense Studio</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Tailwind</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>UI/UX</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Graphics Designing</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Davinci Resolve</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Adobe Illustrator</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Adobe Photoshop</li>
            <li className='bg-purple-200 px-4 py-2 rounded-lg'>Adobe Premiere Pro</li>
          </ul>
           
        </div>
         
      </div>
      <div className='item-center  p-4 justify-center'>
  
        <img src={Ai3}alt =" Ai generated pictures" className='border-purple-200 rounded-xl  '/>
      </div>
      </div>
      

    </section>

    <Scroller
      text={" ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind?"}
      link="/contact"
    />
  

    </>
  )
}

export default About