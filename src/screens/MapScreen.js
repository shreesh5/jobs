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

    const onButtonPress = () => {
        // fetchJobs(region)
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
                    title="Search This Area"
                    backgroundColor={"#009688"}
                    icon={{ name: 'search' }}
                    // onPress = {onButtonPress}
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
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30
    }
})