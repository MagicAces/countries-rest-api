import React from "react";


function Country(props) {
    const capitals = props.capital;
    var cap1, cap2, cap3 = "";

    if(typeof(capitals) !== "object")
        cap1 = "----";
    else if(capitals.length === 1)
        cap1 = capitals[0];
    else if(capitals.length === 2)
        [cap1, cap2] = capitals;
    else if(capitals.length === 3)
        [cap1, cap2, cap3] = capitals;

    function handleClick() {
        props.detail(props.name, 0);
    }

    return (
        <div className={props.mode ? "card" : "card dark-mode"} onClick={handleClick}>
            <img src={props.image} alt="flag" />
            <div className="card-body">
                <h2>{props.name}</h2>
                <p><span>Population: </span> {props.population}</p>
                <p><span>Region: </span> {props.region}</p>
                <p><span>Capital: </span> {cap1} {cap2 && `, ${cap2}`} {cap3 && `, ${cap3}`}</p>
                <p><span>Subregion: </span> {typeof(props.subregion) === "undefined" ? "----" : props.subregion}</p>
            </div>
        </div>
    );
}

export default Country;