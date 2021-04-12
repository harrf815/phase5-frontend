
import React from 'react';

import { Form, Button } from "semantic-ui-react"

class BusinessAdmin extends React.Component {

    state = {
        name: '',
        ein: null,
        code: null
    }

    handleName = data => this.setState({ name: data })
    handleEin = data => this.setState({ ein: data })
    handleCode = data => this.setState({ code: data })

    handleSubmit = (e) => {
        e.preventDefault()
        const newBusiness = {
            name: this.state.name,
            ein: this.state.ein,
            code: this.state.code 
        }
        console.log(newBusiness)
    }

    render () {

        return (

            <div>
                <br />
                <div className="">
                    <h3>Business Detail</h3>
                    <h5>Business Name: </h5>
                    <h5>EIN: </h5>
                    <h5>Access Code: </h5>
                </div>
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
            </div>
        )
    }
}

export default BusinessAdmin