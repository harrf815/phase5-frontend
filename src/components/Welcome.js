
import React from 'react';
import { Link } from "react-router-dom";

import image1 from '../assests/r1.png'
import image2 from '../assests/r2.jpg'

const Welcome = () => {

    return (
        <div className="ui contianer">
            <div className="ui four column doubling stackable grid container">
                <div className="ui row">
                    <div className="five wide column">
                        <div>
                            <h1 id= "font">Name/Logo</h1>
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
                            <img id="img1" src={image2}/>
                        </div>
                        
                        
                    </div>
                    {/* <div  className="ui floated right content">
                            <img id="img1" src={image1}/>
                    </div> */}
            </div>
        </div>
    )
}

export default Welcome;