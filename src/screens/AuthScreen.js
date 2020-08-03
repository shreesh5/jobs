import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AuthScreen = () => {
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
