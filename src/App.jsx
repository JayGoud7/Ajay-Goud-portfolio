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
    (function (w, d) {
      w.CollectId = "68417abd4c2ef40c809da743";
      const h = d.head || d.getElementsByTagName("head")[0];
      const s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.async = true;
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);
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
