/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import React, { useReducer, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import {
    ALL_USERS,
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from "../types";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // All User
    async function allUser(){
        setLoading();
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);   

        dispatch({
            type: ALL_USERS,
            payload: res.data
        });
    }   

    // Search Users
    // eslint-disable-next-line no-unused-vars
    const searchUser = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    // Get User
    const getUser = async (username) => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    // Get Repos
    const getUserRepos = async (username) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
       
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    };

    // Clear Users
    const clearUser = () => dispatch({ type: CLEAR_USERS}); 

    // Set Loading
    const setLoading = ()=> dispatch({type: SET_LOADING});

    return <GithubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            allUser,
            clearUser,
            getUser,
            getUserRepos
        }}>

          { props.children}  
        </GithubContext.Provider>;
};

export default GithubState;