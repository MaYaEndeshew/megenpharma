import React, { useState } from 'react';
import Navbar from '../Components/navBar/Navbartwo';
import Sidebar from '../Components/sidebar/Sidebar';
import Portfoliohome from '../Components/Portfolio/portfoliohome';




const Portfolio = () => {


    const [isOpen, setIsOPen] = useState(false);
    const toggle = () => {
        setIsOPen(!isOpen)
    }
  
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Portfoliohome/>
        </>
    );
}

export default Portfolio;
