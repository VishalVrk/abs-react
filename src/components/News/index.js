import React, { Component } from 'react';
import Contact from '../Contact';
import axios from 'axios';
import renderHTML from 'react-render-html';


export default class News extends Component {

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
                .catch(error=>{
                    this.setState({
                        loading:false,
                    })
                    console.log(error)
                } )
        })
    }

    render() {
        const {datas ,loading} = this.state;
        console.log(datas);
        if(loading){
            return (
                <div className="container">
                    <div className="main-wrapper">
                        <div className="first-row">
                            <Contact/>
                        </div>
                        <div className="content-section">
            <h2 style={{backgroundColor: "#1565C0",padding: "1em",margin: "0",color: "white", fontWeight: "bold"}}>{this.props.heading}</h2>
            <div>
            {datas.map(data=>(<div className="content">
            <h2>{data.title.rendered}</h2>
                {renderHTML(data.content.rendered)}
                
                </div>))}
            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <p>loading...</p>
        }
    }
}
