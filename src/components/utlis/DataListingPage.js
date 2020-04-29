import React, { Component } from 'react'
import axios from 'axios'
import CardItem from '../utlis/CardItem'
import SmallCard from '../utlis/SmallCard'
import Contact from '../Contact'
export default class DataListingPage extends Component {
    state={
        loading:false,
        datas:[],
        error:'',
    }

    componentDidMount(){
        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/${this.props.data}`)
                .then(res=>{
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
              <div className="main-wrapper">
                  <div>
                    {this.props.ImageCard?<SmallCard image={this.props.CardImage} content={this.props.CardContent}/>:''}
                    <Contact/>
                  </div>
              <div className="secound-row">
                    <section className="my-weekly-ds-times">
                        <div className="main-section">
        <h1 style={{backgroundColor: "#1565C0",padding: "1em",margin: "0",color: "white", fontWeight: "bold"}}>{this.props.heading}</h1>
                        {datas.length ?datas.map(data=>(
                            <CardItem key={data.id} data={data} name={this.props.data}/>
                            )):'Loading'
                        }
                        </div>
                    </section>
                </div>
              </div>
            </div>
        )
    }
}
