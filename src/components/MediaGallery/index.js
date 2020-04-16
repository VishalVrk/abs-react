import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'
import Img1 from './asset/2.jpg'
import Img2 from './asset/3.jpg'
import Img3 from './asset/4.jpg'
import Img4 from './asset/5.jpg'
import Img5 from './asset/6.jpg'
import Img6 from './asset/7.jpg'
import Img7 from './asset/8.jpg'
import Img8 from './asset/9.jpg'

class MediaGallery extends Component {

    state={
        index:0,
        Images:[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8],
    }

    onClickForward=()=>{
        if(this.state.index+1 === this.state.Images.length){
            this.setState({
                index:0
            })
        }
        else{
            this.setState({
                index: this.state.index +1
            })
        }
        console.log("clicked back")
    }

    onClickBack=()=>{
        if(this.state.index-1 ===-1){
            this.setState({
                index: this.state.Images.length -1

            })
        }
        else{
            this.setState({
                index: this.state.index-1
            })
        }
    }


    getSrc=(event)=>{
        const src = event.target.getAttribute('index');
        const index = parseInt(src)
        this.setState({
            index:index
        })
    }
    

    render() {
        const {Images , index} = this.state;
        console.log(index)
        // console.log(Images[index])
        return (
            <div className='container'>
            <div className="main-wrapper">
            <div className="first-row">
                <section className="my-weekly-ds-times">
                <div className="side-card">
                    <p>"Rishi has proved to be a diligent constituency MP and it was no surprise to see him re-elected with an increased majority in 2017.
                    "He is an exceptional individual and I believe he will continue to be a strong and effective advocate for our community"
                    Lord William Hague of Richmond</p>
                </div>
            </section>
            </div>

            <div className="secound-row">
            <section className="my-weekly-ds-times">
                <div className="main-section">
                    <h1>Gallery</h1>
                    <div className="share-buttons">
                    <button><FontAwesomeIcon icon={faThumbsUp}/>like</button>
                    <button>share</button>
                    <button><FontAwesomeIcon icon={faPhone}/>tweet</button>
                    </div>
                    <div className="main-content">
                        <div className="img-container">
                        <div className="mySlides">
                            <img className="slide-img" src={Images[index]} width="100%" height="500px"/>
                        </div>
                        <div className="next" onClick={this.onClickBack}>❯</div>
                        <div className="prev" onClick={this.onClickForward}>❮</div>

                            <div style={{
                                marginTop:"2em"
                            }}>
                            <div className="row">
                                {Images.map((image,index)=>(
                                     <div className="column" key={index}>
                                     <img onClick={this.getSrc} className="slide-img" src={image}  width="95%" height="100px" index={index}/>
                                     <div><br/></div>
                               </div>
                                )
                                )}
                        </div>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </div>
            </div>
        </div>
        )
    }
}
export default MediaGallery;