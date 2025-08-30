import React from 'react';
import Logo from "../assets/LogoLight.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white   px-6 py-12">
            <div className="max-w-7xl mx-auto">

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
                                <li className="pt-4">Digital Invoice</li>
                                <li className="pt-4">Insights</li>
                                <li className="pt-4">Reimbursements</li>
                                <li className="pt-4">Virtual Assistant</li>
                                <li className="pt-4">Artificial Intelligence</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">About Us</li>
                                <li className="pt-4">Newsletters</li>
                                <li className="pt-4">Our Partners</li>
                                <li className="pt-4">Career</li>
                                <li className="pt-4">Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    {/* Deuxième colonne mobile: Resources + Follow Us */}
                    <div className="grid grid-cols-2 gap-8 md:contents">
                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">Blog</li>
                                <li className="pt-4">Pricing</li>
                                <li className="pt-4">FAQ</li>
                                <li className="pt-4">Events</li>
                                <li className="pt-4">Ebook & Guide</li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="pt-4">LinkedIn</li>
                                <li className="pt-4">Twitter</li>
                                <li className="pt-4">Instagram</li>
                                <li className="pt-4">Facebook</li>
                                <li className="pt-4">YouTube</li>
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
