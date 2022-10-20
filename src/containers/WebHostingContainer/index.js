import React, { useState } from 'react';
import { BiGlasses, BiMinus, BiTimeFive, BiWebcam } from 'react-icons/bi';
import { FaCpanel, FaPlus, FaRibbon } from 'react-icons/fa';

import {
    WebHostingBodyMainContainer,
    WebHostingBodyWrapper,
    WebHostingBodyHeader,
    WebHostingBodyHeaderLeft,
    WebHostingBodyHeaderTitle,
    WebHostingBodyHeaderDesc,

    WebHostingBodyHeaderRight, 
    WebHostingBodyHeaderSelect, 
    WebHostingBodyHeaderOptions, 
    WebHostingBodyHeaderBtn,
    WebHostingBodyHeaderBtnLink, 
    WebHostingBodyHeaderExtra,
    WebHostingBodyExtraInfo,

    WebHostingBody,

    WebHostingBodySectionOneTitle,
    WebHostingBodySectionOneDesc,

    WebHostingBodySectionOneDown,
    WebHostingBodySectionOneDownCard,
    WebHostingBodySectionOneDownCardIconWrap,
    WebHostingBodySectionOneDownCardWrap,
    WebHostingBodySectionOneCardTitle,
    WebHostingBodySectionOneCardDesc,

    WebHostingBodySectionOneTableContainer,
    WebHostingBodySectionOneTable,
    WebHostingBodySectionOneTableHeader,
    WebHostingBodySectionOneTableRow,
    WebHostingBodySectionOneTableTitle,
    WebHostingBodySectionOneTableData,
    WebHostingBodySectionOneTableButton,
    WebHostingBodySectionOneTableButtonLink,

    WebHostingBodySectionTwo,
    WebHostingBodySectionTwoContainer,
    WebHostingBodySectionTwoTopCard,
    WebhostingBodySectionTwoTopCardIcon,
    WebHostingBodySectionTwoTopCardTitle,
    WebHostingBodySectionTwoTopCardDesc,

    WebHostingBodySectionTwoBottomTitleWrap,
    WebHostingBodySectionTwoBottomTitle,
    WebHostingBodySectionTwoBottomContainer,
    WebHostingBodySectionTwoBottomCard,
    WebHostingBodySectionTwoBottomCardTitle,
    WebHostingBodySectionTwoBottomCardDesc,
    WebHostingBodySectionTwoBottomBtnWrap,
    WebHostingBodySectionTwoBottomBtn,
    WebHostingBodySectionTwoBottomBtnLink,

    WebHostingBodyFaqSection,
    WebHostingBodyFaqWrap,
    WebHostingBodyFaqInfo,
    WebHostingBodyFaqInfoTitle,
    WebHostingBodyFaqInfoItem,
    WebHostingBodyFaqInfoItemQues,
    WebHostingBodyFaqInfoItemAns,
    WebHostingFaqLink,

    WebHostingBodyDisclaimers,
    WebHostingBodyDisclaimersTitle,
    WebHostingBodyDisclaimersItems,
    WebHostingBodyDisclaimersItem,
 
} from './WebHostingElem';

const WebHostingContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const hostingDataInfo =  {
        id: 'hostingDataInfo',
        title: 
        [
        'Features', 
        'Freebies', 
        'Steller', 
        'Steller Plus', 
        'Steller Advance'
      ],
        dataSpec: [
        'Disk Space', 
        'Bandwidth', 
        'Uptime', 
        'Subdomains', 
        'Addon Domains', 
        'MySQL Database',
        'Cloud Storage',
        'cPanel (Control Panel)',
        'Website Builder',
        'cPanel 2FA',
        'Free Apps',
        'CloudFlare & SEO Tools',
        'Instant Setup',
        'Free SSL Certificate',
        'Ticket Support',
        'Per Month',
        'Per Year',
        'Data Center',
        'Gateway'
      ],

      dataSpecBenefit: {
        diskSpace: ['100mb', '1GB', '5GB', '20GB'],
        bandwidth: ['5GB Monthly', '20GB Monthly', 'Unlimited'],
        uptime: '99.9%',
        subdomains: 'Unlimited',
        addonDomains: ['1/3', 'Unlimited'],
        database: ['1/3', '1/20',	'Unlimited'],
        cloudStorage: ['-', 'Yes'],
        cPanel: 'Full Access',
        websiteBuilder: 'Yes',
        cPanel2FA: 'Optional',
        freeApps: '100+ apps with 1 - click install',	
        cloudFlare: 'Yes',
        instantSetup: 'Yes',
        sslcertificate: ['No', 'Yes'],
        ticketSupport: ['Yes', 'Unlimited'],
        monthlyServices: ['Free', '$4.24', '$8.48',	'$14.99'],
        yearlyServices:  ['-', '$48.00',	'$96.00',	'$168.00'],
        dataCenter: 'US Datacenter',
        gateway: 'Order Now'
      },
    }

  return (
    <WebHostingBodyMainContainer> 
      <WebHostingBodyWrapper>
        <WebHostingBodyHeader> 
            <WebHostingBodyHeaderLeft>
            <WebHostingBodyHeaderTitle> Start your project with our shared hosting plans </WebHostingBodyHeaderTitle>
            <WebHostingBodyHeaderDesc> Here every compartment is fully redundant, from the power supply to the network card, 
              featuring high-speed SAN that delivers 100% uptime, unparalleled performance, and reliability. 
            </WebHostingBodyHeaderDesc>
            </WebHostingBodyHeaderLeft>
            <WebHostingBodyHeaderRight> 
               <WebHostingBodyHeaderSelect> 
                <WebHostingBodyHeaderOptions> Select Preferred </WebHostingBodyHeaderOptions>
                <WebHostingBodyHeaderOptions> {hostingDataInfo.title[1]} → {hostingDataInfo.dataSpecBenefit.monthlyServices[0]}</WebHostingBodyHeaderOptions>
                <WebHostingBodyHeaderOptions> {hostingDataInfo.title[2]} → {hostingDataInfo.dataSpecBenefit.monthlyServices[1]}</WebHostingBodyHeaderOptions>
                <WebHostingBodyHeaderOptions> {hostingDataInfo.title[3]} → {hostingDataInfo.dataSpecBenefit.monthlyServices[2]} </WebHostingBodyHeaderOptions>
                <WebHostingBodyHeaderOptions> {hostingDataInfo.title[4]} → {hostingDataInfo.dataSpecBenefit.monthlyServices[3]}</WebHostingBodyHeaderOptions>
               </WebHostingBodyHeaderSelect>
               <WebHostingBodyHeaderBtn> <WebHostingBodyHeaderBtnLink to="/cart.php">Start Now</WebHostingBodyHeaderBtnLink> </WebHostingBodyHeaderBtn>
               <WebHostingBodyHeaderExtra> 
                  <WebHostingBodyExtraInfo> Select Hosting Package </WebHostingBodyExtraInfo>
               </WebHostingBodyHeaderExtra>
            </WebHostingBodyHeaderRight>
        </WebHostingBodyHeader>
        <WebHostingBody> 
            
            <WebHostingBodySectionOneDown>
           <WebHostingBodySectionOneDownCard>
                <WebHostingBodySectionOneDownCardIconWrap> 
                   <BiGlasses fontSize={'40px'} />
                      </WebHostingBodySectionOneDownCardIconWrap>
                      <WebHostingBodySectionOneDownCardWrap> 
                       <WebHostingBodySectionOneCardTitle> Choose Preferred Package</WebHostingBodySectionOneCardTitle>
                       <WebHostingBodySectionOneCardDesc> To pick a Package name that suit your needs, select your preferences in the menu bar above to see if it is available for you to get started.</WebHostingBodySectionOneCardDesc>
                       </WebHostingBodySectionOneDownCardWrap>
                    </WebHostingBodySectionOneDownCard>

                    <WebHostingBodySectionOneDownCard>
                    <WebHostingBodySectionOneDownCardIconWrap>
                        <BiTimeFive fontSize={'40px'} />
                    </WebHostingBodySectionOneDownCardIconWrap>
                      <WebHostingBodySectionOneDownCardWrap>
                       <WebHostingBodySectionOneCardTitle> Choose Duration </WebHostingBodySectionOneCardTitle>
                       <WebHostingBodySectionOneCardDesc> Is your account approved and you are ready to follow our easy instructions on how to host a website for free or commercial.</WebHostingBodySectionOneCardDesc>
                      </WebHostingBodySectionOneDownCardWrap>
                    </WebHostingBodySectionOneDownCard>

                    <WebHostingBodySectionOneDownCard>
                    <WebHostingBodySectionOneDownCardIconWrap>
                      <BiWebcam fontSize={'40px'} />
                      </WebHostingBodySectionOneDownCardIconWrap>
                      <WebHostingBodySectionOneDownCardWrap>
                       <WebHostingBodySectionOneCardTitle> Get Started </WebHostingBodySectionOneCardTitle>
                       <WebHostingBodySectionOneCardDesc> Feel Free to use, All you need to build your online presence</WebHostingBodySectionOneCardDesc>
                       </WebHostingBodySectionOneDownCardWrap>
                    </WebHostingBodySectionOneDownCard>
                </WebHostingBodySectionOneDown>
                
                <WebHostingBodySectionOneTableContainer>
                <WebHostingBodySectionOneTitle> Our Shared Hosting Pricing Tables</WebHostingBodySectionOneTitle>
              <WebHostingBodySectionOneDesc> Before you choose your preferences</WebHostingBodySectionOneDesc>
                   <br />
                    <WebHostingBodySectionOneTable>
                        <WebHostingBodySectionOneTableHeader> 
                            <WebHostingBodySectionOneTableRow>
                                <WebHostingBodySectionOneTableTitle> {hostingDataInfo.title[0]}</WebHostingBodySectionOneTableTitle>
                                <WebHostingBodySectionOneTableTitle>{hostingDataInfo.title[1]} </WebHostingBodySectionOneTableTitle>
                                <WebHostingBodySectionOneTableTitle>  {hostingDataInfo.title[2]}</WebHostingBodySectionOneTableTitle>
                                <WebHostingBodySectionOneTableTitle> {hostingDataInfo.title[3]}</WebHostingBodySectionOneTableTitle>
                                <WebHostingBodySectionOneTableTitle> {hostingDataInfo.title[4]} </WebHostingBodySectionOneTableTitle>
                            </WebHostingBodySectionOneTableRow>
                        </WebHostingBodySectionOneTableHeader>
                        
                            <WebHostingBodySectionOneTableRow>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[0]}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.diskSpace[0]}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.diskSpace[1]}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.diskSpace[2]}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.diskSpace[3]}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[1]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.bandwidth[0]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.bandwidth[0]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.bandwidth[1]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.bandwidth[2]} </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[2]}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.uptime}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.uptime}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.uptime}</WebHostingBodySectionOneTableData>
                                <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.uptime}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[3]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.subdomains}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.subdomains}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.subdomains}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.subdomains}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[4]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.addonDomains[0]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.addonDomains[1]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.addonDomains[1]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.addonDomains[1]}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[5]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.database[0]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.database[0]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.database[1]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.database[2]}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                             <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[6]}</WebHostingBodySectionOneTableData>
                             <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cloudStorage[0]} </WebHostingBodySectionOneTableData>
                             <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cloudStorage[0]} </WebHostingBodySectionOneTableData>
                             <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cloudStorage[0]} </WebHostingBodySectionOneTableData>
                             <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cloudStorage[1]} </WebHostingBodySectionOneTableData>
                                
                            </WebHostingBodySectionOneTableRow>
                             
                            <WebHostingBodySectionOneTableRow> 
                              <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[7]}</WebHostingBodySectionOneTableData>     
                              <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel}</WebHostingBodySectionOneTableData>     
                              <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel}</WebHostingBodySectionOneTableData>     
                              <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel}</WebHostingBodySectionOneTableData>     
                              <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel}</WebHostingBodySectionOneTableData>     
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[8]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.websiteBuilder}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.websiteBuilder}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.websiteBuilder}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.websiteBuilder}</WebHostingBodySectionOneTableData>
                                
                            </WebHostingBodySectionOneTableRow>
                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[9]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel2FA}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel2FA}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel2FA}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.cPanel2FA}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[10]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.freeApps}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.freeApps}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.freeApps}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.freeApps}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData> {hostingDataInfo.dataSpec[11]}</WebHostingBodySectionOneTableData> 
                            <WebHostingBodySectionOneTableData> {hostingDataInfo.dataSpecBenefit.cloudFlare} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> {hostingDataInfo.dataSpecBenefit.cloudFlare} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> {hostingDataInfo.dataSpecBenefit.cloudFlare} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> {hostingDataInfo.dataSpecBenefit.cloudFlare} </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[12]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.instantSetup} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.instantSetup} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.instantSetup} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.instantSetup} </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[13]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.sslcertificate[0]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.sslcertificate[0]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.sslcertificate[1]}</WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.sslcertificate[1]}</WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[14]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.ticketSupport[0]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.ticketSupport[1]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.ticketSupport[1]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.ticketSupport[1]} </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[15]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.monthlyServices[0]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.monthlyServices[1]}  </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.monthlyServices[2]}  </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.monthlyServices[3]}  </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[16]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> <BiMinus /> </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.yearlyServices[1]}  </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.yearlyServices[2]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.yearlyServices[3]} </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[17]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.dataCenter} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.dataCenter} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.dataCenter}  </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpecBenefit.dataCenter}  </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>

                            <WebHostingBodySectionOneTableRow> 
                            <WebHostingBodySectionOneTableData>{hostingDataInfo.dataSpec[18]} </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData>  <WebHostingBodySectionOneTableButton><WebHostingBodySectionOneTableButtonLink to="/cart.php">{hostingDataInfo.dataSpecBenefit.gateway} </WebHostingBodySectionOneTableButtonLink> </WebHostingBodySectionOneTableButton> </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> <WebHostingBodySectionOneTableButton> <WebHostingBodySectionOneTableButtonLink to="/cart.php">{hostingDataInfo.dataSpecBenefit.gateway} </WebHostingBodySectionOneTableButtonLink> </WebHostingBodySectionOneTableButton></WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> <WebHostingBodySectionOneTableButton> <WebHostingBodySectionOneTableButtonLink to="/cart.php">{hostingDataInfo.dataSpecBenefit.gateway} </WebHostingBodySectionOneTableButtonLink>  </WebHostingBodySectionOneTableButton> </WebHostingBodySectionOneTableData>
                            <WebHostingBodySectionOneTableData> <WebHostingBodySectionOneTableButton> <WebHostingBodySectionOneTableButtonLink to="/cart.php">{hostingDataInfo.dataSpecBenefit.gateway} </WebHostingBodySectionOneTableButtonLink>  </WebHostingBodySectionOneTableButton> </WebHostingBodySectionOneTableData>
                            </WebHostingBodySectionOneTableRow>
                    </WebHostingBodySectionOneTable>
                </WebHostingBodySectionOneTableContainer>

            <WebHostingBodySectionTwo>
                <WebHostingBodySectionTwoContainer> 
                    <WebHostingBodySectionTwoTopCard>
                      <WebhostingBodySectionTwoTopCardIcon> <FaCpanel style={{color: '7fb701'}} fontSize={'80px'} /> </WebhostingBodySectionTwoTopCardIcon>
                         <WebHostingBodySectionTwoTopCardTitle> WordPress &amp; cPanel </WebHostingBodySectionTwoTopCardTitle>
                         <WebHostingBodySectionTwoTopCardDesc> Explore WordPress in seconds with the Softaculous app installer, which makes updating and maintaining your open-source applications a breeze. cPanel gives you full website control via your browser. </WebHostingBodySectionTwoTopCardDesc>
                    </WebHostingBodySectionTwoTopCard>

                    <WebHostingBodySectionTwoTopCard>
                    <WebhostingBodySectionTwoTopCardIcon> <FaRibbon style={{color: '7fb701'}} fontSize={'40px'} /> </WebhostingBodySectionTwoTopCardIcon>
                         <WebHostingBodySectionTwoTopCardTitle> True Stability </WebHostingBodySectionTwoTopCardTitle>
                         <WebHostingBodySectionTwoTopCardDesc> Evenly-distributed server loads mean you won’t notice a thing if a virtual neighbor acts up. 100% uptime, and efficient firewalls, we consistently monitor your server for security updates.</WebHostingBodySectionTwoTopCardDesc>
                    </WebHostingBodySectionTwoTopCard>

                    <WebHostingBodySectionTwoTopCard>
                    <WebhostingBodySectionTwoTopCardIcon> <BiWebcam style={{color: '7fb701'}} fontSize={'60px'} /> </WebhostingBodySectionTwoTopCardIcon>
                         <WebHostingBodySectionTwoTopCardTitle> Go worldwide </WebHostingBodySectionTwoTopCardTitle>
                         <WebHostingBodySectionTwoTopCardDesc> You’re not limited with physical operation here. Choose from our variety of hosting package. Remember your website is your only branch that never closes</WebHostingBodySectionTwoTopCardDesc>
                    </WebHostingBodySectionTwoTopCard>
                </WebHostingBodySectionTwoContainer>

                <WebHostingBodySectionTwoBottomTitleWrap>
                        <WebHostingBodySectionTwoBottomTitle> Why Choose HostTHYweb </WebHostingBodySectionTwoBottomTitle>
                    </WebHostingBodySectionTwoBottomTitleWrap>

                <WebHostingBodySectionTwoBottomContainer>
                  <WebHostingBodySectionTwoBottomCard>   
                      <WebHostingBodySectionTwoBottomCardTitle> PRIVACY AND SECURITY </WebHostingBodySectionTwoBottomCardTitle>
                       <WebHostingBodySectionTwoBottomCardDesc>Your online security and privacy come first at Hostthyweb, and we will always support the rights of individuals and consumers online. It’s our mission to keep the Internet open, free, and safe for everyone.</WebHostingBodySectionTwoBottomCardDesc>
                        <WebHostingBodySectionTwoBottomBtnWrap>
                        <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/security"> Browse All </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                      <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/register.php"> Try Us </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                  </WebHostingBodySectionTwoBottomBtnWrap>
                  </WebHostingBodySectionTwoBottomCard>
                  <WebHostingBodySectionTwoBottomCard style={{background: '#7fb701', color: '#fff'}}>
                  <WebHostingBodySectionTwoBottomCardTitle> YOUR BUSINESS ONLINE</WebHostingBodySectionTwoBottomCardTitle>
                  <WebHostingBodySectionTwoBottomCardDesc>Boost your business with industry-premium products and services, at prices that won’t break your budget. If it doesn’t provide you with a better Internet experience, we simply don’t offer it.</WebHostingBodySectionTwoBottomCardDesc>
                  <WebHostingBodySectionTwoBottomBtnWrap>
                      <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/cart.php"> Search Product </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                      <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/register.php"> Try Us </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                  </WebHostingBodySectionTwoBottomBtnWrap>
                  </WebHostingBodySectionTwoBottomCard>

                  <WebHostingBodySectionTwoBottomCard>
                      <WebHostingBodySectionTwoBottomCardTitle> CUSTOMER SERVICE</WebHostingBodySectionTwoBottomCardTitle>
                      <WebHostingBodySectionTwoBottomCardDesc>You are covered by a Support Team thats renowned for being one of the most knowledgeable, friendly, and professional in the business. Real people are ready to assist you with any issue, any time, 24/7.</WebHostingBodySectionTwoBottomCardDesc>
                      <WebHostingBodySectionTwoBottomBtnWrap>
                      <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/submitticket.php"> Open Ticket </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                      <WebHostingBodySectionTwoBottomBtn> <WebHostingBodySectionTwoBottomBtnLink to="/web-hosting"> Live Chat </WebHostingBodySectionTwoBottomBtnLink></WebHostingBodySectionTwoBottomBtn>
                  </WebHostingBodySectionTwoBottomBtnWrap>
                  </WebHostingBodySectionTwoBottomCard>
                </WebHostingBodySectionTwoBottomContainer>
              </WebHostingBodySectionTwo>

          

              <WebHostingBodyFaqSection>
                  <WebHostingBodyFaqWrap>
                   <WebHostingBodyFaqInfo>
                    <WebHostingBodyFaqInfoTitle>  Web Hosting FAQ </WebHostingBodyFaqInfoTitle>
                     <WebHostingBodyFaqInfoItem  onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues> How do I build my online presence? <FaPlus style={{float: 'right'}} /> </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> In fact, everything you do, say, post, comment or share on the Internet represents your brand. With our Website Builder and other tools offered in our Shared Hosting plans, building your brand online is easy. </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>
                     <WebHostingBodyFaqInfoItem onClick={toggle} > 
                      <WebHostingBodyFaqInfoItemQues> What is Shared Hosting? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> Shared Hosting is an entry-level type of web hosting where one physical server hosts multiple websites (and often hosts hundreds of users). Since each user gets (“shares”) a section of that individual server where they can host their website files, this keeps costs low. Here users share system resources on-demand, receiving a percentage of databases, disk space, CPU, RAM as well as email and FTP accounts. Other resources include the single MySQL server, Apache server, and mail server. Considered the most cost-effective option, Shared Hosting offers enough resources for any startup, local business, or personal website.
                        <br />
                        <br />
                            <WebHostingFaqLink to="/index.php/knowledgebase"> Learn more about Shared Hosting → </WebHostingFaqLink> 
                       </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>
                     <WebHostingBodyFaqInfoItem onClick={toggle} > 
                      <WebHostingBodyFaqInfoItemQues> How do I start using my Shared Hosting account? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}>To turn your new Shared Hosting account into your personal website, simply follow these step-by-step instructions:
                        <br />
                        <br />
                        <WebHostingFaqLink to="/cart.php"> Shared Hosting — Getting Started </WebHostingFaqLink>
                     </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>
                     <WebHostingBodyFaqInfoItem onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues> What is cPanel? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> cPanel is a control panel that acts as a separate account, designed for managing your Shared Hosting service on the server. 
                       You'll be able to build your website with our Website Builder as well as upload and manage files, create email accounts, and check the stats of your sites — all in one place. Your cPanel login details are found in your Welcome Email. ansfer a domain. </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>
                     <WebHostingBodyFaqInfoItem onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues>What is Cloud Storage? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> Designed to handle a variety of hardware and software-stack failures, Cloud Storage reinforces your data with an extra layer of protection by distributing it across various servers. Featuring zero downtime and the highest performance, it provides you with the utmost stability.
                       <br />
                       <br />
                        <WebHostingFaqLink to="/index.php/knowledgebase"> Learn more about Cloud Storage → </WebHostingFaqLink> </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>

                     <WebHostingBodyFaqInfoItem onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues> What websites can be moved from another hosting provider with HostTHYweb’s free migration service? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> The migration process from another hosting provider to HostTHYweb is completely free of charge and we
                        guarantee fast cPanel-to-cPanel transfers. Manual website migration is also possible, depending on the individual case. </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>

                     <WebHostingBodyFaqInfoItem onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues> Will Shared Hosting work with my Wordpress website? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> Yes! With our Softaculous one-click installer you’ll get your WordPress website up and running in no time. Want to know how to start building your WordPress website? </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>

                     <WebHostingBodyFaqInfoItem onClick={toggle}> 
                      <WebHostingBodyFaqInfoItemQues> Should I choose VPS Hosting instead of Shared Hosting? </WebHostingBodyFaqInfoItemQues>
                       <WebHostingBodyFaqInfoItemAns isOpen={isOpen} toggle={toggle}> A VPS gives you access to your own personal server, one that’s split up into several virtual servers with allocated resources (disk space and bandwidth) as well as a pre-installed operating system (OS) of your choice. For website owners looking to grow and scale up, a VPS is highly recommended. 
                       If your website is too big for Shared Hosting but too small to benefit from Dedicated Server Hosting, a VPS is the right choice for you.
                        </WebHostingBodyFaqInfoItemAns>
                     </WebHostingBodyFaqInfoItem>
                   </WebHostingBodyFaqInfo>

                   <WebHostingBodyDisclaimers>
                    <WebHostingBodyDisclaimersTitle>Disclaimers</WebHostingBodyDisclaimersTitle>
                    <WebHostingBodyDisclaimersItems> 
                      <WebHostingBodyDisclaimersItem> Our Stellar Growth Plan offers unmetered disk space, intended only for your website. This space must be used in accordance with our Acceptable Use Policy (AUP), in particular Paragraph 10, Disk Usage Provision. </WebHostingBodyDisclaimersItem>
                      <WebHostingBodyDisclaimersItem> Only first-time Shared Hosting customers are eligible for our 30-day money-back guarantee. For example, if you previously created an account with HostthyWeb, subsequently canceled and signed up again, unfortunately you are ineligible for a refund. The same scenario applies to those who have already opened a second HostthyWeb account. </WebHostingBodyDisclaimersItem>
                      <WebHostingBodyDisclaimersItem> Cloud Storage is only available with Stellar Business plans with US datacenters. </WebHostingBodyDisclaimersItem>
                      <WebHostingBodyDisclaimersItem> Due to the registry restrictions, WhoisGuard cannot be used with certain TLDs. </WebHostingBodyDisclaimersItem>
                      <WebHostingBodyDisclaimersItem> Our discount only applies to purchases of annual and biennial plans. This discount offer does not apply to renewals.</WebHostingBodyDisclaimersItem>
                      <WebHostingBodyDisclaimersItem> HostthyWeb Supersonic CDN is only available for domain names that use HostthyWeb Shared Hosting nameservers. </WebHostingBodyDisclaimersItem>
                     </WebHostingBodyDisclaimersItems>
                   </WebHostingBodyDisclaimers>
                  </WebHostingBodyFaqWrap>
              </WebHostingBodyFaqSection>

        </WebHostingBody>
    </WebHostingBodyWrapper>
  </WebHostingBodyMainContainer>
 )
}

export default WebHostingContainer