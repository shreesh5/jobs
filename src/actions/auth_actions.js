import { AsyncStorage } from 'react-native';
// import { Facebook } from 'expo'

import * as Facebook from 'expo-facebook'

import {
    FACEBOOK_LOGIC_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types'

// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

const doFacebookLogin = async (dispatch) => {
    try {
        await Facebook.initializeAsync('334480921026356')
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('334480921026356', {
            permissions: ['public_profile']
        })
        if (type === 'cancel') {
            return dispatch({ type: FACEBOOK_LOGIN_FAIL })
        }
    
        await AsyncStorage.setItem('fb_token', token)
    
        dispatch({ type: FACEBOOK_LOGIC_SUCCESS, payload: token })
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`)
    }
}

export const facebookLogin = () => async (dispatch) => {     
    const token = await AsyncStorage.getItem('fb_token')
    console.log('token', token)
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIC_SUCCESS, payload: token })
    } else {
        // Start up FB Login process
        doFacebookLogin(dispatch)
    }
}