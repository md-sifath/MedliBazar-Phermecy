import React from 'react';
import './Header.css';
import useAuth from '../Hooks/useAuth';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    const style = {
        fontSize: "20px"
    }
    return (

        <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg" className="bg-color p-2" >
            <Container>
                <Navbar.Brand as={Link} to="/home" style={{ fontSize: '38px' }}>MedliBazar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home" style={style}>Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#product" style={style}>Product</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus" style={{ fontSize: '20px' }}>About Us</Nav.Link>
                    <Nav.Link as={Link} to="/blog" style={{ fontSize: '20px' }}>Blogs</Nav.Link>

                    {user?.email ?
                        <Button onClick={logOut} variant="primary" className="me-2">Logout</Button> :
                        <Nav.Link as={Link} to="/login" style={{ fontSize: '20px' }}>Login</Nav.Link>}

                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;