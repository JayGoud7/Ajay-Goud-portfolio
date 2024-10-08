import gsap from 'gsap'
import React, { useLayoutEffect } from 'react';
import Worksection from '../Worksection';
import Section2 from '../Footer';
import Transition from '../../Transition';

const Workpage = () => {

    useLayoutEffect(() => {
        let context = gsap.context(() => {
    
          gsap.fromTo('.flow1',{
            translateY:-180,
          },{
            translateY:180,
            duration:3,
            delay:0,
            ease:'power1.in',
            repeat:-1,
          })

          gsap.fromTo('.textani3',{
            opacity:0,
            y:30
        },
        {
            opacity:1,
            y:0,
            duration:0.6,
            delay:0.3,
            ease:'back.inOut',
            stagger:0.2,
        }
        )
    
        })
        return () => context.revert()
      })


  return (
    <section className='w-full h-screen text-white'>
       <div className='w-full h-[90%] md:h-[80%] flex items-center justify-center flex-col'>
          <h1 className='text-[5vw] textani3'>Selected Work</h1>
          <h2 className='textani3'>Explore my creative expertise</h2>
          <div className='w-[0.2vw] h-[15vw] bg-slate-800 absolute top-[65%] overflow-hidden'>
          <p className='flow1 w-full h-[5vw] bg-white'>.</p>
        </div>
       </div>
       <Worksection/>
       <Section2/>
    </section>
  )
}

export default Transition(Workpage);