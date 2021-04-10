import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const TopNav = ({ view }) => {
    return(
        <div id='navbar'>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                        <NavDropdown title="Filters" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filters">Prices</NavDropdown.Item>
                            <NavDropdown.Item href="/filters">Colors</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Link href="/orderhistory">Order History</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default TopNav; 