import React from 'react'
import {
    PartnerSectionContainer,
    PartnerH1,
    PartnerSectionWrapper,
    PartnerSectionWrap,
    PartnerImg
} from './PartnerSectionElem';

import Partner1 from '../../assets/images/partner1.png';
import Partner2 from '../../assets/images/partner2.png';
import Partner3 from '../../assets/images/partner3.png';
import Partner4 from '../../assets/images/partner4.png';
import Partner5 from '../../assets/images/partner5.png';

const PartnerSection = () => {
  return (
    <PartnerSectionContainer>
        <PartnerH1> Our Partners </PartnerH1>
          <PartnerSectionWrapper>
           <PartnerSectionWrap>
              <PartnerImg src={Partner1} />
          </PartnerSectionWrap>
          <PartnerSectionWrap>
              <PartnerImg src={Partner2} />
          </PartnerSectionWrap>
          <PartnerSectionWrap>
              <PartnerImg src={Partner3} />
          </PartnerSectionWrap>
          <PartnerSectionWrap>
              <PartnerImg src={Partner4} />
          </PartnerSectionWrap>
          <PartnerSectionWrap>
              <PartnerImg src={Partner5} />
          </PartnerSectionWrap> 
        </PartnerSectionWrapper>
    </PartnerSectionContainer>
  )
}

export default PartnerSection