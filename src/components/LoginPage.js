
import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button, Header } from 'semantic-ui-react'

import { api } from '../services/api'
import { Auth } from '../actions'
import image from '../assests/blackout_dates.png'



const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(3).max(15).required()
})

const submitForm = (data, Auth) => {
    const newUser = {
        username: data.username,
        password: data.password
    }
    api.auth.login(newUser).then(data => {
        localStorage.setItem('token', data.jwt)
        Auth(data)
    })
    // props.history.push('/home')
    // this.props.history.push('/home')
}


const LoginPage = (props) => {

    const { register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div id="loginback" className="ui container">
            <img id="loginimg" src={image}/>
            <div id="container" className="ui container">


                <form id="login" className="ui large form" onSubmit={handleSubmit(data => submitForm(data, props.Auth))}>
                <Header as="h2" textAlign="center" >
                        Login to your Account
                </Header>

                    <div className="ui stacked secondary segment">

                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input
                                    placeholder="Username"
                                    type="text" 
                                    name="username" 
                                    {...register('username')} 
                                />
                                {/* <p>{errors.username?.message}</p> */}
                            </div>
                        </div>

                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input
                                    type="password"
                                    name="password" 
                                    placeholder="password"
                                    {...register('password')} 
                                />
                            </div>
                        </div>

                        <div >
                            <Button 
                                
                                style={{width: "695px"}} 
                                content="Login" 
                                type="submit" 
                                primary 
                            />
                        </div>
                        
                    </div>

                <div className="ui message" style={{textAlign: 'center'}}>
                    <Link to="/signup" className="item" >
                        Create an Account
                    </Link>
                </div>
                </form>


            </div>
        </div>
    )
}



export default connect(null, { Auth })(LoginPage)