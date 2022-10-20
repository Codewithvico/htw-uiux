import React, { useState } from 'react';
import { BiFingerprint, BiGift, BiWindows } from 'react-icons/bi';
import imgRight from '../../assets/images/htw-ssl-bk.png';
import Whoisguard from '../../assets/images/whoisguard.png';
import { FaCogs, FaFlag, FaHeadset, FaPlus, FaRibbon, FaRobot, FaServer, FaTags } from 'react-icons/fa';
import {
    WhoisGuardMainContainer,
    WhoisGuardWrapper,
    WhoisGuardHeader,
    WhoisGuardHeaderLeft,
    WhoisGuardHeaderTitle,
    WhoisGuardHeaderDesc,
    WhoisGuardHeaderRight,
    WhoisGuardHeaderSelect,
    WhoisGuardHeaderOptions,
    WhoisGuardHeaderBtn,
    WhoisGuardHeaderExtra,
    WhoisGuardExtraInfo,
    WhoisGuardBody,

    WhoisGuardSectionOne, 
    WhoisGuardSectionOneLeft, 
    WhoisGuardSectionOneLeftTitleImage, 
    WhoisGuardSectionOneLeftTitle,   
    WhoisGuardSectionOneLeftWrap, 
    WhoisGuardSectionOneLeftWrapDesc,
    WhoisGuardSectionOneLeftWrapper, 
    WhoisGuardSectionOneRight,
    WhoisGuardSectionOneRightCard,
    WhoisGuardSectionOneRightCardTitle,
    WhoisGuardSectionOneRightCardBtn,
    WhoisGuardSectionOneRightCardButton,
    WhoisGuardSectionOneRightCardDesc,
    WhoisGuardSectionOneRightCardBottom,

    WhoisGuardSectionTwo, 
    WhoisGuardSectionTwoWrapper, 
    WhoisGuardSectionTwoWrapperTitle, 
    WhoisGuardSectionTwoWrapperDesc,
    WhoisGuardSectionTwoCardWrap, 
    WhoisGuardSectionTwoCard,
    WhoisGuardSectionTwoCardIcon, 
    WhoisGuardSectionTwoCardInner,
    WhoisGuardSectionTwoCardTitle, 
    WhoisGuardSectionTwoCardDesc,

    WhoisGuardSectionThree, 
    WhoisGuardSectionThreeWrap,
    WhoisGuardSectionThreeTitle, 
    WhoisGuardSectionThreeDesc,
    WhoisGuardSectionThreeWrapBtn, 
    WhoisGuardSectionThreeBtn,

    WhoisGuardFaqSection, 
    WhoisGuardFaqSectionWrap,
    WhoisGuardFaqSectionInfo, 
    WhoisGuardFaqSectionInfoTitle,
    WhoisGuardFaqInfoItem, 
    WhoisGuardFaqInfoItemQues,
    WhoisGuardFaqInfoItemAns, 
    WhoisGuardFaqLink,

    WhoisGuardDisclaimers,
    WhoisGuardDisclaimersTitle,
    WhoisGuardDisclaimersItems,
    WhoisGuardDisclaimersItem

} from './WhoisGuardElem';



const WhoisGuardContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <WhoisGuardMainContainer>
     <WhoisGuardWrapper>
     <WhoisGuardHeader> 
              <WhoisGuardHeaderLeft>
              <WhoisGuardHeaderTitle> WhoisGuard Privacy Protection</WhoisGuardHeaderTitle>
              <WhoisGuardHeaderDesc> WhoisGuard Privacy Protection is now free – forever! </WhoisGuardHeaderDesc>
              </WhoisGuardHeaderLeft>
              <WhoisGuardHeaderRight> 
               <WhoisGuardHeaderSelect>
                <WhoisGuardHeaderOptions> Free For Ever!</WhoisGuardHeaderOptions>
               </WhoisGuardHeaderSelect>
               <WhoisGuardHeaderBtn> Get Started </WhoisGuardHeaderBtn>
               <WhoisGuardHeaderExtra> 
                  <WhoisGuardExtraInfo> Secure Your Personal Info Online </WhoisGuardExtraInfo>
               </WhoisGuardHeaderExtra>
            </WhoisGuardHeaderRight>
          </WhoisGuardHeader>

          <WhoisGuardBody>
                <WhoisGuardSectionOne> 
                    <WhoisGuardSectionOneLeft>
                      <WhoisGuardSectionOneLeftTitleImage src={Whoisguard} />
                      <WhoisGuardSectionOneLeftTitle> WhoisGuard Privacy Protection is now free – forever! </WhoisGuardSectionOneLeftTitle>
                       <WhoisGuardSectionOneLeftWrapper>
                       <WhoisGuardSectionOneLeftWrap>
                         <WhoisGuardSectionOneLeftWrapDesc> WhoisGuard by HostthyWeb is a service that offers privacy protection for your domain, keeping your sensitive data safe. Because your data is as important to us as it is to you.
                        </WhoisGuardSectionOneLeftWrapDesc>
                         <WhoisGuardSectionOneLeftWrapDesc> When you register a domain, ICANN requires registrars to provide them with your contact information (such as name, email, address, and phone number). This is then added to the Whois database. This database lists the owners of every domain name online, and it can be searched by anyone on the Internet.
                        </WhoisGuardSectionOneLeftWrapDesc>
                         <WhoisGuardSectionOneLeftWrapDesc> WhoisGuard hides this information from spammers, marketing firms, and online fraudsters. Instead, the Whois database will display generic WhoisGuard contact information. It's the best global domain privacy option you'll find anywhere — guaranteed. Because at HostthyWeb, we care about your privacy protection.
                        </WhoisGuardSectionOneLeftWrapDesc>
                        </WhoisGuardSectionOneLeftWrap>
                       </WhoisGuardSectionOneLeftWrapper>
                    </WhoisGuardSectionOneLeft>

                    <WhoisGuardSectionOneRight> 
                     <WhoisGuardSectionOneRightCard> 
                        <WhoisGuardSectionOneRightCardTitle> Free </WhoisGuardSectionOneRightCardTitle>
                          <WhoisGuardSectionOneRightCardBtn>
                             <WhoisGuardSectionOneRightCardButton> Get Started</WhoisGuardSectionOneRightCardButton>
                         </WhoisGuardSectionOneRightCardBtn>
                     </WhoisGuardSectionOneRightCard>
                     <WhoisGuardSectionOneRightCardBottom>
                     <WhoisGuardSectionOneRightCardDesc> That's right. You read correctly — WhoisGuard is now 
                             FREE forever when you register a domain with us, including existing domains! 
                         </WhoisGuardSectionOneRightCardDesc>
                     </WhoisGuardSectionOneRightCardBottom>
                    </WhoisGuardSectionOneRight>
                </WhoisGuardSectionOne>

                <WhoisGuardSectionTwo>
                    <WhoisGuardSectionTwoWrapper>
                      <WhoisGuardSectionTwoWrapperTitle> Now WhoisGuard Privacy Protection is FREE Forever! </WhoisGuardSectionTwoWrapperTitle>
                       <WhoisGuardSectionTwoWrapperDesc>Your privacy will be safe forever with WhoisGuard.</WhoisGuardSectionTwoWrapperDesc>
                    </WhoisGuardSectionTwoWrapper>
                    <WhoisGuardSectionTwoCardWrap>
                        <WhoisGuardSectionTwoCard>    
                            <WhoisGuardSectionTwoCardIcon>
                                <BiFingerprint />
                            </WhoisGuardSectionTwoCardIcon>
                            <WhoisGuardSectionTwoCardInner> 
                            <WhoisGuardSectionTwoCardTitle> Contact Info Shield </WhoisGuardSectionTwoCardTitle>
                            <WhoisGuardSectionTwoCardDesc> The site seal offers visual proof of the security provided by your website’s SSL certificate. It’s so important, in fact, that it’s become the main reason many website owners and managers buy an SSL certificate as most web users know to look for it. Seals vary in appearance depending on the type of SSL certificate issued, but they all mean the same thing: your user’s data is protected. </WhoisGuardSectionTwoCardDesc>
                            </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>

                        <WhoisGuardSectionTwoCard> 
                          <WhoisGuardSectionTwoCardIcon>
                             <FaServer />
                            </WhoisGuardSectionTwoCardIcon>
                            <WhoisGuardSectionTwoCardInner>
                            <WhoisGuardSectionTwoCardTitle>  Spam Killer </WhoisGuardSectionTwoCardTitle>
                            <WhoisGuardSectionTwoCardDesc> HostthyWeb is known for providing best-in-class customer service thanks to our stellar support team. HostthyWeb support staffers are some of the most polite, helpful people in the business, with a wealth of knowledge about every product and service we offer. You can rest easy knowing that they’re available 24/7 to answer your questions and offer advice about your SSL certificate purchase. </WhoisGuardSectionTwoCardDesc>
                         </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>

                        <WhoisGuardSectionTwoCard> 
                            <WhoisGuardSectionTwoCardIcon>
                                <BiGift />
                            </WhoisGuardSectionTwoCardIcon>
                            <WhoisGuardSectionTwoCardInner>
                            <WhoisGuardSectionTwoCardTitle> Now Free Forever </WhoisGuardSectionTwoCardTitle>
                            <WhoisGuardSectionTwoCardDesc> Enjoy 20X faster storage with pure Solid State Drive (SSD) 
                                storage, designed to enhance performance over the traditional Hard Disk Drives (HDD) 
                                preferred by VPS competitors. The result? Significant improvements to your website's speed, 
                                performance, and loading times. 
                            </WhoisGuardSectionTwoCardDesc>
                         </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>

                        <WhoisGuardSectionTwoCard> 
                            <WhoisGuardSectionTwoCardIcon>
                                <FaCogs />
                            </WhoisGuardSectionTwoCardIcon>
                        <WhoisGuardSectionTwoCardInner>
                         <WhoisGuardSectionTwoCardTitle> Flexible Control </WhoisGuardSectionTwoCardTitle>
                             <WhoisGuardSectionTwoCardDesc> Update your settings any time you want. It's easy to enable and disable WhoisGuard, control how often forwarding email addresses will be refreshed, or modify your custom email preferences, all from within one simple control panel. </WhoisGuardSectionTwoCardDesc>
                            </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>

                        <WhoisGuardSectionTwoCard> 
                            <WhoisGuardSectionTwoCardIcon>
                                <FaRobot />
                            </WhoisGuardSectionTwoCardIcon>
                            <WhoisGuardSectionTwoCardInner> 
                            <WhoisGuardSectionTwoCardTitle> Prevent domain hijacking </WhoisGuardSectionTwoCardTitle>
                            <WhoisGuardSectionTwoCardDesc> Without privacy protection, you're leaving your domain (and your website) open to hackers. With your contact information exposed, you're providing clues that unscrupulous individuals can use to gain access to your account or transfer your domain to another registrar. </WhoisGuardSectionTwoCardDesc>
                         </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>

                        <WhoisGuardSectionTwoCard> 
                            <WhoisGuardSectionTwoCardIcon>
                                <FaFlag />
                            </WhoisGuardSectionTwoCardIcon>
                             <WhoisGuardSectionTwoCardInner>
                             <WhoisGuardSectionTwoCardTitle> Avoid fraud </WhoisGuardSectionTwoCardTitle>
                            <WhoisGuardSectionTwoCardDesc> A laid-back approach to privacy can result in your details being used by a fraudster to answer security questions and gain access to your private accounts. By blocking your details, you make it that much harder for someone to hack into your accounts. </WhoisGuardSectionTwoCardDesc>
                         </WhoisGuardSectionTwoCardInner>
                        </WhoisGuardSectionTwoCard>    
                    </WhoisGuardSectionTwoCardWrap>
                </WhoisGuardSectionTwo>
                
                <WhoisGuardSectionThree>
                 <WhoisGuardSectionThreeWrap>
                     <WhoisGuardSectionThreeTitle> Secure all your domains and subdomains 
                     </WhoisGuardSectionThreeTitle>
                      <WhoisGuardSectionThreeDesc> You should be able to count on your 
                          website security, without counting the cost. That’s why we offer 
                          you the best cheap SSL certificates in the industry. 
                          It’s all about providing the right SSL certificate 
                          price for your digital business or project. 
                          This is part of our overall commitment to online security and privacy. 
                          We will always support consumer rights in the digital world. 
                          It’s our mission to keep the Internet safe for everyone. 
                     </WhoisGuardSectionThreeDesc>
                       <WhoisGuardSectionThreeWrapBtn>
                           <WhoisGuardSectionThreeBtn> Secure Now</WhoisGuardSectionThreeBtn>
                       </WhoisGuardSectionThreeWrapBtn>
                 </WhoisGuardSectionThreeWrap>
                </WhoisGuardSectionThree>
                <WhoisGuardFaqSection>
                  <WhoisGuardFaqSectionWrap>
                   <WhoisGuardFaqSectionInfo>
                    <WhoisGuardFaqSectionInfoTitle>  Frequently Aksed Questions </WhoisGuardFaqSectionInfoTitle>
                     <WhoisGuardFaqInfoItem  onClick={toggle}> 
                      <WhoisGuardFaqInfoItemQues> What is WhoisGuard and why do I need it? <FaPlus style={{float: 'right'}} /> </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}> WhoisGuard is a privacy protection service from HostTHYweb. When you register a domain, ICANN requires the registrar to forward the contact information you provide them with, for inclusion in the Internet's Whois Database. WhoisGuard replaces this personal information with generic WhoisGuard contact information.
