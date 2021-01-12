import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from './firebase/firebase';
import { createStructuredSelector } from "reselect";

import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/Shop';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';
import { selectCurrentUser } from "./redux/user/user.selectors";


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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render= { () => this.props.currentUser ? 
              <Redirect to='/' /> 
              : 
              <SignInSignUp /> } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
