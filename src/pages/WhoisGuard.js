import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import WhoisGuardContainer from '../containers/SecurityContainer/WhoisGuard';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';



const WhoisGuard = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
    <Announcement />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar  toggle={toggle}  />
    <WhoisGuardContainer />
    <Footer />
    <AddFooter />
   </>
  )
}

export default WhoisGuard