

import React from 'react';
import { connect } from 'react-redux'

import { api } from '../services/api'
import { fetchBusiness } from '../actions'



class BusinessDetail extends React.Component {

    componentDidMount() {
            api.business.getBusiness().then(data => console.log(data))
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.business)
    return { business: state.business}
}

export default connect(mapStateToProps, { fetchBusiness })(BusinessDetail)