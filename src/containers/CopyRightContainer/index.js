import React from 'react';
import {
    CopyRightPolicyMainContainer,
    CopyRightPolicyWrapper,
    CopyRightPolicyHeader,
    CopyRightPolicyHeaderTitle,
    CopyRightPolicyHeaderDesc,
    CopyRightPolicyHeaderAside,
    CopyRightPolicyHeaderAsideInfo,
    CopyRightPolicyHeaderAsideLink,
    CopyRightPolicyBody,
    CopyRightPolicyBodyWrapper,
    CopyRightPolicyBodyInfoTitle,
    CopyRightPolicyBodyInfoDesc,
    CopyRightPolicyBodyInfoDescList,
    CopyRightPolicyBodyInfoDescListTitle,
    CopyRightPolicyBodyDescTitle,
    CopyRightPolicyBodyAside,
    CopyRightPolicyBodyList,
    CopyRightPolicyLink

} from './CopyRightContainerElem'

const CopyRightPolicyContainer = () => {
  return (
    <CopyRightPolicyMainContainer>
       <CopyRightPolicyWrapper>
           <CopyRightPolicyHeader>
               <CopyRightPolicyHeaderTitle> Copyright and Trademark Policies </CopyRightPolicyHeaderTitle>
                 <CopyRightPolicyHeaderDesc>Everything you must know in one bus-stop </CopyRightPolicyHeaderDesc>
           </CopyRightPolicyHeader>
           <CopyRightPolicyHeaderAside>
               <CopyRightPolicyHeaderAsideInfo>
                   <CopyRightPolicyHeaderAsideLink to="/legal"> <strong> Legal  → </strong></CopyRightPolicyHeaderAsideLink>
                   Copyright &amp; Trademark Policies
               </CopyRightPolicyHeaderAsideInfo>
           </CopyRightPolicyHeaderAside>
           <CopyRightPolicyBody>
               <CopyRightPolicyBodyWrapper>
                   <CopyRightPolicyBodyInfoTitle> Copyright and Trademark Policies </CopyRightPolicyBodyInfoTitle>
                    <CopyRightPolicyBodyInfoDesc> At HostthyWeb, we believe that the customer comes first. As a result, we have developed policies over the years which ensure that we respond responsibly to copyright and trademark complaints made to us regarding domains and hosted content, and that we do so in a manner that respects our customer. As such, our policies include notifying the customer of a complaint and forwarding the details of the complaint.
                            <br />
                            NOTICE: When utilizing our copyright and trademark complaint procedures, you acknowledge and agree to the sharing of Your complaint with the relevant customer. You further attest that you are authorized to provide to HostthyWeb all personal information contained therein and that such authorization includes HostthyWeb's processing of said personal information. Processing shall include retention and disclosure as is useful or needed to otherwise address such complaint as determined by HostthyWeb in its sole discretion.</CopyRightPolicyBodyInfoDesc>
                    <br />
                    <CopyRightPolicyBodyInfoDescListTitle> Copyright Complaints </CopyRightPolicyBodyInfoDescListTitle>
                    <CopyRightPolicyBodyInfoDesc>Copyright claims are covered by the Digital Millennium Copyright Act (“DMCA”), whereby a copyright holder may issue a formal complaint known as a DMCA Takedown Notice. If you believe that you have a valid copyright claim related to a HostthyWeb customer, you may submit a DMCA Takedown Notice in accordance with this policy.</CopyRightPolicyBodyInfoDesc>
                    <br />
                    <CopyRightPolicyBodyInfoDescList>
                        <CopyRightPolicyBodyInfoDescListTitle> DMCA Takedown Notice. </CopyRightPolicyBodyInfoDescListTitle>
                        <CopyRightPolicyBodyInfoDesc> If we receive a DMCA notice from a copyright holder regarding hosted content, we will follow the requirements set in place by the DMCA. We will:</CopyRightPolicyBodyInfoDesc>
                        <br />
                        <CopyRightPolicyBodyDescTitle> Specification of Copyrighted Content</CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc>
                        Identification of the work which is claimed to be copyrighted and infringed, or, if multiple copyrighted works at a single online site are covered by the notification, a representative list of such works at that site.                         
                        </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyDescTitle> Location of Infringing Material. </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc> 
                        Identification of the material that is claimed to be infringing, or to be the subject of infringing activity, and that is to be removed, or access to which is to be disabled, and information reasonably sufficient to permit HostthyWeb to locate the material. This must include the specific URLs for each infringing instance.
                            </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyDescTitle> Contact Information for Complaining Party. </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc> 
                        Information reasonably sufficient to permit HostthyWeb to contact the complaining party, such as name, address, and telephone number, as well as facsimile number and email, if available, at which the complaining party may be contacted.
                            </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyDescTitle> Good Faith Statement. </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc> 
                        A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
                            </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyDescTitle> Statement Under Perjury. </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc> 
                        A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner of an exclusive right that is allegedly being infringed.
                            </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyDescTitle> Signature. </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc> 
                        A physical or electronic signature of the complaining party or its agent.
                            </CopyRightPolicyBodyInfoDesc>
                    </CopyRightPolicyBodyInfoDescList>
                    <br />
                    <br />
                    <CopyRightPolicyBodyInfoDescList>
                        <CopyRightPolicyBodyInfoDescListTitle> DMCA Counter-Notice Procedure </CopyRightPolicyBodyInfoDescListTitle>
                        <br />
                        <CopyRightPolicyBodyInfoDesc>  If we receive a proper DMCA Takedown Notice from a copyright holder, we will email a copy of the notice to our customer to provide them with the opportunity to submit a DMCA Counter-Notice. We will advise our customer of the following: </CopyRightPolicyBodyInfoDesc>
                        <CopyRightPolicyBodyInfoDesc> If it is not possible to come to an agreement with the reporting copyright owner, the customer may submit a DMCA Counter-Notice to HostthyWeb within ten (10) business days of the date of our notice. The Counter-Notice is a legal document and must comply with the requirements of the DMCA. It must include the following:</CopyRightPolicyBodyInfoDesc>
                        <br />
                        <CopyRightPolicyBodyDescTitle> Contact Information </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc>
                        Contact information, including name, address, and telephone number, as well as facsimile number and email, if available.
                            <br />                            
                        </CopyRightPolicyBodyInfoDesc>

                        <CopyRightPolicyBodyDescTitle> Statement under Perjury </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc>
                        A statement, under penalty of perjury, that the party providing the Counter-Notice has a good faith belief that the material was removed or disabled as a result of mistake, or misidentification of the material to be removed or disabled.                      
                        </CopyRightPolicyBodyInfoDesc>
                        
                        <CopyRightPolicyBodyDescTitle> Consent to Jurisdiction </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc>
                        A statement that the party providing the Counter-Notice consents to the jurisdiction of the United States District Court in which the address provided is located or, if that address is outside the United States, for the judicial district of Arizona, and that it will accept service of process from the complaining party or its agent.                      
                        </CopyRightPolicyBodyInfoDesc>
                        
                        <CopyRightPolicyBodyDescTitle> Signature </CopyRightPolicyBodyDescTitle>
                        <CopyRightPolicyBodyInfoDesc>
                        A physical or electronic signature of the party providing the Counter-Notice or its agent.                      
                        </CopyRightPolicyBodyInfoDesc>

                        <br />
                        <CopyRightPolicyBodyInfoDesc>
                        By submitting a Counter-Notice to HostthyWeb, our customer waives any legal or equitable rights or remedies he or she has, or may have, against HostthyWeb with respect to the Counter-Notice, any claims regarding any aspect of the disputed content and its publication and/or HostthyWeb's action in implementing a takedown or re-establishing the content, and agrees to indemnify and hold HostthyWeb, and its owners/operators and/or affiliates, harmless to the fullest extent allowed by law regarding all matters relating to the sending of a Counter-Notice.
                        </CopyRightPolicyBodyInfoDesc>
                    </CopyRightPolicyBodyInfoDescList>
                    <br />

                    <CopyRightPolicyBodyInfoDescList>
                        <CopyRightPolicyBodyInfoDescListTitle>If our customer responds with a proper Counter-Notice, we will: </CopyRightPolicyBodyInfoDescListTitle>
                        <CopyRightPolicyBodyDescTitle> Advise the complaining party that the disputed content will be reinstated in ten (10) business days unless HostthyWeb receives notice from the reporting copyright owner that he or she has filed an action against our customer under the DMCA in a court of competent jurisdiction for copyright infringement and is seeking a court order to restrain our customer from publishing the disputed content.</CopyRightPolicyBodyDescTitle>
                         <CopyRightPolicyBodyDescTitle> If HostthyWeb does not receive such notification from the complaining party, we will replace the removed material, or cease disabling access to it, in not less than ten (10) business days and not more than fourteen (14) business days from receipt of our customer’s Counter-Notice. </CopyRightPolicyBodyDescTitle>
                    </CopyRightPolicyBodyInfoDescList>
               </CopyRightPolicyBodyWrapper>

               <CopyRightPolicyBodyWrapper>
           <CopyRightPolicyBodyAside>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/termsofservice">Terms of Service Agreement</CopyRightPolicyLink> </CopyRightPolicyBodyList>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/privacy-policy">Privacy Policy </CopyRightPolicyLink></CopyRightPolicyBodyList>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/marketplace-policy">Marketplace Terms of Service </CopyRightPolicyLink> </CopyRightPolicyBodyList>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/refund-policy">Refund Policy </CopyRightPolicyLink></CopyRightPolicyBodyList>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/subpoena-policy">Court Order &amp; Subpoena Policy</CopyRightPolicyLink></CopyRightPolicyBodyList>
               <CopyRightPolicyBodyList> <CopyRightPolicyLink to="/copyright-policy" style={{color: '#7fb701'}}>Copyright and Trademark Policies </CopyRightPolicyLink></CopyRightPolicyBodyList>
           </CopyRightPolicyBodyAside>
            </CopyRightPolicyBodyWrapper>

           </CopyRightPolicyBody>
       </CopyRightPolicyWrapper>
    </CopyRightPolicyMainContainer>
  )
}

export default CopyRightPolicyContainer