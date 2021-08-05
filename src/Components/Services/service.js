import React from 'react'
import {ServiceContainer,ServiceCard,ServiceH1,ServiceH2,ServiceP,ServiceWrapper} from'./serviceselement';
import Icon1 from  '../../images/svg/doc.jpg'
import Icon2 from '../../images/svg/PharmacistsMortar.svg'
import Icon3 from '../../images/svg/pharmashop.png'
import Icon4 from '../../images/svg/webshopping.svg'

const Service = () => {
    return (
        <ServiceContainer id ={"service"}>
            <ServiceH1>Our Services</ServiceH1>
            <ServiceH2> Our company provides services with the aim of better Quality of Care,Health,and Lower Cost  </ServiceH2>
            <ServiceWrapper>
                <ServiceCard>
                    {/* <ServiceIcon > */}
                        <img src={Icon1} alt="ic1" width="160" height="160" />
                    {/* </ServiceIcon> */}
                    <ServiceP>Medication Management</ServiceP>
                </ServiceCard>

                <ServiceCard>
                    {/* <ServiceIcon > */}
                        <img src= {Icon2} alt="ic2" width="160" height="160" />
                    {/* </ServiceIcon> */}
                    <ServiceP>Compounding</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    {/* <ServiceIcon > */}
                        <img src={Icon3} alt="ic3" width="160" height="160" />
                    {/* </ServiceIcon> */}
                    <ServiceP>Clinic</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    {/* <ServiceIcon > */}
                        <img src={Icon4} alt="ic4" width="160" height="160" />
                    {/* </ServiceIcon> */}
                    <ServiceP>Wholesale </ServiceP>
                </ServiceCard>
                         
            </ServiceWrapper>
        </ServiceContainer>
    );
}

export default Service
