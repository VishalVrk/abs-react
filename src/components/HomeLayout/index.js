import React, { Component } from 'react'
import './style.css'
import Gallery from '../Gallery';
import Campaings from '../Campaings';
import News from '../News';


class HomeLayout extends Component {
    render() {

        return (
            <div className="container">
                    <Gallery/>
                <div className="wrapper">
                    <div>
                    <Campaings/>
                    <News/>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeLayout;
