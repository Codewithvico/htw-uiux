import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



export const Nav = styled.nav`
   background: #fff;
   height: 95px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 9;

   @media screen and (max-width: 960px){
       transition: 0.8s all ease;
   }

   @media screen and (max-width: 768px){
        position: relative;
   }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
   display: block;
   position: relative;
   height: 100%;
   object-fit: contain;

   @media screen and (max-width: 950px) {
    
   }
    
    
`;

export const Img = styled.img`
    position: relative;
    bottom: 10px;
    width: 100px;
    object-fit: contain;


    @media screen and (max-width: 950px){
        height: 100%;
        object-fit: contain;
        position: inherit;
        bottom: 0;
        width: 80px;
      }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 950px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #4c4c4c;
        line-height: 15px;
        margin-top: 15px;
    }
`;

export const NavMenu = styled.ul`
        flex: 1;
        display: flex;
        align-items: center;
        list-style-type: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;

        @media screen and (max-width: 950px) {
            display: none;
   }
`;

export const NavItem = styled.li`
        // height: 80px;
        font-size: 14px;
        position: relative;
        left: 120px;
`;

export const NavLinks = styled(LinkR)`
        color: #4c4c4c;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        letter-spacing: 1.5px;
        line-height: 1.5;

        &.active {
         border-bottom: 3px solid #3a52e6;   
    }
    &:hover{
        background: #3f444e;
        color: #fff;
        height: 40px;
        border-radius: 0.375rem;
        transition: all 0.2s ease-in-out;
    }
`;

export const NavSup = styled.sup`
    background: transparent;
    width: 100%;
    height: 100%;

    &:hover {
        opacity: 0;
    }
`;

export const Span = styled.span`
    background: #7fb701;
    position: absolute;
    bottom: 17px;
    right: 0;
    border-radius: 10px;
    text-align: center;
    padding: 0 5px;
    margin: 2px 5px;
    font-size: smaller;
    color: aliceblue;
    opacity: 0.9999;

    &:hover {
        opacity: 0;

    }
`;


export const NavBtn = styled.nav`
      flex: 1;
      display: flex;
      align-items: center;

      @media screen and (max-width: 950px) {
          display: none;
      }
`;

export const NavBtnLink = styled(LinkR)`
    border: 2px solid #7fb701;    
    border-radius: 0.375rem;
    background: #7fb701;
    color: #fff;
    white-space: nowrap;
    letter-spacing: 1px;
    padding: 10px 22px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    left: 250px;
    

    &:hover {
        transition: all 0.5s ease-in-out;
        background: #fff;
        color: #000;
        border: 2px solid #fff;
    }
`;


