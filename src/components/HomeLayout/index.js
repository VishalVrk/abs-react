import React, { Component } from 'react'
import './style.css'
import Gallery from '../Gallery';
import Campaings from '../Campaings';
import News from '../News';
import ParlimentSpeech from '../ParlimentSpeech'
import Twitter from '../twitter'
import Facebook from '../Facebook'


class HomeLayout extends Component {
    render() {

        return (
            <div className="container"> 
                    <Gallery/>
                <div className="wrapper">
                    <div>
                    <Campaings/>
                    <News/>
                    <ParlimentSpeech/>
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
