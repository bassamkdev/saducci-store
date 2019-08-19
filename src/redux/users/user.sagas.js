import {takeLatest, all, call, put} from 'redux-saga/effects';

import userActionTypes from './user.types';

import {signInSuccess,
        signInFailure
} from './user.actions'

import {auth, 
    googleProvider, 
    createUserProfileDocument} 
from '../../firebase/firebase.utils'

export function* getUserSnapshotFromUserAuth(userAuth){

    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* googleSignIn() {

    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error))
    }
} 

export function* EmailSignIn({payload: {email, password}}) {

    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getUserSnapshotFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.SIGN_IN_WITH_GOOGLE_START,googleSignIn)
}

export function* onEmailSignInStart() {
     yield takeLatest(userActionTypes.SIGN_IN_WITH_EMAIL_START,EmailSignIn)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}