import React from 'react'

import { 
    SidebarContainer, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from './SidebarElem';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
          <SidebarMenu>
           <SidebarLink to="/domain-name-search" onClick={toggle}>Domain</SidebarLink>
           <SidebarLink to="/web-hosting" onClick={toggle}>Services</SidebarLink>
           <SidebarLink to="/security" onClick={toggle}>Security</SidebarLink>
           <SidebarLink to="/" onClick={toggle}>Knowledgebase</SidebarLink>
           <SidebarLink to="/" onClick={toggle}>Register</SidebarLink>
          </SidebarMenu>
          <br />
          <SideBtnWrap>
            <SidebarRoute to='/clientarea.php' onClick={toggle}>Client Area</SidebarRoute>  
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar