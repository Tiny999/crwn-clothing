import React from 'react';
import { connect } from "react-redux";

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items"> 
            {
                cartItems.map(item => <CartItem key={ item.id } item={item}/>)
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);