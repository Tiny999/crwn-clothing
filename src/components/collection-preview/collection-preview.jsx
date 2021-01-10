import React from 'react';

import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const collectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default collectionPreview;