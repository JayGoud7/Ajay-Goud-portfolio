import React, { useLayoutEffect } from 'react';
import {motion} from 'framer-motion'
import gsap from 'gsap';

const Transition = (Component) => {



  return () => (
    <>

    <Component/>
    
    <motion.div
    className='w-full h-screen fixed top-0 left-0 bg-[#FB4B66] origin-bottom'
    initial={{scaleY:0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:3,ease:'backInOut'}}
    
    
    ></motion.div>

    <motion.div 
     className='w-full h-screen fixed top-0 left-0 bg-[#FB4B66] origin-top'
     initial={{scaleY:1}}
     animate={{scaleY:0}}
     exit={{scaleY:0}}
     transition={{duration:1,ease:'backInOut'}}
    
    
    ></motion.div>
    </>

  )
}

export default Transition;