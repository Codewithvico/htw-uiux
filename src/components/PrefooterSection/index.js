import React from 'react'
import Icon1 from '../../assets/images/icon1.png'
import Icon2 from '../../assets/images/icon2.png'
import Icon3 from '../../assets/images/icon3.png'
import Icon4 from '../../assets/images/icon4.png'
import { Button } from '../ButtonElem'
import {
    PrefooterContainer,
    PrefooterWrapper,
    PrefooterCard,
    PrefooterIcon,
    PrefooterH2,
    PrefooterP,
    PrefooterBtn,
} from './PrefooterElem'

const Prefooter = () => {
  return (
    <PrefooterContainer>
        <PrefooterWrapper>
            <PrefooterCard>
                <PrefooterIcon src={Icon1} />
                <PrefooterH2> Unlimited Tickets </PrefooterH2>
                <PrefooterP> Help us become aware of the situation and we will take measures to resolve it.</PrefooterP>
                <PrefooterBtn>
                <Button to='/submitticket.php'>Submit Ticket</Button>
                </PrefooterBtn>
            </PrefooterCard>
            <PrefooterCard>
                <PrefooterIcon src={Icon3} />
                <PrefooterH2> Premium Privacy </PrefooterH2>
                <PrefooterP> Shield your data and get peace of mind each time and keep your browsing history to yourself.</PrefooterP>
                <PrefooterBtn>
                <Button to='/security'>Secure Now</Button>
                </PrefooterBtn>
            </PrefooterCard>
            <PrefooterCard>
                <PrefooterIcon src={Icon3} />
                <PrefooterH2> Reseller Hosting </PrefooterH2>
                <PrefooterP> The quality you need to get started as a reseller. Our Speed, Your Success.</PrefooterP>
                <PrefooterBtn>
                <Button to='/register.php'>Get Started</Button>
                </PrefooterBtn>
            </PrefooterCard>
            <PrefooterCard>
                <PrefooterIcon src={Icon4} />
                <PrefooterH2> Customer Supprt </PrefooterH2>
                <PrefooterP> Helping our customers is our top priority. Need help now! Contact our support.</PrefooterP>
                <PrefooterBtn>
                <Button to='/submitticket.php'>Contact Us</Button>
                </PrefooterBtn>
            </PrefooterCard>
            <PrefooterCard>
                <PrefooterIcon src={Icon2} />
                <PrefooterH2> cPanel Control </PrefooterH2>
                <PrefooterP> Unlimited Sub Domains, FTP Accounts, and Email Accounts,Web Based File Manager, Etc.</PrefooterP>
                <PrefooterBtn>
                <Button to='/register.php'>Get Started</Button>
                </PrefooterBtn>
            </PrefooterCard>
            <PrefooterCard>
                <PrefooterIcon src={Icon2} />
                <PrefooterH2>  Managed Servers </PrefooterH2>
                <PrefooterP> The quality you need to get started with all the potential to earn is freedom.</PrefooterP>
                <PrefooterBtn>
                <Button to='/clientarea.php'>Get Started</Button>
                </PrefooterBtn>
            </PrefooterCard>
        </PrefooterWrapper>
    </PrefooterContainer>
  )
}

export default Prefooter