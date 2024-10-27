import React, { useEffect, useLayoutEffect } from "react";
import Section2 from "../Footer";
import gsap from "gsap";
import Transition from "../../Transition";
import SplitType from "split-type";

const About = () => {
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.fromTo(
        ".flow1",
        {
          translateY: -180,
        },
        {
          translateY: 180,
          duration: 3,
          delay: 0,
          ease: "power1.in",
          repeat: -1,
        }
      );

      // gsap.fromTo('.up',{
      //   y:-50,
      // },{
      //   y:0,
      //   duration:2,
      //   scrollTrigger:{
      //     trigger:'.aboutdiv1',
      //     start:'top 80%',
      //     scrub:true,
      //   }
      // })

      gsap.fromTo(
        ".textani5",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "back.inOut",
          stagger: 0.2,
        }
      );
    });
    return () => context.revert();
  });

  useEffect(() => {
    const typeSplit = new SplitType(".textani6", {
      types: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutdiv",
        start: "top 90%",
        end: "bottom 80%",
      },
    });

    tl.fromTo(
      ".cir1",
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.3,
        ease: "back.inOut",
      }
    );

    tl.fromTo(
      typeSplit.lines,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "back.inOut",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="w-full h-screen text-white">
      <div className="w-full relative h-[90%] flex items-center flex-col justify-center text-[5vw] font-[500]">
        <h1 className="textani5">Frontend Developer & Freelancer</h1>
        <div className="w-[0.2vw] h-[15vw] bg-slate-800 absolute top-[65%] overflow-hidden">
          <p className="flow1 w-full h-[5vw] bg-white">.</p>
        </div>
      </div>
      <div className="aboutdiv1 flex flex-col items-center md:flex-row md:justify-around w-full h-full bg-[#0E090E]">
        <div className="cir1 md:w-[20vw] w-[185px] h-[250px] p-[2px] bg-[#0E090E] border-[#FFA36B] border-2 md:h-[20vw] rounded-full">
          <div className="cir1 circle w-full h-full rounded-full bg-gradient-to-r from-[#FB4765] to-[#FFA36B]"></div>
        </div>
        <div className="md:max-w-[40vw] w-[80vw] flex md:gap-4 flex-col justify-around ">
          <h2 className="md:text-[4vw] md:text-start text-center text-[6vw] leading-[8vw] md:leading-[4.2vw] font-[200] md:font-[200] textani6">
            I create engaging digital experiences by merging{" "}
            <span className="font-[800]">design</span>,{" "}
            <span className="font-[800]">motion</span>, and{" "}
            <span className="font-[800]">development</span>.
          </h2>
          <p className="md:text-[1.8vw] text-[4vw] font-[200] textani6">
            Passionate and detail-oriented web developer with a strong
            background in creating responsive, user-centered applications.
            Proven ability to enhance user satisfaction and engagement through
            effective UI/UX design and optimization. Seeking to contribute
            innovative ideas and technical expertise within a collaborative team
            environment to deliver exceptional digital experiences that drive
            business growth and customer loyalty.
          </p>
          <span className="flex items-center md:text-[1.4vw] text-[4vw] gap-2">
            <span className="blink2 md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw] bg-[#FB4466] rounded-full"></span>
            Download CV
          </span>
        </div>
      </div>
      <div className="w-full max-h-[40vw] bg-[#0E090E] border-y-[0.04px] flex justify-around items-center  py-12 px-[5vw]">
        <h2 className="md:text-[3.3vw] font-[200]">Skills</h2>
        <div className="flex text-[2vw] items-center flex-wrap justify-center gap-3 md:gap-10 w-[40vw] h-full">
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            HTML
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            CSS
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Javascript
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            React JS
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Redux
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Node JS
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Express JS
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Next JS
          </span>
          <span className="flex items-center gap-2">
            <span className="blink2 w-[0.7vw] h-[0.7vw] bg-[#FB4466] rounded-full"></span>
            Mongo DB
          </span>
        </div>
      </div>
      <Section2 />
    </section>
  );
};
export default Transition(About);
