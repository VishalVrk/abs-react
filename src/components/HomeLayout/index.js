import React, { Component } from 'react'
import './style.css'
import Gallery from '../Gallery';
import Campaings from '../Campaings';
import Twitter from '../utlis/twitter'
import Facebook from '../utlis/Facebook'


class HomeLayout extends Component {
    render() {

        return (
            <div className="container"> 
                    <Gallery/>
                <div className="wrapper">
                    <div>
                    <Campaings/>
                    <Twitter/>
                    </div>
                    <div>
                    <Facebook/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeLayout;
