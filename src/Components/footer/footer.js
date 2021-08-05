import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer,FooterWrapper,FooterLinksContainer,FooterLinksWrap,FooterLinksItems,FooterLinkTitle,FooterLink,OurLink,OurLinkWrap,OurLogo,WebsiteRights} from './footerelement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksItems>
                        <FooterLinkTitle> Send us an E-mail</FooterLinkTitle>

                        <FooterLink to="/"> G-Mail </FooterLink>


                    </FooterLinksItems>
                    <FooterLinksWrap>
                        <FooterLinksItems>
                            <FooterLinkTitle> About the Company</FooterLinkTitle>
                                
                                <FooterLink to="/"> Testimonials </FooterLink>
                                <FooterLink to="/"> Careers </FooterLink>
                               
                            
                        </FooterLinksItems>
                        
                            
                        
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <FooterLinksItems>
                            <FooterLinkTitle> Our Social Accounts</FooterLinkTitle>

                            <FooterLink href="/" target="_blank" arial-label="Facebook"><FaFacebook /></FooterLink>
                            <FooterLink href="/" target="_blank" arial-label="Linkedin"><FaLinkedin /></FooterLink>
                            <FooterLink href="/" target="_blank" arial-label="Twitter"><FaTwitter /></FooterLink>
                            <FooterLink href="/" target="_blank" arial-label="Instagram"><FaInstagram /></FooterLink>

                           
                        </FooterLinksItems>
                       
                        
                        
                    </FooterLinksWrap>
                </FooterLinksContainer>
                <OurLink>
                    <OurLinkWrap>
                        <OurLogo >
                            Megenagna Pharmacy
                        </OurLogo>
                        <WebsiteRights>  Powered by IPOCOMCORP @{new Date().getFullYear()} All Rights Resrved</WebsiteRights>
                    </OurLinkWrap>
                </OurLink>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer
