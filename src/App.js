import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";


import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth , createUserProfileDocument, 
  // addCollectionAndDocuments 
} from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action' 
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";
import 'swiper/swiper-bundle.css';

// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";
class App extends React.Component {
  unsubscribeFromAuth = null
 
 
  componentDidMount(){
    const { setCurrentUser } = this.props;
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          
          if (userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }
    
          setCurrentUser(userAuth);
          // addCollectionAndDocuments('collections',collectionArray.map(({title,items})=> ({title,items})));
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
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
  
        </Switch>
      </div>
    );
  }
 
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview,

})



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

