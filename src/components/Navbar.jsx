import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white fixed-top py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">KinchhaNepal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-buttons" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="shop">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="blog.html" >Blog</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="contact.html">Contact</Link>
                            </li>

                            <li className="iconss nav-item">
                                <Link to="/register" className="icon-link"><CgProfile className="icon" /></Link>
                                <Link to="/your-cart" className="icon-link"><FaCartArrowDown className="icon" /></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
