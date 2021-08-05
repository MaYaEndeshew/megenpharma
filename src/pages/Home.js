import React,{useState}  from 'react';
import Navbar from '../Components/navBar/Navbar'
 import Sidebar from '../Components/sidebar/Sidebar'
import Hero from '../Components/Herosection/hero'
import Banner from '../Components/Banner/Banner'
import Aboutsec from '../Components/aboutsection/aboutsec'
import { homeobjOne } from '../Components/aboutsection/Data';
import { homeobjTwo } from '../Components/aboutsection/Data';
import { homeobjThree } from '../Components/aboutsection/Data';
import { SliderData } from '../Components/Banner/SliderData';
import Service from '../Components/Services/service';
import Products from '../Components/Products/Products';
import Testimonials from '../Components/Testimonials/Testimonial';



//Es7 snippets to do 'rfce'

const Home = () => {

    const[isOpen,setIsOPen]= useState(false);
    const toggle = () =>{
        setIsOPen(!isOpen)
    }
     
    return (
        <>
            <Sidebar isOpen={isOpen} toggle ={toggle}/> 
             <Navbar toggle={toggle}/>
            <Hero/>
            <Products heading='Shop At Our Store'/>
            <Banner slides={SliderData} />
            <Service/>
            <Aboutsec {...homeobjThree} />
            <Testimonials />
            <Aboutsec {...homeobjOne} />
            <Aboutsec {...homeobjTwo} />
            
           
            
        </>
    );
}

export default Home;

