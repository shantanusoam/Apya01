import react from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import './header.style.scss'
import { ReactComponent as Logo } from "../assets/4.1 crown.svg";

const Header = ({currentUser}) =>  ( 
    
/* <div className="header">
<Link to="/" className="logo-container">
<Logo className="logo"/>
</Link>
<div className="options">
<Link className="option" to='/shop'>
    SHOP
</Link>
<Link className="option" to='/shop'>
    CONTACT
</Link>
</div>
</div> */
<nav to="/" class="navbarcontainer">
        <ul class="navbarcontainer_nav">
            <li><Link to="/shop" >Home</Link></li>
            <li><Link to="/shop">Company</Link></li>
            <li><Link to="/shop">Services</Link></li>
            <li><Link to="/shop">Safety</Link></li>
            
            <li class="logo">
                <Logo></Logo>
                <img src="img/APYA.png" alt="Logo" class="header__logo"/>
            </li>
            <li class="Push"><Link to="/shop">sell</Link></li>
            <li class="Push"><Link to="/shop">{
                
                currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to="/signin">SIGN IN</Link>
            }</Link></li>
        </ul>
                
</nav>
    
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);