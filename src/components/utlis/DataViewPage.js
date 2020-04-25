import React, { Component } from 'react';
import axios from 'axios';
import SmallCard from './SmallCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'
import PageImage from '../utlis/PageImage';
import MediaGallery from '../MediaGallery';
import renderHTML from 'react-render-html';
import Contact from '../Contact';

class DataViewPage extends Component {
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
                    <div className="main-wrapper">
                    <div className="first-row">
                        {this.props.SmallCard ? <SmallCard
                        image={this.props.image}
                        content={this.props.content}
                        />:''}
                        {this.props.SocialMedia ? <Contact/>:''}
                    </div>

                    <div className="secound-row">
                    <section className="my-weekly-ds-times">
                        <div className="main-section">
                            <h1>{datas.title.rendered}</h1>
							<div className="share-buttons">
							<button><FontAwesomeIcon icon={faThumbsUp}/>like</button>
                            <button>share</button>
							<button><FontAwesomeIcon icon={faPhone}/>tweet</button>
							</div>
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
                    </section>
                </div>
                    </div>
                </div>
            ) 
        }

        return <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
       
    }
}
export default DataViewPage;
