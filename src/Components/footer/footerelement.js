import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer= styled.div`
background-color:#101522;

`;

export const FooterWrapper = styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width: 1100px;
margin: auto;
`;

export const FooterLinksContainer = styled.div`
display:flex;
justify-content:center;

@media screen and (max-width:820px){
    padding-top: 32px;

}


`;

export const FooterLinksWrap = styled.div`
display:flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}

`;

export const FooterLinksItems = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin:16px;
text-align:left;
width:160px;
box--sizing: border-box;
color:#01bf71;

@media screen and (max-width:420px){
    margin:0;
    padding:10px;
    width:100%;
}
`;

export const FooterLinkTitle = styled.h1`
font-size:20px;
margin-bottom:16px;


`;

export const  FooterLink = styled(Link) `
color: #fff;
text-decoration:none;
margin-bottom: 0.2rem;
font-size: 14px;

&:hover{
    color:#01bf71;
    transition: 0.3s ease-out;
}

`;

export const OurLink = styled.div`
max-width:450px;
width:100%;


`;

export const OurLinkWrap=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin-top: 20px ;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const OurLogo = styled.div`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration: none;
font-size:1.5rem;
display:flex;
align-items:center;
margin-bottom: 10px;
font-weight: bold;


`;
export const WebsiteRights = styled.div`
color:#fff;

font-size:1 rem;

@media screen and (max-width: 820px){
    font-size:1.5 rem;
}

`;