import React from 'react';
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItems} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return(
        <div className='collection-item'>
            <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem); 