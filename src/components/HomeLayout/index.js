import React, { Component } from 'react'
import './style.css'
import Gallery from '../Gallery';
import Campaings from '../Campaings';
import InMedia from '../InMedia'
import Twitter from '../utlis/twitter'
import Facebook from '../utlis/Facebook'
import Speeches from '../Speeches';
import Plans from '../Plans';
import Events from '../Events';
import Contact from '../Contact';


class HomeLayout extends Component {
    render() {

        return (
            <div className="container"> 
                    <Gallery/>
                <div className="wrapper">
                    <div>
                    <Campaings/>
                    <InMedia/>
                    <Events/>
                    <Twitter/>
                    </div>
                    <div>
                    <Facebook/>
                    <Plans/>
                    <Speeches/>
                    </div>
                    <div>
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeLayout;
