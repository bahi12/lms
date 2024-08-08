import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectNavBarData from '../redux/selectors';

function NavBar() {
    const { isLoggedIn, user } = useSelector(selectNavBarData);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className="d-flex ms-auto">
                    <Link className="navbar-brand" to="/">
                        HelB 
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
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {user ? user.username : 'User'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <Link className="dropdown-item" to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link className="btn btn-primary me-2" to="/login/">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
