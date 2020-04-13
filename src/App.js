import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLayout from './components/HomeLayout';
import {Router} from '@reach/router';
import CampaingsPage from './components/Campaings/CampaingsPage';
import CampaingsListPage from './components/Campaings/CampaingsListPage';
import NewsPage from './components/News/NewsPage';
import NewsListPage from './components/News/NewsListPage';


function App() {
  return (
    <div className="App">
        <Navbar/>  
        <Router>
        <HomeLayout path='/'/>
        <CampaingsPage path ='/campaigns/:id'/>
        <NewsPage path ='/news/:id'/>
        <CampaingsListPage path ='/campaigns'/>
        <NewsListPage path ='/news'/>
        </Router>
         <Footer/>
    </div>
  );
}

export default App;
