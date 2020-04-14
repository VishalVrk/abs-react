import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'
import PageImage from '../PageImage';


class CampaingsPage extends Component {
  
    state={
        campaign:{},
        isLoaded: false,
        imgUrl:'',
    }

    componentDidMount(){
        axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/campaings/${this.props.match.params.id}`)
        .then(res=> this.setState({
            campaign: res.data,
            isLoaded: true
        }))
        .catch(err=>console.log(err))
        console.log(this.state.campaign);
    } 

    render() {
        const {campaign , isLoaded, imgUrl} = this.state;
        console.log(campaign.featured_media);
        if(isLoaded){
            return (
                <div className='container'>
                    <div className="main-wrapper">
                    <div className="first-row">
                        <section className="my-weekly-ds-times">
                        <div className="side-card">
							<p>"Rishi has proved to be a diligent constituency MP and it was no surprise to see him re-elected with an increased majority in 2017.
                            "He is an exceptional individual and I believe he will continue to be a strong and effective advocate for our community"
                            Lord William Hague of Richmond</p>
                            <PageImage img={campaign}/>
                        </div>
                    </section>
                    </div>

                    <div className="secound-row">
                    <section className="my-weekly-ds-times">
                        <div className="main-section">
                            <h1>{campaign.title.rendered}</h1>
							<div className="share-buttons">
							<button><FontAwesomeIcon icon={faThumbsUp}/>like</button>
                            <button>share</button>
							<button><FontAwesomeIcon icon={faPhone}/>tweet</button>
							</div>
							<div className="main-content">
                            <PageImage img={campaign}/>
                            <p dangerouslySetInnerHTML={{__html:`${campaign.content.rendered}`}}></p>
							</div>
                            
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
export default CampaingsPage
