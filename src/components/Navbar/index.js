import React from 'react'
import { FaListUl, FaOpencart } from 'react-icons/fa';
import Logo from '../../assets/images/hosthyweb-logo.png';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    Img,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavSup,
    NavBtn,
    NavBtnLink,
    Span
} from './NavbarElem';

const Navbar = ({ toggle }) => {
  return (
    <>
     <Nav>
       <NavbarContainer>
           <NavLogo to='/'>
           <Img src={ Logo } alt="no-image" />
            </NavLogo>
           <MobileIcon onClick={toggle}>
              <FaListUl /> 
           </MobileIcon>
           <NavMenu>
              <NavItem>
               <NavLinks to="/domain-name-search">Domain <NavSup><Span>New</Span></NavSup> </NavLinks>    
              </NavItem>
              <NavItem>
               <NavLinks to="/web-hosting">Services <NavSup><Span>New</Span></NavSup> </NavLinks>    
              </NavItem>
              <NavItem>
               <NavLinks  to="/security">Security<NavSup><Span>Alert</Span></NavSup></NavLinks>    
              </NavItem>
              <NavItem>
               <NavLinks to="/index.php/knowledgebase">Knowledgebase <NavSup><Span>Update</Span></NavSup></NavLinks>    
              </NavItem>
              <NavItem>
               <NavLinks to="/register.php">Register</NavLinks>     
              </NavItem>
           </NavMenu>
           <NavBtn>
                <NavBtnLink to="/clientarea.php">
                  Client Area  <FaOpencart fontSize={20} />
                  </NavBtnLink>
              </NavBtn>  
        </NavbarContainer>  
     </Nav>
    </>
  );
};
export default Navbar;