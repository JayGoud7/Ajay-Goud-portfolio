import React from 'react';
import Herosection from '../Hero/Herosection';
import Section1 from '../Section1';
import Worksection from '../Worksection';
import Section2 from '../Footer';
import Transition from '../../Transition';

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Herosection />
      <Section1 />
      <Worksection />
      <Section2 />
    </div>
  );
}

export default Transition(Home);
