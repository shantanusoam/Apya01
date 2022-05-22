import react from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import './headerNav.style.scss';
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const HeaderNav = ({ currentUser, hidden, ishome, ...otherProps }) => (
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
  <nav
    to="/"
    className={`${ishome ? 'ishome' : ''}  navbarcontainer`}
    {...otherProps}
  >
    <ul
      className={`${ishome ? 'ishome' : ''}  navbarcontainer_nav`}
      {...otherProps}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Company</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/">Safety</Link>
      </li>

      <li class="logo">
        {/* <Logo></Logo> */}
        <img src="img/APYA.png" alt="Logo" class="header__logo" />
      </li>
      {/* <li class="Push"><Link to="/shop">sell</Link></li> */}
      <li class="Push">
        <Link to="/shop">
          {currentUser ? (
            <div onClick={() => auth.signOut()}>SIGN OUT</div>
          ) : (
            <Link to="/signin">SIGN IN</Link>
          )}
        </Link>
      </li>
      <li>{/* <CartIcon /> */}</li>
    </ul>
    {/* {hidden ? null : <CartDropdown />} */}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderNav);
