import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Button } from 'react-native-elements'

const ReviewScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Review Screen</Text>
        </View>
    )
}

ReviewScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Review Jobs',
        headerRight: () => (
            <Button 
                title="Settings" 
                onPress={() => navigation.navigate('Settings')}
                type="clear"
            />
        ),
        style: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        }
    }
}

export default ReviewScreen

const styles = StyleSheet.create({})
