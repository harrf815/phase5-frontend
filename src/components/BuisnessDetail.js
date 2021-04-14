

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
                console.log(data)
            })
    }

    render () {

        return (
            <div>
                <br />
                    <div className="">
                        <h3>Business Detail</h3>
                        <h5>Business Name: </h5>
                        <p>{this.props.business.name}</p>
                        <h5>EIN: </h5>
                        <p>{this.props.business.ein}</p>
                        <h5>Access Code: </h5>
                        <p>{this.props.business.code}</p>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { business: state.business}
}

export default connect(mapStateToProps, { fetchBusiness })(BusinessDetail)