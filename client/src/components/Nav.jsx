import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {Component} from 'react';


function Navv() {
  return (
    <Navbar bg="light" expand="lg">
          <Container fluid id='NavContent'>
          <a className="navbar-brand" href="#"></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '75px' }}
            navbarScroll
                  >
                        <Nav.Link path='/' href="/schedule">Schedule</Nav.Link>
            <Nav.Link path="/" href='/regions' >Regions</Nav.Link>
                      <Nav.Link path='/' href="/stores">Stores</Nav.Link>
                      <Nav.Link path='/' href="/reports">Reports</Nav.Link>
                      <Nav.Link path='/' href="/games">Games</Nav.Link>
                      <Nav.Link path='/' href="/users">Users</Nav.Link>
                      <Nav.Link path='/' href="/login">Logout</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown"> */}
              {/* <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
