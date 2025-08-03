import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

function Navigate() {
    const auth = useAuth();
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);
    const onLanguageChange = (lng) => {
        setCurrentLanguage(lng);
        i18n.changeLanguage(lng);
    }
    const guestLinks = () => {
        return (
            <>
                <Nav.Link className={location.pathname == '/' ? 'active' : ''} as={Link} to="/">{t("navigation.Login")}</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-loop' ? 'active' : ''} as={Link} to="/expense-loop">{t('navigation.Expense Loop')}</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-list' ? 'active' : ''} as={Link} to="/expense-list">{t("navigation.Expense List")}</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-form-fn' ? 'active' : ''} as={Link} to="/expense-form-fn">{t('navigation.Expense Form Fn')}</Nav.Link>
                
            </>
        );
    }
    const authLinks = () => {
        return (
            <>
                <Nav.Link className={location.pathname == '/' ? 'active' : ''} as={Link} to="/">{t("navigation.Simple Pagination")}</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-form' ? 'active' : ''} as={Link} to="/expense-form">{t("navigation.Expense Form API")}</Nav.Link>
                <Nav.Link className={location.pathname == '/expense-api' ? 'active' : ''} as={Link} to="/expense-api">{t("navigation.Expense API")}</Nav.Link>
                <Nav.Link className={location.pathname == '/product-add' ? 'active' : ''} as={Link} to="/product-add">{t("navigation.Add Product")}</Nav.Link>
                <Nav.Link className={location.pathname == '/product-list' ? 'active' : ''} as={Link} to="/product-list">{t("navigation.Products List")}</Nav.Link>
                
            </>
        );
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">{t("navigation.Navbar")} {React.version}</Navbar.Brand>
                    <Nav className="me-auto">
                        { auth.isAuthenticated ? authLinks() : guestLinks() }
                        <Nav.Link>
                            <select defaultValue={currentLanguage} onChange={(e) => onLanguageChange(e.target.value)} className='form-select border-0 py-0 m-0'>
                            <option value="en">{t("languages.English")}</option>
                            <option value="hi">{t("languages.Hindi")}</option>
                        </select>
                        </Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Navigate;