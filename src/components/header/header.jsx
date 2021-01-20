import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderComponent, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


import { auth } from "../../firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <HeaderComponent>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>        
            <OptionLink to='/shop'>CONTACT</OptionLink>    
            {
                currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
                </OptionLink> 
                : 
                <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
            }   
            <CartIcon/> 
        </OptionsContainer>
        
        { hidden ? null : <CartDropdown/> }
    </HeaderComponent>
);

 
const  mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);