import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView  from 'react-native-maps'

const MapScreen = () => {

    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    })


    return (
        <View style={styles.container}>
            <MapView 
                region={region}
                style={styles.map}
            />
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1
    }
})
