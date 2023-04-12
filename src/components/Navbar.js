import React from "react";
import logo from "./logo-react-icon.png"



export default function Navbar({ lightMode, toggleLightMode }) {

    return (
        <nav className={lightMode ? "light" : ""}>
            <img src={logo} alt="react logo" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={toggleLightMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )

}

