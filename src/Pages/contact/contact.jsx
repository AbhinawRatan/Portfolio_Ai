import React from 'react'
import { socials } from '../../data'
import Scroller from '../../componets/scroller'
import { Ai2 } from '../../assets'

function Contact() {
  return (
    <>
    <section className='py-12 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>Contact</h1>
        <p className='mb-6 text-lg'>
        Thank you for visiting my page! I am always open to new collaborations and
         partnerships, and we would love to hear from you. If you have an idea for a project, a
          question about my work, or simply want to connect, please don't hesitate to reach out using
           the form below.
        <p className='mb-6 text-xl'
        >My Email- Ratanabhinaw@gmail.com</p>
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
        <div>
        <form action="https://public.herotofu.com/v1/d3ae1c10-861d-11ed-b38f-a1ed22f366b1" method="post">
        <div className='w-full mb-4'>
          <label for="name" className='form-label inline-block mb-2 text-gray-700'>Your Name</label>
          <input name="Name" id="name" type="text" required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <label for="email" className='form-label inline-block mb-2 text-gray-700'>Your Email</label>
          <input name="Email" id="email" type="email" required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <label for="message" className='form-label inline-block mb-2 text-gray-700'>Message</label>
          <textarea name="email" id="email" cols="30" rows="4" className='block w-full px-3 py-2 border-black border-2 rounded'></textarea>
        </div>
 
        <div>
          <input type="submit" value="Send it!" className='px-6 py-4 rounded-md bg-purple-400 hover:bg-purple-600 text-white' />
        </div>
</form>
        </div>
       
         
      </div>
      <div className='item-center  p-4 justify-center'>
  
        <img src={Ai2}alt =" Ai generated pictures" className='border-purple-200 rounded-xl  '/>
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

export default Contact