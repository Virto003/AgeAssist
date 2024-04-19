import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Divider />
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>Title</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingLeft: 64,
        paddingRight: 64,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        color: '#4D4D4D',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    img:{
        padding: 16,
        borderRadius: 16,
    }
});