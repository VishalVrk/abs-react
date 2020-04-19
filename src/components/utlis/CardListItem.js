import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import CardItem from '../utlis/CardItem'

class CardListItem extends Component {
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
            <section>
            <div className="campaings">
        <h1>{this.props.heading}</h1>
                {datas.length ?
               datas.map(data=>(
               <CardItem key={data.id} data={data} name={this.props.data}/>
                            )): <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
                        }
                <Link to={this.props.data} style={{textDecoration:'none', color:'#fff'}}>
                <div className="button-bg">
                    <div className="button">
                       See latest {`${this.props.data}`}
                    </div>
                </div>
                </Link>
            </div>
        </section>
        )
    }
}
export default CardListItem;
