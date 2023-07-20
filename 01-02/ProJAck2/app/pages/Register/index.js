import { ImageBackground, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Text from '../../components/Text/index'
import images from '../../assets/img/index'
import { Fonts, WIDTH, HEIGHT } from '../../assets/styles'
import { TextInput } from 'react-native-gesture-handler'
import { ArrowLeft } from '../../assets/svg'
import { Eye, EyeSlash } from '../../assets/svg'
import Satellite from '../../services/satellite'


export default function Register({ router, navigation }) {
    const [isEnable, setIsEnable] = useState(true);
    const [showPass, setShowPass] = useState(true);
    const [showConfirmPass, setShowConfirmPass] = useState(true)

    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState("");

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    const [phone, setPhone] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    const [nik, setNik] = useState("");
    const [errorNik, setErrorNik] = useState("");

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (name !== "" &&
            email !== "" &&
            phone !== "" &&
            nik !== "" &&
            password !== "" &&
            confirmPassword !== "" &&
            errorName === "" &&
            errorEmail === "" &&
            errorPhone === "" &&
            errorNik === "" &&
            errorPassword === "" &&
            errorConfirmPassword === "") {
            setIsEnable(false)
        } else {
            setIsEnable(true)
        }
    }, [
        name,
        email,
        phone,
        nik,
        password,
        confirmPassword,
        errorName,
        errorEmail,
        errorPhone,
        errorNik,
        errorPassword,
        errorConfirmPassword
    ]);

    const onSubmit = async () => {
        setIsLoading(true);
        const body = {
            doSendRegister: {
                name: name,
                email: email,
                phoneNumber: phone,
                password: password,
                nik: nik
            }
        };
        console.log(JSON.stringify(body, null, 2));

        Satellite.post("auth/register", body)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response", response)
                    navigation.navigate("Login")
                } else {
                    console.log("Error", response.message)
                    setErrorEmail("Email sudah digunakan")
                }
            })
            .catch((error) => {
                console.log("Error", error.message)
                setErrorEmail("Email sudah digunakan")
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000)

            })

    }


    return (
        <ImageBackground source={images.BGLOGIN} style={{ width: WIDTH, height: HEIGHT }} resizeMode='cover'>
            <ScrollView>
                <View style={{ marginTop: 54 }}>
                    <TouchableOpacity >
                        <View style={{ marginLeft: 15, marginBottom: 30 }}>
                            <ArrowLeft onPress={() => navigation.goBack()} style={{ width: 20, height: 15 }} />
                        </View>
                    </TouchableOpacity>

                    {/* NAME */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>Name</Text>
                        <View style={{ marginTop: 8, borderRadius: 8, borderWidth: 1, borderColor: errorName ? '#EA8685' : '#132040', backgroundColor: "#273C75", }}>
                            <TextInput placeholder='Enter Your Name' placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                margin: 12, color: "#FFF", fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }} onChangeText={(value) => {
                                setName(value);
                                if (value === "") {
                                    setErrorName("Name must be filled in");
                                    return;
                                }
                                setErrorName("");
                            }}
                            />
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorName}</Text>
                    </View>
                    {/* NAME */}
                    {/* Email */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>Email</Text>
                        <View style={{ marginTop: 8, borderRadius: 8, borderWidth: 1, borderColor: errorEmail ? '#EA8685' : '#132040', backgroundColor: "#273C75", }}>
                            <TextInput placeholder='Enter Your Email' placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                margin: 12, color: "#FFF", fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }}
                                onChangeText={(value) => {
                                    setEmail(value);
                                    const emailRegex =
                                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                                    if (value === "") {
                                        setErrorEmail("Email must be filled in");
                                        return;
                                    }
                                    if (!emailRegex.test(value)) {
                                        setErrorEmail("Invalid Mail Address")
                                        return;
                                    }
                                    setErrorEmail("");
                                }}
                            />
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorEmail}</Text>
                    </View>
                    {/* Email */}
                    {/* Phone */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>Phone</Text>
                        <View style={{ marginTop: 8, borderRadius: 8, borderWidth: 1, borderColor: "#132040", backgroundColor: "#273C75", }}>
                            <TextInput keyboardType='number-pad' placeholder='Enter Your Phone' placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                margin: 12, color: "#FFF", fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }} onChangeText={(value) => {
                                setPhone(value);
                                const regexNumber = /^[0-9]+$/;
                                if (value === "") {
                                    setErrorPhone("Phone must be filled in");
                                    return;
                                }
                                if (!regexNumber.test(value)) {
                                    setErrorPhone("Phone only contain numbers");
                                    return;
                                }
                                setErrorPhone("");
                            }}
                            />
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorPhone}</Text>
                    </View>
                    {/* Phone */}
                    {/* NIK */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>NIK</Text>
                        <View style={{ marginTop: 8, borderRadius: 8, borderWidth: 1, borderColor: errorNik ? '#EA8685' : '#132040', backgroundColor: "#273C75", }}>
                            <TextInput keyboardType='number-pad' placeholder='Enter Your NIK Number' placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                margin: 12, color: "#FFF", fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }} onChangeText={(value) => {
                                setNik(value);
                                const regexNumber = /^[0-9]+$/;

                                if (value === "") {
                                    setErrorNik("NIK must be filled in");
                                    return;
                                }
                                if (!regexNumber.test(value)) {
                                    setErrorNik("NIK only contain numbers")
                                    return;
                                }
                                if (value.length !== 16) {
                                    setErrorNik("NIK must be 16 digits");
                                    return;
                                }
                                setErrorNik("");
                            }}
                            />
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorNik}</Text>
                    </View>
                    {/* NIK */}
                    {/* Password */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>Password</Text>
                        <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', backgroundColor: "#273C75", borderWidth: 1, borderColor: errorPassword ? '#EA8685' : '#132040', borderRadius: 8, padding: 12, marginTop: 8 }}>
                            <TextInput placeholder='Password' secureTextEntry={showPass} placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                color: "#FFF", width: 300, fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }} onChangeText={(value) => {
                                setPassword(value);
                                if (value === "") {
                                    setErrorPassword("Password must be filled in");
                                    return;
                                }
                                setErrorPassword("");
                            }}
                            />
                            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                                {showPass ? (<Eye width={20} height={20} stroke={"#fff"} />)
                                    : (<EyeSlash width={20} height={20} stroke={"#fff"} />)}

                            </TouchableOpacity>
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorPassword}</Text>
                    </View>
                    {/* Password */}
                    {/* Confirm PAswword */}
                    <View style={[styles.box]}>
                        <Text fontSize={16} bold color='#FFF'>Confirm Password</Text>
                        <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', backgroundColor: "#273C75", borderWidth: 1, borderColor: errorConfirmPassword ? '#EA8685' : '#132040', borderRadius: 8, padding: 12, marginTop: 8 }}>
                            <TextInput placeholder='Confirm Password' secureTextEntry={showConfirmPass} placeholderTextColor={"#D3D3D3"} fontSize={16} bold style={{
                                color: "#FFF", width: 300, fontFamily: Fonts.Nunito.Bold,
                                fontSize: 16
                            }} onChangeText={(value) => {
                                setConfirmPassword(value);
                                if (value === "") {
                                    setErrorConfirmPassword("Confirm your password");
                                    return;
                                }
                                if (value !== password) {
                                    setErrorConfirmPassword("Password doesn't match");
                                    return;
                                }
                                setErrorConfirmPassword("");
                            }}
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
                                {showConfirmPass ? (
                                    <Eye width={20} height={20} stroke={'#FFF'}></Eye>
                                ) : (<EyeSlash width={20} height={20} stroke={'#FFF'}></EyeSlash>)}


                            </TouchableOpacity>
                        </View>
                        <Text color='#EA8685' style={{ textAlign: "right", marginRight: 8 }}>{errorConfirmPassword}</Text>
                    </View>
                    {/* Confirm PAswword */}

                    <View style={[styles.box]}>
                        <TouchableOpacity onPress={onSubmit} disabled={isEnable || isLoading}
                            style={{ opacity: isEnable || isLoading ? 0.5 : 1, borderRadius: 8, backgroundColor: "#18DCFF", paddingVertical: 12, alignItems: "center" }}
                        >
                            {isLoading ? (
                                <ActivityIndicator size={'small'} color='#261A31'></ActivityIndicator>
                            ) : (
                                <Text color='#261A31' fontSize={16} bold>Register</Text>
                            )}

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    box: { marginHorizontal: 21, marginTop: 10 },


})