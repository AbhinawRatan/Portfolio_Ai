import React from 'react'
import { DaizyCover,DaizyPic } from '../../../assets'


  function Daizy() {
    return (
    
        <><section className='text-white py-28 bg-center bg-cover'
            style={{ backgroundImage: "url(" + DaizyCover + ")" }}>
            <div className='container mx-auto px-4'>
                <h2 className='text-lg font-bold uppercase'>Blog</h2>
                <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-6'>Daizy Night</h1>

                <div className='text-lg md:flex gap-12'>

                    <div className='mb-4 md:mb-0'>
                        <span className='font-bold block mb-4'>Type</span>
                        Personal Blog
                    </div>

                    <div>
                        <span className='font-bold block mb-4'>Date</span>
                        3-June-2022
                    </div>
                </div>
            </div>
        </section>
        
{/* Main Body starts */} 
    <section className=' py-10 container mx-auto items-center grid gap-8 lg:grid-cols-2  '>
      <div className='container mx-auto px-4'>

        <h1 className='text-4xl font-bold mb-4 '>Beginning</h1>
        <p className='text-lg font-medium pb-4'>It's been a tough year for everyone, and I'm no exception. I've been going through some difficult times, and it's been weighing heavily on me. I needed something to lift my spirits and bring some joy back into my life. So, when I heard about a trip to Darjeeling in June 2022, I jumped at the opportunity.</p>

<p className='text-lg font-medium mb-4'>I was in Phelling, at a small and somewhat unpopular village in Sikkim. It's a beautiful place, with stunning views of the Himalayan mountains and a peaceful atmosphere. I was staying at a hotel with a terrace, and as the night falls, I find myself drawn to it.
</p>
<p className='text-lg font-medium pb-4'>As I sit on the terrace, looking out at the twinkling lights of the village below, I can't help but feel a sense of calm wash over me. It's been a long journey to get to this point, and I've been through a lot. But somehow, I've found my way back to myself.
</p>
<p className='text-lg font-medium pb-4'>Maybe it's the fresh mountain air, or the peaceful surroundings, but I feel more at peace than I have in a long time. I'm looking forward to my trip to Darjeeling, and I have a feeling it's going to be exactly what I need to rejuvenate my spirit.</p>
<p className='text-lg font-medium pb-4'>So here's to new adventures and finding our way back to ourselves. May we all find the peace and joy we need to keep moving forward.</p>


        

        <ul className='text-lg flex gap-8'>
          <li className='flex flex-col text-center bg-white border-black border-2 rounded-lg p-4'>
            <span className='font-bold text-2xl'>5min</span>
            <span>Time to Read</span>
          </li>
          
        </ul>
        
      </div>
      <div>
        <img src={DaizyPic} alt="Harley Davidson website" width='400' height='200' loading='lazy' className='mx-20 '/>
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


export default Daizy