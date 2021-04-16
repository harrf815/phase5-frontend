

import React from 'react';
import { connect } from 'react-redux'

import { api } from '../services/api'
import { fetchBusiness } from '../actions'




class BusinessDetail extends React.Component {

    componentDidMount() {
            api.business.getBusiness().then(data => {
                if(data.length > 0){
                    this.props.fetchBusiness(data[0])
                }
            })
    }

    render () {

        return (
            <div>
                <br />
                    <div className="business">
                        <br/>
                        <h3 >Business Info</h3>
                        <h5 className="bustitle">Business Name </h5>
                        <p>{this.props.business.name}</p>
                        <h5 className="bustitle">EIN </h5>
                        <p>{this.props.business.ein}</p>
                        <h5 className="bustitle">Business Type </h5>
                        <p>S Corporation</p>
                        <h5 className="bustitle">Access Code </h5>
                        <p>{this.props.business.code}</p>
                        <h5 className="bustitle">Taxpayer Contact Info </h5>
                        <p>1234 Sand Creek Rd.</p>
                        <p>Bretwood, CA 94513</p>
                        <p> (925) 562-4875</p>
                        <br/>
                    </div>
                    <div className="business2">
                        <br/>
                        <h3>Tax Settings</h3>
                        <h5 className="bustitle">Federal Filing Cadence </h5>
                        <p>Quarterly</p>
                        <h5 className="bustitle">State Unemployment Insurance Rate</h5>
                        <p>3.8%</p>
                        <h5 className="bustitle">State Disability Insurance Rate </h5>
                        <p>1.2%</p>
                        <h5 className="bustitle">Employment Training Tax Rate</h5>
                        <p>0.1%</p>
                        <br/>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { business: state.business}
}

export default connect(mapStateToProps, { fetchBusiness })(BusinessDetail)