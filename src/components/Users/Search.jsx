/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search({ setAlert }){

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [ text, setText ] = useState(" ");

    function handleSubmit(e){
        e.preventDefault();
        // eslint-disable-next-line no-console
        if(text === " ")
        {
            alertContext.setAlert("Please Enter Something", "light");
        } 
        else
        {
            githubContext.searchUser(text);
            setText(" ");
        }
    }

    function handleChange(e){
        setText(e.target.value );
    }

    return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Users..." onChange={handleChange} value={text} name="text"/>
            <input type="submit" value="search" className="btn btn-dark btn-block" style={{fontSize:"20px"}} />
        </form>
        { githubContext.users.length > 0 && (
            <button 
            className="btn btn-light btn-block" 
            onClick={githubContext.clearUser}>
            Clear
            </button>
        )}
    </div>
        );
    }

export default Search;
