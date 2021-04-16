
import React from 'react';
import { Link } from "react-router-dom";

import { Header } from 'semantic-ui-react'

import image1 from '../assests/recurring_events-1.jpg'
import image2 from '../assests/r2.jpg'
import image3 from '../assests/multiple_calendar_views.png'


const Welcome = () => {

    return (
        <div className="ui contianer">
            <div className="ui four column doubling stackable grid container">
                <div className="ui row">
                    <div className="five wide column">
                        <div>
                            <h1 id= "fonttitle">Manage Lite</h1>
                        </div>
                        <br/>
                        <div>
                            <h3 id= "font">Shift into the future with easy employee scheduling software</h3>
                        </div>
                        <br />
                        <div>
                            <p className="para">
                                Evolve your business today and be ready for what's next with easy scheduling,
                                communication, and payroll software built for the modern business.
                            </p>
                        </div>
                        <br />

                        <div>
                            <Link to='/signup' className="create btn btn-primary" id= "font">Create Account</Link>
                        </div>
                        <br />
                        <div>
                            <p className="log" id= "font"> 
                                Already a customer?
                                <Link to='/login' className='item' id= "font">Login</Link>
                            </p>
                        </div>
                        <br />
                        <ul className="checkmark">
                            <li> Create next week's schedule in minutes</li>
                            <li> Run payroll in minutes </li>
                            <li> Send staff their shifts via text, app, or email</li>
                            <li> Streamline team communcaiton with messaging</li>
                        </ul>
                        </div>
                        <div  className="eleven wide column">
                            <img id="img1" src={image2} alt="workers talking"/>
                        </div>
                        
                        
                    </div>
                    <br/>
                    <div className="ui container welcome">
                        <Header id="keyfeature" as="h2" dividing textAlign='center'>Key Features</Header>
                        <img id="welcomeimg2"src={image1} alt="calendar"/>
                    </div>
                    <div>
                        <p id="features">
                            Recurring appointments: Easily configure recurring events to be repeated on a daily, weekly, 
                            monthly, or yearly basis with optimized recurrence options. You can also skip or change the 
                            occurrence of a recurring appointment.
                        </p>
                    </div>
                    <div>
                        <img id="welcomeimg3" src={image3} alt="calendar"/>
                    </div>
                    <div>
                        <p id="features">
                            Multiple calendar views: A wide range of built-in view modes are available: day, week, 
                            workweek, month, schedule, timeline day, timeline week, timeline workweek. The control 
                            allows you to conveniently customize every view with unique, view-specific options. 
                        </p>
                    </div>
                    <br/>
                    <br/>
            </div> 
        </div>
    )
}

export default Welcome;