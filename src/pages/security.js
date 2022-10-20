import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';
import SecurityContainer from '../containers/SecurityContainer';


const Security = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
     <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar  toggle={toggle}  />
     <SecurityContainer />
     <Footer />
     <AddFooter />
    </>
  )
}

export default Security