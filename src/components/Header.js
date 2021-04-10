
import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {


    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Login
            </Link>
            <div className="right menu">
                <Link to="/" className="item" onClick={props.logout}>
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Header; 
