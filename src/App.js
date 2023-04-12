import React, { useState } from "react";
import Navbar from './components/Navbar';
import Main from "./components/Main";
import "./style.css";



export default function App() {
    const [lightMode, setLightMode] = useState(false)
    
    function toggleLightMode() {
        setLightMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar 
                lightMode={lightMode} 
                toggleLightMode={toggleLightMode}
            />
            <Main lightMode={lightMode} />
        </div>
    )

}

