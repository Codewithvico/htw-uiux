import React from 'react';
import { 
  RefundPolicyMainContainer,
    RefundPolicyWrapper,
    RefundPolicyHeader,
    RefundPolicyTitle,
    RefundPolicyDesc,
    RefundPolicyHeaderAside,
    RefundPolicyHeaderAsideInfo,
    RefundPolicyHeaderAsideLink,
    RefundPolicyBody,
    RefundPolicyBodyWrapper,
    RefundPolicyBodyInfoTitle,
    RefundPolicyBodyDesc,
    RefundPolicyBodyAside,
    RefundPolicyBodyList,
    RefundPolicyLink,
    RefundPolicyBodyDescList
} from './RefundPolicyElem';


const RefundPolicyContainer = () => {
  return (
    <RefundPolicyMainContainer>
      <RefundPolicyWrapper>
        <RefundPolicyHeader>
            <RefundPolicyTitle> Refund Policy </RefundPolicyTitle>
            <RefundPolicyDesc>Everything you must know in one bus-stop</RefundPolicyDesc>
         </RefundPolicyHeader>
         <RefundPolicyHeaderAside>
             <RefundPolicyHeaderAsideInfo> 
                 <RefundPolicyHeaderAsideLink to="/legal"><strong> Legal  → </strong>  </RefundPolicyHeaderAsideLink>
                 Refund Policy
            </RefundPolicyHeaderAsideInfo>
         </RefundPolicyHeaderAside>
         <RefundPolicyBody>
            <RefundPolicyBodyWrapper>
            <RefundPolicyBodyInfoTitle> Refund Policy:</RefundPolicyBodyInfoTitle>
             <RefundPolicyBodyDesc>We have prepared this Refund Policy to explain when you can request a refund with respect to products and services acquired from HostthyWeb or through us from our partners and/or affiliates (collectively “Services”).</RefundPolicyBodyDesc>
              <RefundPolicyBodyInfoTitle> General Terms:</RefundPolicyBodyInfoTitle>
             <RefundPolicyBodyDesc>General terms apply to all refund eligible Services. In addition, there may be special term(s) that apply to a specific product and/or service and those are outlined below.</RefundPolicyBodyDesc>
             <RefundPolicyBodyDescList>Service(s) must be cancelled before we can issue a refund.</RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList> In no event is the same Service eligible for more than one refund. </RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList>No refund will be made if your Service(s) are suspended or terminated for cause. </RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList> If purchased Service(s) include free domain name registration as part of a promotion or sale of the Service(s), and you cancel the purchased Service(s), the standard price for the domain name will be deducted from the refund amount. If the refund amount is less than the standard price for the domain, you must either elect to pay the difference or forfeit the domain, in which case, ownership of the domain will revert back to us.</RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList> All refunds on third party services  will be refunded based on third party agreement, proccesed. Customer, bear sole responsibility for any fluctuations in the exchange rate(s) between the time of payment and the time of refund. </RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList> Unless you request otherwise, refunds will be credited to your HostthyWeb account balance. Purchases made using HostthyWeb  </RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList> Unless you request otherwise, refunds will be credited to your HostthyWeb account balance. Purchases made using HostthyWeb account funds can only be refunded as account credit. Purchases made by credit card and PayPal may be refundable to the original source of payment. Refunds are not possible for bitcoin deposits. HostthyWeb is not responsible for any additional charges imposed by your credit card company, PayPal or bitcoin payment processor in the case of refund.</RefundPolicyBodyDescList>
             <RefundPolicyBodyDescList>Any processing fee(s) will be deducted from a refund.</RefundPolicyBodyDescList>
             
             <RefundPolicyBodyDesc>Additional refund requirements may apply based on specific terms and conditions notified to you when purchasing any Service(s).Note some products and services are non refundable</RefundPolicyBodyDesc>

           </RefundPolicyBodyWrapper>

           <RefundPolicyBodyWrapper>
           <RefundPolicyBodyAside>
               <RefundPolicyBodyList> <RefundPolicyLink to="/termsofservice">Terms of Service Agreement</RefundPolicyLink> </RefundPolicyBodyList>
               <RefundPolicyBodyList> <RefundPolicyLink to="/privacy-policy">Privacy Policy </RefundPolicyLink></RefundPolicyBodyList>
               <RefundPolicyBodyList> <RefundPolicyLink to="/marketplace-policy">Marketplace Terms of Service </RefundPolicyLink> </RefundPolicyBodyList>
               <RefundPolicyBodyList> <RefundPolicyLink to="/refund-policy" style={{color: '#7fb701'}}>Refund Policy </RefundPolicyLink></RefundPolicyBodyList>
               <RefundPolicyBodyList> <RefundPolicyLink to="/subpoena-policy">Court Order & Subpoena Policy</RefundPolicyLink></RefundPolicyBodyList>
               <RefundPolicyBodyList> <RefundPolicyLink to="/copyright-policy">Copyright and Trademark Policies </RefundPolicyLink></RefundPolicyBodyList>
           </RefundPolicyBodyAside>
            </RefundPolicyBodyWrapper>


         </RefundPolicyBody>
      </RefundPolicyWrapper>
    </RefundPolicyMainContainer>
  )
}

export default RefundPolicyContainer