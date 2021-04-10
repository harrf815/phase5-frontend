
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { api } from '../services/api';
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
        <div className="ui container">

            <BrowserRouter>
                <div>
                    <Header logout={onLogout}/>
                    <Route path="/" exact component={LoginPage} />
                    <Route path='/signup' exact component={SignUpPage} />
                    
                </div>
            </BrowserRouter>
           
        </div>
    )
}

const mapStateToProps= state => {
    console.log("App:", state)
    return {}
}

export default connect(mapStateToProps, {Auth})(App)