import React,{Component, Fragment} from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faHome } from '@fortawesome/free-solid-svg-icons'
import {Route ,Link, withRouter,Switch} from 'react-router-dom'

class Navbar extends Component {
    state={
        toggle:false,
    } 

    reloadPage=()=>{
            setTimeout(() => {
                window.location.reload(); 
            }, 0);
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
               <Link to='/about' onClick={this.reloadPage}><li>About Me</li></Link> 
               <Link to='/events' onClick={this.reloadPage}><li>What I've been upto</li></Link>
                <Link to='/campaings' onClick={this.reloadPage}><li>Campaigns</li></Link>
                <Link to='/speeches' onClick={this.reloadPage}><li>Speeches</li></Link>
                <Link to='/contact' onClick={this.reloadPage}><li>Contact</li></Link>
                <Link to='/news' onClick={this.reloadPage}><li>In the Media</li></Link>
                <Link to='/in_media/26' onClick={this.reloadPage}><li>Gallery</li></Link>
            </ul>
        </nav>
            </Fragment>
           
        )
    }
   
}


export default Navbar;
