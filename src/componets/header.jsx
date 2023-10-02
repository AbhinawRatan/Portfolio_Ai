import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { Logo } from '../assets/'
const activeClassName = "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-purple-400";

function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white'>

       <Link to='/'className='flex  align-middle border-black border-r-2'>
<h1 className='font-bold items-center font-Inter text-2xl py-4 '>Abhinaw Ratan</h1>       </Link>

         <Link to = '/content'className='md:col-start-3 border-black md:border-l-2 flex gap-2 items-center justify-center text-lg
          bg-violet-200 hover:bg-violet-300 ease-in-out duration-75'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

            Lets Talk
            </Link>
        <nav className='col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-top-2 border-black md:border-t-0 
        flex items-center justify-center'>
        <ul className=' col-span-flexs gap-4 flex  max-w-sm overflow-auto
        snap-always p-4 text-lg '>
            <li>
              
            <NavLink to='/'>
              
          
                    Home
                </NavLink>

            </li>
            <li>
            <NavLink to='/about' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                    About
                </NavLink>

            </li>
           
            <li>
                <NavLink to='./contact' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                   Contact 
                </NavLink>

            </li>
            <li>
            <HashLink to= '#blog' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                    Blog
                </HashLink>

            </li>
            <li>
           <a href="https://drive.google.com/file/d/1ebdXjuU1O0QmhHZZ8IFRqJPCCNfBQNx8/view?usp=sharing"> Resume</a>

            </li>
           
        </ul>
            </nav>
    </header>
  )
}

export default Header