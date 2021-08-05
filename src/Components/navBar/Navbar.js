import { React,useState,useEffect} from 'react';
import{FaBars} from 'react-icons/fa';
import{Nav,Navcontainer,Navlogo,MobileIcon,Navitem,NavLink,Navmenu,NavRoute,ExtRoute} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll'



const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]= useState(false)
   
    const changeNav=()=>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
        
    }, []);

    const toggleHome = ()=>{
        scroll.scrollToTop()
    };

    return (
        <>
            <Nav scrollNav={scrollNav} >
                <Navcontainer>
                    <Navlogo to = '/' onClick={toggleHome}>
                        MEGPHARMA
                    </Navlogo>
                    <MobileIcon onClick ={toggle}> 
                        <FaBars/> 
                    </MobileIcon>
                        <Navmenu>
                            <Navitem>
                            <NavLink to onClick={toggleHome}> Home </NavLink>
                            </Navitem>
                            <Navitem>
                            <NavLink to ="service"
                            smooth={true} duration ={500} spy={true}
                            exact='true' offset={-80}
                            > Services </NavLink>
                            </Navitem>

                        <Navitem>
                            <NavLink to="about" smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}> About us </NavLink>
                        </Navitem>

                            <Navitem>
                            <NavLink to="contact" smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}> Contact Us </NavLink>
                            </Navitem>
                           

                            
                            <Navitem>
                            <NavRoute to={{ pathname: "http://megenagnapharmacy.ga/blog/" }} target="/"> Blog </NavRoute>
                            </Navitem>
                            <Navitem>
                                {/* <NavRoute to="/portfolio"> Store </NavRoute> */}
                            <ExtRoute to={{ pathname: "http://megenagnapharmacy.ga/home/" }} target="/" > Store  </ExtRoute>
                            </Navitem>
                        <Navitem   >
                            {/* <button type="button" className="button" onClick={() => setShowModal(o => !o)}>Get An Estimate </button> */}
                            {/* <Estimateform showModal={showModal} setShowModal={setShowModal}/> */}
                            {/* <NavRoute to="/estimate"> Whole Seller </NavRoute> 
                            <ExtRoute to={{ pathname: "http://megenagnapharmacy.ga/" }} target="/" > Whole Sale  </ExtRoute> */}
                            
                        </Navitem>

                      
                           
                            
                        </Navmenu>
                </Navcontainer>
            </Nav>
        </>
    )
}

export default Navbar

