/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import Spinners from "../../assets/spinner.gif";

function Spinner() {
    return (
        <Fragment>
            <img src={ Spinners } 
            alt="Loading..."
            style={{width:"200px",
            margin:"auto",
            display:"block"
            }}
            />
        </Fragment>
    );
}

export default Spinner;
