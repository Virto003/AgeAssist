import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Body() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/medico.png')}
      />
                <Text style={styles.title}>Informações do Doutor</Text>
                <Text style={styles.subtitle}>Encontre Especialistas Facilmente</Text>
            </View>
            <View style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/prescr.png')}
      />
                <Text style={styles.title}>Prescrições Medicas</Text>
                <Text style={styles.subtitle}>Central de Prescrições Digitais</Text>
            </View>
            <View style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/agenda.png')}
      />
                <Text style={styles.title}>Agenda</Text>
                <Text style={styles.subtitle}>Datas de consultas e horarios de medicação</Text>
            </View>
            <View style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/contato.png')}
      />
                <Text style={styles.title}>Contatos</Text>
                <Text style={styles.subtitle}>Informações de contato</Text>
            </View>
            <View style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/jogos.png')}
      />
                <Text style={styles.title}>Jogos</Text>
                <Text style={styles.subtitle}>Divirta-se!</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#000',
    },
    img:{
        padding: 16,
        borderRadius: 16,
    }
});