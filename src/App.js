import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/users/user.selectors'
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckOut from './pages/checkout/checkout.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'

import {checkUserSession} from './redux/users/user.actions'



const App = ({checkUserSession, currentUser}) => {
  
  useEffect(()=> {
    checkUserSession();
  },[checkUserSession] )

  return (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/checkout' component={CheckOut}/>
      <Route exact path='/signin'
      render={()=> currentUser ? (<Redirect to='/' />)
        : (<SignInAndSignUpPage/>)}
      />
    </Switch>
  </div>
  );
}

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
