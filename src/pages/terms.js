import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import TermsContainer from '../containers/TermsContainer';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';






const TermsOfService = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
     <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar  toggle={toggle}  />
     <TermsContainer />
     <Footer />
     <AddFooter />
    </>
  )
}

export default TermsOfService