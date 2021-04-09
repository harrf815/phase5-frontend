
import React from 'react';
import { connect } from 'react-redux'

import { api } from '../services/api'
import { Auth } from '../actions'

class SignUp extends React.Component {

    state = {
        name: "",
        username: "",
        email: "", 
        password: "",
        admin: false
    }

    handleName = data => this.setState({name: data})
    handleUsername = data => this.setState({username: data})
    handleEmail = data => this.setState({email: data})
    handlePassword = data => this.setState({password: data})
    handleRadio = data => {
        if(data === 'true'){
            return this.setState({admin: true})
        } else {
            return this.setState({admin: false})
        }
    }
   
    handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            admin: this.state.admin
        }
        api.auth.signup(newUser).then(data => {
            localStorage.setItem('token', data.jwt )
            this.props.Auth(data)
        })
    }

    render () {

        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            onChange={e => this.handleName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username"
                            onChange={e => this.handleUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email"
                            onChange={e => this.handleEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            onChange={e => this.handlePassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="radio" value='true' name="admin" onChange={e => this.handleRadio(e.target.value)}/>Admin
                        <input type="radio" value="false" name="admin" onChange={e => this.handleRadio(e.target.value)}/> Employee
                    </div>
                    <div>
                        <button>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("Signup:", state)
    return {}
}

export default connect(mapStateToProps, {Auth})(SignUp)