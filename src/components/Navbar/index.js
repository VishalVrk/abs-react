import React,{Component, Fragment} from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state={
        toggle:false,
    }

    render(){
        console.log(this.state.toggle);
        return (
            <Fragment>
            <div className="parallax">
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
               <Link to='/'><li>Home</li></Link> 
                <li>About</li>
                <Link to='/campaigns'><li>Campaings</li></Link>
                <li>Portfolio</li>
            </ul>
        </nav>
            </Fragment>
           
        )
    }
   
}


export default Navbar;
