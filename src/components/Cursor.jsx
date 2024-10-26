import React, { useEffect } from "react";
import gsap from "gsap"; 

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 1.2 });
      cursorText.style.display = "block";
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = "none";
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div className="custom-cursor fixed top-0 left-0 width-[20px] height-[20px] rounded-full pointer-events-none z-9999 mix-blend-difference p-[10px] flex justify-center items-center border bg-white">
      <span className="cursor-text text-[7px] font-[600] leading-[1px] hidden">View</span>
    </div>
  );
}

export default Cursor;