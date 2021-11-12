import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, } from 'react-router-dom'

export default function Header() {
    return (

        <div className="row text-center back sticky-top">
            <div className="col-12 text-center d-flex justify-content-center back">
                <Navbar variant="dark" expand="lg" className='text-center back'>
                    <Navbar.Brand as={Link} to="/">Tyler Van Nostrand | Web Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav back">
                        <Nav className="mr-auto back">
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link href="https://forms.gle/V4yVaZma3svHp8kg9">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    )

}