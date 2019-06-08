/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./RepoItems";

function Repos({ repos }){
    return repos.map(repo => <RepoItems repo={repo} key={repo.id}/>);
}

Repos.propTypes = {
    repos : PropTypes.array.isRequired
};

export default Repos;
