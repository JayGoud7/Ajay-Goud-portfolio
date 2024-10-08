import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';

const Herosection = () => {

useLayoutEffect(() => {

let context = gsap.context(() => {

gsap.fromTo('.blink1',{transformOrigin:'center',opacity:0},{
    opacity:1,
    duration:0.9,
    ease:'back.inOut',
    repeat:-1,
    yoyo:true,
})

gsap.fromTo('.circle',{rotate:'360 deg'},
  {
  rotate:0,
  duration:10,
  repeat:-1,
  }
)


gsap.fromTo('.sep',{x:0},{
  opacity:1,
  x:-10,
  duration:2,
  ease:'back.inOut',
  scrollTrigger:{
    trigger:'.herodiv',
    start:'top 60%',
    scrub:true,
  }
})

gsap.fromTo('.sep1',{x:0},{
  opacity:1,
  x:10,
  duration:2,
  ease:'back.inOut',
  scrollTrigger:{
    trigger:'.herodiv',
    start:'top 60%',
    scrub:true,
  }
},
)

gsap.fromTo('.textani',{
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:0.8,
  delay:0.3,
  ease:'back.inOut',
  stagger:0.2,
})

gsap.fromTo('.textani2',{
  opacity:0,
  y:30,
},{
  opacity:1,
  y:0,
  duration:0.8,
  delay:0.3,
  ease:'back.inOut',
  stagger:0.2,
})

gsap.fromTo('.circleani',{
  opacity:0,
  scale:0.7,
},{
  opacity:1,
  scale:1,
  duration:0.4,
  delay:0.3,
  ease:'power1.in',
})

// tl.fromTo('.sep3',{y:30},{
//   opacity:1,
//   y:0,
//   duration:0.9,
//   ease:'back.inOut',
// })

})

return () => context.revert()

})

  return (
    <section className='herodiv w-full h-screen flex flex-col justify-around items-center text-white sm:justify-around md:flex-row pb-20'>
        <div className='md:text-right text-center sm:text-center sep'>
            <h1 className='md:text-5xl text-xl textani'>Ajay Burra</h1>
            <p className='textani text-md sm:text-xl'>Based in Hyd,Tel</p>
            <p className='flex textani'>
            <span className='blink1 md:w-[1.5vw] md:h-[1.5vw] w-[4vw] h-[4vw] bg-[#3D5A33] flex items-center justify-center rounded-full m-auto mr-2'>
            <span className=' md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw] bg-[#98FD7F] rounded-full'></span>
            </span>
             Available for a full-time position
            </p>
        </div>
        <div className='md:w-[40vw] w-[250px] h-[250px] p-[2px] bg-[#0E090E] border-[#FFA36B] border-2 md:h-[40vw] rounded-full'>
          <div className='circleani w-full h-full rounded-full bg-gradient-to-r from-[#FB4765] to-[#FFA36B]'>
          </div>
        </div>
        <div className='sep1'>
            <h1 className='md:text-4xl text-md text-center textani2'>Frontend Developer <br/> & Freelancer</h1>
        </div>
    </section>
  )
}

export default Herosection;