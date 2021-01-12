import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import CollectionPreview from '../../components/collection-preview/collection-preview'; 
import { selectShopItems } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(CollectionsOverview);