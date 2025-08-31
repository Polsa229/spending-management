import React from 'react';
import Logo from "../assets/LogoLight.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white   px-6 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Section du haut */}
                <div className="flex flex-col space-y-8 md:grid md:grid-cols-5 md:gap-20 md:space-y-2">

                    {/* Logo + description */}
                    <div className="md:col-span-1 ">
                        <div className="flex items-center space-x-2">
                            <span className="">
                                <img src={Logo} alt="logo" className=" " />
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            Data visualization, and <br /> expense management for your business.
                        </p>
                    </div>

                    {/* Première colonne mobile: Product + Company */}
                    <div className="grid grid-cols-2 gap-8  md:contents ">
                        {/* Product */}
                        <div >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">
                                    <Link to="#">
                                        Digital Invoice
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Insights
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Reimbursements
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Virtual Assistant
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Artificial Intelligence
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">
                                    <Link to="#">
                                        About Us
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Newsletters
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Our Partners
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Career
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Deuxième colonne mobile: Resources + Follow Us */}
                    <div className="grid grid-cols-2 gap-8 md:contents">
                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">
                                    <Link to="#">
                                        Blog
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Events
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Ebook & Guide
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">
                                    <Link to="#">
                                        LinkedIn
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Twitter
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        Facebook
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="#">
                                        YouTube
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ligne séparatrice */}
                <div className="border-t border-gray-200 my-8" />

                {/* Section du bas */}
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 text-sm text-gray-500">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-6">
                        <Link to="#">Privacy Policy</Link>

                        {/* Bordure avant le deuxième lien */}
                        <Link to="#" className="md:border-l md:pl-6 border-black">
                            Terms & Conditions
                        </Link>

                        <Link to="#" className="md:border-l md:pl-6 border-black">Cookie Policy</Link>
                    </div>

                    <div className="text-left md:text-right">
                        © Picko Lab 2022
                    </div>
                </div>

            </div>
        </footer>
    )
};

export default Footer;
