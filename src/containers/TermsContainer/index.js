import React from 'react';
import { 
    TermsOfServiceContainer,
    TermOfServiceWrapper,
    TermsOfServiceHeader,
    TermOfServiceTitle,
    TermOfServiceDesc,
    TermsHeaderAside,
    TermsHeaderAsideInfo,
    TermHeaderAsideLink,
    TermOfServiceBody,
    TermOfServiceBodyWrapper,
    TermOfServiceBodyInfoTitle,
    TermOfServiceBodyDesc,
    TermOfServiceBodyAside,
    TermsOfServiceBodyList,
    TermOfServiceBodyLink
} from './TermContainerElem';


const TermsContainer = () => {
  return (
    <TermsOfServiceContainer>
      <TermOfServiceWrapper>
        <TermsOfServiceHeader>
            <TermOfServiceTitle> Terms Of Service </TermOfServiceTitle>
            <TermOfServiceDesc>Everything you must know in one bus-stop</TermOfServiceDesc>
         </TermsOfServiceHeader>
         <TermsHeaderAside>
             <TermsHeaderAsideInfo> 
                 <TermHeaderAsideLink to="/legal"><strong> Legal  → </strong>  </TermHeaderAsideLink>
                     Terms Of Service
            </TermsHeaderAsideInfo>
         </TermsHeaderAside>
         <TermOfServiceBody>
            <TermOfServiceBodyWrapper>
            <TermOfServiceBodyInfoTitle> Parties:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>This agreement is between Registerer (hostthyWeb.com) (PROVIDER) and the party as specified in the online application (CLIENT). Hosting services may also be provided by a company associated with HostTHYweb LTD.</TermOfServiceBodyDesc>
            <TermOfServiceBodyInfoTitle> Usage policy:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>We reserve the right to suspend or cancel a customer's access to any or all services we provided when we decide that the account has been inappropriately used. In short we do not allow certain activities hosted on our servers: <br /> No Spam, No unsolicited e-mailing, copyright infringement.</TermOfServiceBodyDesc>
            <TermOfServiceBodyInfoTitle> Server abuse:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>Any attempt to undermine or cause harm to a server, or customer, of ours is strictly prohibited.</TermOfServiceBodyDesc>
            <TermOfServiceBodyInfoTitle> Unauthorized use of other people's accounts or computers:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>We will strongly react to any use or attempted use of an Internet account or computer without the owner's authorization. Such attempts include "internet scamming" (tricking other people into releasing their passwords), password robbery, security hole scanning etc. <br />
                 Any unauthorized use of accounts or computers by a customer, whether or not the attacked account or computer belongs to us, will result in action against the attacker. Possible actions include warnings, account suspension or cancellation, and civil or criminal legal action, depending on the seriousness of the attack.</TermOfServiceBodyDesc>
            <TermOfServiceBodyInfoTitle> Abuse of Unlimited Traffic and/or Unlimited Storage:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>If one of our hosting plans offers unlimited traffic and/or unlimited storage for the client web sites, the intention is to provide a large space to serve web documents, not an offsite storage area for electronic files. All of your web pages (html) must be 'linked' with files (.GIF, .JPEG, etc.) stored on our server. Web sites that are found to contain either/or no html documents, a large number of unlinked files are subject to warning, suspension or cancellation at the discretion of our management. To maintain the integrity of our service the following limitations apply to such hosting plans:
                 <br />
                Sites with Banners, graphics or cgi scripts running from their domain used on other domain <br />
                Sites with picture galleries (This is any site where 50% of the files transferred is graphics) <br />
                Sites offering download files or archives. (This is any site where more than 50% of the monthly traffic is from file downloads) <br />
                We will be the sole arbiter as to what constitutes a violation of this provision.</TermOfServiceBodyDesc>

            <TermOfServiceBodyInfoTitle> Commercial advertisements with e-mail:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>Unsolicited commercial advertisements are not allowed in e-mail, and will likely result in account suspension or cancellation. <br />
                Commercial advertisements are unwelcome in most Usenet discussion groups and on most e-mail mailing lists. Inappropriate posting may result in account suspension or cancellation. <br />
                See the newsgroup or mailing list's charter for whether advertising is allowed or not. "Spamming," or sending a message to many different off-topic newsgroups, is particularly unethical and will be treated as such. <br />
                Sending a message, especially an advertisement, to more than five or six recipients, is by itself spamming unless the individuals have specifically requested to be added to a mailing list on that topic. <br />
                E-mail is a person-to-person medium, not a broadcast medium.</TermOfServiceBodyDesc>

             <TermOfServiceBodyInfoTitle> Background Running Programs:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>In addition to these CLIENT agrees not to run any kind of 'server applications'. 
                 Every program/script that opens a port on the shared hosting server is considered a 'server application'. 
                 These include but are not limited to IRC servers, IRC proxies, IRC bots.CLIENT understands that the services 
                 are subject to immediate termination without compensation for non-compliance with the policies. Further, CLIENT will be responsible 
                 for the full amount of any tangible and intangible damages this may cause. PROVIDER reserves the right to change the policies from time to time to reflect the dynamic nature of the Internet. 
                 Both policies are available on-line any time or as a hard copy by request only.
            </TermOfServiceBodyDesc>
            <TermOfServiceBodyInfoTitle> Payment Policies:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>
                 All accounts are set up on a pre-pay basis. Setup fees may be charged for all new accounts and major account changes. 
                 All pricing is guaranteed for the term of pre-payment. We reserves the right to change prices at any time. 
                 Any account not brought current within a week (7 days) of e-mail notice or exceeding this time frame in any way is subject to suspension. 
                 The customer is responsible for all money owed on the account from the time it was established to the time that the customer notifies us in writing for a request for termination of services. 
                 Credit card information is stored on file and will be auto-billed on the due date of the account. Email notification will be sent to you prior to your hosting renewal date.
                 </TermOfServiceBodyDesc>
                 <TermOfServiceBodyInfoTitle> Cancellation:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>
                 We reserve the right to cancel service at any time. All fees paid in advance of cancellation will be pro-rated and paid by us if we institute our right of cancellation. Any violation of policies which results in extra costs will be billed to the customer (i.e. transfer, space etc.)
                All of our web hosting plans are backed by a 30 day money back guarantee. If you are not completely satisfied with our services or support within the first 30 days of your contract, you will be given a full refund of the contract amount including setup fees but excluding overages. Domain Registration fees are not refundable at all. If the web hosting plan includes a free domain name registration, when cancelled an amount equal to the regular domain name registration fee will be charged. For web hosting contracts of 3 months or less, the full contract amount less any domain registration fees and overages will be refunded if we are notified within the first 30 days following activation. No refund is available after the 30th day. For web hosting contracts longer than three months, a refund equal to one half of the contract amount less any domain registration fees and overages will be given if we are notified prior to the first day of the second half of the contract term. For example, on a twelve month contract we must receive the notice of cancellation prior to the first day of the sixth month of the contract. No refunds will be given once the second half of the contract term has begun. This policy does not apply to any additional services such as overages, additional disk space, additional pop accounts, etc. Due to security concerns, all account cancellations must be done in writing via mail or fax with a valid signature of the primary contact of the account, account name, reason for cancellation. We also accept account cancellation submitted from the registered email address of the account holder. Phone requests will not constitute acceptance of any cancellation. 
                If payment was made by check or bank transfer, payment will be made by company check within 15 days of receipt of cancellation.
                </TermOfServiceBodyDesc>
                 <TermOfServiceBodyInfoTitle> Lawful Purpose:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>
               We reserve the right to refuse service to anyone. Customers may only use our servers for lawful purpose. 
               Transmission of any material in violation of any Federal, provincial or Local regulation is prohibited. 
               This includes, but is not limited to copyrighted material, material legally judged to be threatening or 
               obscene, and material protected by trade secrets. 
               We expressly forbid anyone from using servers for the propagation, distribution, housing, processing, storing, or otherwise handling in any way lewd, obscene, 
               or pornographic material, or any other material which we deem to be objectionable, including, but not limited to, pornography, satanic materials, and any and all 
               materials of an adult nature. The designation of any materials as such described above is left entirely to the discretion of our management.
             </TermOfServiceBodyDesc>
                 <TermOfServiceBodyInfoTitle> INDEMNIFICATION:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>
             YOU AGREE TO RELEASE, INDEMNIFY, AND HOLD THE PRIMARY SERVICE PROVIDER AND BACKEND SERVICE PROVIDER, THEIR CONTRACTORS, 
             AGENTS, EMPLOYEES, OFFICERS, DIRECTORS AND AFFILIATES HARMLESS FROM ALL LIABILITIES, CLAIMS AND EXPENSES, 
             INCLUDING ATTORNEY'S FEES AND COURT COSTS, FOR THIRD PARTY CLAIMS RELATING TO YOUR USE OF THE SERVICES OR 
             ARISING UNDER THIS AGREEMENT, INCLUDING WITHOUT LIMITATION, INFRINGEMENT BY YOU OR SOMEONE ELSE USING YOUR COMPUTER, 
             OF ANY INTELLECTUAL PROPERTY OR OTHER PROPRIETARY RIGHT OF ANY PERSON OR ENTITY, OR FROM THE VIOLATION OF ANY TERM OR CONDITION 
             OF THIS AGREEMENT. WHEN EITHER THE PRIMARY SERVICE PROVIDER AND/OR BACKEND SERVICE PROVIDER MAY BE INVOLVED IN A SUIT INVOLVING 
             A THIRD PARTY AND WHICH IS RELATED TO THE SERVICES UNDER THIS AGREEMENT, EITHER THE PRIMARY SERVICE PROVIDER AND/OR BACKEND SERVICE 
             PROVIDER MAY SEEK WRITTEN ASSURANCES FROM YOU IN WHICH YOU PROMISE TO INDEMNIFY AND HOLD SUCH PARTIES HARMLESS FROM THE COSTS AND 
             LIABILITIES DESCRIBED IN THIS PARAGRAPH. SUCH WRITTEN ASSURANCES MAY INCLUDE THE POSTING OF PERFORMANCE BONDS OR OTHER GUARANTEES. 
             YOUR FAILURE TO PROVIDE SUCH ASSURANCES MAY BE CONSIDERED A BREACH OF THIS AGREEMENT BY YOU.
             <br />
             <br />
             You agree that the Backend Service Provider shall not be liable for the actions, inactions, negligence, or intentional misconduct 
             of the Primary Service Provider. You acknowledge and agree that neither the Primary Service Provider nor the Backend Service Provider 
             are agents for one another.Customer agrees that it shall defend, indemnify, save and hold us harmless from any and all demands, liabilities, 
             losses, costs and claims, including reasonable attorney's fees asserted against us, our agents, our customers, officers and employees, 
             that may arise or result from any service provided or performed or agreed to be performed or any product sold by customer, it's agents, 
             employees or assigns. Customer agrees to defend, indemnify and hold us harmless against liabilities arising out of; (1) any injury to person or property 
             caused by any products sold or otherwise distributed in connection with our servers; (2) any material supplied by customer infringing or allegedly infringing on 
             the proprietary rights of a third party; (3) copyright infringement and (4) any defective products sold to customer from our servers.
             </TermOfServiceBodyDesc>
                 <TermOfServiceBodyInfoTitle> DISCLAIMER OF WARRANTIES:</TermOfServiceBodyInfoTitle>
             <TermOfServiceBodyDesc>
             NEITHER THE PRIMARY SERVICE PROVIDER NOR BACKEND SERVICE PROVIDER MAKE ANY REPRESENTATIONS NOR WARRANTIES OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, 
             IN CONNECTION WITH THIS AGREEMENT OR THE SERVICES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, 
             UNLESS SUCH REPRESENTATIONS AND WARRANTIES ARE NOT LEGALLY EXCLUDABLE. YOU UNDERSTAND AND AGREE THAT ANY MATERIAL AND/OR DATA DOWNLOADED OR 
             OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE 
             TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL AND/OR DATA. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, 
             OBTAINED BY YOU FROM EITHER THE PRIMARY SERVICE PROVIDER OR BACKEND SERVICE PROVIDER SHALL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN. SOME JURISDICTIONS 
             DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
             </TermOfServiceBodyDesc>
           </TermOfServiceBodyWrapper>

           <TermOfServiceBodyWrapper>
           <TermOfServiceBodyAside>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/termsofservice" style={{color: '#7fb701'}}>Terms of Service Agreement</TermOfServiceBodyLink> </TermsOfServiceBodyList>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/privacy-policy">Privacy Policy </TermOfServiceBodyLink></TermsOfServiceBodyList>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/marketplace-policy">Marketplace Terms of Service </TermOfServiceBodyLink> </TermsOfServiceBodyList>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/refund-policy">Refund Policy </TermOfServiceBodyLink></TermsOfServiceBodyList>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/subpoena-policy">Court Order & Subpoena Policy</TermOfServiceBodyLink></TermsOfServiceBodyList>
               <TermsOfServiceBodyList> <TermOfServiceBodyLink to="/copyright-policy">Copyright and Trademark Policies </TermOfServiceBodyLink></TermsOfServiceBodyList>
           </TermOfServiceBodyAside>
            </TermOfServiceBodyWrapper>


         </TermOfServiceBody>
      </TermOfServiceWrapper>
    </TermsOfServiceContainer>
  )
}

export default TermsContainer