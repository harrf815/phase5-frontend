
import React from 'react';
import { connect } from 'react-redux'
import faker from 'faker'

import { Comment } from 'semantic-ui-react'

import { api } from '../services/api'
import { fetchContent } from '../actions'
// import Reply from './Reply'

class Contents extends React.Component {

    state = {
        isHidden: true
    }

    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden})
    }

    componentDidMount() {
        api.posts.getPost().then(data => this.props.fetchContent(data))
    }

    renderContents () {
        return this.props.posts.map(content => {
            const time = new Date (content.created_at)
            const timeDate = time.getMonth()+1+"/"+time.getDate()+"/"+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes()
            return (
                <div className="item" key={content.id}> 
                <br/> 
                    <div className="comment box">
                    <Comment.Avatar className="ui small circular image" src={faker.image.avatar()}/>
                    </div>
                    
                    <div >
                    <Comment.Content className="comment box">
                        <h3 className="ui left aligned header" as='a'>  {content.user.name}</h3>
                        <Comment.Metadata >
                            <div className="time">{timeDate}</div>
                        </Comment.Metadata>
                        <Comment.Text className="ui center aligned header">{content.content}</Comment.Text>
                        <Comment.Actions>
                            {/* <Reply post_id={content.id}/> */}
                            {/* <Comment.Action 
                                onClick={this.toggleHidden.bind(this)}
                                className="ui right floated content"
                            >
                            Reply
                            </Comment.Action>
                            <div className="ui right floated content">
                                {!this.state.isHidden && <Reply />}
                            </div> */}
                        </Comment.Actions>
                    </Comment.Content>
                    </div>
                </div>
            )
        })
    }


    render() {

        return (
            <div className="ui relaxed divided list" > {this.renderContents()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.post }
}

export default connect(mapStateToProps, {fetchContent})(Contents);