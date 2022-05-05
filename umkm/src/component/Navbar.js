import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const NavbarPage = () => {

    return (
        <Navbar expand="lg" className='bg-dark'>
            <Container fluid>
                <Navbar.Brand href="/" className='text-light'>FRUITSOOZE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        bg="dark"
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Nav.Link href="/bookmark" className='text-white'>Home</Nav.Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarPage