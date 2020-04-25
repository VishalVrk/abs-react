import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import EventsCardItem from '../utlis/EventsCardItem'


export default class EventsDisplay extends Component {
    state={
        loading:false,
        datas:[],
        error:'',
    }

    static propTypes ={
        data: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/${this.props.data}`)
                .then(res=>{
                    console.log(res.data)
                    this.setState({
                        loading:true,
                        datas: res.data,
                    })
                    
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })
    }

    render() {
        const {datas} = this.state;
        return (
            <div className="container">
               
                <section style={{
                backgroundColor:"#fff",
                paddingBottom:"300px"
            }}>
        <h1 style={{
            textAlign:"center",
            paddingTop:"1em",
            fontSize:'42px'
    
    }}>{this.props.heading}</h1>
        <div className="events-display">
        {datas.length ?
               datas.map(data=>(
               <EventsCardItem key={data.id} data={data} name={this.props.data}/>
                            )): <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
                        }
        </div>
        </section>
            </div>

        )
    }
}
