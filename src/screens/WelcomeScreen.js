import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import Slides from '../components/Slides'
import _ from 'lodash'
import { AppLoading } from 'expo'

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

    const [token, setToken] = useState(null)

    const onSlidesComplete = () => {
        navigation.navigate('Auth')
    }

    const checkForToken = async () => {
        const t = await AsyncStorage.getItem('fb_token')
        if (t) {
            navigation.navigate('Map')
            setToken(t)
        } else {
            setToken(false)
        }
    }

    useEffect( () => {
        checkForToken()
    },[])

    return (
        <>
            { _.isNull(token) ? (
                <AppLoading />
            ) : (
                <View style={styles.container}>
                    <Slides 
                        data={SLIDE_DATA} 
                        onComplete={onSlidesComplete}
                    />
                </View>
            )
            }
        </>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
  
