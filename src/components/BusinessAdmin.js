
import React from 'react';
import { connect } from 'react-redux'

import { Form, Button, Header } from "semantic-ui-react"
import { api } from '../services/api'
import { postBusiness } from '../actions'
import BusinessDetail from './BuisnessDetail'


class BusinessAdmin extends React.Component {

    state = {
        name: '',
        ein: null,
        code: null, 
        
    }

    handleName = data => this.setState({ name: data })
    handleEin = data => this.setState({ ein: data })
    handleCode = data => this.setState({ code: data })

    handleSubmit = (e) => {
        e.preventDefault()
        const newBusiness = {
            name: this.state.name,
            ein: this.state.ein,
            code: this.state.code ,
            user_id: this.props.user.id 
        }
        api.business.addBusiness(newBusiness).then(data => this.props.postBusiness(data))
    }

    render () {

        return (

            <div>
                <br/>
               <Header as="h1" dividing textAlign="center">Business Detail</Header>
               <BusinessDetail />
                <div>
                <br />
                <h3>Business Form</h3>
                    <Form onSubmit={ e => this.handleSubmit(e)}>
                        <div>
                            <Form.Input 
                                label="Name of Business"
                                name="name"
                                type="text"
                                onChange={ e => this.handleName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Form.Input 
                                label="EIN"
                                name="ein"
                                type="number"
                                onChange={ e => this.handleEin(e.target.value)}
                            /> 
                        </div>
                        <div>
                            <Form.Input 
                                label="Access Code  ( create a code for employees to access your business )"
                                name="code"
                                type="number"
                                onChange={ e => this.handleCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <Button primary>Save</Button>
                        </div>
                    </Form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { user: state.auth.user }
}

export default connect(mapStateToProps, { postBusiness })(BusinessAdmin)