import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const AuthScreen = () => {
    
    const { facebookLogin } = useContext(AuthContext)

    useEffect(() => {
        facebookLogin()
    }, [])
    
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
