import styled, { keyframes } from 'styled-components';
import imgbg from '../../assets/images/footer_bg-main.png'



export const AddFooterContainer = styled.div`
   background: #101522;
   background-image: url(${imgbg});
   background-position: center;
   background-repeat: no-repeat;
   height: 300px;
   position: relative;
   display: grid;
   place-items: center;
  
`;



export const AddFooterWrapper = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    overflow: hidden;
    background-color: #000;
`;


export const myfirst = keyframes`

    0% {
      left: -25%;
    }
    100% {
      left: 80%;
    }
`;

export const AddFooterFBgImg = styled.img`
    width: 330px;
    height: 145px;
    background-size:100%;
    position: absolute;
    bottom: 0;
    left: 30%;
    z-index: 9999;
    -webkit-animation: ${myfirst};
    animation: ${myfirst};
    animation-duration: 20s;
    animation-delay: linear; 
    animation-iteration-count: infinite;

    @media screen and (max-width: 480px){
         width: 100px;
         height: 75px;
         animation-duration: 10s; 
    }
`;

export const AddFooterSBgImg = styled.img`
    width: 88px;
    height: 100px;
    background-size:100%;
    bottom: 0;
    left: 38%;
    z-index: 9999;
    position: absolute;
    -webkit-animation: ${myfirst};
    animation: ${myfirst};
    animation-duration: 26s;
    animation-delay: linear; 
    animation-iteration-count: infinite; 

    @media screen and (max-width: 480px){
      width: 40px;
      height: 50px;
      animation-duration: 14s; 
 }
`;
export const AddFooterTBgImg = styled.img`
    width: 158px;
    height: 100px;
    background-size:100%;
    bottom: 0;
    left: 38%;
    z-index: 9999;
    position: absolute;
    -webkit-animation: ${myfirst};
    animation: ${myfirst};
    animation-duration: 22s; 
    animation-iteration-count: infinite; 

    @media screen and (max-width: 480px){
      width: 80px;
      height: 45px;
      animation-duration: 12s; 
 }
`;

export const AddFooterDBgImg = styled.img`
    width: 80px;
    height: 100px;
    background-size:100%;
    bottom: 0;
    left: 15%;
    z-index: 9999;
    position: absolute;
    top: 120px;
    -webkit-animation: ${myfirst};
    animation: ${myfirst};
    animation-duration: 20s; 
    animation-iteration-count: infinite; 

    @media screen and (max-width: 480px){
      width: 50px;
      height: 50px;
      animation-duration: 11s; 
 }
`;

export const AddFooterDesc = styled.div`
   display: flex;  
   position: absolute;
   bottom: 0px;
`;

export const AddFooterPLeft = styled.p`
   font-family: 'Montserrat', sans-serif;
   font-size: 14px;
   color: #eee;
   width: 100%;
   padding: 0 2rem;
   text-align: center;
`;