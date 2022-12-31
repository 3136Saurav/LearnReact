import React from "react";
import { Link } from "react-router-dom";



function NavBar() {

    return (
        <div>
            <Link to="/">Home | </Link>
            <Link to="/about">About | </Link>
            <Link to="/services">Services | </Link>
            <Link to="/contact">Contact | </Link>
            <Link to="/login">Login | </Link>
            <Link to="/users">Users | </Link>
            <Link to="/todos">Todo List | </Link>
            <Link to="/counter">Counter | </Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
}


export default NavBar;










