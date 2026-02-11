import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo-oab.png';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo" onClick={scrollToTop}>
                <img src={logo} alt="OAB Logo" className="logo-img" />
                <div className="brand-text">
                    <span className="brand-main">OAB Miracatu</span>
                    <span className="brand-sub">205ª Subseção</span>
                </div>
            </Link>
            <ul className="nav-links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
                <li><Link to="/diretoria" className={location.pathname === '/diretoria' ? 'active' : ''}>Diretoria</Link></li>
                <li><Link to="/sedes" className={location.pathname === '/sedes' ? 'active' : ''}>Sedes</Link></li>
                <li><Link to="/comissoes" className={location.pathname === '/comissoes' ? 'active' : ''}>Comissões</Link></li>
                <li><Link to="/dativa" className={location.pathname === '/dativa' ? 'active' : ''}>Dativa</Link></li>
                <li><Link to="/lazer" className={location.pathname === '/lazer' ? 'active' : ''}>Lazer</Link></li>
                <li><Link to="/login" className="login-nav-link">🔒</Link></li>
            </ul>
            <a href="mailto:miracatu@oabsp.org.br" className="contact-btn">Fale Conosco</a>
        </nav>
    );
};

export default Navbar;
