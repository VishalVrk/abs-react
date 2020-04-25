import React, {Component} from 'react';
import './style.css';
import renderHTML from 'react-render-html'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'
import PageImage from '../utlis/PageImage';
import MediaGallery from '../MediaGallery'
import './style.css'


 const About=(props)=> {
    console.log(props.loaded)
    console.log(props.data)
    try {
        if(props.loaded){
            return (
                <div>
                  <div>
                     <h1>{renderHTML(props.data.title.rendered)}
                        </h1>
                         {/* <div className="share-buttons">
                             <button><FontAwesomeIcon icon={faThumbsUp}/>like</button>
                                 <button>share</button>
                                     <button><FontAwesomeIcon icon={faPhone}/>tweet</button>
                         </div> */}
                         <div className="main">
                             {props.Image ?<PageImage img={props.data}/>: null}
                             {props.Gallery ? <MediaGallery/>: null}
                                
                        <div className="about-content">
                            
                                 {renderHTML(props.data.content.rendered)}
                        </div>
                            </div>   
                           </div>
                </div>
            )

        }
        else{
            return <p>Loading..</p>
        }
        
    } catch (error) {
        console.log(error);
    return <p>Hello</p>
    }
}
   
  
export default About;

