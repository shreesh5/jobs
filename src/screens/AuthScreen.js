import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

const AuthScreen = () => {
    
    useEffect(() => {
        actions.facebookLogin()
    }, [])
    
    return (
        <View style={styles.container}>
            <Text>Auth Screen</Text>
        </View>
    )
}

export default connect(null, actions)(AuthScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
