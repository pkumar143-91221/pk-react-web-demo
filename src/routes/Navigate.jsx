import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigate() {
    const auth = useAuth();
    const location = useLocation();
    const guestLinks = () => {
        return (
            <>
                <Nav.Link className={location.pathname == '/' ? 'active' : ''} as={Link} to="/">Login</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-loop' ? 'active' : ''} as={Link} to="/expense-loop">Expense Loop</Nav.Link>
                <Nav.Link className={location.pathname == '/product-add' ? 'active' : ''} as={Link} to="/product-add">Add Product</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-list' ? 'active' : ''} as={Link} to="/expense-list">Expense List</Nav.Link>
                <Nav.Link className={location.pathname == '/product-list' ? 'active' : ''} as={Link} to="/product-list">Products List</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-form-fn' ? 'active' : ''} as={Link} to="/expense-form-fn">Expense Form Fn</Nav.Link>
                
            </>
        );
    }
    const authLinks = () => {
        return (
            <>
                <Nav.Link className={location.pathname == '/' ? 'active' : ''} as={Link} to="/">Simple Pagination</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-form' ? 'active' : ''} as={Link} to="/expense-form">Expense Form API</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-api' ? 'active' : ''} as={Link} to="/expense-api">Expense API</Nav.Link>

            </>
        );
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar {React.version}</Navbar.Brand>
                    <Nav className="me-auto">
                        { auth.isAuthenticated ? authLinks() : guestLinks() }
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Navigate;