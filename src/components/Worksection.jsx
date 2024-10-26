import gsap from 'gsap';
import React, { useLayoutEffect, useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const obj = [
    {
        id: 1,
        name: 'IMDB clone',
        img: 'https://asset.cloudinary.com/ddp8alzeb/f0c9418e91db03c632bc1be59df756d3',
        link: 'https://rentalcom.netlify.app/'
    },
    {
        id: 2,
        name: 'Rental.com',
        img: 'https://asset.cloudinary.com/ddp8alzeb/45033294875d763130b0f5f725d91d4b',
        link: 'https://imdbcl.netlify.app/',
    },
];

const Worksection = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const mouseEnterAnime = (target) => {
        const letters = target.querySelectorAll('.anime1');
        gsap.fromTo(letters, { opacity: 0 }, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.in',
            stagger: 0.1,
        });
    };

    const mouseenter = (e, id) => {
        mouseEnterAnime(e.currentTarget.querySelector('.animetrigger'));
        setHoveredId(id);
    };

    const mouseLeave = () => {
        setHoveredId(null);
    };

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.fromTo('.imganime', { scale: 0.7 }, {
                scale: 1,
                duration: 0.2,
                ease: 'power1.in'
            });
        });

        return () => context.revert();
    }, []);

    return (
        <section className='w-full md:h-screen py-10 flex text-white flex-col bg-[#0E090E] px-[8vw]'>
            <h1 className='text-[4vw] font-[600] mt-14 pl-[6vw] flex items-center gap-5'>
                Explore My Work <FaArrowDownLong className='-rotate-45 text-[4vw]' />
            </h1>
            <div className='flex border-t-[0.02vw] w-full flex-col mt-[3vw] relative'>
                {obj.map((e) => (
                    <Link 
                        to={e.link}
                        target='_blank'
                        onMouseEnter={(ev) => mouseenter(ev, e.id)} 
                        onMouseLeave={mouseLeave} 
                        key={e.id} 
                        className='text-white border-b-[0.02vw] flex justify-between items-center relative cursor-pointer px-10 py-5'
                    >
                        <h1 className='text-[4vw] font-[300] animetrigger'>
                            {e.name.split('').map((char, index) => (
                                <span className='anime1' key={index}>{char}</span>
                            ))}
                        </h1>
                        {hoveredId === e.id && (
                            <div className='imganime w-[20vw] h-[20vw] absolute left-[70%] bg-gray-800'>
                                <img src={e.img} alt={e.name} className='w-full h-full object-cover' />
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Worksection;
