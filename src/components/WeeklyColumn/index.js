import React, { Component } from 'react'
import '../ParlimentSpeech/style.css'
import PageImage from '../utlis/PageImage'
import axios from 'axios'
import {Link} from 'react-router-dom'

class WeeklyColumn extends Component {
    state={
        speech_parliment:[],
        loading:false,
        isLoaded:false
    }

    componentDidMount(){

        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/weekly_ds/`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        speech_parliment: res.data[0],
                        isLoaded:true
                    })
                    
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })

    }

    render() {
        const {speech_parliment ,isLoaded} = this.state;
        console.log(speech_parliment);
        return (
            <div className="speeches-in-parliment">
                 <h2>My Weekly D&S Column</h2>
                { isLoaded ?  
                <div>
                <p>{speech_parliment.title.rendered}</p>
                <PageImage img={speech_parliment}/> </div>: <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/> }
               <Link to="/weekly_ds">
               <div className="button-bg">
                    <div className="button">
                      View
                    </div>
                </div>
               </Link>
            </div>
        )
    }
}

export default WeeklyColumn