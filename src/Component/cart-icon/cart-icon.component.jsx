import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { ReactComponent as ShoopingIcon } from '../../assets/11.2 shopping-bag.svg'
import './cart-icon.styles.scss'
import { selectCartItemCount } from "../../redux/cart/cart.selector";

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoopingIcon className="shooping-con"/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchtoProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStatetoProps = state => ({
    itemCount : selectCartItemCount(state)
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);