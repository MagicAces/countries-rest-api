import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IconButton from '@mui/material/IconButton';
import Zoom from "@mui/material/Zoom";

function Filter(props) {
    const [text, setText] = useState("Filter by Region")
    const [show, setShow] = useState(false);
    function showOptions() {
        setShow(prevValue => !prevValue);
    }
    
    function handleClick(event) {
        const val = event.target.value;
        setText(prevValue => {
            if(val === "All")
                return "Filter By Region";
            else
                return val;
        });
        setShow(prevValue => !prevValue);
        props.filter(val.toLowerCase());
        event.preventDefault();
    }
    return (
        <form className={props.mode ? "filter" : "filter dark-mode"}>
            <div className="select">
                <span>{text}</span>
                <IconButton onClick={showOptions} className="dropdown"> {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </IconButton>
            </div>
            
            {show &&
                <Zoom in={true}>
                    <div className="options">
                        <button type="submit" onClick={handleClick} value="Africa">Africa</button>
                        <button type="submit" onClick={handleClick} value="Americas">America</button>
                        <button type="submit" onClick={handleClick} value="Asia">Asia</button>
                        <button type="submit" onClick={handleClick} value="Europe">Europe</button>
                        <button type="submit" onClick={handleClick} value="Oceania">Oceania</button>
                        <button type="submit" onClick={handleClick} value="All">All</button>
                    </div>
                </Zoom>
                }
            
       </form>
    );
}

export default Filter;