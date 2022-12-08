import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Control(props) {
    return (
        <div className="controls">
            <Search 
                mode={props.mode}
                search={props.search}
            />
            <Filter
                mode={props.mode}
                filter={props.filter}
            />
        </div>
    );
}

export default Control;