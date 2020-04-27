import React, { Component } from 'react';
import axios from 'axios';
import SmallCard from './SmallCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'
import PageImage from '../utlis/PageImage';
import MediaGallery from '../MediaGallery';
import renderHTML from 'react-render-html';

class CommonViewPage extends Component {
    state={
        datas:{},
        isLoaded: false,
        imgUrl:'',
    }

    componentDidMount(){
        axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/${this.props.data}/${this.props.match.params.id}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                datas: res.data,
                isLoaded: true
          })})
        .catch(err=>console.log(err))
    } 

    render() {
        const {datas,isLoaded,} = this.state;
        console.log(isLoaded);
        console.log(datas);
        if(isLoaded){
            return (
                <div className='container'>

                    <div className="secound-row">
                        <div className="main-section">
                            <h2 style={{backgroundColor: "#1565C0",padding: "1em",margin: "0",color: "white", fontWeight: "bold"}}>{datas.title.rendered}</h2>
							{/* <div className="share-buttons">
							<button><FontAwesomeIcon icon={faThumbsUp}/>like</button>
                            <button>share</button>
							<button><FontAwesomeIcon icon={faPhone}/>tweet</button>
							</div> */}
							<div>
                            {this.props.PageImage ?  <PageImage img={datas}/> : ''}
                            {this.props.PageGallery ?  <MediaGallery/> : ''}
                            <div style={{margin:"5em", textAlign:"center"}}>
                            {this.props.customHtml ?renderHTML(this.props.customHtml) : ''}
                            </div>
                            <div className="content">
                            {renderHTML(datas.content.rendered)}
                            </div>
							</div>
                            {this.props.video ?  <div className="frame-video" style={{marginTop:"3em" , marginBottom:"10em"}}>
                            <iframe width="90%" height="420px" src="https://www.youtube.com/embed/AT51NJOfxh4?autoplay=1"></iframe>
                        </div> : '' }
                        </div>
                </div>
                    </div>
            ) 
        }

        return <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
       
    }
}
export default CommonViewPage;
