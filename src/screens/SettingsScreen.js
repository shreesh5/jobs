import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as LikedJobsContext } from '../context/LikedJobsContext'
import { Button } from  'react-native-elements'

const SettingsScreen = () => {

    const { clearLikedJobs } = useContext(LikedJobsContext)

    return (
        <View>
            <Text>Settings Screen</Text>
            <Button 
                title="Reset Liked Jobs"
                icon={{ name: 'delete' }}
                buttonStyle={{ backgroundColor: "#F44336" }}
                onPress={clearLikedJobs}
            />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
