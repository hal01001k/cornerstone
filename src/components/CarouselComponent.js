import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100 h-100"
                    src="assets/images/interior.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3><strong>Eclectic Theme</strong></h3>
                    <p> Hello! How are you doing?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100 h-100 "
                    src="assets/images/int2.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3><strong>Wooden Theme</strong></h3>
                    <p>I hope you are staying well</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="h-100 w-100"
                    src="assets/images/int3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3><strong>Vibrant Color</strong></h3>
                    <p>Hi you are welcome here! Please enjoy your stay.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;