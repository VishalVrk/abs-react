import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import renderHTML from 'react-render-html';

export default class EventsCardItem extends Component {
    state={
        imgUrl:'',
        isLoaded:false
    }

    static propTypes ={
        data: PropTypes.object.isRequired
    }

    componentDidMount(){
        const {featured_media} = this.props.data
        const getImageUrl = axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res=>{
            this.setState({
                imgUrl:res[0].data.media_details.sizes.full.source_url,
                isLoaded:true
            })
        })
        .catch((err)=>{console.log(err)
            this.setState({
                imgUrl:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg",
                isLoaded:true
            })
        
        }
        
        )
    }

    render() {
        const {id,title,content} = this.props.data;
        const {imgUrl, isLoaded} = this.state;
        if(isLoaded){
            return (
                <div className="event-container">
                    <div className="events-card"> 
                    <Link to={`/${this.props.name}/${id}`}><h1>{title.rendered}</h1>
                    {<img style={{width:"100%", height:"300px", padding:'0'}}src={imgUrl}/>}
                    </Link>
                        </div> 
                </div>
            )
        }

        return <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
        
    }
}
