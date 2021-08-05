import React from 'react'
import Button  from '../Button/Buttonelement';
import { AboutContainer,AboutWrapper, AboutRow, Column1,Column2, TextWrapper,TopLine,Heading, Subtitle,ImgWrap,Img,BtnWrap } from './aboutsecelement'
const Aboutsec = ({topLine,lightBg,id,imgStart,lightText,headline,darkText,description,buttonLabel,alt,primary,dark,dark2,img}) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
               <AboutWrapper>
                   <AboutRow imgStart={imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                                    <Button to={{ pathname: "http://megenagnapharmacy.ga/contact/" }} target="/"
                            //    smooth={true}
                            //    duration={500}
                            //    spy={true}
                            //    exact="true"
                            //    offset={-80}
                            //    primary={primary ? 1:0}
                            //    dark={dark ? 1:0}
                            //    dark2={dark2 ? 1:0}
                               >{buttonLabel}</Button>
                           </BtnWrap>

                       </TextWrapper>
                       
                       </Column1>
                       <Column2>
                            <ImgWrap>
                            <Img>
                                    <img src={img} alt={alt} width="300" height="300"/>
                            </Img>
                         

                            </ImgWrap>
                       </Column2>
                   </AboutRow>
               </AboutWrapper>

            </AboutContainer>
        </>
    );
}

export default Aboutsec
