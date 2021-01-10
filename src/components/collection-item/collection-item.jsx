import React from 'react';
import { connect } from "react-redux";

import './collection-item.scss';
import { addItem } from '../../redux/cart/cart.actions';
import Button from '../button/button';

const collectionItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    return(
    <div className='collection-item'>
        <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}    
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button onClick={() => addItem(item)} inverted>ADD TO CART</Button>
    </div>
)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(collectionItem);