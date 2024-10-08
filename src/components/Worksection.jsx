import gsap from 'gsap';
import React, { useLayoutEffect, useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

const obj = [
    {
        id: 1,
        name: 'IMDB clone',
        img: 'https://port-folio-v3.vercel.app/static/media/img2.a41e4e217ad9cadf5c83.png',
    },
    {
        id: 2,
        name: 'Rental.com',
        img: 'https://port-folio-v3.vercel.app/static/media/img.076bbb8766fd657835d2.png',
    },
    // {
    //     id: 3,
    //     name: 'StarLink',
    //     img: 'https://port-folio-v3.vercel.app/static/media/img2.a41e4e217ad9cadf5c83.png',
    // },
];

const Worksection = () => {
    const [display, setDisplay] = useState(obj);
    const [hoveredId, setHoveredId] = useState(null);

    const mouseEnterAnime = (target) => {
        const letters = target.querySelectorAll('.anime1');

        gsap.fromTo(letters, { opacity: 0 },
            {
                opacity: 1,
                duration: 0.5,
                ease: 'power1.in',
                stagger: 0.1,
            }
        );
    };

    const mouseenter = (e, id) => {
        mouseEnterAnime(e.currentTarget.querySelector('.animetrigger'));
        setHoveredId(id);
    };

    const mouseLeave = () => {
        setHoveredId(null);
    };


useLayoutEffect(() => {

let context = gsap.context(() => {
    gsap.fromTo('.imganime',{
        scale:0.7
    },{
        scale:1,
        duration:0.2,
        ease:'power1.in'
    })
})

return () => context.revert()
    
})


    return (
        <section className='w-full md:h-screen py-10 flex text-white flex-col bg-[#0E090E] px-[8vw]'>
            <h1 className='text-[4vw] font-[600] mt-14 pl-[6vw] flex items-center gap-5'>
                Explore My Work <FaArrowDownLong className='-rotate-45 text-[4vw]' />
            </h1>
            <div className='flex border-t-[0.02vw] w-full flex-col mt-[3vw] relative'>
                {
                    display.map((e) => (
                        <div 
                            onMouseEnter={(ev) => mouseenter(ev, e.id)} 
                            onMouseLeave={mouseLeave} 
                            key={e.id} 
                            className='text-white border-b-[0.02vw] flex justify-between items-center relative cursor-pointer px-10 py-5'
                        >
                            <h1 className='text-[4vw] font-[300] animetrigger'>
                                {
                                    e.name.split('').map((char, index) => (
                                        <span className='anime1' key={index}>{char}</span>
                                    ))
                                }
                            </h1>
                            {
                                hoveredId === e.id && (
                                    <div className='imganime w-[20vw] h-[20vw] absolute left-[70%]'>
                                        <img src={e.img} alt={e.name} className='w-full h-full object-cover ' />
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Worksection;
