import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLayout from './components/HomeLayout';
import {HashRouter as Router, Route, Switch,withRouter} from 'react-router-dom'
import AboutLayout from './components/About'
import DataListingPage from './components/utlis/DataListingPage';
import DataViewPage from './components/utlis/DataViewPage';
import CommonViewPage from './components/utlis/CommonViewPage';
import EventsDisplay from './components/utlis/EventsDisplay';
import ScedhulePage from './components/Scedhule/ScedhulePage'
import News from './components/News';

class App extends Component{
  render(){
    return(
      <Router>
        <Navbar/> 
        <Switch>
        <Route path="/" exact component ={HomeLayout} />
        <Route path="/campaings" exact>
          <DataListingPage 
          data="campaings"
          heading="New Campaings" 
          CardImage="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg"
          CardContent="<p><blockquote>‘‘Not all of us can do great things. But we can do small things with great love.’’</blockquote>– Mother Teresa</p>"
          />
        </Route>
        <Route path="/campaings/:id" exact  render={(props) =>
         <DataViewPage {...props} 
         customHtml="
         <h4>MORALITY- THE ELIXIR OF HAPPINESS</h4>
         <p>‘‘Not all of us can do great things. But we can do small
         things with great love.’’ – Mother Teresa
         “Humankind”- well the satire lies in this word because humanity is
         </p>
         "
         SmallCard
         video
         PageGallery
         image="https://user-images.githubusercontent.com/44617366/79683774-e5ed9e80-8249-11ea-885b-7d16cc04aa51.jpg"
         content="
         <br/>
        <b> The following are links for e-book and paperback versions of the book.</b>
          <br/>
          <br/>
          <a href='https://www.becomeshakespeare.com/product/re-engineering-happiness/'>Become Shakesphere</a>
          <br/>
          <br/>
          <a href='https://www.amazon.in/Re-engineering-Happiness-Abdul-Basit-Syed/dp/9389759900/ref'>Amazon.in</a>
          <br/>
          <br/>
          <a href='https://www.flipkart.com/re-engineering-happiness/p/itmd13c5a4e14fd5?pid=9789389759907&lid'>Flipkart</a>
          <br/>
          <br/>
          <a href='https://www.snapdeal.com/product/reengineering-happiness/685072383560#bcrumbSearch:Re-engineering%20Happiness'>Snapdeal</a>
          <br/>
          <br/>
          <a href='https://www.smashwords.com/books/view/1007831'>Smashwords</a>
          <br/>
          <br/>
          <a href='https://www.kobo.com/in/en/search?query=Re-engineering+Happiness'>Kobo</a>
          <br/>
          <br/>
          <a href='https://www.barnesandnoble.com/w/re-engineering-happiness-abdul-basit-syed/1136655347?ean=2940164002275'>
          Barnes & Noble</a>
          <br/>
          <br/>
          <a href='https://play.google.com/store/books/details/Abdul_Basit_Syed_Re_engineering_Happiness_A_way_of?id=ZxzUDwAAQBAJ&hl=en'>
          Google play store</a>
          <br/>"
         data="campaings"
         />}/>
        <Route path="/about" component ={AboutLayout} />
        <Route path="/in_media/:id" exact  render={(props) =>
         <CommonViewPage {...props}
         data="in_media"
         />
         }/>
         <Route path="/speeches" exact>
          <DataListingPage 
          data="speeches"
          heading="My Speeches in Parliment (My Voice)"
          CardImage="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg"
          CardContent="<p><blockquote>‘‘Not all of us can do great things. But we can do small things with great love.’’</blockquote>– Mother Teresa</p>"
          />
        </Route>
        <Route path="/speeches/:id" exact  render={(props) =>
         <DataViewPage {...props} 
         data="speeches"
         />}/>
         <Route path="/plans" exact>
          <DataListingPage 
          data="plans"
          heading="My Plans"
          CardImage="https://user-images.githubusercontent.com/44617366/79054695-9fee7480-7c64-11ea-8ebf-14ac5d64db50.jpg"
          CardContent="<p><blockquote>‘‘Not all of us can do great things. But we can do small things with great love.’’</blockquote>– Mother Teresa</p>"
          />
        </Route>
        <Route path="/plans/:id" exact  render={(props) =>
         <DataViewPage {...props} 
         PageImage
         data="plans"
         />}/>
          <Route path="/events" exact>
         <EventsDisplay  data="events"
         heading="Organizational Events"
         />
        </Route>
        <Route path="/events/:id" exact  render={(props) =>
         <DataViewPage {...props} 
         PageImage
         data="events"
         SocialMedia
         />}/>
           <Route path="/contact" exact  component={ScedhulePage}/>
           
           <Route path='/news' exact  render={(props) => <News
           {...props} data="media_links"
           heading="In The Media"
           />}/>
        </Switch>
        <Footer/>
      </Router>
    ) 
  }
}


export default App;
