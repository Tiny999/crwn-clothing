import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';
import { auth } from './firebase/firebase';


class App extends Component{
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
