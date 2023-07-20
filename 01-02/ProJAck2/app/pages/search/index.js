import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearchBox = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor="gray"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
});

const App = () => {
    return (
        <View style={styles.screen}>
            {/* Other components */}
            <SearchBox />
            {/* Other components */}
        </View>
    );
};


