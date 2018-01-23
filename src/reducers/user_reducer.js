import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: ''
}

export default (state = DEFAULT_STATE, action) => {
    console.log('REDUCER ERROR:', action);
    switch(action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true , error: ''}
        case types.ERROR:
            console.log('REDUCER ERROR:', action);
            return { auth: false, error: action.payload }
        default:
            return state
    }
}