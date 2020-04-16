import React, {Component} from 'react'
import './style.css'

class Footer extends Component{
    render(){
        return (
             <div className="footer" style={{paddingBottom:"60px"}}>
                 <h1><a> World humanitarian drive main index page link</a></h1>   

               <div className="column" style={{textAlign:'right'}}>  
              <br/>Promoted by Sam Gibbs on behalf of Rishi Sunak MP, both at Uni
             </div>
             <div className="column" >
                  <div className="leftcolumn" >
                     <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#/campaigns">Campaings</a></li>
                          <li><a href="#">Portfolio</a></li>
                    </ul>  
                  </div>
                  <div className="leftcolumn" >
                     <ul>
                          <li><a href="#/weekly_ds">Weekly D&S</a></li>
                          <li><a href="#/in_media">Media</a></li>
                     </ul> 
                  </div>
         </div>
             </div>
        )
    }
   
}

export default Footer
