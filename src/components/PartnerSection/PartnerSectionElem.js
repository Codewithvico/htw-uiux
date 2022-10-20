import styled from "styled-components";

export const PartnerSectionContainer = styled.div`
    display: grid;
    height: 50%;
    place-items: center;
    background: #fff;
    margin-bottom: 5%;
    width: 100%;


    @media screen and (max-width: 768px) {
        height: 100%;
        padding: 10px;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        padding: 20px;
    }
`;

export const PartnerSectionWrapper = styled.div`
    width: 30%;
    background: #fff;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    grid-gap: 16px;
 


    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr; 
       padding: 0 30px;
   }
   
       @media screen and (max-width: 768px) {
           display: none !important;
       }
`;


export const PartnerSectionWrap = styled.div`
    position: relative;
    left: -290px;
    padding: 25px;
    border-right: 1px solid #f0f0f0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
     &:hover {
         transform: scale(1.02);
         transition: all 0.2s ease-in-out;
         cursor: pointer;
     }

     @media screen and (max-width: 768px) {
        border: none;
    }
     
`;

export const PartnerImg = styled.img`
        width: 150px;
        margin: 0 15px;
        transition: .15s linear;

         &:hover {
         transform: scale(1.02);
         transition: all 0.2s ease-in-out;
         cursor: pointer;
     }
`;

export const PartnerH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 768px){
        display: none !important;
    }
`;