import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import RefundPolicyContainer from '../containers/RefundPolicyContainer';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';



const RefundPolicy = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
     <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar  toggle={toggle}  />
     <RefundPolicyContainer />
     <Footer />
     <AddFooter />
    </>
  )
}

export default RefundPolicy