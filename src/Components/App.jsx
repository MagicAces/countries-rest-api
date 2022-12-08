import React, { useState, useEffect } from "react";
import Header from "./Header";
import Control from "./Control";
import Country from "./Country";
import Detail from "./Detail";
import axios from "axios";

function App() {
    const [content, setContent ] = useState(["Test"]);
    const [mode, setMode] = useState(true);
    const [isDetail, setDetail] = useState(false);
    const [details, setDetails] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                var summary = res.data.map((value) => {
                    return {
                        name: value.name.common,
                        image: value.flags.png,
                        region: value.region,
                        subregion: value.subregion,
                        capital: value.capital,
                        population: value.population,
                        cca3: value.cca3
                    };
                });
                setCountries((prevValue) => {
                    return (
                        summary.map((value) => {
                            return [value.cca3, value.name];
                        })
                    );
                });
                setContent(summary);
                
            });
    }, []); 

    async function handleSearch(search, reset) {
        await axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                var summary = res.data.map((value) => {
                    return {
                        name: value.name.common,
                        image: value.flags.png,
                        region: value.region,
                        subregion: value.subregion,
                        capital: value.capital,
                        population: value.population
                    };
                });
                if(reset)
                    setContent(summary);
                else {
                    setContent((prevValue => {
                        return (
                            summary.filter((value, index) => {
                                const lower = value.name.toLowerCase();
                                if (lower.includes(search.toLowerCase()))
                                    return value;
                            }));
                    }))
                }
            });
        
    }

    function handleFilter(region) {
        let url = "https://restcountries.com/v3.1/region/" + region;
        if(region === "all")
            url = "https://restcountries.com/v3.1/all";
        
        axios.get(url)
            .then(res => {
                var summary = res.data.map((value) => {
                    return {
                        name: value.name.common,
                        image: value.flags.png,
                        region: value.region,
                        subregion: value.subregion,
                        capital: value.capital,
                        population: value.population
                    };
                });
                setContent(summary);
            });
    }
    
    function handleMode(color) {
        setMode(color);
    }

    function handleDetail(name, redirect) {
        if(redirect)
            setDetail(true);
        else
            setDetail(!isDetail);

        axios.get("https://restcountries.com/v3.1/name/" + name.toLowerCase() + "?fullText=true")
            .then(response => {
                var details = response.data.map((value) => {
                    return {
                        name: value.name.common,
                        officialName: value.name.official,
                        cca3: value.cca3,
                        currencies: value.currencies,
                        capital: value.capital,
                        region: value.region,
                        subregion: value.subregion,
                        languages: value.languages,
                        landLocked: value.landlocked,
                        borders: value.borders,
                        population: value.population,
                        timeZone: value.timezones,
                        flag: value.flags.png,
                        coatOfArms: value.coatOfArms.png,
                        continent: value.continents,
                        tld: value.tld
                    }
                });
                setDetails(prevValue => {
                    if(details[0].borders) {
                        var newBorder = details[0].borders.map((value) => {
                            var temp = countries.filter((val) => {
                                if(val[0] === value) {
                                    return val[1];
                                }           
                            });
                            return temp[0][1];
                        });
                        
                        return {
                            ...details[0],
                            borders : newBorder
                        }
                    } else {
                        return details[0];
                    }    
                });
            });
    }

    function handleReturn() {
        setDetail(!isDetail);
    }


    return (
        <div className="head" style={{ backgroundColor: mode ? "initial" : "hsl(207, 26%, 17%)" }}>
             <Header 
                mode={handleMode}
            />
            {isDetail ? 
                <Detail 
                    name={details}
                    return={handleReturn}
                    border={handleDetail}
                    mode={mode}
                /> :
                <div>
                    <Control 
                        mode={mode}
                        search={handleSearch}
                        filter={handleFilter}
                    />
                    <div class="countries">
                        {content.length !== 0 ? content.map((value, index) => {
                            return (
                                <Country
                                    key={index}
                                    mode={mode}
                                    name={value.name}
                                    image={value.image}
                                    capital={value.capital}
                                    subregion={value.subregion}
                                    population={value.population}
                                    region={value.region}
                                    detail={handleDetail}
                                />);
                        }): <h1>No Results Found. Click close button to reset</h1>}
                    </div>
                </div>
            }
            
        </div>
    );
}

export default App;