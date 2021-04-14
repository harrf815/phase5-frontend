
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const Header = (props) => {

    const loggedIn = !!props.user.id

    return (
    
        < >
            { loggedIn ? (
                <div className="ui secondary menu">
                    <Link to="/home" className="item">
                        Home
                    </Link>
                    <Link to='/businessadmin' className="item">
                        Business Info
                    </Link>
                    <Link to="/scheduler" className="item">
                        Schedule 
                    </Link>
                    
                    <div className="right menu">
                        <Link to="/" className="item">
                            {`Hello, ${props.user.name}`}
                        </Link>
                        <Link to="/login" className="item" onClick={props.logout}>
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
