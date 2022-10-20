import React, { useState } from 'react';
import { BiGlasses, BiServer, BiLockAlt } from 'react-icons/bi';
import { FaCalendarCheck, FaCogs, FaGlobe, FaPlus, FaRocket, FaShare, FaSync } from 'react-icons/fa';
import {
    DomainSearchMainContainer,
    DomainSearchWrapper,
    DomainSearchHeader,
    DomainSearchHeaderLeft,
    DomainSearchHeaderTitle,
    DomainSearchHeaderDesc,
    DomainSearchHeaderRight,
    DomainSearchHeaderInput,
    DomainSearchHeaderBtn,
    DomainSearchHeaderBtnLink,
    DomainSearchHeaderExtra,
    DomainSearchExtraInfo,
    DomainSearchBody,
    DomainSearchBodySectionOne,
    DomainSearchBodySectionOneDown,
    DomainSearchBodySectionOneDownCard,
    DomainSearchBodySectionOneDownCardIconWrap,
    DomainSearchBodySectionOneDownCardWrap,
    DomainSearchBodySectionOneCardTitle,
    DomainSearchBodySectionOneCardDesc,

    DomainSearchBodySectionTwo,
    DomainSearchBodySectionTwoWrapLeft,
    DomainSearchBodySectionTwoWrapLeftCard,
    DomainSearchBodySectionTwoWrapLeftCardIconWrap,
    DomainSearchBodySectionTwoWrapLeftCardTitle,
    DomainSearchBodySectionTwoWrapLeftCardDesc,
    DomainSearchBodySectionTwoWrapRight,

    DomainSearchBodySectionThree,
    DomainSearchBodySectionThreeTopCardContainer,
    DomainSearchBodySectionThreeTopCard,
    DomainSearchBodySectionThreeCardTitle,
    DomainSearchBodySectionThreeCardDesc,
    DomainSearchBodySectionThreeBottomContainer,
    DomainSearchBodySectionThreeBottomTitleWrap,
    DomainSearchBodySectionThreeBottomTitle,
    DomainSearchBodySectionThreeBottomCard,
    DomainSearchBodySectionThreeBottomCardTitle,
    DomainSearchBodySectionThreeBottomCardDesc,
    DomainSearchBodySectionThreeBottomBtnWrap,
    DomainSearchBodySectionThreeBottomBtn,

    DomainSearchBodySectionFourWrap,
    DomainSearchBodySectionFourLeft,
    DomainSearchBodySectionFourRight,
    DomainSearchBodySectionFourLeftTitle,
    DomainSearchBodySectionFourLeftItem,
    DomainSearchBodySectionFourLeftItemQues,
    DomainSearchBodySectionFourLeftItemAns,
    DomainSearchBodySectionFourRightTitle,
    DomainSearchBodySectionFourRightItems,
    DomainSearchBodySectionFourRightItem,
    
    DomainSearchBodySectionOneTableContainer,
    DomainSearchBodySectionOneTable,
    DomainSearchBodySectionOneTableHeader,
    DomainSearchBodySectionOneTableRow,
    DomainSearchBodySectionOneTableTitle,
    DomainSearchBodySectionOneTableData,
    DomainSearchBodySectionOneTableButton,
    DomainSearchBodySectionOneTableButtonLink,

    DomainSearchBodySectionBottomBtnLink,
    DomainSearchBodySectionFourRightItemLink

} from './DomainSearchElem'

const DomainSearchContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const domainTableData = {
        id: 'domainTableData',
        title: ['TLD', 'Register', 'Renew', 'Transfer', 'Free Transfer', 'Buy'],
        dataExt: ['.com', '.net', 'org', '.com.ng', 'info', '.online' ],
        dataPrice: '$13.99',
        dataTranfer: ['Yes', 'No']
    }
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <DomainSearchMainContainer> 
      <DomainSearchWrapper>
          <DomainSearchHeader> 
              <DomainSearchHeaderLeft>
              <DomainSearchHeaderTitle> Search domain name</DomainSearchHeaderTitle>
              <DomainSearchHeaderDesc> Get your perfect domain name starting from 9.99$ for the first year and free domain privacy included! </DomainSearchHeaderDesc>
              </DomainSearchHeaderLeft>
              <DomainSearchHeaderRight> 
               <DomainSearchHeaderInput placeholder='Search Dream Domain' />
               <DomainSearchHeaderBtn><DomainSearchHeaderBtnLink to="/cart.php?a=add&domain=register"> Search Now </DomainSearchHeaderBtnLink></DomainSearchHeaderBtn>
               <DomainSearchHeaderExtra> 
                  <DomainSearchExtraInfo>.com .net .org .de .xyz .info </DomainSearchExtraInfo>
               </DomainSearchHeaderExtra>
            </DomainSearchHeaderRight>
          </DomainSearchHeader>
          <DomainSearchBody>
              <DomainSearchBodySectionOne>
                <DomainSearchBodySectionOneDown>
                    <DomainSearchBodySectionOneDownCard>
                      <DomainSearchBodySectionOneDownCardIconWrap> 
                      <BiGlasses fontSize={'40px'} />
                      </DomainSearchBodySectionOneDownCardIconWrap>
                      <DomainSearchBodySectionOneDownCardWrap> 
                       <DomainSearchBodySectionOneCardTitle> Search Domain Name</DomainSearchBodySectionOneCardTitle>
                       <DomainSearchBodySectionOneCardDesc> To pick a domain name that suit your brand, Type your domain in the search bar above to see if it meets our basic registeration / transfer requirements.</DomainSearchBodySectionOneCardDesc>
                       </DomainSearchBodySectionOneDownCardWrap>
                    </DomainSearchBodySectionOneDownCard>

                    <DomainSearchBodySectionOneDownCard>
                    <DomainSearchBodySectionOneDownCardIconWrap>
                        <BiServer fontSize={'40px'} />
                    </DomainSearchBodySectionOneDownCardIconWrap>
                      <DomainSearchBodySectionOneDownCardWrap>
                       <DomainSearchBodySectionOneCardTitle> Check it’s available </DomainSearchBodySectionOneCardTitle>
                       <DomainSearchBodySectionOneCardDesc> Is your dream domain name taken? To find out follow our easy instructions on how to register / transfer a domain name.</DomainSearchBodySectionOneCardDesc>
                      </DomainSearchBodySectionOneDownCardWrap>
                    </DomainSearchBodySectionOneDownCard>

                    <DomainSearchBodySectionOneDownCard>
                    <DomainSearchBodySectionOneDownCardIconWrap>
                      <BiLockAlt fontSize={'40px'} />
                      </DomainSearchBodySectionOneDownCardIconWrap>
                      <DomainSearchBodySectionOneDownCardWrap>
                       <DomainSearchBodySectionOneCardTitle> Lock it down </DomainSearchBodySectionOneCardTitle>
                       <DomainSearchBodySectionOneCardDesc> Register your domain and benefit from affordable, industry-leading products.</DomainSearchBodySectionOneCardDesc>
                       </DomainSearchBodySectionOneDownCardWrap>
                    </DomainSearchBodySectionOneDownCard>
                </DomainSearchBodySectionOneDown>

                <DomainSearchBodySectionOneTableContainer>
                    <DomainSearchBodySectionOneTable>
                        <DomainSearchBodySectionOneTableHeader>
                            <DomainSearchBodySectionOneTableRow>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[0]}</DomainSearchBodySectionOneTableTitle>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[1]}</DomainSearchBodySectionOneTableTitle>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[2]}</DomainSearchBodySectionOneTableTitle>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[3]}</DomainSearchBodySectionOneTableTitle>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[4]}</DomainSearchBodySectionOneTableTitle>
                                <DomainSearchBodySectionOneTableTitle>{domainTableData.title[5]}</DomainSearchBodySectionOneTableTitle>
                            </DomainSearchBodySectionOneTableRow>
                        </DomainSearchBodySectionOneTableHeader>
                        <DomainSearchBodySectionOneTableRow>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[0]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[0]}</DomainSearchBodySectionOneTableData>                        
                            <DomainSearchBodySectionOneTableData><DomainSearchBodySectionOneTableButton> <DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton></DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                        
                        <DomainSearchBodySectionOneTableRow>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[1]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[0]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableButton><DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton></DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                        <DomainSearchBodySectionOneTableRow>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[2]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[0]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableButton><DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton>
                            </DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                        <DomainSearchBodySectionOneTableRow>
                           <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[3]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[1]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData><DomainSearchBodySectionOneTableButton><DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton></DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                        <DomainSearchBodySectionOneTableRow>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[4]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[0]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData><DomainSearchBodySectionOneTableButton><DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton></DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                        <DomainSearchBodySectionOneTableRow>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataExt[5]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataPrice}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData>{domainTableData.dataTranfer[1]}</DomainSearchBodySectionOneTableData>
                            <DomainSearchBodySectionOneTableData><DomainSearchBodySectionOneTableButton><DomainSearchBodySectionOneTableButtonLink to="/cart.php?a=add&domain=register">Check Availability <FaShare /></DomainSearchBodySectionOneTableButtonLink></DomainSearchBodySectionOneTableButton></DomainSearchBodySectionOneTableData>
                        </DomainSearchBodySectionOneTableRow>
                    </DomainSearchBodySectionOneTable>
                </DomainSearchBodySectionOneTableContainer>

              </DomainSearchBodySectionOne>
              <DomainSearchBodySectionTwo>
                    <DomainSearchBodySectionTwoWrapLeft>
                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaSync fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>

                       <DomainSearchBodySectionTwoWrapLeftCardTitle> Everything its place </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> If you manage multiple domains, having them centralized can simplify your life. We make the process easy so you don’t have to stress.</DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>

                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaRocket fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                       <DomainSearchBodySectionTwoWrapLeftCardTitle> Anyone can do it </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> You don’t need to be a technical whiz to get started. Our process is as easy as possible so you can be up and running quickly. </DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>

                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaCalendarCheck fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                       <DomainSearchBodySectionTwoWrapLeftCardTitle> Always up to date </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> We monitor your domains in real time to make sure your sites are always up and running. </DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>
                    
                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaCogs fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                       <DomainSearchBodySectionTwoWrapLeftCardTitle> cPanel made easy </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> Subdomains? Forwarding? We can do all that and more. Plus, our domain management tools are straightforward for everyone.</DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>

                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaGlobe fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                       <DomainSearchBodySectionTwoWrapLeftCardTitle> Go worldwide </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> You’re not limited to .com domains here. Choose from a wide variety of domain names in multiple languages and extensions. </DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>
                    
                    <DomainSearchBodySectionTwoWrapLeftCard>
                    <DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                        <FaSync fontSize={'30px'} />
                    </DomainSearchBodySectionTwoWrapLeftCardIconWrap>
                       <DomainSearchBodySectionTwoWrapLeftCardTitle> Buy in bulk </DomainSearchBodySectionTwoWrapLeftCardTitle>
                       <DomainSearchBodySectionTwoWrapLeftCardDesc> Why pick up just one domain? Save up to 31% when you register or transfer six or more .com domains at once. </DomainSearchBodySectionTwoWrapLeftCardDesc>
                    </DomainSearchBodySectionTwoWrapLeftCard>
                    </DomainSearchBodySectionTwoWrapLeft>

                    <DomainSearchBodySectionTwoWrapRight>

                    </DomainSearchBodySectionTwoWrapRight>
              </DomainSearchBodySectionTwo>

              <DomainSearchBodySectionThree>
                <DomainSearchBodySectionThreeTopCardContainer> 
                    <DomainSearchBodySectionThreeTopCard>
                         <DomainSearchBodySectionThreeCardTitle> It’s automatic </DomainSearchBodySectionThreeCardTitle>
                         <DomainSearchBodySectionThreeCardDesc> Our transfer process is automated, fast and risk-free. And that means that moving your domain to us happens mostly in the background, leaving you with more time to work on your next big thing. </DomainSearchBodySectionThreeCardDesc>
                    </DomainSearchBodySectionThreeTopCard>

                    <DomainSearchBodySectionThreeTopCard>
                         <DomainSearchBodySectionThreeCardTitle> Backorder your domain </DomainSearchBodySectionThreeCardTitle>
                         <DomainSearchBodySectionThreeCardDesc> If someone else has already registered your ideal domain, there’s still a chance you can get it in the future. Sign up to backorder the domain you want, and soon you could have it in your possession. </DomainSearchBodySectionThreeCardDesc>
                    </DomainSearchBodySectionThreeTopCard>

                    <DomainSearchBodySectionThreeTopCard>
                         <DomainSearchBodySectionThreeCardTitle> Auctions on demand</DomainSearchBodySectionThreeCardTitle>
                         <DomainSearchBodySectionThreeCardDesc> Ever wonder what happens to expired domains? They go up for auction, which means you get a chance to grab a great, previously-owned name. Visit out Domain Auctions site to find out more. </DomainSearchBodySectionThreeCardDesc>
                    </DomainSearchBodySectionThreeTopCard>
                </DomainSearchBodySectionThreeTopCardContainer>
                <DomainSearchBodySectionThreeBottomTitleWrap>
                        <DomainSearchBodySectionThreeBottomTitle> Why Choose HostTHYweb </DomainSearchBodySectionThreeBottomTitle>
                    </DomainSearchBodySectionThreeBottomTitleWrap>
                <DomainSearchBodySectionThreeBottomContainer>
                  <DomainSearchBodySectionThreeBottomCard>
                    
                      <DomainSearchBodySectionThreeBottomCardTitle> PRIVACY AND SECURITY </DomainSearchBodySectionThreeBottomCardTitle>
                      <DomainSearchBodySectionThreeBottomCardDesc>Your online security and privacy come first at Hostthyweb, and we will always support the rights of individuals and consumers online. It’s our mission to keep the Internet open, free, and safe for everyone.</DomainSearchBodySectionThreeBottomCardDesc>
                      <DomainSearchBodySectionThreeBottomBtnWrap>
                      <DomainSearchBodySectionThreeBottomBtn> <DomainSearchBodySectionBottomBtnLink to="/security">Browse All</DomainSearchBodySectionBottomBtnLink> </DomainSearchBodySectionThreeBottomBtn>
                      <DomainSearchBodySectionThreeBottomBtn> <DomainSearchBodySectionBottomBtnLink to="/register.php"> Try Us </DomainSearchBodySectionBottomBtnLink></DomainSearchBodySectionThreeBottomBtn>
                  </DomainSearchBodySectionThreeBottomBtnWrap>
                  </DomainSearchBodySectionThreeBottomCard>
                  <DomainSearchBodySectionThreeBottomCard style={{background: '#7fb701', color: '#fff'}}>
                  <DomainSearchBodySectionThreeBottomCardTitle> YOUR BUSINESS ONLINE</DomainSearchBodySectionThreeBottomCardTitle>
                  <DomainSearchBodySectionThreeBottomCardDesc>Boost your business with industry-premium products and services, at prices that won't break your budget. If it doesn’t provide you with a better Internet experience, we simply don’t offer it.</DomainSearchBodySectionThreeBottomCardDesc>
                  <DomainSearchBodySectionThreeBottomBtnWrap>
                      <DomainSearchBodySectionThreeBottomBtn>  <DomainSearchBodySectionBottomBtnLink to="/cart.php">  Search Product </DomainSearchBodySectionBottomBtnLink></DomainSearchBodySectionThreeBottomBtn>
                      <DomainSearchBodySectionThreeBottomBtn>  <DomainSearchBodySectionBottomBtnLink to="/register.php"> Try Us </DomainSearchBodySectionBottomBtnLink></DomainSearchBodySectionThreeBottomBtn>
                  </DomainSearchBodySectionThreeBottomBtnWrap>
                  </DomainSearchBodySectionThreeBottomCard>

                  <DomainSearchBodySectionThreeBottomCard>
                      <DomainSearchBodySectionThreeBottomCardTitle> CUSTOMER SERVICE</DomainSearchBodySectionThreeBottomCardTitle>
                      <DomainSearchBodySectionThreeBottomCardDesc>You are covered by a Support Team that's renowned for being one of the most knowledgeable, friendly, and professional in the business. Real people are ready to assist you with any issue, any time, 24/7.</DomainSearchBodySectionThreeBottomCardDesc>
                      <DomainSearchBodySectionThreeBottomBtnWrap>
                      <DomainSearchBodySectionThreeBottomBtn> <DomainSearchBodySectionBottomBtnLink to="/submitticket.php"> Open Ticket </DomainSearchBodySectionBottomBtnLink></DomainSearchBodySectionThreeBottomBtn>
                      <DomainSearchBodySectionThreeBottomBtn> <DomainSearchBodySectionBottomBtnLink to="/domain-name-search"> Live Chat </DomainSearchBodySectionBottomBtnLink></DomainSearchBodySectionThreeBottomBtn>
                  </DomainSearchBodySectionThreeBottomBtnWrap>
                  </DomainSearchBodySectionThreeBottomCard>
                </DomainSearchBodySectionThreeBottomContainer>
              </DomainSearchBodySectionThree>


                    <DomainSearchBodySectionFourWrap>
                     <DomainSearchBodySectionFourLeft>
                      <DomainSearchBodySectionFourLeftTitle>  Domain Search FAQ </DomainSearchBodySectionFourLeftTitle>
                       <DomainSearchBodySectionFourLeftItem  onClick={toggle}> 
                        <DomainSearchBodySectionFourLeftItemQues> Why are domain names important? <FaPlus style={{float: 'right'}} /> </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> A domain name is the foundation of your website. It’s how your website visitors navigate to your site, and it plays a role in how people discover you online. It’s often the first impression that potential visitors get of you and your website as well—so registering the best domain name possible is important. </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                       <DomainSearchBodySectionFourLeftItem onClick={toggle} > 
                        <DomainSearchBodySectionFourLeftItemQues> What can I do with my domain name? </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> Domain names can be used in a number of ways. Direct visitors to your website’s home page or use complementary domains to send them to specific areas of your website ( e.g. yourcompany.jobs for a careers page). Or, forward a custom domain to an existing social media account, like your Twitter profile or Periscope channel. With a domain name you can even set up custom email addresses like <span style={{color: '#de3723'}}>yourname@yoursite.social,</span> which can be used to conduct business or communicate with your followers.  </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                       <DomainSearchBodySectionFourLeftItem onClick={toggle} > 
                        <DomainSearchBodySectionFourLeftItemQues> How do I know if a domain name is available? </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> There are couple of ways to see if a domain you want is available. First, simply type the URL into Hostthyweb.com’s search—we’ll tell you if the domain can be registered or not. </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                       <DomainSearchBodySectionFourLeftItem onClick={toggle}> 
                        <DomainSearchBodySectionFourLeftItemQues> How long will the domain transfer take? </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> Domain transfers can take anywhere from 30 minutes to 6 days to complete. The exact time-frame depends on the domain’s TLD and the time required for your current registrar to complete the process. 
                             If you’re looking to switch registrars for any reason, HostTHYweb is the best place to transfer a domain. </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                       <DomainSearchBodySectionFourLeftItem onClick={toggle}> 
                        <DomainSearchBodySectionFourLeftItemQues>Will I lose the remaining time I have with my current registrar? </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> If we are talking about generic TLDs (such as .com, .info, .agency), the remaining time that you have with your current registrar will not be lost, it gets carried over. Plus, your domain will be renewed for one year as part of the transfer.
                        If you renew your domain name after the domain has expired, you will need to wait 45 days after the expiration date before you can transfer. Otherwise, you may lose the renewal year that you paid for with the previous registrar.
                        When it comes to country-code extensions (.de, .uk, .es, etc.), each Registry may set its own rules. Find out if your domain is eligible for transfer. </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                       <DomainSearchBodySectionFourLeftItem onClick={toggle}> 
                        <DomainSearchBodySectionFourLeftItemQues> Can my domain be renewed for more than 1 year during transfer? </DomainSearchBodySectionFourLeftItemQues>
                         <DomainSearchBodySectionFourLeftItemAns isOpen={isOpen} toggle={toggle}> When you transfer your domain, the remaining time you had left with your old registrar is automatically included. The one year you have registered for, is added on top. Extra renewals can be added on after you have transferred. </DomainSearchBodySectionFourLeftItemAns>
                       </DomainSearchBodySectionFourLeftItem>
                     </DomainSearchBodySectionFourLeft>
                     <DomainSearchBodySectionFourRight>
                      <DomainSearchBodySectionFourRightTitle>Disclaimers</DomainSearchBodySectionFourRightTitle>
                      <DomainSearchBodySectionFourRightItems> 
                        <DomainSearchBodySectionFourRightItem> ICANN (the Internet Corporation for Assigned Names and Numbers) charges a mandatory annual fee of <DomainSearchBodySectionFourRightItem> <DomainSearchBodySectionFourRightItemLink to="/domain-name-search"> $0.18 </DomainSearchBodySectionFourRightItemLink></DomainSearchBodySectionFourRightItem> for each domain registration, renewal or transfer. This will be added to the listed price for some domains, at the time of purchase. </DomainSearchBodySectionFourRightItem>
                        <DomainSearchBodySectionFourRightItem> After registration completion, you may receive an PositiveSSL Certificate offer (valid for the first year only) with every new product purchase except domain renewals, or purchase or renewals of any other SSL certificates. <DomainSearchBodySectionFourRightItemLink to="/Legal">  Further restrictions may apply. </DomainSearchBodySectionFourRightItemLink> </DomainSearchBodySectionFourRightItem>
                        <DomainSearchBodySectionFourRightItem> DNS features mentioned are applicable only if your domain uses <DomainSearchBodySectionFourRightItemLink to="/domain-name-search"> HostthyWeb DNS service. </DomainSearchBodySectionFourRightItemLink></DomainSearchBodySectionFourRightItem>
                        <DomainSearchBodySectionFourRightItem> Note that premium domain names are not eligible for the promotion and prices may differ to those shown. </DomainSearchBodySectionFourRightItem>
                        <DomainSearchBodySectionFourRightItem> After transfer completion, the renewal year will be added to eligible Top Level Domains (TLDs) only. </DomainSearchBodySectionFourRightItem>
                        <DomainSearchBodySectionFourRightItem> You'll receive a WhoisGuard subscription absolutely FREE with every eligible domain registration, renewal, or transfer. WhoisGuard subscription expiration is based on purchase date rather than activation date. WhoisGuard provides subscription pursuant to its <DomainSearchBodySectionFourRightItemLink to="/Legal">Services Agreement</DomainSearchBodySectionFourRightItemLink> with HostthyWeb. Terms and conditions apply. </DomainSearchBodySectionFourRightItem>
                       </DomainSearchBodySectionFourRightItems>
                     </DomainSearchBodySectionFourRight>
                    </DomainSearchBodySectionFourWrap>


          </DomainSearchBody>
      </DomainSearchWrapper>
    </DomainSearchMainContainer>
  )
}

export default DomainSearchContainer