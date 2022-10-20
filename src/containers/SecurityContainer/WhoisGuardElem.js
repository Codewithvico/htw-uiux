import styled from "styled-components";
import { Link } from 'react-router-dom';
import Headerbg from '../../assets/images/shared.jpeg';


export const WhoisGuardMainContainer = styled.div`
        width: 100%;
        position: relative;
        display: flex;
        height: 100%;
        background: #000;
    
`;
export const WhoisGuardWrapper = styled.div`
        width: 100%;
        justify-content: center;
        align-items: center;
        align-content: center;
`;

export const WhoisGuardHeader = styled.div`
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

export const WhoisGuardHeaderLeft = styled.div`
    flex: 1;
    flex-direction: column;
    position: relative;
    padding: 2rem 12rem;

    @media screen and (max-width: 900px){
        padding: 0;
    }
`;

export const WhoisGuardHeaderTitle = styled.h1`
    line-height: 1.1;
    letter-spacing: 0.5px;
    justify-content: space-around; 
    color: #7fb701;
    font-size: 2.2rem;
    
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const WhoisGuardHeaderDesc = styled.p`
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

export const WhoisGuardHeaderRight = styled.div`
    flex: 1;
    position: relative;
`;
export const WhoisGuardHeaderSelect = styled.select`
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
export const WhoisGuardHeaderOptions = styled.option`
        color: #7fb701;
`;

export const WhoisGuardHeaderBtn = styled.button`
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

export const WhoisGuardHeaderExtra = styled.div`
            width: 100%;
            height: auto;
`;
export const WhoisGuardExtraInfo = styled.p`
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
export const WhoisGuardBody  = styled.div`
    display: grid;
    place-items: center;
    width: auto;
    background-color: #ffffff;
`; 

export const WhoisGuardSectionOne  = styled.div`
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

export const WhoisGuardSectionOneLeft  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 8rem;
    margin: 0 4rem;
    height: auto;

    @media screen and (max-width: 768px){
        padding: 0 2rem;
        margin: 0;
        height: 100%;
    }
`;  



export const WhoisGuardSectionOneLeftTitleImage  = styled.img`
    padding: 2rem;
    width: 500px;
    object-fit: cover;

    @media screen and (max-width: 768px){
    padding: 1rem;
    width: 300px;
    }
`;

export const WhoisGuardSectionOneLeftTitle  = styled.h2`
    text-align: flex-start;
    color: #4b505e;
    padding: 2rem;

    @media screen and (max-width: 768px){
        padding: 0.5rem; 
        margin: 1rem;
    }
`; 

export const WhoisGuardSectionOneLeftDesc  = styled.p`
    text-align: flex-start;
    color: #4b505e;
`;

export const WhoisGuardSectionOneLeftWrap  = styled.div`
    width: auto;
    height: auto;
    padding: 0 1.5rem;
`; 


export const WhoisGuardSectionOneLeftWrapDesc  = styled.p`
    font-size: 16px;
    line-height: 20px;
    color: #4b505e;
    letter-spacing: 0.5px;
    padding: 0.5rem;
    margin: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        margin: 0.5rem;
    }
`;

export const WhoisGuardSectionOneLeftWrapper   = styled.div`
    width: auto;
    height: auto;
`;  

export const WhoisGuardSectionOneRight  = styled.div`
    flex: 1;
`; 

export const WhoisGuardSectionOneRightCard  = styled.div`
    padding: 1.25em;
    position: relative;
    text-align: center;
    transition: all .2s ease-in-out;
    line-height: 1.3333333333;
    margin: 0; 
    background: #4d4e4f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        padding: 1.7em;
        max-width: 300px;
        transition: all 0.2s ease-in-out;
        margin: 0.3rem;
        
    }
`;

export const WhoisGuardSectionOneRightCardTitle  = styled.h2`
    font-size: 6em;
    line-height: 1.3333333333;
    font-weight: bold;
    margin: 0; 
    text-align: center;
    color: #ffffee;

    @media screen and (max-width: 768px) {
        font-size: 4em;
        line-height: 1;
    }
`;

export const WhoisGuardSectionOneRightCardBtn  = styled.span`
    transition: .2s linear;
    font-family: 'Montserrat','PT Sans Narrow';
    margin-bottom: 0;
`;

export const WhoisGuardSectionOneRightCardButton  = styled.button`
    background-color: #7fb701;
    border-radius: 20px;
    color: #fff;
    font-size: small;
    font-weight: 700;
    height: 56px;
    bottom: 1.25em;
    text-decoration: none;
    width: 120px;
    margin: 1rem;
    border: none;
    outline: none;
    cursor: pointer;

`;

