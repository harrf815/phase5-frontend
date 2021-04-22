
import React from 'react';
import { connect } from 'react-redux'

class Reply extends React.Component {

    state = {
        comments: ''
    }

    handleComments = comment => {
        this.setState({ comments: comment})
    }

    handleSubmit = e => {
        e.preventDefault()
        const newComment = {
            comment: this.state.comments,
            user_id: this.props.user.id,
            post_id: this.props.post_id,
        }
        console.log(newComment)
    }

    render () {

        return (
            <form onSubmit={ e => this.handleSubmit(e)}>
                <div>
                    <input 
                        type="text"
                        name="comments"
                        onChange={ e => this.handleComments(e.target.value) }
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return  { user: state.auth.user, posts: state.post }
}

export default connect(mapStateToProps, {} )(Reply)