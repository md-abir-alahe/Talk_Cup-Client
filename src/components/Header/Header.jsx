import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2 className='header-text'>Talk Cup</h2>
            <nav>
                <a href="/faq">FAQ</a>
                <a href="/logIn">Log in</a>
            </nav>
        </div>
    );
};

export default Header;