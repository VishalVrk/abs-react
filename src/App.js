import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLayout from './components/HomeLayout';
import {HashRouter as Router, Route} from 'react-router-dom'
import CampaingsPage from './components/Campaings/CampaingsPage';
import CampaingsListPage from './components/Campaings/CampaingsListPage';
import NewsPage from './components/News/NewsPage';
import NewsListPage from './components/News/NewsListPage';
import SpeechListPage from './components/ParlimentSpeech/SpeechListPage';
import SpeechPage from './components/ParlimentSpeech/SpeechPage';
import MediaListPage from './components/InMedia/MediaListPage'
import MediaPage from './components/InMedia/MediaPage'
import WeeklyListPage from './components/WeeklyColumn/WeeklyListPage'
import WeeklyPage from './components/WeeklyColumn/WeeklyPage'


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
        <Route path="/in_media" exact component ={MediaListPage} />
        <Route path="/in_media/:id" exact component ={MediaPage} />
        <Route path="/weekly_ds" exact component ={WeeklyListPage} />
        <Route path="/weekly_ds/:id" exact component ={WeeklyPage} />
        <Footer/>
      </Router>
    ) 
  }
}

export default App;
