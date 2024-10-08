import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {

    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null);
  
    function useArrayRef() {
      const lettersRef = useRef([]);
      lettersRef.current = [];
      return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }
  
    const text =
      "I’m a Web Designer and Developer with over a year of experience creating visually stunning, user-friendly websites. I blend design and technology to craft responsive solutions. Passionate about enhancing user experience, I’m seeking a full-time position to make an impact in the digital landscape."
  
    useEffect(() => {
      const anim = gsap.to(lettersRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 2,
          start: "top 90%",
          end: "bottom 85%",
        },
        color: "white",
  
        stagger: 0.1,
      });
      return () => {
        anim.kill();
      };
    });

   useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.fromTo('.blink3',{transformOrigin:'center',opacity:0},{
        opacity:1,
        duration:0.9,
        ease:'back.inOut',
        repeat:-1,
        yoyo:true,
    })
    })
    return () => context.revert()
   })

  return (
 
    <section className='w-full flex items-center flex-col md:py-3 py-2  bg-[#0E090E]'>

     <div ref={triggerRef} className='md:mb-[5vw] mb-[10vw] max-w-[85vw]'>
          {text.split("").map((letter, index) => (
            <span className="text-[#251E22] md:text-4xl md:leading-[4vw] font-[300]" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>

       <Link to={'/about'} className='text-white border-white md:border md:px-7 md:py-2 px-2 py-1 text-[3vw] rounded-full md:text-[1vw] border-[0.3vw] flex '>
       <div className='blink3 w-[0.7vw] h-[0.7vw] bg-[#98FD7F] rounded-full mr-2 m-auto'></div>  About Me</Link>
    </section>
  )
}

export default Section1;