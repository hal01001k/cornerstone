import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p className="txt text-justify">Started in 2020, We may new and inexperienced but we are determined to built our company with trust and credibility. Our team is new but with attested knowledge we have build improved model that eliminates middle man in existing construction process. Our model is highly optimized and helps you save you hard earned Money.</p>
                    <p className="txt text-justify">The company traces its humble beginnings to <em>The Google Meet</em>, a temporary service used during the bleak time of COVID-19 pandemic.</p>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                   <img src="https://i.dlpng.com/static/png/6712733_preview.png" height="300px" alt="logo"/>
                </div>
                <div className="col-12">
                    <hr />
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Prayagraj is such a worse name for Aallhabad that I would
                                rather prefer naming it as Aallhaworse.</p>
                                <footer className="blockquote-footer">Hitesh Daksh,
                                    <cite title="Source Title"> The Wit and Wisdom of Daksh,
                                          H. Daksh, Banana Books, 2020</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;