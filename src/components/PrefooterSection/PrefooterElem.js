import styled from "styled-components";

export const PrefooterContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 100%;
        padding: 10px;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        padding: 20px;
    }

`;

export const PrefooterWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
     grid-template-columns: 1fr 1fr;
}

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const PrefooterCard = styled.div`
     background: #fff;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     border-radius: 10px;
     max-height: 600px;
     width: 100%;
     padding: 30px;
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
     transition: all 0.3s ease-in-out;

     &:hover {
         transform: scale(1.02);
         transition: all 0.2s ease-in-out;
         cursor: pointer;
     }
`;

export const PrefooterIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-bottom: 10px;
`;

export const PrefooterH2 = styled.h2`
   font-size: 1rem;
   margin-bottom: 10px;
`;

export const PrefooterP = styled.p`
   font-size: 0.8rem;
   text-align: center;
`;

export const PrefooterBtn = styled.div`
   position: relative;
   top: 15px;
   backgroud: transparent;
`;