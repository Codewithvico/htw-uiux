import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import SslCertificateContainer from '../containers/SecurityContainer/SslCertificate';

import Footer from '../components/Footer';
import AddFooter from '../components/AddFooter';




const SslCertificate = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
     <Announcement />
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar  toggle={toggle}  />
     <SslCertificateContainer />
     <Footer />
     <AddFooter />
    </>
  )
}

export default SslCertificate