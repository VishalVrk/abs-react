import React, { Component } from 'react'
import './style.css'

export default class Scedhule extends Component {
  state = {
    email: {
      name: '',
      sender: '',
      subject: '',
      text: ''
    },
    heading:"Scedhule an Meeting"
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`https://abs-mailer.herokuapp.com/send-email?name=${email.name}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err));
    this.setState({
      email:{
        name: '',
        sender: '',
        subject: '',
        text: ''
      },
      heading:`Thanks for your response ${email.name}`
    })
  }

  render() {
    const { email ,heading} = this.state;
    return (
      <div className="contact-card">
      <h2>{heading}</h2>
       <div className="contact-form">
       <div class="wrap-input1 validate-input" data-validate = "Name is required">
        <input class="input1" type="text" name="name" placeholder="Name"
        value={email.name} 
        onChange={e => this.setState({ email: { ...email, name: e.target.value } })}
        />
        <span class="shadow-input1"></span>
     </div>
     <div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
        <input class="input1" type="text" name="email" placeholder="Email"
         value={email.sender}
         onChange={e =>
          this.setState({ email: { ...email, sender: e.target.value }})}
        />
        <span class="shadow-input1"></span>
     </div>
     <div class="wrap-input1 validate-input" data-validate = "Subject is required">
        <input class="input1" type="text" name="subject" placeholder="Subject"
        value={email.subject}
        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })}
        />
        <span class="shadow-input1"></span>
     </div>
     <div class="wrap-input1 validate-input" data-validate = "Message is required">
        <textarea class="input1" name="message" placeholder="Message"
        value={email.text}  onChange={e => this.setState({ email: { ...email, text: e.target.value } })}
        />
        <span class="shadow-input1"></span>
     </div>

       </div>
     <div className="button-bg">
                   <div className="button" onClick={this.sendEmail}>
                     Scedhule Meeting
                   </div>
               </div>
           </div>
       )
   }
}
