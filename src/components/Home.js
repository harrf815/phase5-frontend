 
 import React from 'react';

 import { Header } from 'semantic-ui-react'

 import Post from './Post'

 const Home = () => {

     return (
         <div>
             <div>
                 <h1 id="feed">News Feed</h1>
             </div>
             <div id="Post">
                 <Post />
             </div>
             <br/>
             <div>
                 <div>
                     <Header as="h2" dividing>Recommended For Your Business</Header>
                 </div>
             </div>
         </div>
     )
    
 }

 export default Home; 