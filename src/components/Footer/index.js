import React, {Component} from 'react'
import './style.css'

class Footer extends Component{
    render(){
        return (
                <footer>
               <div className="footer-heading">
                    <a>
                         World humanitarian drive main index page link
                    </a>
               </div>
               <div className="column" style={{textAlign:'right'}}>  
              <br/>Promoted by Sam Gibbs on behalf of Rishi Sunak MP, both at Uni
             </div>
             <div className="column" >
                  <div className="leftcolumn" >
                     <ul>
                          <li><a href="#">link1</a></li>
                          <li><a href="#">link2</a></li>
                          <li><a href="#">link3</a></li>
                          <li><a href="#">link4</a></li>
                    </ul>  
                  </div>
                  <div className="leftcolumn" >
                     <ul>
                          <li><a href="#">link5</a></li>
                          <li><a href="#">link6</a></li>
                     </ul> 
                  </div>
                  <div className="leftcolumn">
                  <div className="leftcolumn">
                  </div>
             </div>
         </div>
           </footer>
        )
    }
   
}

export default Footer
