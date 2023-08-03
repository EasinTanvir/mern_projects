import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="py-3"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand className="fw-bolder ">
          <i class="fa-solid fa-play"></i> Spotify
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox />
          <Nav className="ms-auto">
            <Nav.Link>
              <i className="fas fa-cart-shopping"></i> Cart
            </Nav.Link>
            <>
              <NavDropdown id="username" title="Caegories">
                <NavDropdown.Item>Music</NavDropdown.Item>

                <NavDropdown.Item>HipHop</NavDropdown.Item>
              </NavDropdown>
            </>{" "}
            <>
              <NavDropdown id="username" title="User">
                <NavDropdown.Item>Profile</NavDropdown.Item>

                <NavDropdown.Item>Log Out</NavDropdown.Item>
              </NavDropdown>
            </>
            <NavDropdown id="adminmenu" title="Admin Pannel">
              <NavDropdown.Item>Users</NavDropdown.Item>

              <NavDropdown.Item>Products</NavDropdown.Item>

              <NavDropdown.Item>Orders</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
