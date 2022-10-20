import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import Headerbg from '../../assets/images/shared.jpeg';

export const WebHostingBodyMainContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    height: 100%;
    background: #000;
    color: #fff;
`;

export const WebHostingBodyWrapper = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const WebHostingBodyHeader = styled.div`
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

export const WebHostingBodyHeaderLeft = styled.div`
    flex: 1;
    flex-direction: column;
    position: relative;
    padding: 2rem 12rem;

    @media screen and (max-width: 900px){
        padding: 0;
    }
`;
    
export const WebHostingBodyHeaderTitle = styled.h1`
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
export const WebHostingBodyHeaderDesc = styled.p`
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

export const WebHostingBodyHeaderRight = styled.div`
    flex: 1;
    position: relative;
`;
export const WebHostingBodyHeaderSelect = styled.select`
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
export const WebHostingBodyHeaderOptions = styled.option`
    color: #7fb701;
`;

export const WebHostingBodyHeaderBtn = styled.button`
    border-radius: 0 30px 30px 0;
    background: #7fb701;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
    background: #16181d;
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

export const WebHostingBodyHeaderBtnLink = styled(LinkR)`
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;


    &:hover {   
        color: #14d468;
       }
`;

export const WebHostingBodyHeaderExtra = styled.div`
    width: 100%;
    height: auto;
`;

export const WebHostingBodyExtraInfo = styled.div`
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


export const WebHostingBody = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    background-color: #fff;
`;


export const WebHostingBodySectionOneDown = styled.div`
    width: 100%;
    height: auto; 
    margin: 0 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    grid-gap: 16px;
    padding: 2rem 6rem;
    overflow: hidden;


@media screen and (max-width: 1050px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 0 4rem;

}

@media screen and (max-width: 768px) {
   grid-template-columns: 1fr;
   margin: 0;
}

@media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
  }
`;

export const WebHostingBodySectionOneDownCard = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: #fff;
border-radius: 10px;
width: 100%;
max-height: 600px;
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
    padding: 2rem;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}   

`;

export const WebHostingBodySectionOneDownCardIconWrap = styled.span`
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

export const WebHostingBodySectionOneDownCardWrap = styled.div`
    width: 100%;
`;

export const WebHostingBodySectionOneCardTitle = styled.h3`
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

export const WebHostingBodySectionOneCardDesc = styled.p`
    width: 100%;
    font-size: 14px;
    line-height: 1.7;
    letter-space: 0.5px;
    margin-bottom: 20px;
    color: #98a0bb;
    transition: .2s linear;
    font-family: 'Montserrat','PT Sans Narrow';

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 12px;
        color: #98a0bb;     
    }
`;


export const WebHostingBodySectionOneTitle = styled.h2`
    color: #7fb701;
    text-align: center;
    width: 100%;
    line-height: 1.1;
    letter-spacing: 0.5px;
    justify-content: space-around; 
    font-size: 2.2rem;
    margin-top: 55px;
    
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const WebHostingBodySectionOneDesc = styled.span`
    color: #6763a0;
    text-align: center;
    display: grid;
    place-items: center;
    opacity: 0.8;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const WebHostingBodySectionOneTableContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
    margin: auto;
    margin-left: -30px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 960px){
        display: none;
    }

    
`;
export const WebHostingBodySectionOneTable = styled.table`
    background: transparent;
    padding: 60px;
    width: 1400px;
    text-align: center;
    margin: 0;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    margin-bottom 2rem;

    &:hover {
        box-shadow: 0 0 20px rgb(0 0 0 / 8%);
    }

    @media screen and (min-width: 960px){
        width: 1100px;
    }
`;

export const WebHostingBodySectionOneTableHeader = styled.thead`
    line-height: 1.42857143;
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    color: #000;
`;

export const WebHostingBodySectionOneTableRow = styled.tr`
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
export const WebHostingBodySectionOneTableTitle = styled.th`
    border-bottom: 0px;
    padding: 15px 13px 15px 30px;
    color: #6763a0;
    background: #ffffff;
    line-height: 1.42857143;
