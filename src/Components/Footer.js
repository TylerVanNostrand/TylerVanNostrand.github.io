import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-3 my-4 border-top text-center" id='footer'>
            <Navbar variant="dark" expand="sm" sticky="bottom" className='justify-content-center text-center'>
                <Navbar.Brand as={Link} to="/">Tyler Van Nostrand - Web Developer</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
        </footer>
    )
}