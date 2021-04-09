
import React, { useEffect } from 'react';

import NavContainer from './NavContainer'
import LoginPage from './LoginPage'
import SignUp from './SignUpPage'
import {api} from '../services/api';
import { connect } from 'react-redux';
import { Auth } from '../actions'

const App = (props) => {

    useEffect(() =>{
        const token = localStorage.token
        if(token){
            api.auth.getCurrentUser().then(data => props.Auth(data))
        }
    }, [])

    const onLogout = () => {
        localStorage.removeItem('token')
        props.Auth({})
    }

    return (
        <div className="App">
            <LoginPage />
            {/* <SignUp /> */}
        </div>
    )
}

const mapStateToProps= state => {
    console.log("App:", state)
    return {}
}

export default connect(mapStateToProps, {Auth})(App)