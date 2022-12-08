import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Detail(props) {
    const values = props.name;

    return (
        <div  className={props.mode ? "detail-panel" : "detail-panel dark-mode"}>
            <div className="intro">
                <button type="button" onClick={() => props.return()}><ArrowBackIcon /> <span>Back</span></button>
                <img title="Coat Of Arms" src={values.coatOfArms && values.coatOfArms} alt="" />
            </div>
            <div className="content">
                <img src={values.flag} alt="flag" />
                <div className="detail-boss">
                    <h2>{values.name} {values.cca3 && "(" + values.cca3 + ")"}</h2>
                    <div className="detail-subtext">
                        <div className="detail-1">
                            <p><span>Official Name: </span> {values.officialName}</p>
                            <p><span>Population: </span> {values.population}</p>
                            <p><span>Subregion: </span> {values.subregion ? values.subregion : <pre>N/A</pre>}</p>
                            <p><span>Region: </span> {values.region}</p>
                            <p><span>Continent: </span> {values.continent ? values.continent.map((value, index) => {
                                if (index === 0)
                                    return value;
                                else if (index > 0) {
                                    if (index < values.continent.length - 1)
                                        return ", " + value;
                                    else
                                        return ", " + value + ".";
                                }
                            }) : <pre>N/A</pre>}
                                <p><span>Capital: </span> {values.capital ? values.capital.map((value, index) => {
                                    if (index === 0)
                                        return value;
                                    else if (index > 0) {
                                        if (index < values.capital.length - 1)
                                            return ", " + value;
                                        else
                                            return ", " + value + ".";
                                    }
                                }) : <pre>N/A</pre>}</p>
                            </p>

                        </div>
                        <div className="detail-2">
                            <p><span>Timezone: </span> {values.timeZone ? values.timeZone.map((value, index) => {
                                if (index === 0)
                                    return value;
                                else if (index > 0) {
                                    if (index < values.timeZone.length - 1)
                                        return ", " + value;
                                    else
                                        return ", " + value + ".";
                                }
                            }) : <pre>N/A</pre>}</p>
                            <p><span>Top Level Domain: </span> {values.tld ? values.tld.map((value, index) => {
                                if (index === 0)
                                    return value;
                                else if (index > 0) {
                                    if (index < values.tld.length - 1)
                                        return ", " + value;
                                    else
                                        return ", " + value + ".";
                                }
                            }) : <pre>N/A</pre>}</p>
                            <p><span>Landlocked: </span> {values.landLocked ? "True" : "False"}</p>
                            <p><span>Languages: </span> {values.languages ? Object.values(values.languages).map((lang, index) => {
                                if (index === 0)
                                    return lang;
                                else if (index > 0) {
                                    if (index < Object.values(values.languages).length - 1)
                                        return ", " + lang;
                                    else
                                        return ", " + lang + ".";
                                }
                            }) : <pre>N/A</pre>}</p>
                            <p><span>Currencies: </span> {values.currencies ? Object.values(values.currencies).map((curr) => {
                                return curr.name + " (" + curr.symbol + ") ";
                            }) : <pre>N/A</pre>}</p>
                        </div>
                    </div>
                </div>
                <div className="borders">
                    <p><span>Border Countries: </span> {values.borders ? values.borders.map((country) => {
                        return <button type="button" value={country} onClick={(event) => {props.border(event.target.value, 1)}}>{country}</button>;
                    }) : <button type="button" disabled>N/A</button>}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;