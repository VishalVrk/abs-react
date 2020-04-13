import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faPhone } from '@fortawesome/free-solid-svg-icons'


class CampaingsPage extends Component {
  
    state={
        campaign:{},
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`http://localhost/testsite/wp-json/wp/v2/campaigns/${this.props.id}`)
        .then(res=> this.setState({
            campaign: res.data,
            isLoaded: true
        }))
        .catch(err=>console.log(err))
    }

    render() {
        const {campaign , isLoaded} = this.state;
        console.log(campaign)
        if(isLoaded){
            return (
                <div className='container'>
                    <div className="main-wrapper">
                    <div className="first-row">
                        <section className="my-weekly-ds-times">
                        <div className="side-card">
                            <img src="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg" width="100%"/>
							<p>"Rishi has proved to be a diligent constituency MP and it was no surprise to see him re-elected with an increased majority in 2017.
                            "He is an exceptional individual and I believe he will continue to be a strong and effective advocate for our community"
                            Lord William Hague of Richmond</p>
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
                            <img src="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg" width="100%"/>
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