export const WhoisGuardSectionOneRightCardBottom  = styled.div`
    padding: 1.75em;
    position: relative;
    text-align: center;
    transition: all .2s ease-in-out;
    margin: 0; 
    background: #f2f2f2;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        max-width: 300px;
        transition: all 0.2s ease-in-out;
        margin: 0.3rem;
        margin-top: 0;
    }
    
`;

export const WhoisGuardSectionOneRightCardDesc  = styled.p`
    transition: .2s linear;
    font-family: 'Montserrat','PT Sans Narrow';
    margin-bottom: 0;
    color: #4b505e;
    margin: 1.3rem;
    
    @media screen and (max-width: 768px) {
        margin: 0.9rem;
    }

`; 


export const WhoisGuardSectionTwo  = styled.div`
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

export const WhoisGuardSectionTwoWrapper  = styled.div`
    width: auto;
    height: auto;
`; 

export const WhoisGuardSectionTwoWrapperTitle  = styled.h2`
    font-size: 3ch;
    font-weight: bold;
    text-align: center;
    color: #4b505e;
    padding: 1.2rem;
    margin: 2rem;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1050px){
        padding: 2rem;
        font-size: 2ch;
    }
`; 

export const WhoisGuardSectionTwoWrapperDesc  = styled.p`
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

export const WhoisGuardSectionTwoCardWrap   = styled.div`
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

export const WhoisGuardSectionTwoCard  = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 2rem;
    display: flex;
    padding: 1rem;

`; 

export const WhoisGuardSectionTwoCardIcon  = styled.span`
    flex: 1;
    font-size: 80px;
    padding: 1rem;
    color: #7fb701;

    @media screen and (max-width: 1050px) {
        font-size: 60px;
    }
`;

export const WhoisGuardSectionTwoCardInner  = styled.div`
    width: auto;
    height: auto;
`; 

export const WhoisGuardSectionTwoCardTitle  = styled.h5`
    color: #4b505e;
    margin: 0.5rem;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        color: #fff;
    }
`;

export const WhoisGuardSectionTwoCardDesc  = styled.p`
    color: #4b505e;
    line-height: 1.7;
    letter-spacing: 0.5px;

    &:hover {
        color: #fff;
    }
`; 

export const WhoisGuardSectionThree  = styled.div`
    backgroud-color: #fff;
    width: auto;
    height: 100%;
    position: relative;
`;  

export const WhoisGuardSectionThreeWrap  = styled.div`
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

export const WhoisGuardSectionThreeTitle  = styled.h2`
    color: #4b505e;
    width: 100%;
    font-size: 21px;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
`;

export const WhoisGuardSectionThreeDesc  = styled.p`
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

export const WhoisGuardSectionThreeWrapBtn  = styled.div`
    margin: 2rem;
`;  

export const WhoisGuardSectionThreeBtn  = styled.button`
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

export const WhoisGuardFaqSection  = styled.div`
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
`;  
export const WhoisGuardFaqSectionWrap  = styled.div`
    flex-direction: column;
    padding: 2rem 10rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 0 4rem;
        margin: 0 -10px;
    }
`;

export const WhoisGuardFaqSectionInfo  = styled.div`
    width: auto;
    height: auto;
`;

export const WhoisGuardFaqSectionInfoTitle  = styled.h1`
    color: #7fb701;
    font-size: 24px;
    position: relative;
    justify-content: space-around;
    margin: 15px;
    margin-bottom: 20px;
`; 

export const WhoisGuardFaqInfoItem  = styled.div`
    border-bottom: 1px solid #e5e5e5;
    margin: 15px;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 768px){
        margin: 10px; 
    }
`;

export const WhoisGuardFaqInfoItemQues  = styled.div`
    color: #101522;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;

`; 
export const WhoisGuardFaqInfoItemAns  = styled.div`
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
export const WhoisGuardFaqLink = styled(Link)`
    text-decoration: none;
    color: #de3723;
`;  

export const WhoisGuardDisclaimers = styled.div`
    flex: 1;
`;
export const WhoisGuardDisclaimersTitle = styled.h1`
    color: #7fb701;
    font-size: 24px;
    position: relative;
    justify-content: space-around;
    margin: 15px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        margin: 0; 
    }
`;
export const WhoisGuardDisclaimersItems = styled.ul`
    padding: 0.6rem 1rem;
    color: #101522;
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;

`;
export const WhoisGuardDisclaimersItem = styled.li`
    list-style-type: none;
    padding: 0.3rem;
    line-height: 1.3;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`; 