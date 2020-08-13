import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import { Context as JobContext } from '../context/JobContext'
import Swipe from '../components/Swipe'
import MapView  from 'react-native-maps'
import { Card, Button, Icon } from 'react-native-elements'
import { Context as LikedJobsContext } from '../context/LikedJobsContext'

const DeckScreen = ({ navigation }) => {

    const { state: { results } } = useContext(JobContext)
    const { likeJob } = useContext(LikedJobsContext)


    const renderCard = (job) => {
        
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }

        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        //cacheEnabled={Platform.OS === 'android' ? true : false}
                        cacheEnabled={true}
                        initialRegion={initialRegion}
                        liteMode
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
                </Text>
            </Card>
        )
    }

    const renderNoMoreCards = () => {
        return (
            <Card title="No More Jobs">
                <Button 
                    title="Back To Map"
                    icon={{ name: 'my-location' }}
                    onPress={() => navigation.navigate('Map')}
                />
            </Card>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Swipe 
                data={results}
                renderCard={renderCard}
                renderNoMoreCards={renderNoMoreCards}
                keyProp="jobkey"
                onSwipeRight={job => likeJob(job)}
            />
        </View>
        </SafeAreaView>
    )
}

DeckScreen.navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => (<Icon name="description" size={30} color={tintColor}/>),
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    },
}

export default DeckScreen

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    container: {
        justifyContent: 'center',
        marginTop: 15
    }
})
