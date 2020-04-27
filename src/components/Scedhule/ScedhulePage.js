import React, { Component } from 'react'
import './style.css'
import Contact from '../Contact'


export default class ScedhulePage extends Component {
    render() {
        return (
            <div className='container'>
                <div className="meeting-wrapper">
                    <div className="contact-card">
                        <h2>To get insight about the works of Abdul Basit Syed Kindly register the below form</h2>
                        <div classNameName="contact-form" style={{margin:'1em'}}>
       <div className="wrap-input1 validate-input" data-validate = "Name is required">
        <input className="input1" type="text" name="firstName" placeholder="First Name" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Name is required">
        <input className="input1" type="text" name="lastName" placeholder="Last Name" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
        <input className="input1" type="email" name="email" placeholder="Email" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Designation is required">
        <input className="input1" type="text" name="Designation" placeholder="Designation" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Designation is required">
        <input className="input1" type="text" name="Country" placeholder="Country" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Preferred is required">
        <input className="input1" type="text" name="Preferred dates" placeholder="Preferred dates" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input" data-validate = "Purpose of Meeting is required">
        <input className="input1" type="text" name="Purpose of Meeting" placeholder="Purpose of Meeting" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>
     <div className="wrap-input1 validate-input">
        <textarea className="input1" name="message" placeholder="Message" style={{paddingRight:'200px'}}/>
        <span className="shadow-input1"></span>
     </div>

       </div>
     <div className="button-bg">
                   <div className="button" onClick={this.sendEmail}>
                     Scedhule Meeting
                   </div>
               </div>
           </div>
           <div>
            <Contact/>
                    </div>
                    </div>
                

                    </div>
        )
    }
}
