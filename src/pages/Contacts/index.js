import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
  Linking,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const emergencyContacts = [
  {
    id: 1,
    name: "Maria Silva",
    relationship: "Mãe",
    location: "São Paulo, SP",
    details: {
      phoneNumber: "(11) 98765-4321",
    },
  },
  {
    id: 4,
    name: "Maria Silva",
    relationship: "Mãe",
    location: "São Paulo, SP",
    details: {
      phoneNumber: "(11) 98765-4321",
      email: "maria.silva@.com",
    },
  },
  {
    id: 2,
    name: "Caria Silva",
    relationship: "Mãe",
    location: "São Paulo, SP",
    details: {
      phoneNumber: "(11) 98765-4321",
    },
  },
  {
    id: 3,
    name: "aria Silva",
    relationship: "Mãe",
    location: "São Paulo, SP",
    details: {
      phoneNumber: "(11) 98765-4321",
    },
  },
  // Adicione mais contatos aqui...
];
function EmergencyContactList() {
  const [contacts, setContacts] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sortedContacts = emergencyContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const contactsByInitial = sortedContacts.reduce((groups, contact) => {
      const initial = contact.name[0].toUpperCase();
      if (!groups[initial]) {
        groups[initial] = [];
      }
      groups[initial].push(contact);
      return groups;
    }, {});
    setContacts(contactsByInitial);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filteredContacts = emergencyContacts.filter((contact) =>
        contact.name.toLowerCase().includes(text.toLowerCase())
      );
      const newContactsByInitial = filteredContacts.reduce(
        (groups, contact) => {
          const initial = contact.name[0].toUpperCase();
          if (!groups[initial]) {
            groups[initial] = [];
          }
          groups[initial].push(contact);
          return groups;
        },
        {}
      );
      setContacts(newContactsByInitial);
    } else {
      // Aqui você deve redefinir os contatos para o estado inicial agrupado por inicial
      const resetContactsByInitial = emergencyContacts.reduce(
        (groups, contact) => {
          const initial = contact.name[0].toUpperCase();
          if (!groups[initial]) {
            groups[initial] = [];
          }
          groups[initial].push(contact);
          return groups;
        },
        {}
      );
      setContacts(resetContactsByInitial);
    }
  };

  return (
    <View style={{backgroundColor: "#FFF"}} >
      <View style={styles.searchBox}>
        <FontAwesome
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={handleSearch}
          placeholder="Pesquisar..."
        />
      </View>
      {Object.entries(contacts).map(([initial, contactsGroup]) => (
        <View key={initial}>
          <Text style={styles.initial}>{initial}</Text>
          {contactsGroup.map((contact) => (
            <View key={contact.id}>
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  setOpenId(openId === contact.id ? null : contact.id)
                }
              >
                <View style={styles.circle}>
                  <Text style={styles.initialIcon}>
                    {contact.name[0].toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.name}>{contact.name}</Text>
                <View style={styles.details}></View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.call}
                  onPress={() => {
                    const phoneNumber = contact.details.phoneNumber.replace(
                      /\D/g,
                      ""
                    );
                    Linking.openURL("tel:" + phoneNumber);
                  }}
                >
                  <Feather name="phone" size={26} color={"#fff"} />
                </TouchableOpacity>
              </TouchableOpacity>
              {openId === contact.id && (
                <View style={styles.hiddenInfo}>
                  <View style={styles.detailItem}>
                    <View
                      activeOpacity={0.9}
                      style={styles.iconDetail}
                    >
                      <Feather name="users" size={26} color={"#AEAEAE"}/>
                    </View>
                    <View>
                    <Text style={styles.detailtitle}>Relacionamento</Text>
                    <Text style={styles.detail}>{contact.relationship}</Text>
                    </View>
                  </View>
                  <Divider />
                  <View style={styles.detailItem}>
                    <View
                      activeOpacity={0.9}
                      style={styles.iconDetail}
                    >
                      <Feather name="map-pin" size={26} color={"#AEAEAE"}/>
                    </View>
                    <View>
                    <Text style={styles.detailtitle}>Endereço</Text>
                    <Text style={styles.detail}>{contact.location}</Text>
                    </View>
                  </View>
                  <Divider />
                  <View style={styles.detailItem}>
                    <View
                      activeOpacity={0.9}
                      style={styles.iconDetail}
                    >
                      <Feather name="phone" size={26} color={"#AEAEAE"}/>
                    </View>
                    <View>
                    <Text style={styles.detailtitle}>Telefone</Text>
                    <Text style={styles.detail}>{contact.details.phoneNumber}</Text>
                    </View>
                  </View>
                </View>
              )}
              <Divider />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 300,
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderColor: "#AEAEAE",
  },
  searchIcon: {
    margin: 10,
  },
  searchInput: {
    marginRight: 20,
  },
  initial: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "#757575",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "400",
    marginStart: 20,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detail: {
    fontWeight: "400",
    fontSize: 16,
  },
  call: {
    backgroundColor: "#2DC100",
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  hiddenInfo: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 70 / 2,
    backgroundColor: "#F7DDDD",
    justifyContent: "center",
    alignItems: "center",
  },
  initialIcon: {
    fontSize: 26,
    color: "#000000",
  },
  iconDetail: {
    backgroundColor: "#F7DDDD5",
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  detailItem:{
    flexDirection: "row",
    margin: 10,
    alignItems: "center"
  },
  detailtitle:{
    color: "#AEAEAE",
  }
});

export default EmergencyContactList;
