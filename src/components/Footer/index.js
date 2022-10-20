import React from 'react'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink

 } from './FooterElem';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us  </FooterLinkTitle>
                          <FooterLink to='/index.php/announcements'> Announcements</FooterLink>
                          <FooterLink to='/index.php/knowledgebase'> Knowledgebase</FooterLink>
                          <FooterLink to='/serverstatus.php'> Network Status</FooterLink>
                          <FooterLink to='#'> Social Support</FooterLink>
                          <FooterLink to='#'> Careers</FooterLink>
                          <FooterLink to="/Legal"> Terms Of Service</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> Domains </FooterLinkTitle>
                          <FooterLink to='/domain-name-search'> Name Search</FooterLink>
                          <FooterLink to='/cart.php?a=add&domain=transfer'> Name Transfer</FooterLink>
                          <FooterLink to='/whois-guard'> Whois Lookup</FooterLink>
                          <FooterLink to='#'> Free DNS</FooterLink>
                          <FooterLink to='#'> Premium DNS</FooterLink>
                          <FooterLink to='/register'> Migrate To HostthyWeb</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> Hosting  </FooterLinkTitle>
                          <FooterLink to='/cart.php'> Shared hosting</FooterLink>
                          <FooterLink to='/cart.php'> VPS hosting</FooterLink>
                          <FooterLink to='/cart.php'> Dedicated hosting</FooterLink>
                          <FooterLink to='/cart.php'> Wordpress Hosting</FooterLink>
                          <FooterLink to='/cart.php'>Resellar Hosting</FooterLink>
                          <FooterLink to='/cart.php'> Migrate To HostthyWeb</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> Security  </FooterLinkTitle>
                          <FooterLink to='/index.php/store/vpn'> VPN Services</FooterLink>
                          <FooterLink to='/index.php/store/ssl-certificates'> SSL Certificate</FooterLink>
                          <FooterLink to='/whois-guard'> WhoisGuard</FooterLink>
                          <FooterLink to='/submitticket.php?step=2&deptid=1'> Submit Ticket</FooterLink>
                          <FooterLink to='/Legal'> Abuse &amp; DMCA</FooterLink>
                          <FooterLink to='/Legal'> Policy &amp; Privacy</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer