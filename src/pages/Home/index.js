import { ScrollView, StyleSheet, StatusBar, View, Text } from "react-native";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Home() {
  return (
    <ScrollView style={{ paddingTop: -StatusBarHeight }}>
      <View>
        <Header />
        <Body />
        <Footer />
      </View>
    </ScrollView>
  );
}
