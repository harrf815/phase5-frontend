
import React from 'react';
import { connect } from 'react-redux'
import faker from 'faker'

import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { api } from '../services/api'
import { fetchContent } from '../actions'

class Contents extends React.Component {

    componentDidMount() {
        api.posts.getPost().then(data => this.props.fetchContent(data))
    }

    renderContents () {
        return this.props.posts.map(content => {
            return (
                <div key={content.id}>  
                    <div>
                    <Comment.Avatar className="ui tiny circular image" src=''/>
                    </div>
                    <Comment.Content>
                        <Comment.Author as='a'>{content.user.name}</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>{content.content}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </div>
            )
        })
    }


    render() {

        return (
            <div> {this.renderContents()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.post }
}

export default connect(mapStateToProps, {fetchContent})(Contents);