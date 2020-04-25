import React, { Component } from 'react'
import './style.css';
import About from './about'
import {Route ,Link, withRouter,Switch} from 'react-router-dom'
import axios from 'axios';
import SmallCard from '../utlis/SmallCard'
import Contact from '../Contact';



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

                axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/desginatory_roles`)
                .then(res=> this.setState({
                    designatory: res.data[0],
                    isLoaded: true
                }))
                .catch(err=>console.log(err))

                axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/awards`)
                .then(res=> this.setState({
                    awards: res.data[0],
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
                <div className="about-container">
                    <div className="about-wrapper">
                    <div className="first-row">
                            <section className="my-weekly-ds-times">
                                <SmallCard content="<img width=100% src='https://user-images.githubusercontent.com/44617366/79865518-e8422b00-83f8-11ea-8fc2-852549dc8b52.png'/>"/>
                            <div className="subdivisions">
                                <h1>Know More</h1>
                                <ul>
                                   <Link to={`${match.url}/desginatory-roles`}><li>Designatory Roles</li></Link> 
                                <Link to={`${match.url}/awards`}><li>Awards and Honours</li></Link> 
                                </ul>
                            </div>                                
                        </section>
                        </div>
                        <div className="secound-row">
                        <section className="my-weekly-ds-times">
                            <div className="main-section">
                            <Switch>
                            <Route exact path="/about">
                            <About data={abouts} loaded={isLoaded} Gallery/>
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
                        <div className="third-row">
                            <div style={{
                                margin:"0px"
                            }}>
                            <Contact/>
                            </div>
                               
                        </div>
                    </div>
                </div>
            )
        }
        
        else return <p>Loading..</p>
    }
    }

export default withRouter(AboutLayout)