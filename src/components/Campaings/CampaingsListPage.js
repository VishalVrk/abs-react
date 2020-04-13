import React, { Component } from 'react'
import CampaingsItem from './CampaingsItem';
import axios from 'axios';

class CampaingsListPage extends Component {

    state={
        loading:false,
        campaigns:[],
        error:'',
    }


    componentDidMount(){
        this.setState( { loading:true }, ()=>{
            axios.get(`testsite/wp-json/wp/v2/campaigns`)
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
                            <h1>Campaings</h1>
                        {campaigns.length ?campaigns.map(campaign=>(
                            <div>
                <CampaingsItem key={campaign.id} campaign={campaign}/>
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

export default CampaingsListPage;