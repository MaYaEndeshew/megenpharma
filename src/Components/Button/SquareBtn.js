import styled from 'styled-components'
import { Link } from 'react-scroll'

const SquareButton = styled(Link)`
font-size: 1rem;
// height:2rem;
 width:50%;
 margin: 1rem 4rem;
border: none;
// background: #e31837;
background: #01bf71;
color: #fff;
transition : 0.2 ease-out;
&:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}

`;

export default SquareButton