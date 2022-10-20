import React from 'react';
import Volks from '../../assets/images/volks.gif';
import Cyclist from '../../assets/images/cyclist.gif';
import Unicorn from '../../assets/images/unicorn.gif';
import Eagle from '../../assets/images/eagle-image.gif';

import {
    AddFooterContainer,
    AddFooterWrapper,
    AddFooterFBgImg,
    AddFooterSBgImg,
    AddFooterDesc,
    AddFooterPLeft,
    AddFooterTBgImg,
    AddFooterDBgImg

} from './AddFooterElem'

const AddFooter = () => {
  return (
    <AddFooterContainer>
      <AddFooterWrapper>
          <AddFooterFBgImg src={Volks} alt="moving-image" />
          <AddFooterSBgImg src={Cyclist} alt="moving-image" />
          <AddFooterTBgImg src={Unicorn} alt="moving-image" />
          <AddFooterDBgImg src={Eagle} alt="moving-image" />
      </AddFooterWrapper>
      <AddFooterDesc>
              <AddFooterPLeft>
              This entire website is protected by copyright &copy; {new Date().getFullYear()} HostthyWeb. All Rights Reserved 
             </AddFooterPLeft>
          </AddFooterDesc>
    </AddFooterContainer>
  )
}

export default AddFooter