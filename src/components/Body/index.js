import React from "react";
import { View, StatusBar, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';



export default function Body({navigation}) {

    function medico(){
        navigation.navigate('medico')
      }
  function agenda(){
    navigation.navigate('agenda')
  }
  function contatos(){
    navigation.navigate('contatos')
  }
  function games(){
    navigation.navigate('games')
  }
    return (
        <View style={styles.container}>
            <Pressable style={styles.content} onPress={medico}>
            <Image
        style={styles.img}
        source={require('./img/medico.png')}
      />
                <Text style={styles.title}>Informações do Doutor</Text>
                <Text style={styles.subtitle}>Encontre Especialistas Facilmente</Text>
            </Pressable>
            <Pressable style={styles.content}>
            <Image
        style={styles.img}
        source={require('./img/prescr.png')}
      />
                <Text style={styles.title}>Prescrições Medicas</Text>
                <Text style={styles.subtitle}>Central de Prescrições Digitais</Text>
            </Pressable>
            <Pressable style={styles.content} onPress={agenda}>
            <Image
        style={styles.img}
        source={require('./img/agenda.png')}
      />
                <Text style={styles.title}>Agenda</Text>
                <Text style={styles.subtitle}>Datas de consultas e horarios de medicação</Text>
            </Pressable>
            <Pressable style={styles.content} onPress={contatos}>
            <Image
        style={styles.img}
        source={require('./img/contato.png')}
      />
                <Text style={styles.title}>Contatos</Text>
                <Text style={styles.subtitle}>Informações de contato</Text>
            </Pressable>
            <Pressable style={styles.content} onPress={games}>
            <Image
        style={styles.img}
        source={require('./img/jogos.png')}
      />
                <Text style={styles.title}>Jogos</Text>
                <Text style={styles.subtitle}>Divirta-se!</Text>
            </Pressable>
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