 
 import React from 'react';

 import { Header, Card } from 'semantic-ui-react'

 import Post from './Post'

 import image from '../assests/money.png'

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
                     <br/>
                     <Header as="h2" dividing>Recommended For Your Business</Header>
                     <br/>
                 </div>
             </div>
             <br/>
             <div>
                 <Card.Group >
                    <Card color='blue'>
                        <Card.Content header="Get Workers Compensation"/>
                        <Card.Content description="CA requires to have workers comp insurance. Protect your team and business" />
                        <Card.Content /> 
                    </Card>
                    <Card color='blue'>
                        <Card.Content header="Configure your Employees Pay"/>
                        <Card.Content description="Enable employees to access a portion of thier earned wages instantly wihtout changing when you run payroll" />
                        <Card.Content /> 
                    </Card>
                    <Card color='blue'>
                        <Card.Content header="Set up your Schedule"/>
                        <Card.Content description="Dont forget to try out our new scheduler " />
                        <Card.Content /> 
                    </Card>
                    <Card color='blue'>
                        <Card.Content header="Payroll Coming Soon"/>
                        <Card.Content description="Make your life easier with our built in payroll software" />
                        <Card.Content /> 
                    </Card>
                    <Card color='blue'>
                        <Card.Content header="Thank you for Joining"/>
                        <Card.Content description="We Value our cusotmers and we thank you for the support" />
                        <Card.Content /> 
                    </Card>
                 </Card.Group>
             </div>
             <div>
                 <img id="moneyimg" src={image} alt="money"/>
                 <p id="refer">Refer a friend to Manage Lite. You get a $100 gift card when they sign up and run their first scheduler.  </p>
            </div>
            <br/>
            
         </div>
     )
    
 }

 export default Home; 