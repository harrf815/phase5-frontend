
import React from 'react';
import { connect } from 'react-redux'

import { Comment, Form, Header } from 'semantic-ui-react'

import { api } from '../services/api';
import { Content } from '../actions'
import Contents from './Contents'

class Post extends React.Component {

    state = {
        content: ''
    }

    hanldePost = content => this.setState({ content: content })


    handleSubmit = e => {
        e.preventDefault()
        const newContent = {
            content: this.state.content,
            user_id: this.props.user.id
        }
        console.log(newContent)
        api.posts.addPost(newContent).then(data => this.props.Content(data))
        e.target.reset()

    }

    render() {

        return (
            <Comment.Group id="postlist">
                <Header as='h3' dividing>
                    
                </Header>
                <br />
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Input 
                        action={{
                            color: 'blue',
                            labelPosition: 'left',
                            icon: 'edit',
                            content: 'Post',
                        }}
                        actionPosition='left'
                        onChange={e => this.hanldePost(e.target.value)} 
                    />
                </Form>
                <br />
                


                <div id="content" className="ui contents">       
                    <Contents />
                </div>  


            </Comment.Group>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth.user }
}


export default connect(mapStateToProps, { Content })(Post);