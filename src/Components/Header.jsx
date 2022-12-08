import React, { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import Brightness5Icon from '@mui/icons-material/Brightness5';

function Header(props) {
    const [mode, setMode] = useState(true)
    function handleClick() {
        setMode(!mode);
        props.mode(!mode);
    }

    return (
        <nav className={mode ? null : "dark-mode"}> 
            <h1> Where in the world? </h1>
            <button onClick={handleClick} title="Switch mode">
                {mode ? <DarkModeOutlinedIcon /> : <Brightness5OutlinedIcon />}
                <span>{mode ? "Dark Mode": "Light Mode"}</span>
            </button>
        </nav>
    );
}

export default Header;