import React from 'react'
import { JpegCover,DaizyPic } from '../../../assets'


  function Jpeg() {
    return (
    
        <><section className='text-white py-28 bg-center bg-cover'
            style={{ backgroundImage: "url(" + JpegCover + ")" }}>
            <div className='container mx-auto px-4'>
                <h2 className='text-lg font-bold uppercase'>Blog</h2>
                <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-6'>Jpeg</h1>

                <div className='text-lg md:flex gap-12'>

                    <div className='mb-4 md:mb-0'>
                        <span className='font-bold block mb-4'>Type</span>
                        Personal Blog
                    </div>

                    <div>
                        <span className='font-bold block mb-4'>Date</span>
                        23-Nov-2022
                    </div>
                </div>
            </div>
        </section>
        
{/* Main Body starts */} 
    <section className=' py-10 container mx-auto items-center grid gap-8 lg:grid-cols-2  '>
      <div className='container mx-auto px-4'>

        <h1 className='text-4xl font-bold mb-4 '>Story</h1>


<p className='text-lg font-medium mb-4'>As someone who has been clicking photos with their mobile for the past five years, I can confidently say that each and every moment I have captured holds a special place in my heart. For me, photography is more than just a hobby - it's a way for me to escape reality and transport myself back to a specific moment in time.
</p>
<p className='text-lg font-medium pb-4'>Every time I look through the photos I have taken, I am taken on a ride down memory lane. It's amazing how powerful a simple JPEG can be in terms of evoking emotions and memories. From candid shots of my friends and family, to landscapes and architecture that have taken my breath away, each photo holds a unique and special meaning to me.</p>

<p className='text-lg font-medium pb-4'>I am constantly amazed by the power of photography and the memories it can preserve. Whether it's a special occasion or just a casual outing with friends, I always make sure to have my camera by my side so I can capture those special moments and keep them close to my heart.</p>
<p className='text-lg font-medium pb-4'>In addition to being a way for me to escape reality, photography has also helped me to see the world in a different light. It has taught me to look for the beauty in the ordinary, and to appreciate the small moments that might otherwise go unnoticed. It's amazing how much you can learn about a place or a person just by looking at a single photograph.</p>
<p className='text-lg font-medium pb-4'>Sure, I'd be happy to continue writing about my love for photography.

In addition to being a way for me to escape reality, photography has also helped me to see the world in a different light. It has taught me to look for the beauty in the ordinary, and to appreciate the small moments that might otherwise go unnoticed. It's amazing how much you can learn about a place or a person just by looking at a single photograph.

But for me, it's not just about the final product. The process of taking a photograph is just as important as the photo itself. The act of framing a shot, adjusting the settings, and waiting for the perfect moment to press the shutter button is all part of the experience. It's a moment of focus and mindfulness that allows me to fully immerse myself in the present.
</p>

        

        <ul className='text-lg flex gap-8'>
          <li className='flex flex-col text-center bg-white border-black border-2 rounded-lg p-4'>
            <span className='font-bold text-2xl'>5min</span>
            <span>Time to Read</span>
          </li>
          
        </ul>
        
      </div>
      <div>
        <img src={DaizyPic} alt="Harley Davidson website" width='400' height='200' loading='lazy' className='mx-20 mb-60 '/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />    

    
        </div>

    </section>
    </>

    )
  }


export default Jpeg