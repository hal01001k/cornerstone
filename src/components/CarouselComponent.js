import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100 h-110"
                    src="https://inhabitat.com/wp-content/blogs.dir/1/files/2010/09/Dwell-Turkell-Lindal-Homes-3.jpg"
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
                    src="http://xlinedesignstudio.com/wp-content/uploads/2017/02/web1-800x400.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3><strong>Wooden Theme</strong></h3>
                    <p>I hope you are staying well</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="h-200 w-100"
                    src="https://www.johndickandson.co.uk/wp-content/uploads/2017/08/zoffany_2017_damask_01_er-824x1024.jpg"/>
                <Carousel.Caption>
                    <h3><strong>Vibrant Color</strong></h3>
                    <p>Hi you are welcome here! Please enjoy your stay.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;