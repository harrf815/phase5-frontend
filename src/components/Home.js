 
 import React from 'react';

 import Post from './Post'

 class Home extends React.Component {

    render() {

        return (
            <div>
                <div>
                    <h1>News Feed</h1>
                </div>
                <div>
                    <Post />
                </div>
            </div>
        )
    }
 }

 export default Home; 