
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import Scheduler from './Scheduler'
import Home from './Home'
import Welcome from './Welcome'
import BusinessAdmin from './BusinessAdmin'
import Payroll from './Payroll'
import Footer from './Footer'
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
        <>
            <BrowserRouter>
                <div>
                    <Header logout={onLogout}/>
                    <div className="main ui container">
                    <Route path="/" exact component={Welcome} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path='/signup' exact component={SignUpPage} />
                    <Route path='/scheduler' exact component={Scheduler} />
                    <Route path="/home" exact component={Home} />
                    <Route path='/businessadmin' exact component={BusinessAdmin} />
                    <Route path='/payroll' exact component={Payroll} />
                    </div>
                </div>
            </BrowserRouter>
            <br/>
            <>
            <Footer />
            </>
        </>
        

    )
}

const mapStateToProps= state => {
    return {}
}

export default connect(mapStateToProps, {Auth})(App)