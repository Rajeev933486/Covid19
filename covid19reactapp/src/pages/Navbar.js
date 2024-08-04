import React from 'react';
import '../css/Navbar.css'; // Create a separate CSS file for styles

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent fixed-top">
            <div id="locha" className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="circular_image">
                        <img
                            src="https://img.freepik.com/free-vector/3d-covid-coronavirus_17005-736.jpg?w=900&t=st=1696091431~exp=1696092031~hmac=869942a336186be0154dcbb3304b4582b5204f22332412789cf3e1be30eca2b8"
                            height="90"
                            width="110"
                            alt="Covid-19"
                        />
                    </div>
                    <p className="sps">Covid-19</p>
                </div>
                <div id="ulfat">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link sps" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sps" href="/Aboutinfo">About&Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sps" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sps" href="/login">Login/Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
