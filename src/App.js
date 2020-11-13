import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';

function App(){
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

export default App;
