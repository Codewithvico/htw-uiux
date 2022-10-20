import styled from "styled-components";
import bgImg from "../../assets/images/htw-banner.jpeg";
import { Link } from 'react-router-dom';

export const LegalMainContainer = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   box-sizing: border-box;
`;

export const LegalWrapper = styled.div`
   display: block;
   width: 100%;
   justify-content: center;
   align-items: center;
   align-content: center;
`;

export const LegalHeader = styled.div`
   display: grid;
   place-items: center;
   line-height: 1.1;
   color: #fff;
   background-image: url(${bgImg});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   object-fit: cover;
   height: 14rem;
   width: 100%;
   padding: 4rem;

   @media screen and (max-width: 768px) {
       height: 10rem;
       padding: 2rem;
   }
`;

export const LegalHeaderTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.8em;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const LegalHeaderDesc = styled.p`
   font-family: inherit;
   color: inherit;

   @media screen and (max-width: 768px) {
       font-size: 12px;
   }
`;

export const LegalBody = styled.div`
   width: 100%;
   padding: 3rem 21rem;
   color: #6d6e70;

   @media screen and (max-width: 768px) {
       padding: 1.5rem 2rem;
   }
`;

export const LegalBodyNews = styled.span`
    line-height: 1.5;

  @media screen and (max-width: 768px) {
      line-height: 1.2;
      letter-spacing: 0.5px;
  }
`;

export const LegalBodyTermsOfUse = styled.h4`
   position: relative;
   padding: 2rem 0;
   font-size: 1.25em;
   line-height: 1.5;
   font-weight: bold;
   margin: 1.5em 0 0;

`;


export const LegalBodyTermsOfUseDesc = styled.li`
   line-height: 2.5;
   letter-spacing: 0.5px;
   
`;

export const LegalBodyLink = styled(Link)`
    color: #de3723;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: #7fb701;
    }
`;

