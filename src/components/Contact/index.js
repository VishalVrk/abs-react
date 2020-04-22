import React, { Component } from 'react'
import './style.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-card">
       <h2>Scedhule an Meeting</h2>
        <div className="contact-form">
        <div class="wrap-input1 validate-input" data-validate = "Name is required">
         <input class="input1" type="text" name="name" placeholder="Name"/>
         <span class="shadow-input1"></span>
      </div>
      <div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
         <input class="input1" type="text" name="email" placeholder="Email"/>
         <span class="shadow-input1"></span>
      </div>
      <div class="wrap-input1 validate-input" data-validate = "Subject is required">
         <input class="input1" type="text" name="subject" placeholder="Subject"/>
         <span class="shadow-input1"></span>
      </div>
      <div class="wrap-input1 validate-input" data-validate = "Message is required">
         <textarea class="input1" name="message" placeholder="Message"></textarea>
         <span class="shadow-input1"></span>
      </div>

        </div>
      <div className="button-bg">
                    <div className="button">
                      Scedhule Meeting
                    </div>
                </div>
            </div>
        )
    }
}
