import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#fff' : '#7fb701')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '10px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '14px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? '#7fb701' : '#c7c7c7')}; 
    color: ${({dark}) => (dark ? '#ffffff' : '#010606')};

  }
`;