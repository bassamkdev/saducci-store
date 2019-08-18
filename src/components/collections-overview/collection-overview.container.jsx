import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStructuredSelector} from 'reselect'

import {selectIsCollectionsFetching} from '../../redux/shop/shop.selectors';

import CollectionOverview from './collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionOverviewContiner = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContiner;