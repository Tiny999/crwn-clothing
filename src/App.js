import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';


class App extends Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      const { setCurrentUser } = this.props;

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } 
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})



export default connect(null, mapDispatchToProps)(App);
