import userActionTypes from './user.types'


export const signInWithGoogleStart = () => ({
    type: userActionTypes.SIGN_IN_WITH_GOOGLE_START
});

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signInWithEmailStart = (emailAndPassword) => ({
    type: userActionTypes.SIGN_IN_WITH_EMAIL_START,
    payload: emailAndPassword
});



