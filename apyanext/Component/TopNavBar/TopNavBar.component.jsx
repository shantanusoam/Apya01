import react from "react";
import Link from 'next/link'

import { ReactComponent as Logo } from "../assets/4.1 crown.svg";

const TopNavBar = () =>  ( 
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
<nav  class="navbarcontainer">
        <ul class="navbarcontainer_nav">
            {/* <li><Link href="/" >Home</Link></li> */}
            <li><Link href="/">Company</Link></li>
            <li><Link href="/">Services</Link></li>
            <li><Link href="/">Safety</Link></li>
            <li><Link href="/">Sign in</Link></li>
            <li class="logo">
                {/* <Logo></Logo> */}
                <img src="img/APYA.png" alt="Logo" class="header__logo"/>
            </li>
            <li class="Push"><Link href="/">sell</Link></li>
        </ul>

</nav>
    
)

 
export default TopNavBar;