import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const AuthScreen = ({ navigation }) => {
    
    const { state: { token }, facebookLogin } = useContext(AuthContext)

    useEffect(() => {
        facebookLogin()
        onAuthComplete(token)
        AsyncStorage.removeItem('fb_token')
    }, [])

    useEffect(() => {
        onAuthComplete(token)
    },[token])
    
    const onAuthComplete = (token) => {
        if (token) {
            navigation.navigate('Map')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Auth Screen</Text>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
