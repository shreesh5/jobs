import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, ScrollView, Linking } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { Context as LikedJobsContext } from '../context/LikedJobsContext'
import MapView from 'react-native-maps'

const ReviewScreen = ({ navigation }) => {

    const { state } = useContext(LikedJobsContext)
    
    const renderLikedJobs = () => {
        return state.map(job => {

            const { 
                company, 
                formattedRelativeTime, 
                url, 
                latitude, 
                longitude,
                jobtitle,
                jobkey 
            } = job
            const initialRegion = {
                longitude: longitude,
                latitude: latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }

            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView 
                            style={{ flex: 1}}
                            cacheEnabled={true}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title="Apply Now!"
                            buttonStyle={{ backgroundColor: "#03A9F4" }}
                            onPress={() => Linking.openURL(url)}
                        />
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

ReviewScreen.navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: () => (
        <Button 
            title="Settings" 
            onPress={() => navigation.navigate('Settings')}
            type="clear"
        />
    )
})

export default ReviewScreen

const styles = StyleSheet.create({
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    italics: {
        fontStyle: 'italic'
    }
})
