import React, { Component } from 'react'
import './style.css';
import About from './about'
import {Route ,Link, withRouter,Switch} from 'react-router-dom'
import axios from 'axios';
import SmallCard from '../utlis/SmallCard'



class AboutLayout extends Component {
    state={
                abouts:{},
                designatory:{},
                awards:{},
                isLoaded: false
            }
        
            componentWillMount(){
                axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/about`)
                .then(res=> this.setState({
                    abouts: res.data[0],
                    isLoaded: true
                }))
                .catch(err=>console.log(err))
            }

    render(){
        const { match, location, history } = this.props;
        const {abouts,isLoaded,designatory,awards} = this.state;
        console.log(abouts);
        if(isLoaded){
            return (
                <div className="container">
                    <div className="main-wrapper">
                    <div className="first-row">
                            <section className="my-weekly-ds-times">
                                <SmallCard content="
 <h2>Awards</h2>                             
<br/> <b>International Ambassador</b> - Croydon
<br/> <b>“Mahtma Gandhi Award”</b> - NRI Welfare Society
<br/> <b>“Knight of Malta”</b> -The Sovereign Order of OSJ Malta
<br/> <b>“Ambassador for Peace”</b> - Universal Peace Federation
<br/> <b>“Award of Excellence’’</b> - United Nations Office on Drugs and crime (UNODC) and Saudi Government
<br/> <b>“Peace Award”</b> - BRICS International Alliance "

/>
                            <div className="subdivisions">
                            <SmallCard content="
 <h2>Designatory Roles</h2>                             
 <br/><b>International Ambassador</b> – Croydon Borough of Greater London
 <br/><b>Founder & Chairman</b> – World Humanitarian Drive
 <br/><b>Board of Director</b> – Universal Peace Federation
 <br/><b>Director</b> – Platinum Consultant London Ltd
 <br/><b>Founder & Chairman</b> – Al Basit Real Estate
 <br/><b>Vice president</b> – Space Kidz India
 <br/><b>Vice President</b> – Amicability International Diplomatic Club
 <br/><b>Board Member</b>- Croydon Mayor's Charity Board
 <br/><b>Steering Committee Member</b> – Faiths Together in Croydon"
/>
                            </div>                                
                        </section>
                        </div>
                        <div className="secound-row">
                        <section className="my-weekly-ds-times">
                            <div className="main-section">
                            <Switch>
                            <Route exact path="/about">
                            <About data={abouts} loaded={isLoaded}/>
                            <div className="frame-video" style={{marginTop:"3em" , marginBottom:"10em"}}>
                                 <iframe width="90%" height="420px" src="https://www.youtube.com/embed/AT51NJOfxh4?autoplay=1" frameborder="0" allowfullscreen></iframe>
                             </div>
                            </Route>
                             <Route path={"/about/desginatory-roles"}>
                                <About data={designatory} loaded={isLoaded}/>
                             </Route>
                             <Route path={"/about/awards"}>
                                <About data={awards} loaded={isLoaded}/>
                             </Route>
                          </Switch>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            )
        }
        
        else return <p>Loading..</p>
    }
    }

export default withRouter(AboutLayout)