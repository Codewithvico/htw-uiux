import styled from 'styled-components';
import Headerbg from '../../assets/images/shared.jpeg';
import Image2 from '../../assets/images/domain-transfer.png'
import { Link as LinkR } from 'react-router-dom';


export const DomainSearchMainContainer = styled.div`
        width: 100%;
        position: relative;
        display: flex;
        height: 100%;
        background: #000;
    
`;

export const DomainSearchWrapper = styled.div`
        width: 100%;
        justify-content: center;
        align-items: center;
        align-content: center;
`;

export const DomainSearchHeader = styled.div`
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

export const DomainSearchHeaderLeft = styled.div`
    flex: 1;
    flex-direction: column;
    position: relative;
    padding: 2rem 12rem;

    @media screen and (max-width: 900px){
        padding: 0;
    }
    
`;

export const DomainSearchHeaderTitle = styled.h1`
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

export const DomainSearchHeaderDesc = styled.p`
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

export const DomainSearchHeaderRight = styled.div`
            flex: 1;
            position: relative;
`;

export const DomainSearchHeaderInput = styled.input`
        width: 60%;
        border-radius: 30px 0 0 30px;
        height: 50px;
        font-size: 14px;
        border: 2px solid #fff;
        border: none;
        background-color: #000;
        box-shadow: 0 0 100px rgb(255 255 255 / 20%);
        outline: none;
        cursor: pointer;
        color: #7fb701;
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

export const DomainSearchHeaderBtn = styled.button`
        border-radius: 0 30px 30px 0;
        background: #7fb701;
        height: 50px;
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
        background: #16181d;
        transition: 0.3s ease-in-out;
    }

        @media screen and (max-width: 900px) {
            position: relative;
            top: -28px;
            left: 15px;
            height: 40px;
        }

`;

export const DomainSearchHeaderBtnLink =  styled(LinkR)`
        color: #ffffff;
        font-size: 12px;
        text-decoration: none;
        font-weight: 500;

        &:hover {   
         color: #14d468;
        }
`;

export const DomainSearchHeaderExtra = styled.div`
            width: 100%;
            height: auto;
`;

export const DomainSearchExtraInfo = styled.p`
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

export const DomainSearchBody = styled.div`
            display: grid;
            place-items: center;
            width: 100%;
            height: auto;
`;

export const DomainSearchBodySectionOne = styled.div`
            position: relative;
            width: 100%;
            height: 100vh;
            background: #fff;

            @media screen and (max-width: 768px) {
                height: 100%;
            }
`;


export const DomainSearchBodySectionOneDown = styled.div`
            width: 100%;
            height: auto; 
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            place-items: center;
            grid-gap: 16px;
            padding: 0 10rem;

            @media screen and (max-width: 1050px) {
                width: 100%;
                grid-template-columns: 1fr 1fr;
                padding: 0 4rem;
               
           }
           
               @media screen and (max-width: 768px) {
                   grid-template-columns: 1fr 1fr;
                   padding: 0 2rem;
               }

               @media screen and (max-width: 420px) {
                    grid-template-columns: 1fr;
               }
`;

export const DomainSearchBodySectionOneDownCard = styled.div`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background: #fff;
            border-radius: 10px;
            width: 100%;
            max-height: 600px;
            // padding: 30px;
            // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
            position: relative;
            top: 55px;

            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
            }

            @media screen and (max-width: 1250px){
                position: relative;
                top: 25px;
                width: 300px;
                padding: 3rem;
                display: flex;
                flex-direction: column;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            }

            @media screen and (max-width: 768px) {
                position: relative;
                margin-bottom: 50px;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            }
`;

export const DomainSearchBodySectionOneDownCardIconWrap = styled.span`
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

export const DomainSearchBodySectionOneDownCardWrap = styled.div`
           width: 100%;
`;


export const DomainSearchBodySectionOneCardTitle = styled.h3`
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

export const DomainSearchBodySectionOneCardDesc = styled.p`
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

export const DomainSearchBodySectionOneTableContainer = styled.div`
        position: relative;
        display: grid;
        place-items: center;
        padding-top: 60px;
        padding-bottom: 60px;
        margin: auto;
        width: 100%;
        height: 100%;

        @media screen and (max-width: 960px){
            display: none;
        }
        
`;

export const DomainSearchBodySectionOneTable = styled.table`
        background: transparent;
        padding: 60px;
        width: 1400px;
        text-align: center;
        margin: 0 5px;
        transition: all 0.2s ease-in-out;
        border-radius: 5px;
        margin-bottom 2rem;

        &:hover {
            box-shadow: 0 0 20px rgb(0 0 0 / 8%);
        }

`;

