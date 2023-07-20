import { View, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'
import Text from '../../components/Text/index'
import { WIDTH } from '../../assets/styles'
import images from '../../assets/img/index'

export default function Plus() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Perform form validation and submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
    };
    return (
        <View style={{ marginTop: 44, }}>
            <View style={{ alignItems: 'center', }}>
                <Text fontSize={24} bold color='#160520' style={{ position: 'absolute' }}>Time Sheet Form</Text>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16 }}>
                <Image source={images.ARROWLEFT} style={{ width: 20, height: 14.282, marginTop: 10, }} />
                <View style={{ marginTop: 25 }}>
                    <Text fontSize={16} bold color='#160520'> Title</Text>
                    <TextInput placeholder='Enter Task Title' fontSize={16} bold style={{ width: 343, height: 46, borderColor: '#A7A7A7', borderWidth: 0.5, marginTop: 8, borderRadius: 8, padding: 12, }} />
                </View>
            </View>

            <View>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    )
}