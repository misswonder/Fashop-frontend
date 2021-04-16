import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const TopNav = ({ view }) => {
  const user = useSelector((state) => state.user);
  return (
    <div id="navbar">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <div>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/orderhistory">Order History</Nav.Link>  
          </div>
          <div>
            <Nav.Link as={Link} to="/mycart">My Cart <i class="shopping cart icon"></i></Nav.Link>
            {user && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNav;
