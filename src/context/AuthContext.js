import createDataContext from './createDataContext'
import { AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'facebook_login_success':
            return { token: action.payload }
        case 'facebook_login_fail':
            return { token: null }
        default:
            return state
    }
}

const doFacebookLogin = async (dispatch) => {
    try {
        await Facebook.initializeAsync('334480921026356')
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('334480921026356', {
            permissions: ['public_profile']
        })
        if (type === 'cancel') {
            return dispatch({ type: 'facebook_login_fail'})
        }

        await AsyncStorage.setItem('fb_token', token)
        dispatch({ type: 'facebook_login_success', payload: token })
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`)
    }
}

const facebookLogin = (dispatch) => {
    
    return async () => {
        try {
            const token = await AsyncStorage.getItem('fb_token')
            if (token) {
                dispatch({ type: 'facebook_login_success', payload: token })
            } else {
                doFacebookLogin(dispatch)
            }        
        } catch (err) {
            dispatch({ type: 'add_error'})
        }
    }
}    

export const { Context, Provider } = createDataContext(
    authReducer,
    { facebookLogin },
    { token: null }
)