import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './style.css'


class CampaingsItem extends Component {

    state={
        imgUrl:'',
        isLoaded:false
    }

    static propTypes ={
        campaign: PropTypes.object.isRequired
    }

    componentDidMount(){
        const {featured_media} = this.props.campaign
        const getImageUrl = axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res=>{
            this.setState({
                imgUrl:res[0].data.media_details.sizes.full.source_url,
                isLoaded:true
            })
        })
        .catch(err=>console.log(err))
    }

    render() {
        const {id,title,content} = this.props.campaign;
        const {imgUrl, isLoaded} = this.state;
        if(isLoaded){
            return (
                <div>
                    <div className="content-wrapper" >
                            {/* <div>   
                            {<img style={{width:"100%", padding:'0'}}src={imgUrl}/>}
                            </div>
                        <div>
                        <strong>{title.rendered}</strong>
                    <p dangerouslySetInnerHTML={{__html:`${content.rendered.slice(0,100)}...`}}></p>
                    <Link to={`/campaigns/${id}`}>read more</Link>
                        </div> */} 




                        </div>
                        <div class="frame-video">
                            <iframe width="720px" height="420px" src="https://www.youtube.com/embed/AT51NJOfxh4?autoplay=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                </div>
            )
        }

        return <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
        
    }
} 
export default CampaingsItem;