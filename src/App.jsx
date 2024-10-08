import './index.css';
import Navbar from './components/navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Homepage/Home';
import About from './components/aboutpage/About';
import Workpage from './components/WorkPage/Workpage';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const location  = useLocation()

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
