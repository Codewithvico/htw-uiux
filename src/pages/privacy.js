import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import PrivacyContainer from '../containers/PrivacyPolicyContainer';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';


const Privacy = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
     <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar  toggle={toggle}  />
     <PrivacyContainer />
     <Footer />
     <AddFooter />
    </>
  )
}

export default Privacy