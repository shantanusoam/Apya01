import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./Component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth , createUserProfileDocuent } from './firebase/firebase.util'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){

    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          
          if (userAuth){
            const userRef = await createUserProfileDocuent(userAuth);
            userRef.onSnapshot(snapshot => {
              this.setState({
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              }, 
              );
              console.log(this.state)
            })
           
          }
          this.setState({currentUser: userAuth})
          // this.setState({
          //   currentUser: user
          
          // });
          // console.log(user)
        },
        console.log(this.state.currentUser)
        );
        
    
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />{" "}
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
  
        </Switch>
      </div>
    );
  }
 
 
}

export default App;
