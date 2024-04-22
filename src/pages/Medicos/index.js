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
import { Feather } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const doctors = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Cardiologista",
    location: "São Paulo, SP",
    details: {
      phoneNumber: "(11) 98765-4321",
    },
  },
  {
    id: 2,
    name: "Maria Costa",
    specialty: "Pediatra",
    location: "Rio de Janeiro, RJ",
    details: {
      phoneNumber: "(21) 98765-4321",
      email: "maria.costa@example.com",
    },
  },
  {
    id: 3,
    name: "Roberto Almeida",
    specialty: "Ortopedista",
    location: "Belo Horizonte, MG",
    details: {
      phoneNumber: "(31) 98765-4321",
    },
  },
  // Adicione mais médicos aqui...
];

function DoctorsList() {

  const [doctorsList, setDoctorsList] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sortedDoctors = doctors.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const doctorsByInitial = sortedDoctors.reduce((groups, doctor) => {
      const initial = doctor.name[0].toUpperCase();
      if (!groups[initial]) {
        groups[initial] = [];
      }
      groups[initial].push(doctor);
      return groups;
    }, {});
    setDoctorsList(doctorsByInitial);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(text.toLowerCase())
      );
      const newDoctorsByInitial = filteredDoctors.reduce(
        (groups, doctor) => {
          const initial = doctor.name[0].toUpperCase();
          if (!groups[initial]) {
            groups[initial] = [];
          }
          groups[initial].push(doctor);
          return groups;
        },
        {}
      );
      setDoctorsList(newDoctorsByInitial);
    } else {
      const resetDoctorsByInitial = doctors.reduce(
        (groups, doctor) => {
          const initial = doctor.name[0].toUpperCase();
          if (!groups[initial]) {
            groups[initial] = [];
          }
          groups[initial].push(doctor);
          return groups;
        },
        {}
      );
      setDoctorsList(resetDoctorsByInitial);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <View style={styles.searchBox}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={handleSearch}
          placeholder="Pesquisar médico..."
        />
      </View>
      {Object.entries(doctorsList).map(([initial, doctorsGroup]) => (
        <View key={initial}>
          <Text style={styles.initial}>{initial}</Text>
          {doctorsGroup.map((doctor) => (
            <View key={doctor.id}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => setOpenId(openId === doctor.id ? null : doctor.id)}
              >
                <View style={styles.circle}>
                  <Text style={styles.initialIcon}>
                    {doctor.name[0].toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.name}>Dr. {doctor.name}</Text>
                <View style={styles.details}></View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.call}
                  onPress={() => {
                    const phoneNumber = doctor.details.phoneNumber.replace(/\D/g, "");
                    Linking.openURL("tel:" + phoneNumber);
                  }}
                >
                  <Feather name="phone" size={26} color={"#fff"} />
                </TouchableOpacity>
              </TouchableOpacity>
              {openId === doctor.id && (
                <View style={styles.hiddenInfo}>
                  <View style={styles.detailItem}>
                    <View activeOpacity={0.9} style={styles.iconDetail}>
                      <Feather name="user" size={26} color={"#AEAEAE"} />
                    </View>
                    <View>
                      <Text style={styles.detailtitle}>Especialidade</Text>
                      <Text style={styles.detail}>{doctor.specialty}</Text>
                    </View>
                  </View>
                  <Divider />
                  <View style={styles.detailItem}>
                    <View activeOpacity={0.9} style={styles.iconDetail}>
                      <Feather name="map-pin" size={26} color={"#AEAEAE"} />
                    </View>
                    <View>
                      <Text style={styles.detailtitle}>Localização</Text>
                      <Text style={styles.detail}>{doctor.location}</Text>
                    </View>
                  </View>
                  <Divider />
                  <View style={styles.detailItem}>
                    <View activeOpacity={0.9} style={styles.iconDetail}>
                      <Feather name="phone" size={26} color={"#AEAEAE"} />
                    </View>
                    <View>
                      <Text style={styles.detailtitle}>Telefone</Text>
                      <Text style={styles.detail}>{doctor.details.phoneNumber}</Text>
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

export default DoctorsList;