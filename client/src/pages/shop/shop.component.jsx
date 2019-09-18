import React, {useEffect, Suspense} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component'

const CollectionsOverviewContainer = React.lazy(() => import('../../components/collections-overview/collection-overview.container'));
const CollectionPageContainer = React.lazy(() => import('../collection/collection.container'));



const ShopPage = ({fetchCollections, match}) => {

    useEffect(()=>{
        fetchCollections();
    }, [fetchCollections])

    return(
    <div className='shop-page'>
        <Suspense fallback={<Spinner/>}>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </Suspense>
    </div>
)
}



const mapDispatchToProps = dispatch => ({
    fetchCollections : () => dispatch(fetchCollectionsStart())
})


export default connect(null,mapDispatchToProps)(ShopPage);