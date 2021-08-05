import React,{useRef,useEffect} from 'react';
import Video1 from '../../images/videos/pills.mp4';
import {HeroContainer,HeroBg,HeroContent,HeroBtnWrap,HeroH1,HeroP,ArrowForward,ExtRoute} from './heroelements';


const Hero = () => {
     //  const videoRef = useRef(null)
    
    return (
             
           
            //  useEffect(() =>{
            //             const { current: videoElement } = videoRef
            //             videoElement.setAttribute('muted', '')
            //         }, [ ]),

             <HeroContainer id={"home"} >
            
                <HeroBg>
                     < video 
                        autoPlay
                        loop 
                        muted
                        style={{
                            position:"absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "translate(-50%,-50%)",
                            zIndex: "-1"

                         }}>
                         <source src={Video1} type="video/mp4"/>
                     </video>
                </HeroBg>
            
               <HeroContent>
                {/* <button onClick={() => setModalIsOpen(true)}>Get An Estimate</button> */}
                   <HeroH1> MEGENAGNA PHARMACY</HeroH1>
                   <HeroP>
                       Call and CONTACT US FOR MORE INFORMATION
                   </HeroP>
                
                  <HeroBtnWrap >
                    
                    <ExtRoute to={{ pathname: "http://megenagnapharmacy.ga/shop/" }} target="/" > Shop Now <ArrowForward /> </ExtRoute>
                   </HeroBtnWrap>
               </HeroContent>
              </HeroContainer>
               
       
    );
}

export default Hero
