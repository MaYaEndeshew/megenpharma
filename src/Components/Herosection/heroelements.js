import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import {MdArrowBack, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
// background: #101522;
background:#000;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height:800px;
position:relative;
// z-inidex:1;
// :before{
// content: '';
// position:absolute;
// top:0;
// left:0;
// right:0;
// bottom:0;
// background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
// linear-gradient(180deg,rgba(0,0,0,2)0%, transparent: 100%);
// z-index:1;
// }

`;

export const HeroBg= styled.div`
position:absolute;

top:0;
right:0;
bottom:0;
left:0;
// width:fit-content;
// height:100%;
//width:100%;
object-fit: contain;
overflow:hidden;
//align-item:center;
 //background: rgba(39,62,84,0.82);

`;

// export const VideoBg = styled.div`
// width:100%;
// height:100%;
// object-fit:cover;

// `;

export const HeroContent =styled.div`

max-width:1200px;
position:absolute;
// padding: 8px 24px;

display:flex;
flex-direction:column;
align-items:center;

`;

export const HeroH1 = styled.h1`
// color:#01bf71;
color:#fff;
font-size:48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480 px){
    font-size:32px;
}

`;

export const HeroP = styled.p`
margin-top:24pxx;
color:#fff;
font-size: 24px;
text-align:center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480 px){
    font-size:18px;
}
`;

export const HeroBtnWrap = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`;

export const ArrowRight = styled(MdArrowBack)`
margin-left: 8px;
font-size:20px;
`;
export const ExtRoute = styled(LinkR)`
// color: #fff;
// display:flex;
// align-items:center;
// text-decoration: none;
// margin-right: 2rem;
// height:100%;
//  cursor : pointer;

 width:170px;
height:40px;
border-radius:50px;
// background:${({ primary }) => (primary ? '#fff' : '#010606')};
background:#01bf71;
white-space: nowrap;
paddiing:${({ big }) => (big ? '14px 48px' : '12px 30px')};
color:${({ dark }) => (dark ? '#010606' : '#fff')};
font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;

 &.active{
     border-bottom:3px solid #01bf71;
 }

`;