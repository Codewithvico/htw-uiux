import React, { useState } from 'react';
import { BiCoinStack, BiFingerprint, BiWindows } from 'react-icons/bi';
import { MdAddShoppingCart, MdOutlineNotificationsActive } from 'react-icons/md';
import iconLeftTop from '../../assets/images/icon9.png';
import iconLeftBottom from '../../assets/images/icon8.png'; 
import imgRight from '../../assets/images/htw-ssl-bk.png';
import { FaHeadset, FaPlus, FaRibbon, FaServer, FaTags } from 'react-icons/fa';
import {
    SslCertificateMainContainer,
    SslCertificateWrapper,
    SslCertificateHeader,
    SslCertificateHeaderLeft,
    SslCertificateHeaderTitle,
    SslCertificateHeaderDesc,
    SslCertificateHeaderRight,
    SslCertificateHeaderSelect,
    SslCertificateHeaderOptions,
    SslCertificateHeaderBtn,
    SslCertificateHeaderExtra,
    SslCertificateExtraInfo,
    SslCertificateBody,

    SslCertificateSectionOne,
    SslCertificateSectionOneCard,
    SslCertificateSectionOneCardIconWrap,
    SslCertificateSectionOneCardWrap, 
    SslCertificateSectionOneCardTitle,
    SslCertificateSectionOneCardDesc,

    SslCertificateSectionTwo, 
    SslCertificateSectionTwoLeft,
    SslCertificateSectionTwoLeftTitle, 
    SslCertificateSectionTwoLeftDesc,
    SslCertificateSectionTwoLeftWrapper, 
    SslCertificateSectionTwoLeftWrapIcon,
    SslCertificateSectionTwoLeftWrapImage,
    SslCertificateSectionTwoLeftWrap, 
    SslCertificateSectionTwoLeftWrapTitle,
    SslCertificateSectionTwoLeftWrapDesc,

    SslCertificateSectionTwoRight,   
    SslCertificateSectionTwoRightImage,

    SslCertificateSectionThree, 
    SslCertificateSectionThreeWrapper,
    SslCertificateSectionThreeWrapperTitle, 
    SslCertificateSectionThreeWrapperDesc,
    SslCertificateSectionThreeCardWrap, 
    SslCertificateSectionThreeCard, 
    SslCertificateSectionThreeCardInner,
    SslCertificateSectionThreeCardIcon,
    SslCertificateSectionThreeCardTitle,
    SslCertificateSectionThreeCardDesc,

    SslCertificateSectionFour, 
    SslCertificateSectionFourWrap,
    SslCertificateSectionFourTitle, 
    SslCertificateSectionFourDesc,
    SslCertificateSectionFourWrapBtn,
    SslCertificateSectionFourBtn,

    SslCertificateFaqSection,
    SslCertificateFaqSectionWrap,
    SslCertificateFaqSectionInfo,
    SslCertificateFaqSectionInfoTitle,
    SslCertificateFaqInfoItem,
    SslCertificateFaqInfoItemQues,
    SslCertificateFaqInfoItemAns,
    SslCertificateFaqLink,

} from './SslCertificateElem';



const SslCertificateContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <SslCertificateMainContainer>
     <SslCertificateWrapper>
     <SslCertificateHeader> 
              <SslCertificateHeaderLeft>
              <SslCertificateHeaderTitle> Secure Your Brand</SslCertificateHeaderTitle>
              <SslCertificateHeaderDesc> Secure your website with our powerful wildcard SSL </SslCertificateHeaderDesc>
              </SslCertificateHeaderLeft>
              <SslCertificateHeaderRight> 
               <SslCertificateHeaderSelect>
                <SslCertificateHeaderOptions> Select Preferred</SslCertificateHeaderOptions>
                <SslCertificateHeaderOptions> Standard SSL Certificate </SslCertificateHeaderOptions>
                <SslCertificateHeaderOptions> Business SSL Packages</SslCertificateHeaderOptions>
                <SslCertificateHeaderOptions> Wildcard SSL Certificate </SslCertificateHeaderOptions>
                <SslCertificateHeaderOptions> Enterprise SSL Package </SslCertificateHeaderOptions>
               </SslCertificateHeaderSelect>
               <SslCertificateHeaderBtn> Secure Now </SslCertificateHeaderBtn>
               <SslCertificateHeaderExtra> 
                  <SslCertificateExtraInfo> Secure Your Brand Online </SslCertificateExtraInfo>
               </SslCertificateHeaderExtra>
            </SslCertificateHeaderRight>
          </SslCertificateHeader>

          <SslCertificateBody>
          <SslCertificateSectionOne>
           <SslCertificateSectionOneCard> 
             <SslCertificateSectionOneCardIconWrap> 
                <MdAddShoppingCart fontSize={'40px'} />
              </SslCertificateSectionOneCardIconWrap>
                      <SslCertificateSectionOneCardWrap> 
                       <SslCertificateSectionOneCardTitle> Choose  &amp; Purchase</SslCertificateSectionOneCardTitle>
                       <SslCertificateSectionOneCardDesc> Begin by purchasing the right SSL certificate for your needs. Choose from the three types listed above. </SslCertificateSectionOneCardDesc>
                       </SslCertificateSectionOneCardWrap>
                    </SslCertificateSectionOneCard>

                    <SslCertificateSectionOneCard>
                    <SslCertificateSectionOneCardIconWrap>
                        <MdOutlineNotificationsActive fontSize={'40px'} />
                    </SslCertificateSectionOneCardIconWrap>
                      <SslCertificateSectionOneCardWrap>
                       <SslCertificateSectionOneCardTitle> Activate It </SslCertificateSectionOneCardTitle>
                       <SslCertificateSectionOneCardDesc> You’ll be able to activate your SSL certificate from the Account Panel immediately after purchase (or at a later time, if you choose).</SslCertificateSectionOneCardDesc>
                      </SslCertificateSectionOneCardWrap>
                    </SslCertificateSectionOneCard>

                    <SslCertificateSectionOneCard>
                    <SslCertificateSectionOneCardIconWrap>
                      <BiCoinStack fontSize={'40px'} />
                      </SslCertificateSectionOneCardIconWrap>
                      <SslCertificateSectionOneCardWrap>
                       <SslCertificateSectionOneCardTitle> Install It </SslCertificateSectionOneCardTitle>
                       <SslCertificateSectionOneCardDesc> You will receive instructions on how to install your SSL certificate once it has been validated and issued.</SslCertificateSectionOneCardDesc>
                       </SslCertificateSectionOneCardWrap>
                    </SslCertificateSectionOneCard>
                </SslCertificateSectionOne>

                <SslCertificateSectionTwo> 
                    <SslCertificateSectionTwoLeft>
                      <SslCertificateSectionTwoLeftTitle>What is an SSL certificate?</SslCertificateSectionTwoLeftTitle>
                      <SslCertificateSectionTwoLeftDesc> Protect your users’ data online with SSL security. </SslCertificateSectionTwoLeftDesc>
                       <SslCertificateSectionTwoLeftWrapper>
                       <SslCertificateSectionTwoLeftWrapIcon>
                           <SslCertificateSectionTwoLeftWrapImage src={iconLeftTop} alt="no-image" />
                       </SslCertificateSectionTwoLeftWrapIcon>
                       <SslCertificateSectionTwoLeftWrap>
                        <SslCertificateSectionTwoLeftWrapTitle> Why do i need SSL certificate? </SslCertificateSectionTwoLeftWrapTitle>
                         <SslCertificateSectionTwoLeftWrapDesc> An SSL certificate acts as third-party verification 
                             for a website’s security. It verifies the strength of the Secure Socket Layer 
                             encryption used when a user connects to the site and connects that encryption to the organization or 
                             individual that owns and maintains the website. 
                             SSL certification and validation are a necessary piece of 
                             web security for any business that collects information from 
                             its users. 
                        </SslCertificateSectionTwoLeftWrapDesc>
                        </SslCertificateSectionTwoLeftWrap>
                       </SslCertificateSectionTwoLeftWrapper>
                       <SslCertificateSectionTwoLeftWrapper>
                       <SslCertificateSectionTwoLeftWrapIcon>
                           <SslCertificateSectionTwoLeftWrapImage src={iconLeftBottom} alt="no-image" />
                       </SslCertificateSectionTwoLeftWrapIcon>
                       <SslCertificateSectionTwoLeftWrap>
                        <SslCertificateSectionTwoLeftWrapTitle> Start with a perfect domain name </SslCertificateSectionTwoLeftWrapTitle>
                         <SslCertificateSectionTwoLeftWrapDesc> No matter what level of security you choose, your users will 
                             recognize that your site is safe, and that leads to greater 
                             trust in your brand online.
                        </SslCertificateSectionTwoLeftWrapDesc>
                        </SslCertificateSectionTwoLeftWrap>
                       </SslCertificateSectionTwoLeftWrapper>
                    </SslCertificateSectionTwoLeft>
                    <SslCertificateSectionTwoRight>
                     <SslCertificateSectionTwoRightImage src={imgRight} alt="no-image" />
                    </SslCertificateSectionTwoRight>
                </SslCertificateSectionTwo>

                <SslCertificateSectionThree>
                    <SslCertificateSectionThreeWrapper>
                      <SslCertificateSectionThreeWrapperTitle> What comes with an SSL certificate? </SslCertificateSectionThreeWrapperTitle>
                       <SslCertificateSectionThreeWrapperDesc>Every SSL certificate issued by HostthyWeb comes with these great features.</SslCertificateSectionThreeWrapperDesc>
                    </SslCertificateSectionThreeWrapper>
                    <SslCertificateSectionThreeCardWrap>
                        <SslCertificateSectionThreeCard>    
                            <SslCertificateSectionThreeCardIcon>
                                <FaRibbon />
                            </SslCertificateSectionThreeCardIcon>
                            <SslCertificateSectionThreeCardInner> 
                            <SslCertificateSectionThreeCardTitle> SSL Site Seal </SslCertificateSectionThreeCardTitle>
                            <SslCertificateSectionThreeCardDesc> The site seal offers visual proof of the security provided by your website’s SSL certificate. It’s so important, in fact, that it’s become the main reason many website owners and managers buy an SSL certificate as most web users know to look for it. Seals vary in appearance depending on the type of SSL certificate issued, but they all mean the same thing: your user’s data is protected. </SslCertificateSectionThreeCardDesc>
                            </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>

                        <SslCertificateSectionThreeCard> 
                          <SslCertificateSectionThreeCardIcon>
                             <FaServer />
                            </SslCertificateSectionThreeCardIcon>
                            <SslCertificateSectionThreeCardInner>
                            <SslCertificateSectionThreeCardTitle> Top-Tier Support </SslCertificateSectionThreeCardTitle>
                            <SslCertificateSectionThreeCardDesc> HostthyWeb is known for providing best-in-class customer service thanks to our stellar support team. HostthyWeb support staffers are some of the most polite, helpful people in the business, with a wealth of knowledge about every product and service we offer. You can rest easy knowing that they’re available 24/7 to answer your questions and offer advice about your SSL certificate purchase. </SslCertificateSectionThreeCardDesc>
                         </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>

                        <SslCertificateSectionThreeCard> 
                            <SslCertificateSectionThreeCardIcon>
                                <BiWindows />
                            </SslCertificateSectionThreeCardIcon>
                            <SslCertificateSectionThreeCardInner>
                            <SslCertificateSectionThreeCardTitle> Browser Ubiquity </SslCertificateSectionThreeCardTitle>
                            <SslCertificateSectionThreeCardDesc> Enjoy 20X faster storage with pure Solid State Drive (SSD) storage, designed to enhance performance over the traditional Hard Disk Drives (HDD) preferred by VPS competitors. The result? Significant improvements to your website's speed, performance, and loading times. </SslCertificateSectionThreeCardDesc>
                         </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>

                        <SslCertificateSectionThreeCard> 
                            <SslCertificateSectionThreeCardIcon>
                                <FaHeadset />
                            </SslCertificateSectionThreeCardIcon>
                        <SslCertificateSectionThreeCardInner>
                         <SslCertificateSectionThreeCardTitle> World-Class Support </SslCertificateSectionThreeCardTitle>
                             <SslCertificateSectionThreeCardDesc> Have any questions, want to discuss your customization options or upgrade your Server Management? With HostTHYweb, you can count on us to help you out — no matter what. </SslCertificateSectionThreeCardDesc>
                            </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>

                        <SslCertificateSectionThreeCard> 
                            <SslCertificateSectionThreeCardIcon>
                                <BiFingerprint />
                            </SslCertificateSectionThreeCardIcon>
                            <SslCertificateSectionThreeCardInner> 
                            <SslCertificateSectionThreeCardTitle> Encryption Level </SslCertificateSectionThreeCardTitle>
                            <SslCertificateSectionThreeCardDesc> If your business scales in size, your VPS is ready to act. Easy scalability lets you start as small as you can afford and grow as you expand — whether that’s additional disk space, CPU power or bandwidth. </SslCertificateSectionThreeCardDesc>
                         </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>

                        <SslCertificateSectionThreeCard> 
                            <SslCertificateSectionThreeCardIcon>
                                <FaTags />
                            </SslCertificateSectionThreeCardIcon>
                             <SslCertificateSectionThreeCardInner>
                             <SslCertificateSectionThreeCardTitle> Management </SslCertificateSectionThreeCardTitle>
                            <SslCertificateSectionThreeCardDesc> You may manage your SSL certificates (including 
                                renewal and reissuance) in your Account Panel. </SslCertificateSectionThreeCardDesc>
                         </SslCertificateSectionThreeCardInner>
                        </SslCertificateSectionThreeCard>    
                    </SslCertificateSectionThreeCardWrap>
                </SslCertificateSectionThree>

                <SslCertificateSectionFour>
                 <SslCertificateSectionFourWrap>
                     <SslCertificateSectionFourTitle> Secure all your domains and subdomains 
                     </SslCertificateSectionFourTitle>
                      <SslCertificateSectionFourDesc> You should be able to count on your 
                          website security, without counting the cost. That’s why we offer 
                          you the best cheap SSL certificates in the industry. 
                          It’s all about providing the right SSL certificate 
                          price for your digital business or project. 
                          This is part of our overall commitment to online security and privacy. 
                          We will always support consumer rights in the digital world. 
                          It’s our mission to keep the Internet safe for everyone. 
                     </SslCertificateSectionFourDesc>
                       <SslCertificateSectionFourWrapBtn>
                           <SslCertificateSectionFourBtn> Secure Now</SslCertificateSectionFourBtn>
                       </SslCertificateSectionFourWrapBtn>
                 </SslCertificateSectionFourWrap>
                </SslCertificateSectionFour>

                <SslCertificateFaqSection>
                  <SslCertificateFaqSectionWrap>
                   <SslCertificateFaqSectionInfo>
                    <SslCertificateFaqSectionInfoTitle>  Frequently Aksed Questions </SslCertificateFaqSectionInfoTitle>
                     <SslCertificateFaqInfoItem  onClick={toggle}> 
                      <SslCertificateFaqInfoItemQues> How do I activate an SSL certificate? <FaPlus style={{float: 'right'}} /> </SslCertificateFaqInfoItemQues>
                       <SslCertificateFaqInfoItemAns isOpen={isOpen} toggle={toggle}> Once your SSL cert has been purchased, the next step is to have a CSR code 
                       generated on the server where your website is hosted. You will need to have a dedicated IP address, or SNI technology active any shared servers. Using a web host that supports third-party SSL certificates, is important, as well, but if you are a HostthyWeb hosting customer, this requirement has already been fulfilled. Read more detailed instructions about activating your SSL certicate. </SslCertificateFaqInfoItemAns>
                     </SslCertificateFaqInfoItem>

                     <SslCertificateFaqInfoItem onClick={toggle} > 
                      <SslCertificateFaqInfoItemQues> How do I reissue my SSL certificate? </SslCertificateFaqInfoItemQues>
                       <SslCertificateFaqInfoItemAns isOpen={isOpen} toggle={toggle}> 
                       When you change your hosting service, believe that your CSR/RSA pair 
                       has been compromised, or replace the domain name(s) for which the SSL 
                       was issued, you need to have your SSL encryption certificate reissued. 
                       Changes to contact details in the certificate may require a reissue, 
                       as well. To begin the process, you must generate a new CSR/RSA pair 
                       and save your RSA for further installation. Be sure to save your RSA 
                       for later steps in the installation. This can usually be done by the 
                       user, but your hosting provider may be able to assist. At HostthyWeb, 
                       there is no cost to reissue your SSL certificate.
                        <br />
                        <br />
                    <SslCertificateFaqLink to="/"> Learn more about reissue SSL certificate. → </SslCertificateFaqLink> 
                       </SslCertificateFaqInfoItemAns>
                     </SslCertificateFaqInfoItem>
                     <SslCertificateFaqInfoItem onClick={toggle} > 
                      <SslCertificateFaqInfoItemQues>How do I renew an SSL certificate? </SslCertificateFaqInfoItemQues>
                       <SslCertificateFaqInfoItemAns isOpen={isOpen} toggle={toggle}>When you purchase an 
                       SSL certificate, an expiration date is encoded by the certificate authority, and cannot 
                       be changed. Beginning 30 days prior to the expiration, but before the actual expiry 
                       date, you must complete the renewal process. When you use HostthyWeb as your 
                       SSL provider, we will contact you via email during the renewal window to 
                       remind you to take action. The process is easy, and requires only four steps. 
                       
                        <br />
                        <br />
                        <SslCertificateFaqLink to="/"> Learn more about the SSL renewal process </SslCertificateFaqLink>
                     </SslCertificateFaqInfoItemAns>
                     </SslCertificateFaqInfoItem>
                     </SslCertificateFaqSectionInfo>
                     </SslCertificateFaqSectionWrap>
                   </SslCertificateFaqSection>
                  

          </SslCertificateBody>
     </SslCertificateWrapper>
    </SslCertificateMainContainer>
  )
}

export default SslCertificateContainer