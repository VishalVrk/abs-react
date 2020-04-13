import React, { Component } from 'react';
import {Link} from '@reach/router';
import NewsItem from './NewsItem'
import axios from 'axios'

class News extends Component {
    state={
        loading:false,
        newsList:[],
        error:'',
    }

    componentDidMount(){
        const wordPressSiteUrl = 'http://localhost/testsite';
        this.setState( { loading:true }, ()=>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        newsList: res.data,
                    })
                    
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })
    }


    render() {
        const {newsList} = this.state;
        console.log(newsList)
        newsList.length=3;
        return (
         
            <section>
            <div className="campaings">
                <h1>News</h1>
                {newsList.length==3 ?
               newsList.map(news=>(
               <NewsItem key={news.id} news={news}/>
                            )): <img src="https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif"/>
                        }
                <Link to='/news' style={{textDecoration:'none', color:'#fff'}}>
                <div className="button-bg">
                    <div className="button">
                       Read all updates
                    </div>
                </div>
                </Link>
            </div>
        </section>
        )
    }
}
export default News;