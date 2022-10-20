import styled from 'styled-components';
import Headerbg from '../../assets/images/shared.jpeg';
import { Link as LinkR } from 'react-router-dom';


export const SslCertificateMainContainer = styled.div`
        width: 100%;
        position: relative;
        display: flex;
        height: 100%;
        background: #000;
    
`;

export const SslCertificateWrapper = styled.div`
        width: 100%;
        justify-content: center;
        align-items: center;
        align-content: center;
`;

export const SslCertificateHeader = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    line-height: 1.1;    
    background-image: url(${Headerbg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: center;
    height: 30rem;
    width: 100%;

    @media screen and (max-width: 900px) {
        height: 12rem;
        padding: 2rem;
        flex-direction: column;
    }
`;


export const SslCertificateHeaderLeft = styled.div`
    flex: 1;
    flex-direction: column;
    position: relative;
    padding: 2rem 12rem;

    @media screen and (max-width: 900px){
        padding: 0;
    }
    
`;

export const SslCertificateHeaderTitle = styled.h1`
    width: 100%;
    line-height: 1.1;
    letter-spacing: 0.5px;
    justify-content: space-around; 
    color: #7fb701;
    font-size: 2.2rem;
    
    @media screen and (max-width: 900px) {
        display: none;
    }

`;

export const SslCertificateHeaderDesc = styled.p`
        width: 70%;
        line-height: 1.1;
        letter-spacing: 1px;
        justify-content: space-around;
        margin-top: 7px;
        font-size: 12px;
        color: #ffffff;
        

        @media screen and (max-width: 900px) {
            display: none;
        }
        `;

export const SslCertificateHeaderRight = styled.div`
            flex: 1;
            position: relative;
`;

export const SslCertificateHeaderSelect = styled.select`
        width: 60%;
        border-radius: 30px 0 0 30px;
        height: 50px;
        font-size: 14px;
        border: none;
        color: #01bf71;
        background-color: #000;
        box-shadow: 0 0 100px rgb(255 255 255 / 20%);
        outline: none;
        cursor: pointer;
        transition: .2s linear;
        position: relative;
        top: 1px;
        padding: 0 3rem;

        &:focus {
            background-color: #fff;
            transition: all 0.3s ease-in-out;
            border: 3px solid #7fb701;
        }

        @media screen and (max-width: 900px) {
            position: relative;
            top: -27px;
            left: 20px;
            height: 40px;
        }

`;

export const SslCertificateHeaderBtn = styled.button`
        border-radius: 0 30px 30px 0;
        background: #7fb701;
        height: 50px;
        color: #ffffff;
        font-size: 12px;
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
            background-color: #000000;
            color: #14d468;
            transition: 0.3s ease-in-out;
        }

        @media screen and (max-width: 900px) {
            position: relative;
            top: -28px;
            left: 15px;
            height: 40px;
        }

`;

export const SslCertificateHeaderExtra = styled.div`
            width: 100%;
            height: auto;
`;

export const SslCertificateExtraInfo = styled.p`
            color: #ffffff;
            padding: 1rem 0.3rem;
            opacity: 0.8;

            &:hover {
                opacity: 100%;
            }

            @media screen and (max-width:900px){
                position: relative;
                padding: 0 5rem;
                top: -17px;
                font-size: 12px;
                
            }
`;

export const SslCertificateHeaderOptions = styled.option`
            color: #7fb701;
`;

export const SslCertificateBody = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    background-color: #ffffff;
`;

export const SslCertificateSectionOne = styled.div`
    width: 100%;
    height: auto; 
    margin: 1rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    grid-gap: 16px;
    padding: 2rem 6rem;
    overflow: hidden;


    @media screen and (max-width: 1050px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 1 3rem;

    }

    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;
    }

    @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
    }
`;

export const SslCertificateSectionOneCard = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: #fff;
border-radius: 10px;
width: 100%;
// padding: 30px;
// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease-in-out;
position: relative;


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 1250px){
    position: relative;
    top: 18px;
    width: 500px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    overflow: hidden;
    padding: 1rem 2rem;
    text-align: center;
}

@media screen and (max-width: 768px) {
    width: 300px;
    position: relative;
    top: 35px;
    padding: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

`;
export const SslCertificateSectionOneCardIconWrap = styled.div`
    display: grid;
    place-items: center;
    background: #7fb701;
    margin: 15px 20px 10px 10px;
    color: #fff;
    border: 1px solid rgba(206, 146, 77, 0.1);
    width: 80px;
    height: 100px;
    line-height: 60px;
    text-align: center;
    border-radius: 7px;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);

    @media screen and (max-width: 1500px){
        height: 60px;
    }
`;

export const SslCertificateSectionOneCardWrap = styled.div`
    width: 100%;
`; 

export const SslCertificateSectionOneCardTitle = styled.h3`
    font-weight: 600;
    font-family: 'Overpass', sans-serif;
    font-size: 19px;
    color: #4b505e;
    line-height: 1.7;
    letter-space: 0.5px;

    @media screen and (max-width: 1500px){
        text-align: center;
        font-size: 18px;
    }

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 18px;
    }
`;

export const SslCertificateSectionOneCardDesc = styled.p`
    width: 100%;
    font-size: 14px;
    line-height: 1.7;
    letter-space: 0.5px;
    margin-bottom: 20px;
    color: steelblue;
    transition: .2s linear;
    font-family: 'Montserrat','PT Sans Narrow';

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 12px;
    }
