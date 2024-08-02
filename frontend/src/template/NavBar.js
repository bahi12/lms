import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const accessToken = localStorage.getItem('accessToken');
    const isLoggedIn = accessToken !== null && accessToken !== undefined;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex ms-auto">
                    <Link className="navbar-brand" to="/">
                        My Website
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
            {isLoggedIn ? (
                <Link className="btn btn-primary me-2" to="/logout/">Logout</Link>
            ) : (
                <Link className="btn btn-primary me-2" to="/login/">Login</Link>
            )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
