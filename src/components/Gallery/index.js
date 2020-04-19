import React, { Component } from 'react'
import './style.css'

class Gallery extends Component {
    state={
        image:"https://user-images.githubusercontent.com/44617366/79681484-378d2d80-8238-11ea-8cae-227738ff5d57.jpg"

    }

    render() {
        const {image} = this.state;
        return (
            <section>
                <div className="image-wrapper">
                   <div id="image-viewer">
                    <img id="carousel-image"
                    src={image}
                    width="100%"
                    />
                   </div>
                   <div>
                    <ul className="image-menu">
                        <li onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }} onMouseOut={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681484-378d2d80-8238-11ea-8cae-227738ff5d57.jpg"
                            })
                        }} className="active"><a className="active" href="#">About Me</a></li>
                       
                        <li 
                        onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }}
                        className="two"><a href="#">Organizational Activities</a></li>

                        <li
                        onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }}
                        className="three"><a href="/campaigns">Campaings (Re-Engineering Happiness)</a>
                        </li>

                        <li 
                         onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }}
                        className="four"><a href="#">Speeches</a>
                        </li>
                        <li
                         onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }}
                        className="five"><a href="#">In Media</a>
                        </li>
                        <li 
                         onMouseOver={()=>{
                            this.setState({
                                image:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg"
                            })
                        }}
                        className="five"><a href="#">My Plan</a>
                        </li>
                    </ul> 
                   </div>
                </div>
        </section>
        )
    }
}

export default Gallery;