export const DomainSearchBodySectionOneTableHeader = styled.thead`
        line-height: 1.42857143;
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
`;

export const DomainSearchBodySectionOneTableRow = styled.tr`
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        border-bottom: 0px;
        padding: 15px 13px 15px 30px;
        color: #6763a0;
        background: #ffffff;
        line-height: 1.42857143;

        &:hover {
            box-shadow: 0 0 20px rgb(0 0 0 / 8%);
        }

`;

export const DomainSearchBodySectionOneTableTitle = styled.th`
        border-bottom: 0px;
        padding: 15px 13px 15px 30px;
        color: #6763a0;
        background: #ffffff;
        line-height: 1.42857143;
        text-align: left;
`;


export const DomainSearchBodySectionOneTableData = styled.td`
        line-height: 1.42857143;
        padding: 20px 15px 5px 30px;
        position: relative;
        border-top: 0;
        text-align: left;
        color: #98a0bb;   
`;

export const DomainSearchBodySectionOneTableButton = styled.button`
        width: 100%;
        height: 50px;
        background: #7fb701;
        border: none;
        cursor: pointer;
`;

export const DomainSearchBodySectionOneTableButtonLink = styled(LinkR)`
        color: #fff;
        border-radius: 2px;
        padding: 5px 11px;
        letter-spacing: 0.5px;
        line-height: 1.4;
        text-decoration: none;
`;


export const DomainSearchBodySectionTwo = styled.div`
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        background-color: #F7F9FF;

        @media screen and (max-width: 1500px) {
            flex-direction: column;
        }
`;

export const DomainSearchBodySectionTwoWrapLeft = styled.div`
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        padding: 3rem 8rem;
        background-color: #7fb701;
    
        @media screen and (max-width: 1250px) {
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 420px) {
            grid-template-columns: 1fr;
            padding: 4rem 3rem;
        }
`;

export const DomainSearchBodySectionTwoWrapLeftCard = styled.div`
        width: 100%;        
        display: flex;
        flex-direction: column;     
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 0 15px rgb(54 46 97 / 4%);  

        &:hover {
            background-color: #7fb701;
            color: #fff;
        }
`;

export const DomainSearchBodySectionTwoWrapLeftCardIconWrap = styled.div`
        display: grid;
        place-items: center;
        color: #4270E4;
        margin: 5px 0 15px;
        padding: 0.5rem;
`;


export const DomainSearchBodySectionTwoWrapLeftCardTitle = styled.h1`
        font-size: 18px;
        font-weight: 500;
        display: grid;
        place-items: center;
        color: #4b505e;
        padding: 1rem;
`;

export const DomainSearchBodySectionTwoWrapLeftCardDesc = styled.p`
        font-size: 14px;
        line-height: 1.7;
        margin-bottom: 20px;
        display: grid;
        place-items: center;
        padding: 1.2rem;
        text-align: center;
`;

export const DomainSearchBodySectionTwoWrapRight = styled.div`
        position: relative;
        flex: 1;
        background-color: #F7F9FF;
        background-image: url(${Image2});
        background-repeat: no-repeat;
        background-position: center center;
        object-fit: center;
        opacity: 0.8;

        &:hover {
            opacity: 100%;
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
`;



export const DomainSearchBodySectionThree = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
`;

export const DomainSearchBodySectionThreeTopCardContainer = styled.div`
        width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 20px;
        padding: 4rem 0;
        margin: 2rem 2rem;

        @media screen and (max-width: 1250px) {
            grid-template-columns: 1fr 1fr;
            width: 700px; 
            margin: 10px;
            margin-left: -50px;
        }
        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr; 
            width: 300px; 
            margin: 10px;
            margin-left: -50px;

        }
`;

export const DomainSearchBodySectionThreeTopCard = styled.div`
        width: 100%;        
        display: flex;
        flex-direction: column;     
        border-radius: 10px;
        background: #F7F9FF;
        box-shadow: 0 0 15px rgb(54 46 97 / 4%);  
        margin: 2rem;
        padding: 10px;

        &:hover {
            background-color: #7fb701;
            color: #fff;
        }
`;


export const DomainSearchBodySectionThreeCardTitle = styled.h4`
        font-size: 18px;
        font-weight: 500;
        display: grid;
        place-items: center;
        color: #4b505e;
        padding: 2rem;
        letter-spacing: 0.5px;
        line-height: 1.1;
        height: 20px;

        &:hover {
            color: #fff;
        }
        
