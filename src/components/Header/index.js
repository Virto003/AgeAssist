import React from "react";
import { View, StatusBar, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.navbar}>
                    <Feather name="award" size={32} color="#000" />
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonuser}>
                    <Feather name="settings" size={27} color="#000" />
                </TouchableOpacity>
                </View>
                <Text style={styles.title}>Bem-vindo ao Age Assist, seu companheiro de saúde</Text>
                <Text style={styles.subtitle}>Gerencie consultas, receitas e contatos tudo em um só lugar.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7DDDD',
        paddingTop: StatusBarHeight,
        padding: 16,
        width: '100%',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    buttonuser: {
        backgroundColor: '#fff5',
        borderRadius: 100,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbar:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});