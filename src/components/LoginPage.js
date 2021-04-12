
import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

import { api } from '../services/api'
import { Auth } from '../actions'



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
}

// const handleClick = () => {
//     return (
//         <Home />
//     )
// }

const LoginPage = (props) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">

                <h2 className="ui image header">
                    <div className="content">
                        Login to your Account
                    </div>
                </h2>

                <form className="ui large form" onSubmit={handleSubmit(data => submitForm(data, props.Auth))}>

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
    
                                style={{width: "500px"}} 
                                content="Login" 
                                type="submit" 
                                primary 
                            />
                        </div>
                        
                    </div>

                </form>

                <div className="ui message">
                    <Link to="/signup" className="item">
                        Create an Account
                    </Link>
                </div>

            </div>
        </div>
    )
}



export default connect(null, { Auth })(LoginPage)