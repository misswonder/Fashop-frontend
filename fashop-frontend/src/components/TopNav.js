import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const TopNav = ({ view }) => {
  const user = useSelector((state) => state.user);
  return (
    <div id="navbar">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <div>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Filters" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filters">Prices</NavDropdown.Item>
              <NavDropdown.Item href="/filters">Colors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/orderhistory">Order History</Nav.Link>
          </div>
          <div>
            <Nav.Link href="/mycart">My Cart</Nav.Link>
            {user && <Nav.Link href="/logout">Logout</Nav.Link>}
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNav;
