import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import HeaderNav from "./Component/header/headerNav.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth , createUserProfileDocuent } from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action' 
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";
import 'swiper/swiper-bundle.css';
import { Router } from "react-router";
class App extends React.Component {
  unsubscribeFromAuth = null
 
 
  componentDidMount(){
    const { setCurrentUser } = this.props;
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          
          if (userAuth){
            const userRef = await createUserProfileDocuent(userAuth);
            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }
    
          setCurrentUser(userAuth);
        });
      }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    // let header;
   
    // if ((Router.pathname === '/' || Router.pathname === '/checkout')) {
    //   header =<HeaderNav ishome/>;
    // } else {
    //   header = <HeaderNav/>;
    // }

    return (
      <div>
        
          
        
        
        
        <Switch>
          <Route exact path="/apya01" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
  
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

