import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    // adding navbar from react-bootstrap
    <Navbar bg="dark" variant="dark " className="p-3">
      <Container>
        <NavLink className="menu-title" to={`/home`}>
          UCourse
        </NavLink>
        <Nav className="ms-auto">
          {/* added a horizontal stack for menu-bar */}
          <Stack direction="horizontal" gap={3}>
            <NavLink to={`/home`} className="menu-style">
              Home
            </NavLink>
            <NavLink to={`/services`} className="menu-style">
              Services
            </NavLink>
            <NavLink to={`/subscription`} className="menu-style">
              Subscription
            </NavLink>
            <NavLink to={`/about`} className="menu-style">
              About
            </NavLink>
            <NavLink to={`/contact`} className="menu-style">
              Contact
            </NavLink>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
