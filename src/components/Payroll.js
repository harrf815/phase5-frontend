 import React from 'react';

 import { Form, Header, Grid, GridColumn } from 'semantic-ui-react'
 class Payroll extends React.Component {

    state = {
        hours: 0,
        rate: 0,
    }

    handleHours = hours => this.setState({ hours: hours })
    handleRate = rate => this.setState({ rate: rate })
    handleSubmit = e => {
        e.preventDefault()
    }

    render() {

        const total = this.state.hours * this.state.rate
        const saving = total * .08

        const withholding = (total * .11)
        const fedMed = (total * .04)
        const fedOasdi = (total * .08)
        const fedTotal = withholding + fedMed + fedOasdi
        
        const social = total * .06
        const medicare = total * .05
        const disability = total * .01
        const stateTotal = social + medicare + disability

        const taxTotal = fedTotal + stateTotal
        const netpay = total - saving - withholding - fedOasdi - fedMed - social - medicare - disability 

        return (
            
            <div className="payroll" >
                <div>
                    <Header as="h2" dividing textAlign="center">Payroll Calculator</Header>
                </div>
                <br/>
                <div>
                    <Form   onSubmit={e => this.handleSubmit(e)} >
                        <Form.Group className="payroll input">
                        <Form.Input
                        
                            label="Hours"
                            name="hours"
                            placeholder="hours"
                            type="number"
                            onChange={ e => this.handleHours(e.target.value)}
                        />

                        <Form.Input
                        
                            label="Rate"
                            type="number"
                            placeholder="rate"
                            onChange={ e => this.handleRate(e.target.value)}
                        />
                        </Form.Group>
                    </Form>
                    <br/>
                    <div>
                        <Header as="h3" dividing textAlign="center">Taxes</Header>
                    </div>
                    <br/>
                    <div>
                    <div>
                        <Header as="h4" dividing textAlign="center">Federal Taxes</Header>
                        <p className="left"> Federal Withholding......................... <span className="right">{withholding.toFixed(2)}</span></p>
                        <p className="left"> Federal Medicare.........................<span className="right">{fedMed.toFixed(2)}</span></p>
                        <p className="left"> Federal OSADI.........................<span className="right">{fedOasdi.toFixed(2)}</span></p>
                        <p className="left"> Federal Income Total.........................<span className="right">{fedTotal.toFixed(2)}</span></p>
                    </div>
                    <br/>
                    <div>
                        <Header as="h4" dividing textAlign="center">State Taxes</Header>
                        <p className="left"> Social Security.........................<span className="right">{social.toFixed(2)}</span></p>
                        <p className="left"> Medicare.........................<span className="right">{medicare.toFixed(2)}</span></p>
                        <p className="left"> State Disability Inscurance.........................<span className="right">{disability.toFixed(2)}</span></p>
                        <p className="left"> State Income Total.........................<span className="right">{stateTotal.toFixed(2)}</span></p>
                    </div>
                    </div>
                    <br/>
                    <div>
                        <Header as="h4" dividing textAlign="center">Total</Header>
                        <p className="left"> Total Gross.........................<span className="right">${total.toFixed(2)}</span></p>
                        <p className="left"> 401(k) Savings Plan.........................<span className="right">${saving.toFixed(2)}</span></p>
                        <p className="left"> Total Taxes.........................<span className="right">${taxTotal.toFixed(2)}</span></p>
                        <p className="left"> Net Pay.........................<span className="right">${netpay.toFixed(2)}</span></p>
                    </div>
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



 export default Payroll; 