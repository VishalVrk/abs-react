import React, { Component } from 'react'
import './style.css'

class Gallery extends Component {
    state={

    }
    render() {
        return (
            <section>
                <div className="image-wrapper">
                   <div id="image-viewer">
                    <img id="carousel-image"
                    src="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg"
                    />
                   </div>
                   <div>
                    <ul className="image-menu">
                        <li onMouseOver={()=>{
                            this.setState({
                                image:"Home-Image"
                            })
                        }} onMouseOut={()=>{
                            this.setState({
                                image:"Initial-Image"
                            })
                        }} className="active"><a className="active" href="#">Home</a></li>
                        <li className="two"><a href="#">About</a></li>
                        <li className="three"><a href="/campaigns">Campaings</a></li>
                        <li className="four"><a href="#">Portfolio</a></li>
                        <li className="five"><a href="#">Contact</a></li>
                        <li className="five"><a href="/weekly_ds">Weekly D&S</a></li>
                        <li className="five"><a href="/in_media">Media</a></li>
                    </ul> 
                   </div>
                </div>
        </section>
        )
    }
}

export default Gallery;