import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as JobContext } from '../context/JobContext'
import Swipe from '../components/Swipe'

const DeckScreen = () => {

    const { state: { results } } = useContext(JobContext)

    return (
        <View>
            <Text>Deck Screen</Text>
        </View>
    )
}

export default DeckScreen

const styles = StyleSheet.create({})
