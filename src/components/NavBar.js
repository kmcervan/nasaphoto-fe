import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    SPACESTAGRAM 
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;