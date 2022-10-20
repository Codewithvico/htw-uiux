import React, { useState } from 'react'
import { 
  HeaderAnnoucementContainer, 
  HeaderAnnoucementWrapper,
  HeaderAnnoucementWrapperInfo,
  HeaderAnnoucementWrapperBtn,
  Span
} from './AnnounceElem';

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeAnnouncement = () => {
    setIsOpen(!isOpen)
  };

  return (
  
       <HeaderAnnoucementContainer isOpen={isOpen} closeAnnouncement={closeAnnouncement}>
           <HeaderAnnoucementWrapper>
             <HeaderAnnoucementWrapperInfo> 🇺🇦 We stand with our friends and colleagues in Ukraine. 
               To support Ukraine in their time of need visit this <Span to="#">page</Span>.</HeaderAnnoucementWrapperInfo>
             <HeaderAnnoucementWrapperBtn onClick={closeAnnouncement}>close</HeaderAnnoucementWrapperBtn>
           </HeaderAnnoucementWrapper>
        </HeaderAnnoucementContainer>
 
  )
}

export default Announcement