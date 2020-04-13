import React, { Component } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios';

class NewsListPage extends Component {

    state={
        loading:false,
        news:[],
        error:'',
    }

    componentDidMount(){
        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/news`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        news: res.data,
                    })
                    
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })
    }
    
    render() {
        const {news} = this.state;
        return (
            <div className="container">
              <div className="main-wrapper">
                  <div>
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
                            <h1>News</h1>
                        {news.length ?news.map(news=>(
                            <div>
                <NewsItem key={news.id} news={news}/>
                            </div>
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

export default NewsListPage;