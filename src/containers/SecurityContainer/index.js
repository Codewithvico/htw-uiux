import React from 'react'
import {
    SecurityMainContainer,
    SecurityWrapper,
    SecurityHeader,
    SecurityHeaderTitle,
    SecurityHeaderDesc,
    SecurityBody,
    SecurityBodyNews,
    SecurityBodyTermsOfUse,
    SecurityBodyTermsOfUseDesc,
    SecurityBodyLink

 } from './SecurityElem'

const SecurityContainer = () => {
  return (
    <SecurityMainContainer>
        <SecurityWrapper>
            <SecurityHeader>
               <SecurityHeaderTitle> Security </SecurityHeaderTitle>
               <SecurityHeaderDesc>Everything you must know in one bus-stop</SecurityHeaderDesc>
            </SecurityHeader>
            <SecurityBody>
              <SecurityBodyNews>
                  Here you will find all the documentation regarding terms of use, acceptable use policy, registration agreement, privacy policy and other product agreements. If you have any further questions, please contact us.
            </SecurityBodyNews>
              <SecurityBodyTermsOfUse> Premium Security </SecurityBodyTermsOfUse>
              <SecurityBodyTermsOfUseDesc> 
               <SecurityBodyLink to="/ssl-certificate"> SSL Certificate </SecurityBodyLink>
               </SecurityBodyTermsOfUseDesc>
              <SecurityBodyTermsOfUseDesc> 
                <SecurityBodyLink to="/whois-guard"> Whois Guard </SecurityBodyLink> 
                </SecurityBodyTermsOfUseDesc>
                <SecurityBodyTermsOfUseDesc> 
               <SecurityBodyLink to="/index.php/store/vpn"> VPN Protection </SecurityBodyLink>
               </SecurityBodyTermsOfUseDesc>
                <SecurityBodyTermsOfUseDesc> 
               <SecurityBodyLink to="/index.php/store/vpn"> Website Backup </SecurityBodyLink>
               </SecurityBodyTermsOfUseDesc>
              <SecurityBodyTermsOfUseDesc> 
                <SecurityBodyLink to="/marketplace-policy"> Marketplace Terms of Service</SecurityBodyLink> 
                </SecurityBodyTermsOfUseDesc>
 
            </SecurityBody>
        </SecurityWrapper>
    </SecurityMainContainer>
  )
}

export default SecurityContainer