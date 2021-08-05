import React from "react";
import { Container,Card,Col,Row } from "react-bootstrap"; 
import Slider from "react-slick";
import { testimonialData } from '../Testimonials/Testimonialsdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'react-bootstrap/Image'


const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };
    
    return (
        <Container style={{ backgroundColor:'black',Color:'white'}}>
            {/* <div className="clearfix">
                <h2 className="float-center">Our Clients</h2>

            </div> */}
            <></>
            <Slider {...settings}>
                {testimonialData.map((product, index) => {
                    return(
                        <Row>
                     
                                <Col xs={6} md={4} >
                                <Card  key={index}>
                                        <Image roundedCircle src={product.img}  alt={product.alt} style={{ height: '10rem', width: '20rem' }}/>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>  
                                    </Card.Body>
                                </Card>
                            </Col>
                       
                        </Row>
                    );
                })}

            
           </Slider>
        </Container>
    );
}

export default Testimonials








