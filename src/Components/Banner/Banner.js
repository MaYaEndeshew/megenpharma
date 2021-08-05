import React,{useState,useRef,useEffect} from 'react';
import styled,{css} from 'styled-components/macro'
import SquareButton from '../Button/SquareBtn'
// import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoMdArrowForward,IoMdArrowBack} from 'react-icons/io';
//import ArrowForwardIosIcon from '@material-ui/icons';

const BannerSection= styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const BannerWrapper= styled.div`
width: 100%;
height:100%;
display: flex;
justify-content:center;
align-items:center;
overflow:hidden;
position: relative;
`;
const BannerSlide = styled.div`
width:100%;
height:100%;
`;
const BannerSlider = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

&::before{
    content:'';
    position:absolute;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background:Linear-gradient(0deg, 
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%)
}
`;

const BannerImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;
`;

const BannerContent = styled.div`
position:relative;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px);
color:#fff;
background:#18483494;
h1{
    font-size:clamp(1rem,8vw,2rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
}
`;
// const Arrow = styled(IoMdArrowRoundForward)`
// margin-left:0.5rem;
// `;

const SliderButtons = styled.div`
position:absolute;
bottom:50px;
right:50px;
display:flex;
// z-index:10;
`;

const arrowButtons= css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
//background: #000d1a;
background: #01bf71;
border-radius: 50px;
padding:10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #cd853f;
    transform: scale(1.05);
}
`;

const PrevArrow = styled(IoMdArrowForward)`
${arrowButtons}
`;
const NextArrow = styled(IoMdArrowBack)`
${arrowButtons}
`;




const Banner=({slides})=> {

    const[current,setCurrent]= useState(0);
    const length= slides.length;
    const timeout = useRef(null);

    useEffect(()=>{
        const nextSlide =()=>{
            setCurrent(current => (current === length -1?0 : current +1))
        }
        timeout.current = setTimeout(nextSlide, 5000)

        return function (){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current,length])

    const nextSlide = ()=>{
        setCurrent(current === length - 1 ?0 : current +1)
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current -1)
    };  

    return (
    <BannerSection>
        <BannerWrapper>
            {slides.map((slide, index) => {
             return(
                 <BannerSlide key={index}>
                     {index === current && (
                     <BannerSlider>
                         <BannerImage src={slide.image} alt={slide.alt}/>
                         <BannerContent>
                             <h1>{slide.title}</h1>
                             {/* <p>{slide.label}</p> */}
                              <SquareButton 
                             to={slide.path} >
                              {slide.label}
                             {/* <Arrow/> */}
                             </SquareButton> 
                         </BannerContent>
                     </BannerSlider>
                     )}
                 </BannerSlide>      
             )
            })}
            <SliderButtons>
                    <NextArrow onClick={nextSlide} />
                <PrevArrow onClick={prevSlide}/>
                
            </SliderButtons>
        </BannerWrapper>
    </BannerSection>
    );
};

export default Banner;