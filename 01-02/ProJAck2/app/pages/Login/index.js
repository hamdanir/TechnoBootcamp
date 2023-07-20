import { ImageBackground, View, StyleSheet, ScrollView, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Text from '../../components/Text/index'
import images from '../../assets/img/index'
import { Fonts, WIDTH, HEIGHT } from '../../assets/styles'
import { TextInput } from 'react-native-gesture-handler'
import { Eye, EyeSlash } from '../../assets/svg'
import Satellite from '../../services/satellite'


export default function Login({ navigation, route }) {
    const [isEnable, setIsEnable] = useState(true);
    const [showPass, setShowPass] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (email !== "" &&
            password !== "" &&
            errorEmail === "" &&
            errorPassword === "") {
            setIsEnable(false)
        } else {
            setIsEnable(true)
        }
    }, [email, password, errorEmail, errorPassword])

    const onSubmit = async () => {
        setIsLoading(true)
        const body = {
            email: email,
            password: password
        };
        console.log("Body", JSON.stringify(body, null, 2));

        // try {
        //     const response = await Satellite.post("auth/login", body);
        //     console.log("RESPONSE", response.data)
        //     ress = response.data
        // } catch (err) {
        //     console.log("ERROR", err)
        // } finally {
        //     console.log("FINALL")
        // }

        let ress;
        await Satellite.post("auth/login", body)
            .then((response) => {
                console.log("RESPONSE", response.data);
                ress = response.data;
                navigation.navigate("Main");
            }).catch((error) => {
                console.log("ERROR", error);
                // setErrorEmail("Invalid Email or Password");
                setErrorPassword("Invalid Email or Password");
            }).finally(() => {
                console.log("FINALL");
                setTimeout(() => {
                    setIsLoading(false)
                }, 5000);
            })
        console.log("PALING BAWAH", ress)

    }

    return (
        <ImageBackground source={images.BGLOGIN} resizeMode='cover' style={{ width: WIDTH, height: HEIGHT }}>
            <View style={{ flex: 1, paddingTop: 122, marginHorizontal: 31 }}>
                <View>
                    <Text fontSize={16} bold color='#fff'>Email</Text>
                    <View style={{
                        backgroundColor: "#273C75", borderWidth: 1, borderColor: errorEmail ? "#EA8685" : "#132040", height: 46, borderRadius: 8, padding: 12, marginTop: 8
                    }}>
                        <TextInput placeholder='Enter Your Email' placeholderTextColor={"#D3D3D3"} keyboardType='email-address' autoCapitalize={'none'} style={{ color: "#fff", fontFamily: Fonts.Nunito.Bold, fontSize: 16, }}
                            onChangeText={(value) => {
                                setEmail(value);
                                const emailRegex =
                                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                                if (value === "") {
                                    setErrorEmail("email must be filled in");
                                    return;
                                }


                                if (!emailRegex.test(value)) {
                                    setErrorEmail("Invalid Mail Address");
                                    return;
                                }

                                setErrorEmail("")

                                console.log("value", value)
                            }} />
                    </View>
                    <Text color='#EA8685' fontSize={10} bold style={{ textAlign: "right", marginRight: 8, marginTop: 5 }}>{errorEmail}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text fontSize={16} bold color='#fff'>Password</Text>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: "#273C75", borderWidth: 1, borderColor: errorPassword ? "#EA8685" : "#132040", height: 46, borderRadius: 8, padding: 12, marginTop: 8 }}>
                        <TextInput maxLength={12} placeholder='Password' secureTextEntry={showPass} placeholderTextColor={"#D3D3D3"} style={{ color: '#fff', fontFamily: Fonts.Nunito.Bold, fontSize: 16, width: 300 }}
                            onChangeText={(value) => {
                                setPassword(value);

                                if (value === "") {
                                    setErrorPassword("Password must be filled");
                                    return;
                                }

                                setErrorPassword("")

                                console.log("value", value)
                            }}
                        />

                        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                            {showPass ? (<Eye width={20} height={20} stroke={"#fff"} />)
                                : (<EyeSlash width={20} height={20} stroke={"#fff"} />)}

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text color='#F6E58D' fontSize={10} bold style={{ marginTop: 5, marginLeft: 5 }}>Forgot Password?</Text>
                        <Text color='#EA8685' fontSize={10} bold style={{ flex: 1, textAlign: "right", marginRight: 8, marginTop: 5 }}>{errorPassword}</Text>
                    </View>
                </View>

                {/* <Button placeholder="kfg" /> */}
                <View style={{}}>
                    <TouchableOpacity disabled={isEnable || isLoading} onPress={onSubmit} style={{ backgroundColor: "#18DCFF", borderRadius: 8, paddingVertical: 12, alignItems: "center", marginTop: 20, opacity: isEnable || isLoading ? 0.5 : 1, }}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#261A31" />
                            // <Text color='#261A31' fontSize={16} bold>tunggu dulu...</Text>
                        ) : (
                            <Text color='#261A31' fontSize={16} bold>Login</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text color='#fff' bold >
                        Dont Have an Account? <Text bold color='#F6E58D' onPress={() => navigation.navigate("Register")}>Sign Up</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}