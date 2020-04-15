import React, { Component } from 'react';
import '../Campaings/style.css'

class LatestUpdates extends Component {
    render() {
        return (
            <div>
                 <section>
            <div className="campaings">
                <h1>Latest Updates</h1>
                {<p style={{textAlign:"center" , fontWeight:'bold' , fontSize:'32px'}}>Corona Updates</p>}
                    <div className="button">
                      Read More
                    </div>
                </div>
        </section>
            </div>
        )
    }
}

export default LatestUpdates;
