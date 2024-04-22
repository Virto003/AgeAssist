import React from "react";
import { ScrollView, StyleSheet, StatusBar, View } from "react-native";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ paddingTop: -StatusBarHeight, backgroundColor: "#FFF"}} >
      <View>
        <Header />
        <Body navigation={navigation} />
        <Footer />
      </View>
    </ScrollView>
  );
}