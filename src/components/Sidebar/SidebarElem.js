import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const SidebarContainer = styled.aside`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  transition: 0.3s ease-in-out;
  z-index: 3;
  position: absolute;
  bottom: 0px;

  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};

`;

// export const CloseIcon = styled(FaTimes)`
//    color: #fff;
// `;


export const SidebarWrapper = styled.div`
   color: #fff;
   
`;

export const SidebarMenu = styled.ul`
    display: none;

    @media screen and (max-width: 1250px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 70px);
        place-items: center;
        margin-top: 110px;
    }
`;

export const SidebarLink = styled(LinkR)`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        list-style-type: none;
        transition: 0.2s ease-in-out;
        color: #fff;
        cursor: pointer;

        &:hover {
            color: #01bf71;
            transition: 0.2s ease-in-out;
        }
`;

export const SideBtnWrap = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        display: flex;
       justify-content: center;
    }
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;