This protects your private information from being mined and used for other purposes, such as identity theft or unsolicited marketing. </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>

                     <WhoisGuardFaqInfoItem onClick={toggle} > 
                      <WhoisGuardFaqInfoItemQues> Is it really free forever? </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}> 
                       Yes! WhoisGuard is free for all eligible TLDs.
                       </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>
                     <WhoisGuardFaqInfoItem onClick={toggle} > 
                      <WhoisGuardFaqInfoItemQues> Can I get WhoisGuard with all domains? </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}>WhoisGuard is available for almost all 
                       domains HostTHYweb offers. Due to registry restrictions, WhoisGuard cannot be used with .ca, .ch, 
                       .cn, .co.uk, .com.au, .com.es, .com.ng .com.sg, .de, .es, .eu, .fr, .gg, .id, .in, .is, .li, .me.uk, .net.au, 
                       .nom.es, .nu, .nyc, .org.es, .org.au, .org.uk, .paris, .sg, .to, .uk, .us, .vote, .voto, .xn--3ds443g domains.  
                        <br />
                        <br />
                        <WhoisGuardFaqLink to="/"> Learn more TLDs </WhoisGuardFaqLink>
                     </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>
                     <WhoisGuardFaqInfoItem onClick={toggle} > 
                      <WhoisGuardFaqInfoItemQues> Can I disable WhoisGuard if I need to? </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}>
                       In case you want your contact information to be listed in public Whois for some reason, you can enable and disable 
                       Whoisguard as you wish using our control panel.  
                        <br />
                        <br />
                        <WhoisGuardFaqLink to="/"> Learn more cPanel </WhoisGuardFaqLink>
                     </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>
                     <WhoisGuardFaqInfoItem onClick={toggle} > 
                      <WhoisGuardFaqInfoItemQues> What about emails sent to the contact displayed in the Whois record? </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}>
                       Consider it handled. This service replaces your email address with a unique 
                       WhoisGuard email address. Your "xyz.protect@whoisguard.com" email address receives 
                       your email, filters it for spam and then forwards it on to an email address of your 
                       choice.
                     </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>
                     <WhoisGuardFaqInfoItem onClick={toggle} > 
                      <WhoisGuardFaqInfoItemQues> Is there an email auto-change option? </WhoisGuardFaqInfoItemQues>
                       <WhoisGuardFaqInfoItemAns isOpen={isOpen} toggle={toggle}>
                       Yes. As an additional security measure against spamming, your WhoisGuard email address 
                       can be configured to change automatically at regular intervals. This means that if your 
                       unique email address does end up on a marketing list, the details they have are only 
                       valid for a very short time.
                     </WhoisGuardFaqInfoItemAns>
                     </WhoisGuardFaqInfoItem>
                     </WhoisGuardFaqSectionInfo>

                     <WhoisGuardDisclaimers>
                    <WhoisGuardDisclaimersTitle>Disclaimers</WhoisGuardDisclaimersTitle>
                    <WhoisGuardDisclaimersItems> 
                      <WhoisGuardDisclaimersItem> WhoisGuard subscription is provided by WhoisGuard pursuant to its Services Agreement with HostTHYweb. Terms and conditions apply. Due to registry restrictions, WhoisGuard cannot be used with .ca, .ch, .cn, .co.uk, .com.au, .com.es, .com.sg, .de, .es, .eu, .fr, .gg, .id, .in, .is, .li, .me.uk, .net.au, .nom.es, .nu, .nyc, .org.es, .org.au, .org.uk, .paris, .sg, .to, .uk, .us, .vote, .voto, .xn--3ds443g domains. Please note that WhoisGuard subscription expiration is based on purchase date rather than activation date. </WhoisGuardDisclaimersItem>
                      <WhoisGuardDisclaimersItem> WhoisGuard subscriptions can be used on domains registered with HostthyWeb only.</WhoisGuardDisclaimersItem>
                      <WhoisGuardDisclaimersItem> But automatically-generated emails are blocked. </WhoisGuardDisclaimersItem>
                      <WhoisGuardDisclaimersItem> Privacy must be disabled. </WhoisGuardDisclaimersItem>
                     </WhoisGuardDisclaimersItems>
                   </WhoisGuardDisclaimers>
                     </WhoisGuardFaqSectionWrap>
                   </WhoisGuardFaqSection>
          </WhoisGuardBody>
     </WhoisGuardWrapper>
    </WhoisGuardMainContainer>
  )
}

export default WhoisGuardContainer