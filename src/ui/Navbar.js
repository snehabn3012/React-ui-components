import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="flex content-center font-text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pagination">Pagination</Link>
                    </li>
                    <li>
                        <Link to="/get-started">Get Started</Link>
                    </li>
                    <li>
                        <Link to="/live-chat">Live Chat</Link>
                    </li>
                    <li>
                        <Link to="/search-ui">Search UI</Link>
                    </li>
                    <li>
                        <Link to="/toaster">Toaster</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
export default Navbar;
