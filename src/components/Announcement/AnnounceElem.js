import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeaderAnnoucementContainer = styled.div`
    height: 50px;
    font-size: 16px;
    background: #16181d;
    color: #fff;
    width: 100%;

  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')}


`;

export const HeaderAnnoucementWrapper = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    width: auto;
`;

export const HeaderAnnoucementWrapperInfo = styled.span`
    padding: 0 15px;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
`;

export const HeaderAnnoucementWrapperBtn = styled.button`
   position: relative;
   left: 10px;
   cursor: pointer;
   font-size: 10px;

   @media screen and (max-width: 768px) {
    left: 0px;
    margin-left: 5px;
  }
    
`;

export const Span = styled(LinkR)`
  font-size: 12px;
  color: #fff;
`;