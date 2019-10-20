import {put, all, takeLatest, call, select} from 'redux-saga/effects'
import userActionTypes from '../users/user.types'
import cartActionTypes from '../cart/cart.types'
import {clearCart, loadCart} from './cart.actions'

import {getUserCartRef} from '../../firebase/firebase.utils'

import {selectCartItems} from './cart.selectors'
import {selectCurrentUser} from '../users/user.selectors'

export function* clearCartOnSignOut () {
    yield put(clearCart())
}

export function* loadCartFromFirestore({payload: user}) {
    try{
        const cartRef = yield getUserCartRef(user.id);
        const cartSnapshot = yield cartRef.get();
        yield put(loadCart(cartSnapshot.data().cartItems));
    }catch(error){
        console.log('failure', error);
    }
}

export function* updateCartInFirestore() {
    const currentUser = yield select(selectCurrentUser);
    if(currentUser) {
        try{
            const cartDocRef = yield getUserCartRef(currentUser.id)
            const cartItems = yield select(selectCartItems);
            yield cartDocRef.update({cartItems})
        }catch(error){
            console.log('failed', error)
        }
    }
}

export function* onSignOutSuccess () {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}


export function* onSignInSuccess () {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, loadCartFromFirestore)
}

export function* onCartChange () {
    yield takeLatest([cartActionTypes.ADD_ITEMS,
                    cartActionTypes.REMOVE_ITEM,
                    cartActionTypes.CLEAR_ITEM_FROM_CART],
                     updateCartInFirestore)
}

export function* cartSagas () {
    yield all([call(onSignOutSuccess),
                call(onSignInSuccess),
                call(onCartChange)])
}