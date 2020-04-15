import React, { Component } from 'react';
import firebase, {firebseui} from '../../firebase/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Photos from '../utlis/Photos';

class InMedia extends Component {
    state={
        isLoggedIn: false
    }

    // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

    render() {
        const {isLoggedIn} = this.state;
        if(!isLoggedIn){
            return (
                <StyledFirebaseAuth uiConfig={firebseui} firebaseAuth={firebase.auth()}/>
                )
        }

        localStorage.setItem("user_id" , firebase.auth().currentUser.uid)
       
        return(
            <Photos/>
        );
    }
}

export default InMedia;
