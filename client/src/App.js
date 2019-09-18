import React, {useEffect, Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/users/user.selectors'
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';
import ErrorBoundry from './components/error-boundry/error-boundry.component';
import Spinner from './components/spinner/spinner.component';

import {GlobalStyle} from './global.styles'

import {checkUserSession} from './redux/users/user.actions'

const HomePage = React.lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = React.lazy(() => import('./pages/shop/shop.component'));
const CheckOut = React.lazy(() => import('./pages/checkout/checkout.component.jsx'));
const SignInAndSignUpPage = React.lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));



const App = ({checkUserSession, currentUser}) => {
  
  useEffect(()=> {
    checkUserSession();
  },[checkUserSession] )

  return (
  <div>
    <GlobalStyle/>
    <Header />
    <Switch>
      <ErrorBoundry>
        <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckOut}/>
          <Route exact path='/signin'
          render={()=> currentUser ? (<Redirect to='/' />)
            : (<SignInAndSignUpPage/>)}
          />
        </Suspense>
      </ErrorBoundry>
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
