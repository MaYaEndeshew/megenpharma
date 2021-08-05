import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`

background: ${({scrollNav})=>(scrollNav ?'#101522': 'transparent')};
margin-top:-80px;
display: flex;
justify-content: center ;
align-items: center;
font-size: 1rem;
position: sticky;
top:0px;
z-index:1;
@media screen and(max-width:960px){
    transition:0.8s all ease;
    height:90px;
}
`;

export const Navcontainer= styled.div`
display:flex;
justify-content: space-between;
height:80px;
z-index:99;
width:100%;
// padding: 0 24px;
max-width: 1300px;
`;

export const Navlogo = styled(LinkR)`

color: #fff;
display:flex;
justify-self: flex-start ;
font-size: 2rem;
align-items: center;
// margin-left: 24px
margin-top: 10px;
cursor: pointer;
font-weight: bold;
text-decoration: none;
@media screen and (max-width :768px){
    display:block;
    position: absolute;
    top:10px;
    margin-left: 220px;

    transform : translate(-100%,60%);
    font-size: 2.2rem;
    cursor:pointer;
    color: #01bf71;
}

`;


export const MobileIcon = styled.div`

display:none;
@media screen and (max-width :768px){
    display:block;
    position: absolute;
    top:30px;
    right:2px;
    transform : translate(-100%,60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:#01bf71;

}
`;

export const Navmenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
 margin-right: 22px;

@media screen and (max-width :768px){
 display: none;

}
`;


export const Navitem = styled.li`

height:60px;
color:#fff;
`;


export const NavLink = styled(LinkS)`
color: #fff;
display:flex;
align-items:center;
text-decoration: none;
margin-right: 2rem;
height:100%;
 cursor : pointer;

 &.active{
     border-bottom:3px solid #01bf71;
 }

`;
export const NavRoute = styled(LinkR)`
color: #fff;
display:flex;
align-items:center;
text-decoration: none;
margin-right: 2rem;
height:100%;
 cursor : pointer;

 &.active{
     border-bottom:3px solid #01bf71;
 }

`;
export const ExtRoute = styled(LinkR)`
background: #02795d;
color:#fff;
// display:flex;
// align-items:center;
// text-decoration: none;
margin-left: 4rem;
margin-top:1rem;
// height:100%;
//  cursor : pointer;

 width:170px;
height:40px;
border-radius:50px;
//background:${({ primary }) => (primary ? '#02795d' : '#101522')};
white-space: nowrap;
padding:${({ big }) => (big ? '14px 68px' : '12px 30px')};
// color:${({ dark }) => (dark ? '#02795d' : '#fff')};
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