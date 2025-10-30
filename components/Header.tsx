import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#academics', label: 'Academics' },
        { href: '#career-tech', label: 'Career Tech' },
        { href: '#search', label: 'Course Search' },
        { href: '#founder', label: 'Founder' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary-blue">
                    <a href="#">Climex Academy</a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary-teal font-medium transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white py-4">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="block py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-primary-teal" onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
