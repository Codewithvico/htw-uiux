import React from 'react';
import { 
    MarketPolicyContainer,
    MarketPolicyWrapper,
    MarketPolicyHeader,
    MarketPolicyTitle,
    MarketPolicyDesc,
    MarketPolicyHeaderAside,
    MarketPolicyHeaderAsideInfo,
    MarketPolicyHeaderAsideLink,
    MarketPolicyBody,
    MarketPolicyBodyWrapper,
    MarketPolicyBodyInfoTitle,
    MarketPolicyBodyDesc,
    MarketPolicyBodyAside,
    MarketPolicyBodyList,
    MarketPolicyLink
} from './MarketPolicyElem';


const MarketContainer = () => {
  return (
    <MarketPolicyContainer>
      <MarketPolicyWrapper>
        <MarketPolicyHeader>
            <MarketPolicyTitle> Marketplace Terms of Service Agreement </MarketPolicyTitle>
            <MarketPolicyDesc>Everything you must know in one bus-stop</MarketPolicyDesc>
         </MarketPolicyHeader>
         <MarketPolicyHeaderAside>
             <MarketPolicyHeaderAsideInfo> 
                 <MarketPolicyHeaderAsideLink to="/legal"><strong> Legal  → </strong>  </MarketPolicyHeaderAsideLink>
                  Marketplace Terms of Service Agreement
            </MarketPolicyHeaderAsideInfo>
         </MarketPolicyHeaderAside>
         <MarketPolicyBody>
            <MarketPolicyBodyWrapper>
            <MarketPolicyBodyInfoTitle>Marketplace Terms of Service Agreement:</MarketPolicyBodyInfoTitle>
            <MarketPolicyBodyDesc>This Apps Marketplace Terms of Service Agreement (“Agreement”) sets forth the terms and conditions of the use of the HostthyWeb marketplace platform (“Apps Marketplace”), which provides third-party applications and services to HostthyWeb customers (“App” or “Apps”). In this Agreement "You" and "Your" refer to You as the user of the Apps Marketplace, or any agent, employee, servant or person authorized to act on Your behalf. "We", "Us" and "Our" refer to HostthyWeb, Ltd., as well as its subsidiaries and sister companies ('HostthyWeb'). “Provider” refers to a third-party which offers its product and/or service on the Apps Marketplace in the form of an Apps Marketplace application. This Agreement explains Our obligations to You, and explains Your obligations to Us for using the Apps Marketplace. These obligations are in addition to (not in lieu of) any terms and conditions that apply to Your use of the Services under any other HostthyWeb policies and/or agreements.</MarketPolicyBodyDesc>           
            <br />
            <MarketPolicyBodyDesc>When You access the Apps Marketplace (or You permit someone else to use Your Account to access the Apps Marketplace) to use, purchase or otherwise acquire access to products or services on the Apps Marketplace, or to cancel such products or services (even if We were not notified of such authorization), You signify Your agreement to the terms and conditions contained in this Agreement along with the HostthyWeb <a style={{color: '#de3723'}} href="termsofservice"> Universal Terms of Service Agreement</a> and all applicable policies and product agreements incorporated by reference therein, including but not limited to the HostthyWeb Privacy <a style={{color: '#de3723'}} href="privacy-policy">Policy</a>.</MarketPolicyBodyDesc>           
            
            <MarketPolicyBodyInfoTitle> Term of Agreement; Modification:</MarketPolicyBodyInfoTitle>
            <MarketPolicyBodyDesc>You agree that HostthyWeb may, in its sole and absolute discretion, modify or change this Agreement, the Apps Marketplace and/or the Apps offered on the Apps Marketplace from time to time and that such modifications or changes are effective immediately upon posting to this site. Your use of the site, the Apps Marketplace or any App(s) after such changes or modifications have been made constitutes Your agreement to be bound by this Agreement as last revised. If You have purchased any App(s) on the Apps Marketplace, the terms and conditions of this Agreement shall continue in full force and effect, including any changes made to this Agreement, as long as You take advantage of and use the App(s).</MarketPolicyBodyDesc>
            <br />                     
            <MarketPolicyBodyInfoTitle> Provider Terms &amp; Conditions:</MarketPolicyBodyInfoTitle>
            <MarketPolicyBodyDesc>Sending Emails. Legally Required. As noted above, we use emails to communicate with you, to confirm your placed orders, to send information that you have requested and to serve legally or contractually required communications. Legally required emails cover ICANN mandated verification emails, renewal notices and any other policy or procedure created by ICANN which governs the purchase of domains. Additionally, we may be required by law to serve notices to you such as DMCA Takedown Notices, UDRP notices, etc. Or, we may deem a change to one of our policies to be material and, therefore, determine a duty (though not a legal requirement) to inform you of this change. These types of communications do not fall under any of our opt-out procedures.</MarketPolicyBodyDesc>            
            <br />
            <MarketPolicyBodyDesc>Sending Emails: Service Communications &amp; Promotional Communications. We also may use this information when it is important for us to contact you regarding functionality changes to Services you have purchased and/or our website and provide customer service (“Service Communications”.) By creating an account with us and/or purchasing our Services, you agree to receive these types of communication and acknowledge that they are not optional. We also use this information to share details about new services and special offers we think you'll find valuable (“Promotional Communications”.) You are able to opt-out of receiving Promotional Communications (or opt-into, depending on your country of residence) through preferences in your account panel or the unsubscribe instructions contained in the email communication.</MarketPolicyBodyDesc>           
            <br />
            <MarketPolicyBodyDesc>Legally Required Disclosure. We will never share your information without your permission or in ways other than as outlined in this policy. The only exceptions to this are when we are required by law, in the good faith belief that such action is necessary in order to comply with the law, or when we must comply with a legal process. Examples of these types of exceptions are court orders, subpoenas, and UDRP/URS processes. In each of these situations, we will carefully review the documentation provided and only comply if such documentation meets requisite legal standards.</MarketPolicyBodyDesc>           
            <br />
            <MarketPolicyBodyDesc>Changes in Our Practices. If we change our information-handling practices or other privacy aspects, we will post those changes on this privacy statement. If we make any material changes we will notify you by means of a notice on this site prior to the change becoming effective, and we may also try to notify you through email of the privacy changes, if necessary.</MarketPolicyBodyDesc>           
            
            <MarketPolicyBodyInfoTitle> Retention &amp; Deletion of Account Information: </MarketPolicyBodyInfoTitle>
            <MarketPolicyBodyDesc>Personal Information Following Termination of Account. When your HostthyWeb account is cancelled (either voluntarily or involuntarily) all of your personally identifiable information is placed in "deactivated" status within our corresponding databases. However, 
              you should know that deactivation of your account does not mean your personally identifiable 
              information has been deleted from our database entirely. 
              We will retain and use your personally identifiable information, 
              if necessary, in order to resolve disputes, enforce our agreements 
              and/or as required by laws or regulations. Thus, it may not be immediately 
              deleted upon request and is an approved exception to GDPR and CCPA deletion 
              rights. By creating an account with us, using our support services 
              and/or purchasing Services, you acknowledge and agree to these terms 
              of retention. Information on how to close your account can be found 
              <a style={{color: '#de3723'}} href="#"> here</a>.</MarketPolicyBodyDesc>
        
            </MarketPolicyBodyWrapper>
            
           <MarketPolicyBodyWrapper>
           <MarketPolicyBodyAside>
               <MarketPolicyBodyList> <MarketPolicyLink to="/termsofservice">Terms of Service Agreement</MarketPolicyLink> </MarketPolicyBodyList>
               <MarketPolicyBodyList> <MarketPolicyLink to="/privacy-policy">Privacy Policy </MarketPolicyLink></MarketPolicyBodyList>
               <MarketPolicyBodyList> <MarketPolicyLink to="/marketplace-policy" style={{color: '#7fb701'}}>Marketplace Terms of Service </MarketPolicyLink> </MarketPolicyBodyList>
               <MarketPolicyBodyList> <MarketPolicyLink to="/refund-policy">Refund Policy </MarketPolicyLink></MarketPolicyBodyList>
               <MarketPolicyBodyList> <MarketPolicyLink to="/subpoena-policy">Court Order & Subpoena Policy</MarketPolicyLink></MarketPolicyBodyList>
               <MarketPolicyBodyList> <MarketPolicyLink to="/copyright-policy">Copyright and Trademark Policies </MarketPolicyLink></MarketPolicyBodyList>
           </MarketPolicyBodyAside>
            </MarketPolicyBodyWrapper>


         </MarketPolicyBody>
      </MarketPolicyWrapper>
    </MarketPolicyContainer>
  )
}


export default MarketContainer