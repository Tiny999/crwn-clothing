import React from 'react';
import { connect } from "react-redux";

import './collection.scss';
import CollectionItems from '../../components/collection-item/collection-item';
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection: {title, items}}) => (
    <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItems key={item.id} item={item}/>)
            }
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);