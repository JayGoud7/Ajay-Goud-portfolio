import './index.css';
import Navbar from './components/navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Homepage/Home';
import About from './components/aboutpage/About';
import Workpage from './components/WorkPage/Workpage';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import { useEffect } from "react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const location  = useLocation();
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "//code.tidio.co/1n1m9nblz1mn1e5j9f46d0dz2n5apn9z.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  useEffect(() => {
    const s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6843c62ed35f80190a9bfe1d/1it4bsark";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return (  
   
    <main className='font-["PP Neue Montreal"] bg-[#0E090E]'>
      <Cursor/>
     <Navbar />
     <AnimatePresence mode='wait'>
     <Routes ocation={location} key={location.pathname}>
      <Route path='/' index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/work' element={<Workpage />}/>
      </Routes>
      </AnimatePresence>
    </main>
   
  );
}

export default App;
