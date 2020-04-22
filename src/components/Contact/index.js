import React, { Component } from 'react';
import './style.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-card">
                              <h2>Constituency Office </h2>
                           <div className="contact-content">
                            <div><i className="fas fa-map-marker-alt"></i>Unit 1, Omega Business Village,<br/>Northallerton DL6 2NJ
                           </div>
                            <div><i className="fas fa-phone-alt"></i> 01609 76533</div>
                            <div><i className="fas fa-envelope"></i><a href="mailto:abcd@gmail.com">abcd@gmail.com</a></div>
                             <div><i className="fas fa-map-marker-alt"></i>
                             Westminster Office<br/>
                              House of Commons, London SW1A 0AA
                            </div>
                            <div> <i className="fas fa-phone-alt"></i> 020 7219 5437</div>
                            <div><i className="fas fa-envelope"></i><a href="mailto:abcd@gmail.com">abcd@gmail.com</a></div>
                            <div><i className="fab fa-facebook-f"></i>  <a href="http://www.facebook.com/abcd">Rishi on Facebook</a></div>
                            <div><i className="fab fa-twitter"></i><a href="@abcd">Rishi Sunak</a></div>
                            <div><i className="fab fa-instagram"></i><a href="abcd">Rishi Sunak</a></div>
                           </div>
                           </div>
                        
        )
    }
}

