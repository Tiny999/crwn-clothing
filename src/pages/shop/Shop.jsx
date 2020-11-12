import React, { Component } from 'react';

import Shop_Data from '../shop/Shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'; 

class ShopPage extends Component {
    state = {
        collections: Shop_Data
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;