/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ users: {login, avatar_url, html_url} }) {
return (
      <div className="card text-center">
        <img 
        src={avatar_url} 
        alt="user" 
        className="round-img"
        style={{width:"60px"}}
        />
        <h3>{login}</h3>

        <div>
            <Link to={`user/${login}`} className="btn btn-dark btm-sm my-1">More</Link>
        </div>
      </div>
    );
}

UserItem.propTypes = {
    users: PropTypes.object.isRequired
};

export default UserItem;
