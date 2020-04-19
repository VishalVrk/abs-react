import React, {Component} from 'react'
import './style.css'

class Footer extends Component{
    render(){
        return (
            <div className="footer-section">
                 <h1><a> World humanitarian Drive</a></h1>   
             <div className="footer">
                 <div className="section-1">
                 <ul>
                          <li><a href="#/">Home</a></li>
                          <li><a href="#/about">About Me</a></li>
                          <li><a href="#/campaings">Campaings</a></li>
                          <li><a href="#">Speeches</a></li>
                    </ul>  
                 </div>
                 <div className="section-2">
                    <ul>
                          <li><a href="">Media</a></li>
                          <li><a href="">What I've been upto</a></li>
                     </ul> 
                 </div>
                 <div className="section-3">
                     <div style={{
                         textAlign:"right",
                         margin:"2em"
                     }}>
                     Abdul Basit Syed
                    <br/>
                    International Ambassador, Croydon, U.K.
                    <br/>
                    Founder & Chairman of World Humanitarian Drive (WHD)
                     </div>
                     </div>     
            </div>
            </div>
        )
    }
   
}

export default Footer
