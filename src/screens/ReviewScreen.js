import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Context as LikedJobsContext } from '../context/LikedJobsContext'

const ReviewScreen = ({ navigation }) => {

    const { state } = useContext(LikedJobsContext)
    
    const renderLikedJobs = () => {
        return state.map(job => {
            return (
                <Card>
                    <View style={{ height: 200 }}>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{job.company}</Text>
                            <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
                        </View>
                    </View>
                </Card>
            )
        })
    }

    return (
        <View>
            <Text>Review Screen</Text>
            <ScrollView>
                {renderLikedJobs()}
            </ScrollView>
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

const styles = StyleSheet.create({
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
})
