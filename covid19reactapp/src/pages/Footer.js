import React from 'react';
import '../css/Footer.css'; // Create a separate CSS file for styles


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav style={{ textAlign: 'center' }}>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <button
                                className="sps"
                                style={{
                                    marginLeft: '-70px',
                                    background: 'none',
                                    border: 'none',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                    padding: 0,
                                    font: 'inherit',
                                    textDecoration: 'underline',
                                }}
                            >
                                &copy; Covid-19
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
