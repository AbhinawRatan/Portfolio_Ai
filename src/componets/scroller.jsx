import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Scroller({ text, link }) {
  return (
    <section>

      <Link to={link}>
        <Marquee pauseOnHover gradient={false} className='bg-violet-300 border-t-2 border-black py-1 font-bold
        text-base
        '>
         {text}
        </Marquee>
      </Link>

    </section>
  )
}

export default Scroller