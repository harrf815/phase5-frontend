
import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { api } from '../services/api'
import { Auth } from '../actions'


const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(3).max(15).required()
})

const submitForm = (data, Auth) => {
    console.log(data)
    const newUser = {
        username: data.username,
        password: data.password
    }
    api.auth.login(newUser).then(data => {
        // console.log(data)
        localStorage.setItem('token', data.jwt)
        Auth(data)
    })
}

const LoginPage = (props) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div>
            <form onSubmit={handleSubmit(data => submitForm(data, props.Auth))}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" {...register('username')} />
                    {/* <p>{errors.username?.message}</p> */}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" {...register('password')} />
                    
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('login:', state )
     return {}
}

export default connect(mapStateToProps, { Auth })(LoginPage)