import {takeLatest, all, call, put} from 'redux-saga/effects';

import userActionTypes from './user.types';

import {signInSuccess,
        signInFailure,
        signOutSuccess,
        signOutFailure,
        signUpSuccess,
        signUpFailure
} from './user.actions'

import {auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser} 
from '../../firebase/firebase.utils'

export function* getUserSnapshotFromUserAuth(userAuth, additionalData){

    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getUserSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
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

export function* SignUp({payload: {email, password, displayName}}) {
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({userAuth: user, additionalData: {displayName}}))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {userAuth, additionalData}}) {
    yield getUserSnapshotFromUserAuth(userAuth, additionalData);
}

export function* userSignOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error){
        yield put(signOutFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.SIGN_IN_WITH_GOOGLE_START,googleSignIn)
}

export function* onEmailSignInStart() {
     yield takeLatest(userActionTypes.SIGN_IN_WITH_EMAIL_START,EmailSignIn)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart () {
    yield takeLatest(userActionTypes.SIGN_OUT_START, userSignOut)
}

export function* onSignUpStart () {
    yield takeLatest(userActionTypes.SIGN_UP_START, SignUp)
}

export function* onSignUpSucces() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), 
               call(onEmailSignInStart), 
               call(onCheckUserSession),
               call(onSignOutStart),
               call(onSignUpStart),
               call(onSignUpSucces)
            ])
}