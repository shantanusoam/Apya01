import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { ReactComponent as ShoopingIcon } from '../../assets/11.2 shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoopingIcon className="shooping-con"/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchtoProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchtoProps)(CartIcon);