`;

export const DomainSearchBodySectionThreeCardDesc = styled.p`
        text-align: center;
        color: #4b505e;
        padding: 1rem;
        letter-spacing: 0.5px;
        line-height: 1.7;

        &:hover {
            color: #fff;
        }

`;

export const DomainSearchBodySectionThreeBottomContainer = styled.div`
        width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 20px;
        padding: 4rem 0;
        margin: 2rem 2rem;

        @media screen and (max-width: 1250px) {
            grid-template-columns: 1fr 1fr; 
            width: 500px;
            margin-left: -50px;
        }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr; 
            width: 300px;
            margin-left: -80px;
        }
`;

export const DomainSearchBodySectionThreeBottomTitleWrap = styled.div`
        background: transparent;
`;

export const DomainSearchBodySectionThreeBottomTitle = styled.h2`
        font-size: 23px;
        color: aliceblue;

        @media screen and (max-width: 768px){
            font-size: 18px;
            margin-bottom: -100px;
        }
`;

export const DomainSearchBodySectionThreeBottomCard = styled.div`
        width: 100%;        
        display: flex;
        flex-direction: column;     
        border-radius: 10px;
        box-shadow: 0 0 15px rgb(54 46 97 / 4%);  
        margin: 2rem;
        padding: 20px;
        color: #4b505e;

        &:hover {
            background-color: #7fb701;
            color: #fff;
        }
`;


export const DomainSearchBodySectionThreeBottomCardTitle = styled.h5`
        padding: 1rem 0;
        letter-spacing: 0.5px;
        line-height: 1.1;
        height: 20px;
        margin-bottom: 15px;
`;

export const DomainSearchBodySectionThreeBottomCardDesc = styled.p`
        padding: 1rem 0;
        margin-bottom: 15px;
`;

export const DomainSearchBodySectionThreeBottomBtnWrap = styled.div`
        display: flex;
`;

export const DomainSearchBodySectionThreeBottomBtn = styled.button`
        font-size: 13px;
        padding: 7px 20px;
        border-radius: 3px;
        margin-right: 10px;
        border: none;
        cursor: pointer;
`;

export const DomainSearchBodySectionBottomBtnLink = styled(LinkR)`
        text-decoration: none;
        color: #16181d;
`;


export const DomainSearchBodySectionFourWrap = styled.div`
        flex-direction: column;
        padding: 2rem 10rem;
        background-color: #fff;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            padding: 0 4rem;
            margin: 0 -10px;
        }
`;

export const DomainSearchBodySectionFourLeft = styled.div`
        display: flex;
        flex-direction:  column;
        flex: 1;

`;
export const DomainSearchBodySectionFourLeftTitle = styled.h1`
        color: #7fb701;
        font-size: 24px;
        position: relative;
        justify-content: space-around;
        margin: 15px;
        margin-bottom: 20px;
`;

export const DomainSearchBodySectionFourLeftItem = styled.div`
        border-bottom: 1px solid #e5e5e5;
        margin: 15px;
        margin-bottom: 20px;
        width: 100%;

        @media screen and (max-width: 768px){
            margin: 10px; 
        }
`;
export const DomainSearchBodySectionFourLeftItemQues = styled.h5`
        color: #101522;
        font-size: 16px;
        margin-bottom: 10px;
        cursor: pointer;
`;
export const DomainSearchBodySectionFourLeftItemAns = styled.span`
        color: #101522;
        font-size: 14px;
        letter-spacing: 0.5px;
        display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};

        @media screen and (max-width: 768px) {
            letter-spacing: 1.5px;
            line-height: 1.4;
        }
`;


export const DomainSearchBodySectionFourRight = styled.div`
        flex: 1;

`;

export const DomainSearchBodySectionFourRightTitle = styled.h1`
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

export const DomainSearchBodySectionFourRightItems = styled.ul`
        padding: 0.6rem 1rem;
        color: #101522;
        font-size: 14px;
        letter-spacing: 0.5px;
        margin-bottom: 20px;

`;

export const DomainSearchBodySectionFourRightItem = styled.li`
        list-style-type: none;
        padding: 0.3rem;
        line-height: 1.3;
        margin-bottom: 10px;
        
        @media screen and (max-width: 768px){
            padding: 0;
        }
`;

export const DomainSearchBodySectionFourRightItemLink = styled(LinkR)`
        color: #de3723;
        text-decoration: none;
`;

