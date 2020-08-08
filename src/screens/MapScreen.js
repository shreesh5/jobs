import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView  from 'react-native-maps'
import { Button } from 'react-native-elements'

const MapScreen = () => {

    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    })

    const onRegionChangeComplete = (region) => {
        setRegion(region)
    }

    return (
        <View style={styles.container}>
            <MapView 
                region={region}
                style={styles.map}
                onRegionChange={onRegionChangeComplete}
            />
            <View style={styles.buttonContainer}>
                <Button
                    large
                    title="Search This Area"
                    backgroundColor="#009688"
                    icon={{ name: 'search' }}
                />
            </View>
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
    },
    buttonContainer: {
        position: absolute,
        bottom: 20,
        left: 0,
        right: 0
    }
})
