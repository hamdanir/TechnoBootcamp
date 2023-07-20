import { View, StyleSheet, Image, TextInput, Button, ImageBackground } from 'react-native'
import React from 'react'
import { HomeIcon } from '../../assets/svg'
import Text from '../../components/Text/index'
import images from '../../assets/img/index'
import { Fonts, WIDTH } from '../../assets/styles'
import { Ionicons } from '@expo/vector-icons'

export default function Home() {
    return (
        <View style={{ marginTop: 49, paddingHorizontal: 16 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.TASK} style={{ width: 52, height: 52, marginRight: 16 }} />
                <TextInput placeholder='Find Your Projects' placeholderTextColor={'#A7A7A7'}
                    style={{ fontFamily: Fonts.Nunito.Bold, flex: 1, height: 52, borderRadius: 80, borderWidth: 1, borderColor: "#FBFBFB", backgroundColor: "#FBFBFB", paddingLeft: 20, fontSize: 16, fontWeight: '700', }}>

                </TextInput>
            </View>

            {/* Title Start */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View>
                    <Text fontSize={30} bold color='#261A31'>Projects</Text>
                    <Text fontSize={16} bold color='#A7A7A7'>You have 6 projects</Text>
                </View>
                <View style={styles.container}>
                    <Button title="+ Add" style={styles.button} />
                </View>
            </View>
            {/* Title End */}

            {/* Project LISt Start */}
            <View style={{ marginTop: 20 }}>
                <View style={{ width: 215, height: 295, borderRadius: 12, backgroundColor: "#3CB8D3" }}>
                    <ImageBackground source={images.BERIJALAN} style={{ alignItems: "center", paddingTop: 80, width: 180, height: 200, transform: [{ translateX: 35.2 }, { translateY: 95 }] }}>

                    </ImageBackground>
                </View>
            </View>
            {/* Project LIST END */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 94,
        height: 37,
        marginTop: 10

    },
    button: {
    },
});



