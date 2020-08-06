import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView  from 'react-native-maps'

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={{ flex: 1}}/>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
