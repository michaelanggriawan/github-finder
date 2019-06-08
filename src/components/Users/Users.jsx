/* eslint-disable no-unused-vars */
import React, { useContext, useEffect} from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../context/github/githubContext";
import "./Users.scss";

function Users(){
    const githubContext = useContext(GithubContext);
    const {users, loading, allUser } = githubContext;

    useEffect(()=> {
        allUser();
    }, []);
    
    if(loading){
       return <Spinner />;
    }else{
        return(
        <div className="users">
        { users.map(user => {
            return (
                <UserItem key={user.id} users={user} />
            );
        }) }
        </div>
        );
    }
}

export default Users;
