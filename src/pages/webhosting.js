import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import WebHostingContainer from '../containers/WebHostingContainer';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';


const Webhosting = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
    <Announcement />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar  toggle={toggle}  />
    <WebHostingContainer />
    <Footer />
    <AddFooter />
   </>
  )
}

export default Webhosting