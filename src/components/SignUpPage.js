
import React from 'react';
import { connect } from 'react-redux'

import { Form, Button, Input, Radio } from 'semantic-ui-react'

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
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <div>
                            
                            <Form.Input 
                                icon="user"
                                iconPosition="left"
                                label="Name"
                                type="text" 
                                name="name"
                                onChange={e => this.handleName(e.target.value)}
                            />
                        </div>
                        <div>
                        
                            <Form.Input 
                                label="Username"
                                icon="user outline"
                                iconPosition="left"
                                type="text" 
                                name="username"
                                onChange={e => this.handleUsername(e.target.value)}
                            />
                        </div>
                        <div>
            
                            <Form.Input 
                                label="Email Address"
                                icon="envelope"
                                iconPosition="left"
                                type="text" 
                                name="email"
                                onChange={e => this.handleEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            
                            <Form.Input 
                                label="Password"
                                icon="lock"
                                iconPosition="left"
                                type="password" 
                                name="password"
                                onChange={e => this.handlePassword(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="ui middle aligned center aligned grid inline fields">
                            <div className="field">
                                <input 
                                    type="radio" 
                                    value='true' 
                                    name="admin" 
                                    onChange={e => this.handleRadio(e.target.value)}
                                />
                                <label>Admin</label> 
                            </div>
                            <div className="field">
                                <input 
                                    type="radio" 
                                    value="false" 
                                    name="admin" 
                                    onChange={e => this.handleRadio(e.target.value)}
                                /> 
                                <label>Employee</label>
                            </div>
                        </div>
                        <br />
                        <div>
                            <Button primary>Create Account</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("Signup:", state)
    return {}
}

export default connect(mapStateToProps, {Auth})(SignUp)