`;
export const  WebHostingBodySectionOneTableData = styled.td`
    line-height: 1.42857143;
    padding: 20px 15px 5px 30px;
    position: relative;
    border-top: 0;
    color: #98a0bb; 
`;

export const WebHostingBodySectionOneTableButton = styled.button`
    width: 100%;
    height: 50px;
    background: #7fb701;
    border: none;
    cursor: pointer;

    &:hover {
        background: #101522;
    }
`;

export const WebHostingBodySectionOneTableButtonLink = styled(LinkR)`
    color: #fff;
    border-radius: 2px;
    padding: 5px 11px;
    letter-spacing: 0.5px;
    line-height: 1.4;
    text-decoration: none;
`;

export const WebHostingBodySectionTwo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #000;
    width: 100%;
`;
export const WebHostingBodySectionTwoContainer = styled.div`
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 20px;
    padding: 4rem 0;

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

export const WebHostingBodySectionTwoTopCard = styled.div`
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

export const WebhostingBodySectionTwoTopCardIcon = styled.div`
    width: 100%; 
    background-color: #F7F9FF;
    display: grid;
    place-items: center;
`;

export const WebHostingBodySectionTwoTopCardTitle = styled.h4`
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
export const WebHostingBodySectionTwoTopCardDesc = styled.p`
    text-align: center;
    color: #4b505e;
    padding: 1rem;
    letter-spacing: 0.5px;
    line-height: 1.7;

    &:hover {
        color: #fff;
    }
`;

export const WebHostingBodySectionTwoBottomBtnLink = styled(LinkR)`
    text-decoration: none;
    color: #16181d;
`;

export const WebHostingBodySectionTwoBottomTitleWrap = styled.div`
    background: transparent;
`;

export const WebHostingBodySectionTwoBottomTitle = styled.h2`
    font-size: 23px;
    color: aliceblue;

    @media screen and (max-width: 768px){
        font-size: 18px;
        margin-bottom: -100px;
    }
`;

export const WebHostingBodySectionTwoBottomContainer = styled.div`
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
export const WebHostingBodySectionTwoBottomCard = styled.div`
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
export const WebHostingBodySectionTwoBottomCardTitle = styled.h5`
    padding: 1rem 0;
    letter-spacing: 0.5px;
    line-height: 1.1;
    height: 20px;
    margin-bottom: 15px;
`;

export const WebHostingBodySectionTwoBottomCardDesc = styled.p`
    padding: 1rem 0;
    margin-bottom: 15px;
`;

export const WebHostingBodySectionTwoBottomBtnWrap = styled.div`
    display: flex;
`;

export const WebHostingBodySectionTwoBottomBtn = styled.button`
    font-size: 13px;
    padding: 7px 20px;
    border-radius: 3px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
`;

export const WebHostingBodyFaqSection = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;

`;

export const WebHostingBodyFaqWrap = styled.div`
    flex-direction: column;
    padding: 2rem 10rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 0 4rem;
        margin: 0 -10px;
    }
`;
export const WebHostingBodyFaqInfo = styled.div`
    display: flex;
    flex-direction:  column;
    flex: 1;
`;

export const WebHostingBodyFaqInfoTitle = styled.h1`
    color: #7fb701;
    font-size: 24px;
    position: relative;
    justify-content: space-around;
    margin: 15px;
    margin-bottom: 20px;
`;

export const WebHostingBodyFaqInfoItem = styled.div`
    border-bottom: 1px solid #e5e5e5;
    margin: 15px;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 768px){
        margin: 10px; 
    }
`;

export const WebHostingBodyFaqInfoItemQues = styled.h5`
    color: #101522;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const WebHostingBodyFaqInfoItemAns = styled.span`
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
export const WebHostingFaqLink = styled(LinkR)`
    text-decoration: none;
    color: #de3723;
`;

export const WebHostingBodyDisclaimers = styled.div`
    flex: 1;
`;

export const WebHostingBodyDisclaimersTitle = styled.h1`
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

export const WebHostingBodyDisclaimersItems = styled.ul`
    padding: 0.6rem 1rem;
    color: #101522;
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
`;
export const WebHostingBodyDisclaimersItem = styled.li`
    list-style-type: none;
    padding: 0.3rem;
    line-height: 1.3;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`;