import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    {
        text: 'Welcome to JobApp',
        color: '#03A9F4'
    },
    {
        text: 'Use this to get a job',
        color: '#009688'
    },
    {
        text: 'Set your location, then swipe away',
        color: '#03A9F4'
    }
]

const WelcomeScreen = ({ navigation }) => {

    const onSlidesComplete = () => {
        navigation.navigate('Auth')
    }

    return (
        <View style={styles.container}>
            <Slides 
                data={SLIDE_DATA} 
                onComplete={onSlidesComplete}
            />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
  
