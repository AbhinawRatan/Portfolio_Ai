import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Scroller from '../../componets/scroller'
import Contact from '../../componets/contact'
import Footer from '../../componets/footer'
import { socials } from '../../data'


import { HeroSm,HeroMd,Logo,Background, BoyImage,HeroLg } from '../../assets'
import { portfolioData } from '../../data'
import { NavLink } from 'react-router-dom'

function Home() {
    //user defined components must strt from capital letters
  return (
    <div className='border-black border-x-2'>
      <section className=''>

      <div className='container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center '>
        <div className='md:flex-1 md: order-2 '>
        <picture className='flex drop-shadow-[10px_-10px_0_rgb(215,189,226,1)]
              border-black rounded-tl-[150px] rounded-br-[150px]
              rounded-xl overflow-hidden 
            '>

              <source srcSet={HeroSm} width='363' height='222' 
              media='(max-width: 400px)' type='image/png' />
              <source srcSet={HeroMd} width='608' height='372' 
              media='(max-width: 400px)' type='image/jpg' />
              <img src={HeroLg} width='870' height='532' alt="Me working hard on a computer"/>

            </picture>
            
              </div>
        <div className='md:flex-1 py-10 object-left-top lg:py-40 lg:px-10 xl: mb-4 si'>

          <h2 className='text-xl md:text-2xl font-bold'>Hi 👋 I'm Abhinaw</h2>
          <h1 className='text-6xl lg:text-6xl font-bold'
          >Developer <span className='text-violet-400 '>
            .</span></h1>
            <p className=' text-lg max-w-xl mb-6'>
            I am a computer science student. <br />
            On this website, you will find a collection of my projects that showcase my skills in programming and software development.
            </p>
            <div className=' flex items-baseline gap-4'>
            <HashLink to ='#work' className='px-6 py-4 rounded-md
            bg-violet-500 hover:bg-violet-600 text-white'>
              Selected Work
            </HashLink>
            <Link to ='/contact'className='px-6 py-4 rounded-md text-black flex gap-2 hover:text-violet-300'>
            Let's Talk
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg></Link>
          
            </div>
            <div className='mb-8 py-4'>

<ul className='flex gap-6 py-4'>
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

        </div>




      </div>




      </section>
      
      <Scroller
      text={"🌟Have a project in mind?🌟 Let's get things moving! Have a project in mind?🌟 Let's get things moving! 🌟Have a project in mind?🌟 Let's get things moving!🌟Have a project in mind?🌟Let's get things moving!" }
      Link="/contact"
      />
  <section id="work" className='px-4 pb-12 border-black border-t-2
      bg-white-600 bg-fixed
    ' style={{ backgroundImage: "url(" + Background + ")" }} >

      <div className='container mx-auto'>

        <div className='text-white text-center py-12'>
            <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>
              Selected Work
            </h1>
          <p className='max-w-xl mx-auto text-base'>
            
I have been working in the field of development, video editing, graphics designing and Abap development for the past few years. 
I have gained a lot of experience and knowledge in these fields.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-28'>
          {portfolioData.map((item, index) => (
              <a target='_blank' href={item.link} rel='noopener noreferrer
              md:even:pt-12 ease-in-out duration-75
              hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]
            '>

            <div className='border-2 border-black rounded-xl overflow-hidden bg-black relative'>
              <img src={item.thumbnail} alt={item.alt} loading ='lazy' />
            </div>
            <div className='bg-white border-x-3 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4  text-lg flex justify-between gap-4
            item-center '>
              <div>
                <span className='font-bold'>
                  {item.tittle}
                </span>
                <span className='text-zinc-400 '> &#9697; {item.category}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

            </div>
          </a>
        ))}
        </div>
        <Link to={'/work'} className="flex text-xl gap-4 font-bold text-white justify-center mb-8">View all work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </Link>

      </div>

    </section>


    <section id='blog' className='border-black border-t-2 px-4 py-12'>
      <div className='container mx-auto px-4 py-12'>
        <div className=' text-center py-12'>
        <h1 className='text-4xl lg:text-5xl xl: font-bold mb-4' >
          Blogs!
        </h1>
        <p className='max-w-xl mx-auto text-lg '>
          I've always loved sharing stories with help of these blogs i woud like to share
          my journey and stories !!
          enjoy reafd
        </p>
          </div>
          <div className='text-black py-12 grid lg:grid-cols-4 item-center '>
            <div>
              <h3 className='text-xl font-bold mb-4'>JPEG</h3>
              <p className='mb-4 '>
                I've been clicking photograps from 5 years now and the beauty that a simple
                jpg hold is beyond anything.
              </p>
              <Link to={'/Blogs/jpeg'} className ='flex gap-2 items-center font-bold mb-14 text-lg' >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
              </Link>
              <h3 className='text-xl font-bold mb-4'>AR 101</h3>
              <p className='mb-4 '>
              In this blog i have shared my insight and basics pf getting started in the world os Augmented Reality 
              and XR Development in genral
              </p>
              <Link to={'/Blogs/AR101'} className ='flex gap-2 items-center font-bold mb-14 text-lg' >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
              </Link>
            </div>




            
            <div className='flex justify-center mb-12 md:mb-0 col-span-2 object-none' ><img src={BoyImage} alt="Blogs" 
            loading='Lazy'
            className='border-2 border-purple-400 rounded-full object-fill w-3/6  drop-shadow-[10px_-10_0_rgba(250,204,21,1)]
            ' /></div>
            <div><h3 className='text-xl font-bold mb-4'>Daizy Night</h3>
              <p className='mb-4 '>
                This is small blog about my Journey to a small village in phelling and how that moment is soo captivating
              </p>
              <Link to={'/Blogs/daizy'} className ='flex gap-2 items-center font-bold mb-14 text-lg' >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
              </Link>
              <h3 className='text-xl font-bold mb-4'>Stable Diffusion</h3>
              <p className='mb-4 '>
              Stable Diffusion is a deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images conditioned on text descriptions.
              </p>
              <Link to={'/Blogs/imposter'} className ='flex gap-2 items-center font-bold mb-14 text-lg' >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
              </Link></div>
          </div>
        </div>
    </section>
    
   

      </div>

      
  )
}

export default Home