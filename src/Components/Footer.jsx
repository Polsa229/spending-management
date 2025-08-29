import React from 'react';
import Logo from "../assets/LogoLight.png";

const Footer = () => {
    return (
        <footer className="px-6 md:px-20 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-10">
                {/* Spend.In */}
                <div className="md:col-span-1">
                    <div className="text-lg font-bold mb-2">
                        <img src={Logo} alt="Spend.In" />
                    </div>
                    <p className="text-sm text-gray-400">
                        Data visualization, and expense management for your business.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-sm font-medium mb-3 text-gray-300">Product</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Digital Invoice</li>
                        <li>Insights</li>
                        <li>Reimbursements</li>
                        <li>Virtual Assistant</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-medium mb-3 text-gray-300">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>About Us</li>
                        <li>Newsletters</li>
                        <li>Our Partners</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-sm font-medium mb-3 text-gray-300">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Events</li>
                        <li>Ebook & Guide</li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-sm font-medium mb-3 text-gray-300">Follow Us</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>

                {/* Footer Links */}
                <div className="md:col-span-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <div className="flex gap-4">
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                    <div>© Pitchlo Lab 2022</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
