import React, { useContext } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Context as JobContext } from '../context/JobContext'
import Swipe from '../components/Swipe'
import MapView  from 'react-native-maps'
import { Card, Button } from 'react-native-elements'

const DeckScreen = () => {

    const { state: { results } } = useContext(JobContext)

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
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card>
        )
    }

    const renderNoMoreCards = () => {
        return (
            <Card title="No more jobs">

            </Card>
        )
    }

    return (
        <View>
            <Text>Deck Screen</Text>
            {/* 
                <Swipe 
                    data={results}
                    renderCard={renderCard}
                    renderNoMoreCards={renderNoMoreCards}
                />
            */}
        </View>
    )
}

export default DeckScreen

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
})
