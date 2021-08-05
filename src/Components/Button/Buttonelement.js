import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

const Button = styled(LinkR)`
width:170px;
height:40px;
border-radius:50px;
background:${({ primary }) => (primary ? '#01BF71' : '#101522')};
white-space: nowrap;
paddiing:${({big})=> (big ? '14px 48px': '12px 30px')};
color:${({dark})=>(dark ? '#010606' : '#fff')};
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;

// &:hover{
// transition:all 0.2s ease-in-out;
// background:${({primary}) => (primary ? '#ff512D' : '#01BF71')};
// width:180px;
// height:60px;
}


`;

export default Button;