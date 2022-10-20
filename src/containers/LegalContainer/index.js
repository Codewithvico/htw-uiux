import React from 'react'
import {
    LegalMainContainer,
    LegalWrapper,
    LegalHeader,
    LegalHeaderTitle,
    LegalHeaderDesc,
    LegalBody,
    LegalBodyNews,
    LegalBodyTermsOfUse,
    LegalBodyTermsOfUseDesc,
    LegalBodyLink

 } from './LegalElem'

const LegalContainer = () => {
  return (
    <LegalMainContainer>
        <LegalWrapper>
            <LegalHeader>
               <LegalHeaderTitle> Legal </LegalHeaderTitle>
               <LegalHeaderDesc>Everything you must know in one bus-stop</LegalHeaderDesc>
            </LegalHeader>
            <LegalBody>
              <LegalBodyNews>
                  Here you will find all the documentation regarding terms of use, acceptable use policy, registration agreement, privacy policy and other product agreements. If you have any further questions, please contact us.
            </LegalBodyNews>
              <LegalBodyTermsOfUse> Universal Terms of Use </LegalBodyTermsOfUse>
              <LegalBodyTermsOfUseDesc> 
               <LegalBodyLink to="/termsofservice"> Terms of Service Agreement </LegalBodyLink>
               </LegalBodyTermsOfUseDesc>
              <LegalBodyTermsOfUseDesc> 
                <LegalBodyLink to="/privacy-policy"> Privacy Policy</LegalBodyLink> 
                </LegalBodyTermsOfUseDesc>
              <LegalBodyTermsOfUseDesc> 
                <LegalBodyLink to="/marketplace-policy">Marketplace Terms of Service </LegalBodyLink>
             </LegalBodyTermsOfUseDesc>
              <LegalBodyTermsOfUseDesc> 
                <LegalBodyLink to="/refund-policy">Refund Policy</LegalBodyLink>
                </LegalBodyTermsOfUseDesc>
              <LegalBodyTermsOfUseDesc> 
                <LegalBodyLink to="/subpoena-policy">Court Order & Subpoena Policy</LegalBodyLink>
                </LegalBodyTermsOfUseDesc>
              <LegalBodyTermsOfUseDesc> 
                <LegalBodyLink to="/copyright-policy">Copyright and Trademark Policies </LegalBodyLink>
                </LegalBodyTermsOfUseDesc>
            </LegalBody>
        </LegalWrapper>
    </LegalMainContainer>
  )
}

export default LegalContainer