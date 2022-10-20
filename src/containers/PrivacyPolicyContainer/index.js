import React from 'react';
import { 
    PrivacyPolicyContainer,
    PrivacyPolicyWrapper,
    PrivacyPolicyHeader,
    PrivacyPolicyTitle,
    PrivacyPolicyDesc,
    PrivacyPolicyHeaderAside,
    PrivacyPolicyHeaderAsideInfo,
    PrivacyPolicyHeaderAsideLink,
    PrivacyPolicyBody,
    PrivacyPolicyBodyWrapper,
    PrivacyPolicyBodyInfoTitle,
    PrivacyPolicyBodyDesc,
    PrivacyPolicyBodyAside,
    PrivacyPolicyBodyList,
    PrivacyPolicyLink
} from './PrivacyPolicyElem';


const PrivacyContainer = () => {
  return (
    <PrivacyPolicyContainer>
      <PrivacyPolicyWrapper>
        <PrivacyPolicyHeader>
            <PrivacyPolicyTitle> Privacy Policy </PrivacyPolicyTitle>
            <PrivacyPolicyDesc>Everything you must know in one bus-stop</PrivacyPolicyDesc>
         </PrivacyPolicyHeader>
         <PrivacyPolicyHeaderAside>
             <PrivacyPolicyHeaderAsideInfo> 
                 <PrivacyPolicyHeaderAsideLink to="/legal"><strong> Legal  → </strong>  </PrivacyPolicyHeaderAsideLink>
                 Privacy Policy
            </PrivacyPolicyHeaderAsideInfo>
         </PrivacyPolicyHeaderAside>
         <PrivacyPolicyBody>
            <PrivacyPolicyBodyWrapper>
            <PrivacyPolicyBodyInfoTitle> HostthyWeb Privacy Policy:</PrivacyPolicyBodyInfoTitle>
            <PrivacyPolicyBodyDesc>HostthyWeb is a leader in online privacy rights. We have created this privacy statement in order to demonstrate our commitment to you, our customer, through transparent, easy-to-understand information regarding our data practices. You will understand what we collect, why we collect it and what we do with it. This policy applies to all HostthyWeb brands, websites, apps, products, services or technologies (we will collectively refer to these as “Services”). Additional privacy practices for certain Services can be found in Details for Specific Products and Services.</PrivacyPolicyBodyDesc>           
 
            <PrivacyPolicyBodyInfoTitle> Information Collection:</PrivacyPolicyBodyInfoTitle>
            <PrivacyPolicyBodyDesc>we collect and use information necessary to enable you to purchase and manage Services, provide you with support for those Services and to curate your experience with us. Some information is collected and used based on contractual consent and other is based on informed consent, which may be changed at any time.</PrivacyPolicyBodyDesc>           
            
            <PrivacyPolicyBodyInfoTitle> Basic Account Information:</PrivacyPolicyBodyInfoTitle>
            <PrivacyPolicyBodyDesc>Information Collected. Our site uses forms in which you give us contact information (such as your name, address, phone number, fax number, billing information, IP address and email address) so you can create an account, place orders, register domains, request information, and request support help. As you use your account, we may also collect support requests and other related types of information that is specific to the management of your account and Services with us.</PrivacyPolicyBodyDesc>
            <br />           
            <PrivacyPolicyBodyDesc>Legal Requirement. This type of information is legally and/or contractually required to be able to purchase and use Services. For example, we are required to be able to verify this type of information upon request by our payment processor. It is also required to be able to serve legal notices to you and is mandated by certain Services we offer. In addition, some Services, such as domains, require this information for you to purchase them. If you are purchasing a domain from us, 
              we are required by law to collect and retain this information. We are further required to verify that the information provided is accurate and serve legally required notices regarding your domain(s). Consent for the collection, use and retention of this information for these purposes is considered to be contractually given for the duration of your use of such Service and any legally required retention period.</PrivacyPolicyBodyDesc>           
            
            <PrivacyPolicyBodyInfoTitle> How We Use This Information:</PrivacyPolicyBodyInfoTitle>
            <PrivacyPolicyBodyDesc>Sending Emails. Legally Required. As noted above, we use emails to communicate with you, to confirm your placed orders, to send information that you have requested and to serve legally or contractually required communications. Legally required emails cover ICANN mandated verification emails, renewal notices and any other policy or procedure created by ICANN which governs the purchase of domains. Additionally, we may be required by law to serve notices to you such as DMCA Takedown Notices, UDRP notices, etc. Or, we may deem a change to one of our policies to be material and, therefore, determine a duty (though not a legal requirement) to inform you of this change. These types of communications do not fall under any of our opt-out procedures.</PrivacyPolicyBodyDesc>            
            <br />
            <PrivacyPolicyBodyDesc>Sending Emails: Service Communications & Promotional Communications. We also may use this information when it is important for us to contact you regarding functionality changes to Services you have purchased and/or our website and provide customer service (“Service Communications”.) By creating an account with us and/or purchasing our Services, you agree to receive these types of communication and acknowledge that they are not optional. We also use this information to share details about new services and special offers we think you'll find valuable (“Promotional Communications”.) You are able to opt-out of receiving Promotional Communications (or opt-into, depending on your country of residence) through preferences in your account panel or the unsubscribe instructions contained in the email communication.</PrivacyPolicyBodyDesc>           
            <br />
            <PrivacyPolicyBodyDesc>Legally Required Disclosure. We will never share your information without your permission or in ways other than as outlined in this policy. The only exceptions to this are when we are required by law, in the good faith belief that such action is necessary in order to comply with the law, or when we must comply with a legal process. Examples of these types of exceptions are court orders, subpoenas, and UDRP/URS processes. In each of these situations, we will carefully review the documentation provided and only comply if such documentation meets requisite legal standards.</PrivacyPolicyBodyDesc>           
            <br />
            <PrivacyPolicyBodyDesc>Changes in Our Practices. If we change our information-handling practices or other privacy aspects, we will post those changes on this privacy statement. If we make any material changes we will notify you by means of a notice on this site prior to the change becoming effective, and we may also try to notify you through email of the privacy changes, if necessary.</PrivacyPolicyBodyDesc>           
            
            <PrivacyPolicyBodyInfoTitle> Retention &amp; Deletion of Account Information: </PrivacyPolicyBodyInfoTitle>
            <PrivacyPolicyBodyDesc>Personal Information Following Termination of Account. When your HostthyWeb account is cancelled (either voluntarily or involuntarily) all of your personally identifiable information is placed in "deactivated" status within our corresponding databases. However, 
              you should know that deactivation of your account does not mean your personally identifiable 
              information has been deleted from our database entirely. 
              We will retain and use your personally identifiable information, 
              if necessary, in order to resolve disputes, enforce our agreements 
              and/or as required by laws or regulations. Thus, it may not be immediately 
              deleted upon request and is an approved exception to GDPR and CCPA deletion 
              rights. By creating an account with us, using our support services 
              and/or purchasing Services, you acknowledge and agree to these terms 
              of retention. Information on how to close your account can be found 
              <a style={{color: '#de3723'}} href="#"> here</a>.</PrivacyPolicyBodyDesc>
        
            </PrivacyPolicyBodyWrapper>
            
           <PrivacyPolicyBodyWrapper>
           <PrivacyPolicyBodyAside>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/termsofservice">Terms of Service Agreement</PrivacyPolicyLink> </PrivacyPolicyBodyList>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/privacy-policy" style={{color: '#7fb701'}}>Privacy Policy </PrivacyPolicyLink></PrivacyPolicyBodyList>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/marketplace-policy">Marketplace Terms of Service </PrivacyPolicyLink> </PrivacyPolicyBodyList>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/refund-policy">Refund Policy </PrivacyPolicyLink></PrivacyPolicyBodyList>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/subpoena-policy">Court Order & Subpoena Policy</PrivacyPolicyLink></PrivacyPolicyBodyList>
               <PrivacyPolicyBodyList> <PrivacyPolicyLink to="/copyright-policy">Copyright and Trademark Policies </PrivacyPolicyLink></PrivacyPolicyBodyList>
           </PrivacyPolicyBodyAside>
            </PrivacyPolicyBodyWrapper>


         </PrivacyPolicyBody>
      </PrivacyPolicyWrapper>
    </PrivacyPolicyContainer>
  )
}

export default PrivacyContainer