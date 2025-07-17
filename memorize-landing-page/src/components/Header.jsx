import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Memorize</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;