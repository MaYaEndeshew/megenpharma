import React,{useRef,useEffect} from 'react';
import Video1 from '../../images/videos/pills.mp4';
import {HeroContainer,HeroBg,HeroContent,HeroBtnWrap,HeroH1,HeroP,ArrowForward,ExtRoute} from './heroelements';


const Hero = () => {
     const videoRef = useRef(null)
    
    return (
             
           
             useEffect(() => {
                        const { current: videoElement } = videoRef
                        videoElement.setAttribute('muted', '')
                    }, []),
             <HeroContainer id={"home"} >
            
                <HeroBg>
                < video src={Video1} ref={videoRef} width='1500px' height="900px" playsInline autoPlay loop disablePictureInPicture muted />
                {/* <img src={bckgimg} alt="bck" /> */}
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
