

import React from 'react';

const Footer = () => {

    return (
        <div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                    Scheduler
                  </a>
                  <a href="#" className="item">
                    Contact Us
                  </a>
                  <a href="#" className="item">
                    Project Repo
                  </a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Contributers</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                  link to Harrf's GitHub
                  </a>
                 
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Thank you for checking out the site!</h4>
                <p> Special thank you to Flatiron for the support and gudiance. Also thank you to my classmates for their help and support. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer; 