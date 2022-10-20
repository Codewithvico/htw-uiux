import styled from "styled-components";
import bgImg from "../../assets/images/htw-banner.jpeg";
import { Link } from 'react-router-dom';



export const SubpoenaPolicyMainContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #000000;
`;

export const SubpoenaPolicyWrapper = styled.div`
    display: block;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const SubpoenaPolicyHeader = styled.div`
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

export const SubpoenaPolicyHeaderTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8em;
    font-weight: bold;

    @media screen and (max-width: 768px) {
    font-size: 1.2em;
    }
`;

export const SubpoenaPolicyHeaderDesc = styled.p`
    font-family: inherit;
    color: inherit;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;


export const SubpoenaPolicyHeaderAside = styled.div`
    padding: 1em 2em;
    background: #000;
    border-bottom: 2px solid #8cc1c1;
`;

export const SubpoenaPolicyHeaderAsideInfo = styled.p`
    color: #01bf71;
    cursor: pointer;
`;

export const SubpoenaPoliceHeaderAsideLink = styled(Link)`
    text-decoration: none;
    color: #6d6e70;

    &:hover {
        color: #01bf71;
        transition: all 0.3s ease-in-out;
    }
`;

export const SubpoenaPolicyBody = styled.div`
    width: 100%;
    color: #eee;
    display: flex;
    padding: 4rem 8rem;
  

    @media screen and (max-width: 768px) {
        padding: 1.5rem 2rem;
        flex-direction: column;
    }
`;

export const SubpoenaPolicyBodyWrapper = styled.div`
        flex: 1;
        position: relative;  
`;

export const SubpoenaPolicyBodyInfoTitle = styled.h3`
        position: relative;
        padding: 1rem 0;
        font-size: 1.25em;
        line-height: 1.5;
        font-weight: medium;
        margin: 1em 0 0;

         @media screen and (max-width: 768px) {
             font-size: 0.8em;
         }
`;

export const SubpoenaPolicyBodyInfoDesc = styled.p`
        line-height: 1.5;
        letter-spacing: 0.5px;
        font-size: 12px;
`;

export const SubpoenaPolicyBodyAside = styled.div`
        flex: 1;
        padding: 2rem 4rem;
`;

export const SubpoenaPolicyBodyList = styled.li`
        line-height: 2.5;
        letter-spacing: 0.5px;
        list-style-type: square;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
`;

export const SubpoenaPolicyLink = styled(Link)`
        color: #de3723;
        text-decoration: none;

        &:hover {
            transition: all 0.3s ease-in-out;
            color: #01bf71;
        }
`;

export const SubpoenaPolicyBodyInfoDescList = styled.li`
        line-height: 2.5;
        letter-spacing: 0.5px;
        list-style-type: none;
        font-size: 12px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }

`;

export const SubpoenaPolicyBodyInfoDescListTitle = styled.h5`
    line-height: 1.2;
    letter-spacing: 0.5px;
    font-size: 14px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const SubpoenaPolicyBodyDescTitle = styled.span`
        line-height: 1.2;
        letter-spacing: 0.5px;
        font-weight: bold;
`;