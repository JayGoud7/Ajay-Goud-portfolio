import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Section2 = () => {

  useLayoutEffect(() => {
    let context = gsap.context(() => {
 
      gsap.fromTo('.enlarge',{scale:1.2,opacity:0},
        {
          scale:1,
          opacity:1,
          // duration:1,
          scrollTrigger:{
            trigger:'.enlaregdiv1',
            start:'bottom 10%',
            scrub:true,
          }
        }
      )


      gsap.fromTo('.blink3',{transformOrigin:'center',opacity:0},{
        opacity:1,
        duration:0.9,
        ease:'back.inOut',
        repeat:-1,
        yoyo:true,
    })

    gsap.fromTo('.txtani4',{
      y:30,
      opacity:0,
    },{
      opacity:1,
      y:0,
      duration:0.6,
      ease:"back.inOut",
      stagger:0.2,
      scrollTrigger:{
        trigger:'.enlargediv1',
        start:'top 90%',
        end:'bottom 80%'
      }
    })

    })
    return () => context.revert()
  })

  return (
    <section className='enlargediv1 w-full h-[30vh] md:h-screen flex items-center justify-around md:justify-around flex-col text-white bg-[#0E090E]'>
      <div className='enlarge md:max-w-[70vw] md:h-[50vh] w-[70vw] h-[15vh] border-[0.002vw] rounded-[3vw] flex md:mt-10 md:items-center items-center justify-evenly md:px-[9vw] md:py-[7vw] flex-col'>
        <h2 className='md:text-[1vw] text-[2vw] font-[200] txtani4'>Looking for a new talent</h2>
        <h1 className='md:text-[3vw] text-[2.5vw] font-[200] txtani4'>ajaygoud057@gmail.com</h1>
        <ul className='flex md:gap-20 gap-3 md:mt-7 font-[200] txtani4'>

         <Link to={'https://www.linkedin.com/in/ajay-burra-ba040b322/'}> <li className='flex items-center gap-1 md:gap-2 md:text-[1.6vw] text-[2.5vw]'><span className='blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full'></span> Linkedin</li></Link>

         <Link to={'https://github.com/JayGoud7'}> <li className='flex items-center gap-1 md:gap-2 md:text-[1.6vw] text-[2.5vw]'><span className='blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full'></span> GitHub</li></Link>

          <li className='flex items-center gap-1 md:gap-2 md:text-[1.6vw] text-[2.5vw]'><span className='blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full'></span> Download CV</li>
        </ul>
      </div>
      <div className='w-full flex justify-around md:text-[1vw] text-[2vw] font-[200] txtani4'>
        <p>	&copy; 2024 Ajay B.</p>
        <p className='flex'>
        <span className='blink3 w-[1.5vw] h-[1.5vw] bg-[#3D5A33] flex items-center justify-center rounded-full m-auto mr-2'>
            <span className='w-[0.7vw] h-[0.7vw] bg-[#98FD7F] rounded-full'></span>
            </span>
           Available for a full-time position</p>
        <p>Made by Ajay B.</p>
      </div>
    </section>
  )
}

export default Section2;