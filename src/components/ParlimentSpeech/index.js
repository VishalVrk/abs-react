import React, { Component } from 'react'
import './style.css'

export default class ParlimentSpeech extends Component {
    render() {
        return (
            <div className="speeches-in-parliment">
                <h1>Speeches in parliment</h1>
                <p>Some of my past contributions in the House of Commons</p>
                <img src="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg" width="100%"/>
                <div className="button-bg">
                    <div className="button">
                      View
                    </div>
                </div>
            </div>
        )
    }
}
