import React from 'react';

export default function SentinelNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid px-4">
                {/* Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    <span style={{ fontSize: '35px' }}>Sentinel</span>
                </a>

                {/* Hamburger Toggle for Mobile */}
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

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#start">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#demo">Demo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#bot-protection">Bot Protection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#home">Home</a>
                        </li>
                        <li className="nav-item ms-lg-2">
                            <button
                                className="btn text-white fw-semibold px-4 py-2"
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s, box-shadow 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Login/Signup
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}