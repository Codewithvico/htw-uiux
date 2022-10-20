import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Prefooter from '../components/PrefooterSection';
import PartnerSection from '../components/PartnerSection';
import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';
import Announcement from '../components/Announcement';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
    <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle} />
     <Header />
     <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Prefooter />
      <InfoSection {...homeObjFour} />
      <PartnerSection />
      <Footer />
      <AddFooter />
    </>
  );
};

export default Home;