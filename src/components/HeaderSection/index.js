import React, { useState } from 'react'
import Video from '../../assets/videos/video.mp4';
import { Button } from '../ButtonElem';
import { 
    HeaderContainer, 
    HeaderBg, 
    VideoBg, 
    HeaderContent, 
    HeaderH1, 
    HeaderP, 
    HeaderBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeaderElem';
const Header = () => {
 
   const [hover, setHover] = useState(false);

   const OnHover = () => {
       setHover(!hover);
   }


  return (
    <HeaderContainer>
      <HeaderBg>
          <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />  
      </HeaderBg>
      <HeaderContent>
          <HeaderH1>
          fast, secured and online 24/7.
          </HeaderH1>
          <HeaderP>
          Empowering access to everyone looking to find their way online, lower than you can imagine while earning more.
          </HeaderP>
          <HeaderBtnWrapper>
              <Button to='/index.php' 
              onMouseEnter={OnHover} 
              onMouseLeave={OnHover}
              primary={true}
              dark={true}
              >
                  Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header