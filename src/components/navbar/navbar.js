import React from 'react';
// import { Link as RouterLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

function navbar() {
  return (
    <div className="navbar-div">
        <Navbar bg="dark" variant="dark" fixed="top">
            {/* <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            </a> */}
            <Navbar.Brand href="/">Book Haven</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ranking">Ranking</Nav.Link>
            <Nav.Link href="/another">Another</Nav.Link>
        </Nav>

      </Navbar>
    </div>
  );
}

export default navbar;
