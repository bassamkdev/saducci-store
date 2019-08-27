import React from 'react';
import {connect} from 'react-redux';

import {CollectionItemContainer,
        BackgroundImage,
        CollectionFooterContainer,
        NameContainer,
        PriceContainer,
        CartButton
} from './collection-item.styles'

import {addItems} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <CartButton onClick={()=>addItem(item)} inverted>Add To Cart</CartButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem); 