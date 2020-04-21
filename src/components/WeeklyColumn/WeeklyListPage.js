import React, { Component } from 'react'
import WeeklyItem from './WeeklyItem'
import axios from 'axios'

class WeeklyListPage extends Component {
    state={
        speech_parliment:[],
        loading:false,
        isLoaded:false
    }

    componentDidMount(){

        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/weekly_ds`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        speech_parliment: res.data,
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
                          <h1>Weekly Updates</h1>
                          {
                          speech_parliment.map(sp=>(
                            isLoaded ? <WeeklyItem name={sp}/> : <p>loading...</p> ))
                         }
                      </div>
                  </section>
              </div>
            </div>
          </div>
          
        )
    }
}
export default WeeklyListPage;