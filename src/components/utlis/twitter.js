import React, { Component } from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

class Twitter extends Component {
    render() {
        return (
            <div style={{
                backgroundColor:"white",
                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}>
                <h1 style={{
                    backgroundColor:"#1565C0",
                    padding:"1em",
                    marginTop:"1em",
                    color:"white",
                    fontWeight:"bold"
                }}>Twitter</h1>
                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{height: 400}}
                    />
            </div>
        )
    }
}

export default Twitter