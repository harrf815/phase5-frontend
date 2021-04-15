
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const Header = (props) => {

    const loggedIn = !!props.user.id

    return (
    
        < >
            { loggedIn ? (
                <div className="ui secondary menu">
                    <Link to="/home" className="title item">
                        Home
                    </Link>
                    <Link to='/businessadmin' className="title item">
                        Business Info
                    </Link>
                    <Link to="/scheduler" className="title item">
                        Schedule 
                    </Link>
                    
                    <div className="right menu">
                        <Link to="/" className="title item">
                            {`Hello, ${props.user.name}`}
                        </Link>
                        <Link to="/" className="title item" onClick={props.logout}>
                            Logout
                        </Link>
                    </div>
                </div>
                ) : (
                <>
                    
                </>

            )}
            
        </>
    )
}
const mapStateToProps = state => {
    return { user: state.auth.user}
}

export default connect(mapStateToProps)(Header); 
