
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
                        <Form.Group>
                            <Form.Input 
                                width={8}
                                label="Name of Business"
                                placeholder="Name of Business"
                                name="name"
                                type="text"
                                onChange={ e => this.handleName(e.target.value)}
                            />
                        
                            <Form.Input 
                                label="EIN"
                                name="ein"
                                placeholder="12-345678"
                                type="number"
                                onChange={ e => this.handleEin(e.target.value)}
                            /> 
                       
                            <Form.Input 
                                width={3}
                                label="Access Code"
                                placeholder="1234"
                                name="code"
                                type="number"
                                onChange={ e => this.handleCode(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label="Address" width={6} placeholder="ex. 1234 Oakland Rd."/>
                            <Form.Input label="State" width={4} placeholder="State"/>
                            <Form.Input label="City" width={5} placeholder="City" />
                            <Form.Input label="Zip Code" width={3} placeholder="Zip Code" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label="Federal Filing" width={4} placeholder="Federal Filing"/>
                            <Form.Input label="Business Type" width={4} placeholder="Business Type" />
                            <Form.Input label="Phone Number" width={4} placeholder="(123)456-7890" />
                        </Form.Group>
                        <Button primary>Save</Button>
                    </Form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth.user }
}

export default connect(mapStateToProps, { postBusiness })(BusinessAdmin)