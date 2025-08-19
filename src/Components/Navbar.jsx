import React, { useEffect, useMemo, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../functions/scrollingFunctions';
import Logo from "../assets/Logo.png"
import CallToActionBtn from './CallToActionBtn';

const NavbarSection = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const items = useMemo(() => ([
        { label: "Features", link: "/", id: "features" },
        { label: "Pricing", link: "/", id: "pricing" },
        { label: "About us", link: "/", id: "about_us" },
    ]), []);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`sticky top-0 z-50 w-full backdrop-blur-sm bg-dark text-black transition-all duration-300 ease-in-out ${scrolled ? "shadow-md border-b border-gray-300" : ""}`}>

                <div className="flex justify-between items-center px-6 py-4">
                    <div className="text-lg font-bold">
                        <img src={Logo} alt="" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 items-center text-sm">
                        {
                            items.map((item, key) => {
                                return (
                                    <button key={key} onClick={() => scrollToSection(navigate, item.link, item.id)} className="text-light">
                                        {item.label}
                                    </button>
                                )
                            })
                        }

                        <CallToActionBtn />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}

            {/* Offcanvas Menu (Left side) */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div className="text-lg font-bold">Menu</div>
                    <button onClick={toggleMenu}>
                        <FiX size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 px-6 py-6 text-sm items-center text-center">
                    <button onClick={() => { scrollToSection(navigate, "/", "accueil"); toggleMenu(); }} className="w-full">Accueil</button>
                    <button onClick={() => { scrollToSection(navigate, "/", "services"); toggleMenu(); }} className="w-full">Services</button>
                    <button onClick={() => { scrollToSection(navigate, "/", "apropos"); toggleMenu(); }} className="w-full">À Propos</button>
                    <button onClick={() => { scrollToSection(navigate, "/", "contact"); toggleMenu(); }} className="w-full">Contact</button>
                    <Link to="/reservation" onClick={toggleMenu} className="w-full bg-black text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
                        <CiCalendar size={18} />
                        Réserver
                    </Link>
                    <Link to="/connexion" onClick={toggleMenu} className="w-full flex items-center justify-center gap-2">
                        <FiUser size={18} />
                        Connexion
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavbarSection;
