import React from 'react';
import ControlledCarousel from "./CarouselComponent";
import {
    Card, CardImg, CardDeck, CardBody,
    CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, CardText
} from 'reactstrap';


function Home() {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <ControlledCarousel/>
            </div>
            <div className="row row-content">
                    <div className="col-12 col-md-3 mt-5 ">
                        <img src='/assets/images/team.png' height="auto" width="auto" alt="team"/>
                    </div>
                <div className="col-12 col-md-8 mt-5 ">
                    <h3>Our Team</h3>
                    <p className="txt text-justify">We have well trained and skilled personnel employed.
                        They share the same values and ethics as our company. Our Goal is to provide as well and satisfactory service
                        to our customer. With our optimized model we are always strive to provide affordable housing with
                        exception Aesthetics with keeping customer satisfaction as priority.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pad">
                    <h3><u>Featured Service</u></h3>
                </div>
                <div className="col-12">
                    <p className="txt text-justify">We provide you with cumulative service that
                        helps you ease your home construction. Having all services at one place the construction process becomes coherent.
                        Also, your choices tenfolds with services like ours and you get a well planned construction procedure that matches
                        that of a large Development Corporations.
                    </p>
                </div>
            </div>

                <div className="row">
                    <div className="col-12 col-md-5 offset-md-1 mt-5">
                        <Card style={{width: '18rem', height: '20rem'}}>
                            <CardImg src="assets/images/arch.png" alt="arch"/>
                            <CardBody>
                                <CardTitle>Architecture</CardTitle>
                                <CardSubtitle>Map your Dream house.</CardSubtitle>
                                <CardText>We help you Map you dream house</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 offset-md-1 mt-5">
                        <Card style={{width: '18rem', height: '20rem'}}>
                            <CardImg src="assets/images/const.png" alt="const"/>
                            <CardBody>
                                <CardTitle>Construction</CardTitle>
                                <CardSubtitle>Build your Dream house.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 offset-md-1 mt-5">
                        <Card style={{width: '18rem', height: '20rem'}}>
                            <CardImg src="assets/images/int.png" alt="int"/>
                            <CardBody>
                                <CardTitle>Interior Design</CardTitle>
                                <CardSubtitle>Eye pleasing Interior</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 offset-md-1 mt-5">
                        <Card style={{width: '18rem', height: '20rem'}}>
                            <CardImg src="assets/images/prop.png" alt="prop"/>
                            <CardBody>
                                <CardTitle>Property Dealing</CardTitle>
                                <CardSubtitle>Help you buy Desirable property.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            <hr />
            <div className="row pad">
                <div className="col-12">
                    <h3><u>Benefits of Our Service</u></h3>
                </div>
                <div className="col-12">
                    <p className="txt text-justify">Why hire us? We provide you with cumulative service that
                    helps you ease your home construction. Every procedure of your home's construction will be handled professionally.
                    Any request will be handled with ease and without any hurdles. With such service your stress will be eliminated and
                        you will have your <b>Dream Home</b>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CardDeck className="pad">
                        <Card style={{width: '18rem'}}>
                            <CardImg src="assets/images/stress.png" alt="omg"/>
                            <CardBody>
                                <CardTitle>Ease of Service</CardTitle>
                                <CardSubtitle>Reduced Procedure</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card style={{width: '18rem'}}>
                            <CardImg src="assets/images/yay.png" alt="omg"/>
                            <CardBody>
                                <CardTitle>Stress Free</CardTitle>
                                <CardSubtitle>Free from Everything</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card style={{width: '18rem'}}>
                            <CardImg src="assets/images/omg.png" alt="omg"/>
                            <CardBody>
                                <CardTitle>Your Mannat</CardTitle>
                                <CardSubtitle>Guaranteed Desired Home</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5"></div>
                <div className="col-6 align-self-center">
                    <svg width="150" height="150" viewBox="0 0 200 200">
                        <g transform="translate(100 100)">
                            <path transform="translate(-50 -50)" fill="tomato"
                                  d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                values="1; 1.5; 1.25; 1.5; 1.5; 1;"
                                dur="1s"
                                repeatCount="indefinite"
                                additive="sum">
                            </animateTransform>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

    );
}

export default Home;

//
//
///<div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                 </header>
//             </div>
//
///                <div className="col-sm-6 col-md-6 ">
//                     <h3>Our Team</h3>
//                     <img src="assets/images/team.png" fluid alt="team"/>
//                 </div>
//                 <div className="col-sm-6 col-md-5">
//                     </div
