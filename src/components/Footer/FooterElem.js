import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
  height: 100%;
`;

export const FooterWrap = styled.div`
   padding: 48px 24px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1100px;
   margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 820px){
       padding-top: 32px;
       flex-direction: column;
   }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 260px;
    box-sizing: border-box;
    color: #fff;
    

  @media screen and (max-width: 420px){
      margin: 0;
      padding: 10px;
      width: 100%;
  }

`;

export const FooterLinkTitle = styled.h1`
        font-size: 14px;
        margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
        color: #fff;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.4;
        letter-spacing: 0.5;

        &:hover {
            color: #01bf71;
            transition: all 0.3s ease-in-out;
        }

       
`;