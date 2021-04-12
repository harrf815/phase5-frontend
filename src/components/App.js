
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import Scheduler from './Scheduler'
import Home from './Home'
import BusinessAdmin from './BusinessAdmin'
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
        window.history.pushState({}, '', '/');
        window.location.reload()
    }

    return (
        <div className="ui container">
            {/* <Scheduler /> */}
            <BrowserRouter>
                <div>
                    <Header logout={onLogout}/>
                    <Route path="/" exact component={LoginPage} />
                    <Route path='/signup' exact component={SignUpPage} />
                    <Route path='/scheduler' exact component={Scheduler} />
                    <Route path="/home" exact component={Home} />
                    <Route path='/businessadmin' exact component={BusinessAdmin} />
                </div>
            </BrowserRouter>
           
        </div>
    )
}

const mapStateToProps= state => {
    return {}
}

export default connect(mapStateToProps, {Auth})(App)