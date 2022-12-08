import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Search(props) {
    const [country, setCountry] = useState("");
    
    function handleChange(event) {
        setCountry(event.target.value);
    }

    function handleReset() {
        console.log("I got clicked");
        props.search(country, 1);
        setCountry("");
    }

    return (
        <div className="search">
            <form className={props.mode ? "search-form" : "search-form dark-mode"} action="/" onSubmit={(event) => {
                event.preventDefault();
                props.search(country, 0);
            }}>
                <label><IconButton><SearchIcon /> </IconButton></label>
                <input onChange={handleChange} type="text" name="country" placeholder="Search for a country..." value={country}/>
                {country && <IconButton onClick={handleReset}><CloseIcon /></IconButton>}
            </form>
        </div>
    );
}

export default Search;