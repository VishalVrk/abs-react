import React, { Component } from 'react'
import './style.css'
class Facebook extends Component {
    render() {
        return (
             <div style={{
                backgroundColor:"white",
                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                overflow:'hidden',
                position:'relative',
                marginTop:'1em'
            }}>
                <h2 style={{
                    backgroundColor:"#1565C0",
                    padding:"1em",
                    color:"white",
                    fontWeight:"bold",
                    marginTop:'0'
                }}>Facebook</h2>
                    <iframe className="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIndia-vs-England-600561000134334%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2423540887875789"
            width="auto" height="400" scrolling="no" frameborder="0" 
             allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }
}
export default Facebook