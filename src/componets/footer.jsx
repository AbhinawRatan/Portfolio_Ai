import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Logo } from '../assets/'
const activeClassName = "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-violet-300"
function Footer() {
  return (
    <footer className='grid grid-cols-2 md:grid-cols-[250px_1fr_250px] border-black border-2 bg-white'>

      

         <Link to = '/content'className='md:col-start-3 border-black md:border-l-2 flex gap-2 items-center justify-center text-lg
          bg-violet-200 hover:bg-violet-300 ease-in-out duration-75'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

            Lets Talk
            </Link>
        <div className='col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-top-2 border-black md:border-t-0 
        flex items-center justify-center p-2 text-center'>
         &copy; 2022 Abhinaw • Built with ReactJs • Hosted on GitHub
            </div>
    </footer>
  )
}

export default Footer