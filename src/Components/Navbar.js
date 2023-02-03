import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    return(
        <>
        <nav className="navbar bg-primary">
            <h1>
            <i className="fa fa-github">
                Github Finder
            </i>
            </h1>
        
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        </nav>
        </>
    )
}

export default Navbar;