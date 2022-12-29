import React from 'react'
import { ArCover,Arpic } from '../../../assets'


  function Ar() {
    return (
    
        <><section className='text-white py-28 bg-center bg-cover'
            style={{ backgroundImage: "url(" + ArCover + ")" }}>
            <div className='container mx-auto px-4'>
                <h2 className='text-lg font-bold uppercase'>Blog</h2>
                <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-6'>AR:101</h1>

                <div className='text-lg md:flex gap-12'>

                    <div className='mb-4 md:mb-0'>
                        <span className='font-bold block mb-4'>Type</span>
                        Technical Blog
                    </div>

                    <div>
                        <span className='font-bold block mb-4'>Date</span>
                        28-Dec-2022
                    </div>
                </div>
            </div>
        </section>
        
{/* Main Body starts */} 
    <section className=' py-10 container mx-auto items-center grid gap-8 lg:grid-cols-2  '>
      <div className='container mx-auto px-4'>

        <h1 className='text-4xl font-bold mb-4 '>How to Get Started with AR Development!</h1>
        <p class="text-lg font-bold text-gray-800 leading-tight"></p>
<p class="text-gray-700">Augmented Reality (AR) is a technology that allows users to experience digital content in the real world by overlaying it on top of the physical environment. AR has become increasingly popular in recent years, with the proliferation of AR-enabled devices such as smartphones and tablets.</p>
<p class="text-gray-700">If you're interested in getting started with AR development, there are a few steps you can follow to get started:</p>
<ol class="list-decimal list-inside text-gray-700">
  <li class="mb-2">Choose an AR platform: There are several AR platforms available, including SparkAR, Unity, and ARCore. Each platform has its own set of tools and features, so it's important to choose the one that best fits your needs.</li>
  <li class="mb-2">Learn the basics: Regardless of which platform you choose, you'll need to have a basic understanding of programming languages such as JavaScript or C#, as well as 3D modeling and design. There are plenty of online resources available to help you learn these skills, including tutorials, courses, and documentation.</li>
  <li class="mb-2">Familiarize yourself with the platform's tools and features: Each AR platform has its own set of tools and features, so it's important to familiarize yourself with them. This might involve reading documentation, watching tutorials, or experimenting with sample projects.</li>
  <li class="mb-2">Choose a project: Once you've learned the basics and familiarized yourself with the platform's tools, it's time to choose a project. This could be something simple, like creating a 3D model that appears in the real world when a user points their device at a specific image, or something more complex, like creating a fully interactive AR game.</li>
  <li class="mb-2">Start building: Now it's time to start building your AR project. This will involve using the tools and features of your chosen platform to create 3D models, write code, and bring everything together into a cohesive experience.</li>
  <li class="mb-2">Test and debug: As with any software development project, testing and debugging is an important part of the process. Make sure to thoroughly test your AR project on different devices and in different environments to ensure it works as intended.</li>
  <li class="mb-2">Publish and share: Once you're happy with your AR project, it's time to publish it and share it with the world. Depending on your platform, this might involve uploading it to an app store or hosting it on your own website.</li>
</ol>
<p class="text-gray-700">AR development can be a rewarding and exciting field to work in, and with the right tools and skills, you can create immersive and engaging experiences that bring the digital world to life. So if you're interested in getting started with AR development, now is the perfect time to dive in and start building.</p>

        

        <ul className='text-lg flex gap-8 mt-8'>
          <li className='flex flex-col text-center bg-white border-black border-2 rounded-lg p-4'>
            <span className='font-bold text-2xl'>5min</span>
            <span>Reading Time</span>
          </li>
          
        </ul>
        
      </div>
      <div>
        <img src={Arpic} alt="Harley Davidson website" width='400' height='200' loading='lazy' className='mx-20 -mb-0 border-purple-200 rounded-3xl  '/>
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


export default Ar