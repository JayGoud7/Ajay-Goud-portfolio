import gsap from 'gsap'
import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const Links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Work',
    to: '/work'
  },
  {
    name: 'About',
    to: '/about'
  },
]

const Navbar = () => {

  useLayoutEffect(() => {

    let context = gsap.context(() => {

      gsap.fromTo('.nav', { opacity: 1, y: 0 }, {
        y: -90,
        opacity: 0,
        duration: 1,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: '.navdiv',
          start: 'top 0%',
          scrub: true,
        }
      })

    })
    return () => context.revert()

  }, [])

  return (
    <nav className='navdiv nav px-5 py-6 sm:py-10 w-full flex items-center justify-between md:px-20 md:py-7'>
      <h1 className='text-[4vw] sm:text-[2.3vw] md:text-[1.5vw] text-white tracking-tight'>Ajay B.</h1>
      <ul className='flex gap-7 text-[3.3vw] sm:text-[1.7vw] md:text-[1.3vw] text-white cursor-pointer'>
        {Links.map((e, i) => (
          <li key={i}>
            <Link className='hover:text-slate-300' to={e.to}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
