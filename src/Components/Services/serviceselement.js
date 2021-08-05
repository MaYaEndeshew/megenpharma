import styled from 'styled-components'

export const ServiceContainer = styled.div`
text-direction:column;
justify-content:center;
align-items:center;
// background:#010606;
background:#101522;


height: 450px;
//padding-bottom:20px;
padding-top:30px;


@media screen and (max-width: 768px){
    height:1200px;
}
@media screen and (max-width: 480px){
    height: 1400px;
}
`;

export const ServiceWrapper = styled.div`
max-width:2000px;
display:grid;
// grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
align-items: center;
margin-top:10px;
 
@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
}
@media screen and (max-width: 480px){
    grid-template-columns:1fr ;
   
}
`;


export const ServiceCard = styled.div`
background:#18483494;
//background:#01bf71;
display:flex;
 height: 300px;
flex-direction:column;
justify-content:flex-start;
align-items: center;
border-radius:10px;
max-height:400px;
padding-top:50px;


box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transition: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    
}
`;

export const ServiceIcon = styled.img`
height: 260px;
width:160px;

`;

export const ServiceH1 = styled.h1`
font-size= 2.5rem;
color:#01bf71;
//color:#fff;
text-align:center;
align-items: center;
padding-bottom:20px;
padding-top: 10px;


@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const ServiceH2 = styled.h2`
font-size:1rem;
color:#01bf71;
align-items: center;
text-align:center;
padding-bottom:10px;


@media screen and (max-width: 480px){
    font-size: 1rem;
}
`;

export const ServiceP = styled.p`
padding-top:10px;
font-size: 1rem;
text-align: center;
color:#fff;
`; 