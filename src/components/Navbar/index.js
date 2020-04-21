import React,{Component, Fragment} from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state={
        toggle:false,
    } 

    render(){
        return (
            <Fragment>
            <div className="parallax"> 
            <div className="hero-name">
            <div className="Name">
            <span>Abdul Basit Syed</span>
            </div>
            </div> 
            </div>
            <nav>
            <div className="toggle">
            <a onClick={()=>{
                this.setState({
                    toggle:!this.state.toggle,
                })
            }}> <FontAwesomeIcon icon={faBars}/></a>
            </div>
            {/* https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg */}
            <ul className={this.state.toggle ? "active" : "no-dispaly"}>
               <Link to='/'><li><FontAwesomeIcon icon={faHome}/></li></Link> 
               <Link to='/about'><li>About Me</li></Link> 
               <Link to='/events'><li>What I've been upto</li></Link>
                <Link to='/campaings'><li>Campaigns</li></Link>
                <Link to='/speeches'></Link><li>Speeches</li>
                <Link to='/in_media/26'><li>Media</li></Link>
            </ul>
        </nav>
            </Fragment>
           
        )
    }
   
}


export default Navbar;
