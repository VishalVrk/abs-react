import React, { Component } from 'react'
import renderHTML from 'react-render-html';

class SmallCard extends Component {
    render() {
        const content = this.props.content
        return (
            <div className="side-card">
                {this.props.image?<img src={this.props.image} width="100%"/>:''}
                <div style={{
                    width:"100%",
                    overflow:"hidden"
                }}>
                {this.props.content?renderHTML(content):''}
                </div>
                
            </div>
        )
    }
}

export default SmallCard;
