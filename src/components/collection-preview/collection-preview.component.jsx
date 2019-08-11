import React from 'react';

import {CollectionPreviewContainer,
        TitleContainer,
        PreviewContainer
} from './Collection-preview.styles'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview =({items, title}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items.filter((item, idx) => idx<4).map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;