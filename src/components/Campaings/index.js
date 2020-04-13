import React, { Component } from 'react'
import './style.css'
import axios from 'axios';
import CampaingsItem from "./CampaingsItem";
import {Link} from '@reach/router';


class Campaings extends Component {
    state={
        loading:false,
        campaigns:[],
        error:'',
    }


    componentDidMount(){
        const wordPressSiteUrl = 'http://localhost/testsite';
        this.setState( { loading:true }, ()=>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/campaigns`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        campaigns: res.data,
                    })
                    
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })
    }


    render() {
        const {campaigns} = this.state;
        console.log(campaigns)
        campaigns.length=3;
        return (
            <section>
            <div className="campaings">
                <h1>Campaings</h1>
                {campaigns.length==3 ?
               campaigns.map(campaign=>(
               <CampaingsItem key={campaign.id} campaign={campaign}/>
                            )): <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
                        }
                <Link to='/campaigns' style={{textDecoration:'none', color:'#fff'}}>
                <div className="button-bg">
                    <div className="button">
                       See latest campaings
                    </div>
                </div>
                </Link>
            </div>
        </section>
        )
    }
    
}



export default Campaings
