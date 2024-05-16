import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import AppScreen from "../components/screen/Screen";
import InspectionCard from "../components/card/InspectionCard";
import AppText from "../components/text/Text";
import IconButton from "../components/buttons/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/authContext";



const recentInspectionData = [
  {
    id: "1",
    car: "Toyota Camry 1",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "2",
    car: "Toyota Camry 2",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "3",
    car: "Toyota Camry 3",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "4",
    car: "Toyota Camry 4",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "5",
    car: "Toyota Camry 5",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "6",
    car: "Toyota Camry 6",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "7",
    car: "Toyota Camry 7",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "8",
    car: "Toyota Camry 8",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
  {
    id: "9",
    car: "Toyota Camry 9",
    model: "2019 Toyota Camry LE",
    dateTime: "10/10/2024 - 8:45 AM",
    carimage: require("../assets/componentsImages/car.png"),
  },
];

const Home = ({ navigation }) => {
  const [user, setUser] = useContext(AuthContext);
  const userLogout = async () => {
     setUser({token:""})
    await AsyncStorage.removeItem("@auth")
    navigation.navigate("LogIn")
    alert("Logout Succesfully")
  }

  return (
    <AppScreen>
      <ImageBackground
        style={styles.customerSummarycontainerbackgroundImage}
        source={require("../assets/componentsImages/summaryBackground.png")}
      >
        <View style={styles.customerSummarycontainer}>
          <View style={styles.customerDetailsAndLogout}>
            <View style={styles.customerDetails}>
              <AppText color={"white"} fontSize={16}>
                I.G Motors, Karachi
              </AppText>
              <AppText color={"#cccccc"} fontSize={10}>
                User ID: 0PRF56FH0
              </AppText>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={userLogout}
            >
              <View style={styles.logOutButton}>
                <Image
                  source={require("../assets/componentsImages/logout.png")}
                />
                <AppText color={"white"} fontSize={8}>
                  Logout
                </AppText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.breakLine} />
          <View style={styles.summaryContainer}>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Registrations
              </AppText>
              <AppText color={"white"} fontSize={14}>
                2,000K
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Purchases
              </AppText>
              <AppText color={"white"} fontSize={14}>
                1,500
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Sales
              </AppText>
              <AppText color={"white"} fontSize={14}>
                1,200
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Downloads
              </AppText>
              <AppText color={"white"} fontSize={14}>
                10,23
              </AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.recentInspectionContainer}>
        <View style={styles.headingAndButton}>
          <View style={styles.headingWithIcon}>
            <Image source={require("../assets/componentsImages/recent.png")} />
            <AppText fontSize={12} color={"#323232"}>
              Recent Inspections
            </AppText>
          </View>
          <IconButton icon={"format-list-bulleted"} color={"#323232"} fontSize={12}>
            View All
          </IconButton>
        </View>
        <FlatList
         contentContainerStyle={{
          paddingBottom: 30
         }}
         showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, marginBottom: 190 }}
          data={recentInspectionData}
          keyExtractor={(recentInspectionData) =>
            recentInspectionData.id.toString()
          }
          renderItem={({ item }) => (
            <InspectionCard
              car={item.car}
              customer={item.customet}
              model={item.model}
              date={item.dateTime}
              carImage={item.carimage}
            />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  customerSummarycontainerbackgroundImage: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  customerSummarycontainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  customerDetailsAndLogout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customerDetails: {
    gap: 5,
  },
  logOutButton: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  breakLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#255BB3",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  summaryBox: {
    gap: 5,
  },
  recentInspectionContainer: {
    marginTop: 20,
  },
  headingAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headingWithIcon: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
