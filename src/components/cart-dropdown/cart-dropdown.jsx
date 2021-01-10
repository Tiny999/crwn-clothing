import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items"> 
            {
                cartItems.length ?
                cartItems.map(item => <CartItem key={ item.id } item={item}/>)
                : 
                <span className="empty-message">There are no items</span>
            }
        </div>
        <Button 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }
        }> GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));