`;

export const SslCertificateSectionTwo = styled.div`
    position: relative;
    width: auto;
    height: auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center; 


    @media screen and (max-width: 768px), (max-width: 1050px){
        flex-direction: column;
    }
`; 

export const SslCertificateSectionTwoLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 8rem;
    margin: 0 4rem;

    @media screen and (max-width: 768px){
        padding: 0 4rem;
        margin: 0;
    }
`;

export const SslCertificateSectionTwoLeftTitle = styled.h2`
    text-align: flex-start;
    color: #4b505e;
`;
export const SslCertificateSectionTwoLeftDesc = styled.p`
    text-align: flex-start;
    color: #4b505e;
`;

export const SslCertificateSectionTwoLeftWrapper = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin-top: 2rem;
    color: #4b505e;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SslCertificateSectionTwoLeftWrapIcon = styled.span`
    width: auto;
    height: auto;
`;

export const SslCertificateSectionTwoLeftWrap = styled.div`
    width: auto;
    height: auto;
    padding: 0 1.5rem;
`;

export const SslCertificateSectionTwoLeftWrapTitle = styled.h3`
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 7px;
    color: #4b505e;
`;

export const SslCertificateSectionTwoLeftWrapDesc = styled.p`
    font-size: 16px;
    line-height: 25px;
    color: #4b505e;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const SslCertificateSectionTwoLeftWrapImage = styled.img`
    width: 60px;
`;

export const SslCertificateSectionTwoRight = styled.div`
    flex: 1;
`;   
export const SslCertificateSectionTwoRightImage = styled.img`
    margin-right: 140px; 

    @media screen and (max-width: 1050px){
        display: none;
     }

    @media screen and (max-width: 768px){
       display: none;
    }
`;

export const SslCertificateSectionThree = styled.div`
    background: #000;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
`;

export const SslCertificateSectionThreeWrapper = styled.div`
    width: auto;
    height: auto;
`;

export const SslCertificateSectionThreeWrapperTitle = styled.h2`
    font-size: 3ch;
    font-weight: bold;
    text-align: center;
    color: #4b505e;
    padding: 1.2rem;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1050px){
        padding: 2rem;
        font-size: 2ch;
    }
`;

export const SslCertificateSectionThreeWrapperDesc = styled.p`
    text-align: center;
    font-weight: medium;
    color: #4b505e;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1050px){
        display: none;
    }
`;

export const SslCertificateSectionThreeCardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 960px){
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`;

export const SslCertificateSectionThreeCard = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 2rem;
    display: flex;
    padding: 1rem;

`;

export const SslCertificateSectionThreeCardIcon = styled.span`
    flex: 1;
    font-size: 80px;
    padding: 1rem;
    color: #7fb701;

    @media screen and (max-width: 1050px) {
        font-size: 60px;
    }
`;

export const SslCertificateSectionThreeCardInner = styled.div`
    width: 100%;
    height: 100%;
`;

export const SslCertificateSectionThreeCardTitle = styled.h5`
    color: #4b505e;
    margin: 0.5rem;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        color: #fff;
    }
`;
export const SslCertificateSectionThreeCardDesc = styled.p`
    color: #4b505e;
    line-height: 1.7;
    letter-spacing: 0.5px;

    &:hover {
        color: #fff;
    }
`;

export const SslCertificateSectionFour = styled.div`
    backgroud-color: #fff;
    width: auto;
    height: 100%;
    position: relative;
`; 

export const SslCertificateSectionFourWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 2rem 4rem;
    margin: 0 4rem;
    width: 1400px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 2rem 3.2rem;
        margin: 0;
    }
`;

export const SslCertificateSectionFourTitle = styled.h2`
    color: #4b505e;
    width: 100%;
    font-size: 21px;
    margin: 1rem;
    text-align: center;
`;

export const SslCertificateSectionFourDesc = styled.p`
    color: #4b505e;
    width: 100%;
    margin: 1rem;
    
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 14px;
         margin: 0.5rem;
         font-weight: 500;
    }
`;

export const SslCertificateSectionFourWrapBtn = styled.div`
    margin: 2rem;
`;
export const SslCertificateSectionFourBtn = styled.button`
    width: 200px;
    height: 56px;
    background-color: #7fb701;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background: #000;
    }
`;

export const SslCertificateFaqSection = styled.div`
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;

`;

export const SslCertificateFaqSectionWrap = styled.div`
    flex-direction: column;
        padding: 2rem 10rem;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            padding: 0 4rem;
            margin: 0 -10px;
        }
`;

export const SslCertificateFaqSectionInfo = styled.div`
    width: auto;
    height: auto;
`;

export const SslCertificateFaqSectionInfoTitle = styled.h1`
    color: #7fb701;
    font-size: 24px;
    position: relative;
    justify-content: space-around;
    margin: 15px;
    margin-bottom: 20px;
`;

export const SslCertificateFaqInfoItem = styled.div`
    border-bottom: 1px solid #e5e5e5;
    margin: 15px;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 768px){
        margin: 10px; 
    }
`; 

export const SslCertificateFaqInfoItemQues = styled.h5`
    color: #101522;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const SslCertificateFaqInfoItemAns = styled.span`
    padding: 2rem 1rem;
    color: #101522;
    font-size: 14px;
    letter-spacing: 0.5px;
    display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};

    @media screen and (max-width: 768px) {
        padding: 2rem 0;
        letter-spacing: 1.5px;
        line-height: 1.4;
    }
`;
export const SslCertificateFaqLink = styled(LinkR)`
    text-decoration: none;
    color: #de3723;
`;