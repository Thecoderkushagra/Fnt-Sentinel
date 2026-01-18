import React from 'react';
import { useNavigate } from "react-router-dom";

export default function SentinelNavbar() {
    const navigate = useNavigate();

    function handleNavigation(path) {
        navigate(path);
    }

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
                            <a className="nav-link px-3" href="/">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/botpage">Bot Protection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/demo">Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}