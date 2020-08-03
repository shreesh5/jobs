import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

const Slides = ({ data, onComplete }) => {
    

    const renderLastSlide = (index) => {
        if (index === data.length - 1) {
            return (
                <Button 
                    title="Onwards!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    containerStyle={{ marginTop: 15 }}
                    onPress={onComplete}
                />
            )
        }
    }

    const renderSlides = () => {
        return data.map((slide, index) => {
            return (
                <View 
                    key={slide.text} 
                    style={[styles.slideStyle, {backgroundColor: slide.color }]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {renderLastSlide(index)}
                </View>
            )
        })
    }

    return (
        <ScrollView
            horizontal
            style={{ flex: 1 }}
            pagingEnabled
        >
            {renderSlides()}
        </ScrollView>
    )
}

export default Slides

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: SCREEN_WIDTH,
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
    }
})
