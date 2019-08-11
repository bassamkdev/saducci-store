import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForOverview} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component'

import {CollectionOverviewContainer} from './collection-overview.styles'

const CollectionsOverview =({collections})=>{
    console.log(collections)
    return(
    <CollectionOverviewContainer>
        {collections.map(({ id,...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionOverviewContainer>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})


export default connect(mapStateToProps)(CollectionsOverview);