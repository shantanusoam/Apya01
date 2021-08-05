import react from "react";
import { Link } from "react-router-dom";
import './header.style.scss'
import { ReactComponent as Logo } from "../assets/4.1 crown.svg";

const Header = () =>  ( 
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
            <li><Link to="/signin">Sign in</Link></li>
            <li class="logo">
                <Logo></Logo>
                <img src="img/APYA.png" alt="Logo" class="header__logo"/>
            </li>
            <li class="Push"><Link to="/shop">sell</Link></li>
        </ul>

</nav>
    
)

 
export default Header;