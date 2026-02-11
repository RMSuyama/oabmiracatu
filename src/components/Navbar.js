import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-oab.png';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const navItems = [
        { path: '/', label: 'Início' },
        { path: '/diretoria', label: 'Diretoria' },
        { path: '/sedes', label: 'Sedes' },
        { path: '/comissoes', label: 'Comissões' },
        { path: '/dativa', label: 'Dativa' },
        { path: '/lazer', label: 'Lazer' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-[90px] bg-navy border-b border-white/10 z-[1000] flex items-center justify-between px-6 lg:px-[5%] transition-all duration-300">
            <Link to="/" className="flex items-center gap-3 lg:gap-4 group" onClick={scrollToTop}>
                <div className="relative h-[45px] w-[45px] lg:h-[55px] lg:w-[55px]">
                    <img
                        src={logo}
                        alt="OAB Logo"
                        className="h-full w-full object-contain rounded-full border-2 border-primary p-0.5 bg-white transition-transform group-hover:rotate-6 group-hover:scale-110"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-white font-[800] text-[1.1rem] lg:text-[1.4rem] leading-[1.1]">OAB Miracatu</span>
                    <span className="text-primary text-[0.55rem] lg:text-[0.65rem] font-[600] uppercase tracking-wider -mt-0.5">205ª Subseção</span>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`font-semibold text-[0.95rem] tracking-wide transition-colors duration-200 ${location.pathname === item.path ? 'text-white relative after:absolute after:-bottom-1.5 after:left-0 after:w-5 after:h-0.5 after:bg-primary' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-8">
                    <button
                        onClick={toggleSearch}
                        className="text-white/60 hover:text-white transition-colors text-xl"
                        aria-label="Search"
                    >
                        🔍
                    </button>
                    <Link to="/login" className="text-white/60 hover:text-white transition-colors" title="Acesso Restrito">🔒</Link>
                    <a href="mailto:miracatu@oabsp.org.br" className="bg-primary text-white px-6 py-2.5 rounded text-[0.75rem] font-bold uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(214,31,38,0.4)]">
                        Fale Conosco
                    </a>
                </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4">
                <button
                    onClick={toggleSearch}
                    className="text-white/80 text-xl p-2"
                >
                    🔍
                </button>
                <button
                    className="text-white p-2 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
                        <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Search Overlay */}
            <div className={`absolute top-0 left-0 w-full h-full bg-navy z-[1001] flex items-center px-6 lg:px-[5%] transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <input
                    type="text"
                    placeholder="O que você procura? (ex: Comissões, Dativa...)"
                    className="flex-1 bg-transparent border-none text-white text-xl lg:text-2xl font-light outline-none placeholder:text-white/40"
                    autoFocus={isSearchOpen}
                />
                <button
                    onClick={toggleSearch}
                    className="text-white text-3xl font-light ml-4 hover:text-primary transition-colors"
                >
                    ×
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-navy z-[999] lg:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-[120px] px-10 gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-2xl font-[800] uppercase tracking-widest ${location.pathname === item.path ? 'text-primary' : 'text-white'
                                }`}
                            onClick={scrollToTop}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/login" className="text-xl text-white/60" onClick={scrollToTop}>Acesso Restrito 🔒</Link>
                    <a href="mailto:miracatu@oabsp.org.br" className="mt-8 bg-primary text-white py-4 px-8 rounded font-bold uppercase text-center tracking-widest" onClick={() => setIsMenuOpen(false)}>
                        Fale Conosco
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
