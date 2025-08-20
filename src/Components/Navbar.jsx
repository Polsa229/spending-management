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
                className={`sticky top-0 z-30 w-full backdrop-blur-sm bg-dark text-black transition-all duration-300 ease-in-out ${scrolled ? "shadow-md border-b border-gray-300" : ""}`}>

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
                        <button onClick={toggleMenu} className="bg-[#20035E] text-light p-1 items-center justify-center rounded-md">
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-light bg-opacity-40 z-20 transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}

            {/* Offcanvas Menu (Left side) */}
            <div className={`z-50 fixed top-0 left-0 h-full w-full bg-primary shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4">
                    <div className="text-lg font-bold">
                        <img src={Logo} alt="Vaultflow Logo" />
                    </div>
                    <button onClick={toggleMenu} className="bg-[#20035E] text-light p-1 items-center justify-center rounded-md">
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Content */}
                <div className="w-full flex flex-col justify-between h-[calc(100%-64px)] px-6 py-6">
                    {/* Menu Items */}
                    <div className="flex flex-col gap-4 text-sm items-start text-left">
                        {items.map((item, key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    scrollToSection(navigate, item.link, item.id);
                                    toggleMenu();
                                }}
                                className="text-light text-xl"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Bottom Button */}
                    <div className="w-full flex pt-6">
                        <button
                            onClick={() => {
                                scrollToSection(navigate, "", "#");
                                toggleMenu();
                            }}
                            className="w-full text-center px-4 md:px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-secondary hover:shadow-secondary/50 hover:shadow-2xl focus:outline-none duration-300"
                        >
                            Talk to an expert
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NavbarSection;
