import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact() {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        95 & 99, Zircon C<br />
                        Coral, Quarters <br />
                        TRI CHY.<br />
                        <i className="fa fa-phone"></i>: +91 7094959888<br />
                        <i className="fa fa-fax"></i>: +91 7073877699<br />
                        <i className="fa fa-envelope"></i>:<a href="#"> info@pineapple.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+917094959888"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-success" href="tel:++917073877699"><i className="fa fa-whatsapp"></i> Watsapp</a>
                        <a role="button" className="btn btn-info" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;