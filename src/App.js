import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLayout from './components/HomeLayout';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CampaingsPage from './components/Campaings/CampaingsPage';
import CampaingsListPage from './components/Campaings/CampaingsListPage';
import NewsPage from './components/News/NewsPage';
import NewsListPage from './components/News/NewsListPage';
import SpeechListPage from './components/ParlimentSpeech/SpeechListPage';
import SpeechPage from './components/ParlimentSpeech/SpeechPage';


class App extends Component{
  render(){
    return(
      <Router>
        <Navbar/> 
        <Route path="/" exact component ={HomeLayout} />
        <Route path="/campaigns/:id" exact component ={CampaingsPage} />
        <Route path="/campaigns" exact component ={CampaingsListPage} />
        <Route path="/news/:id" exact component ={NewsPage} />
        <Route path="/news" exact component ={NewsListPage} />
        <Route path="/speeches" exact component ={SpeechListPage} />
        <Route path="/speeches/:id" exact component ={SpeechPage} />
        <Footer/>
      </Router>
    ) 
  }
}

export default App;
