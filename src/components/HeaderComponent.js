import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from "react-router-dom";


class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this)
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }

    render(){
        return(
            <div>
                <Navbar className="fixed-top" dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' class="d-inline-block align-top" height="30" width="30" alt='Pineapple'/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info-circle fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container jumbotron-fluid">
                        <div className="row row-header">
                            <div class="col-12 col-sm-6">
                                <h1 class="display-4">Cornerstone Inc.</h1>
                                <p class="lead">We help you build your Mannat with minimum budget and always meet your demands with keeping precision and Aesthetics as per your requirement that other fail to provide.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;


