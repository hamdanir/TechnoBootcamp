import { ImageBackground, View, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Text from '../../components/Text/index'
import images from '../../assets/img/index'
import { WIDTH, HEIGHT } from '../../assets/styles'



export default function Profile() {
    return (
        <ScrollView>
            <View style={{ height: HEIGHT, backgroundColor: '#fff' }}>
                <ImageBackground
                    source={images.BG_PROFILE}
                    resizeMode='cover'
                    style={[styles.imgBackground]}>

                    <View style={[styles.imgBoxProfile]}>
                        <Image source={images.PERSON3} style={[styles.imgProfile]} />
                    </View>

                    <View style={[styles.titleName]}>
                        <Text fontSize={20} bold style={[styles.name]} >Hamdan Irfan Wijaya</Text>
                        <Text fontSize={14} bold color="#909090" style={[styles.position]} >React Native Developer</Text>
                    </View>

                    {/* ID BOX */}
                    <View style={[styles.idBox]}>
                        <View style={{ marginTop: 13 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text fontSize={14} bold>ID</Text>
                                <Text fontSize={14} bold color='#A7A7A7'>A20110</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 13 }}></View>
                        </View>

                        <View style={{ marginTop: 13 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text fontSize={14} bold>Email</Text>
                                <Text fontSize={14} bold color='#A7A7A7'>imail@gmail.com</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 13 }}></View>
                        </View>
                        <View style={{ marginTop: 13 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text fontSize={14} bold>Date of Birth</Text>
                                <Text fontSize={14} bold color='#A7A7A7'>tt/bb/th</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 13 }}></View>
                        </View>
                        <View style={{ marginTop: 13 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text fontSize={14} bold>Gender</Text>
                                <Text fontSize={14} bold color='#A7A7A7'>Male</Text>
                            </View>
                            {/* <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 13 }}></View> */}
                        </View>
                    </View>
                    {/* ID BOX END */}

                    {/* Box team start */}
                    <View style={[styles.teamBox]}>

                        <View>
                            <Text fontSize={14} bold color='#160520'>Team</Text>
                            <Text fontSize={14} bold color='#A7A7A7'>React Native</Text>
                        </View>

                        <View style={{ flexDirection: "row", width: 80, justifyContent: "space-around", }}>
                            <Image source={images.PERSON1} style={{ width: 35, height: 35, borderRadius: 90, borderWidth: 1, borderColor: "#fff" }} />
                            <Image source={images.PERSON2} style={{ width: 35, height: 35, borderRadius: 90, borderWidth: 1, borderColor: "#fff" }} />
                            <Image source={images.PERSON4} style={{ width: 35, height: 35, borderRadius: 90, borderWidth: 1, borderColor: "#fff" }} />
                            <View style={{ width: 35, height: 35, backgroundColor: "#C16262", borderRadius: 90, alignItems: "center", justifyContent: "center" }}>
                                <Text fontSize={14} semiBold color='#fff'>+6 </Text>
                            </View>
                        </View>


                    </View>
                    {/* Box team END */}

                    {/* Setting BOx Start */}
                    <View style={styles.settingBox}>
                        <View style={{ marginTop: 12, justifyContent: 'center' }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <Image source={images.GUARD} style={{ width: 24, height: 24, marginRight: 11 }} />
                                    <Text fontSize={14} bold color='#160520'>Privacy and Security</Text>
                                </View>
                                <Image source={images.VECTOR} style={{}} />
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 9 }}></View>
                        </View>
                        <View style={{ marginTop: 12, justifyContent: 'center' }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <Image source={images.HELP} style={{ width: 24, height: 24, marginRight: 11 }} />
                                    <Text fontSize={14} bold color='#160520'>Help</Text>
                                </View>
                                <Image source={images.VECTOR} style={{}} />
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 9 }}></View>
                        </View>
                        <View style={{ marginTop: 12, justifyContent: 'center' }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <Image source={images.ABOUT} style={{ width: 24, height: 24, marginRight: 11 }} />
                                    <Text fontSize={14} bold color='#160520'>ABOUT Us</Text>
                                </View>
                                <Image source={images.VECTOR} style={{}} />
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "#D3D3D3", marginTop: 9 }}></View>
                        </View>
                        <View style={{ marginTop: 12, justifyContent: 'center' }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <Image source={images.LOGOUT} style={{ width: 24, height: 24, marginRight: 11 }} />
                                    <Text fontSize={14} bold color='#160520'>logout</Text>
                                </View>
                                <Image source={images.VECTOR} style={{}} />
                            </View>

                        </View>
                    </View>
                    {/* Setting Box END */}

                    {/* Version */}
                    <View style={{ marginTop: 20, }}>
                        <Text fontSize={14} bold color='#160520'>v0.0.1</Text>
                    </View>
                    {/* Version */}


                </ImageBackground >
            </View >
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    imgBackground: { width: WIDTH, height: 500, alignItems: "center", paddingTop: 80, },

    imgBoxProfile: { borderWidth: 2, borderColor: "#FBD2A5", borderRadius: 90 },

    imgProfile: { borderRadius: 90, width: 120, height: 120, },

    titleName: { textAlign: "center" },

    name: { marginTop: 16, textAlign: "center" },

    position: { textAlign: "center", },

    idBox: {
        width: 343,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        height: 192, backgroundColor: "#fff", marginTop: 32, borderRadius: 12, paddingLeft: 16, paddingRight: 16
    },

    teamBox: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: "row", justifyContent: "space-between",
        width: 343, alignItems: "center", height: 70, backgroundColor: "#fff", marginTop: 20, borderRadius: 12, paddingLeft: 16, paddingRight: 16
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },

    settingBox: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3, width: 343, height: 186, borderRadius: 12, backgroundColor: "#fff", marginTop: 20, paddingLeft: 16, paddingRight: 19,
    },

});
