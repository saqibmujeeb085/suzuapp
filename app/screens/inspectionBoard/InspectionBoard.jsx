import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/screen/Screen";
import AppText from "../../components/text/Text";
import IconButton from "../../components/buttons/IconButton";

const InspectionBoard = () => {
  return (
    <AppScreen>
      <View style={styles.headingContainer}>
        <AppText fontSize={12}>Inspection Board</AppText>
      </View>
      <ImageBackground
        style={styles.customerSummarycontainerbackgroundImage}
        source={require("../../assets/componentsImages/summaryBackground.png")}
      >
        <View style={styles.customerSummarycontainer}>
          <View style={styles.customerDetailsAndLogout}>
            <View style={styles.customerDetails}>
              <AppText color={"white"} fontSize={12}>
                Suzuki Mehran
              </AppText>
              <AppText color={"#BBBBBB"} fontSize={10}>
                Customer: Saad Rehman
              </AppText>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("LogIn")}
            >
              <View style={styles.timer}>
                <Image
                  source={require("../../assets/componentsImages/timer.png")}
                />
                <View style={styles.time}>
                  <AppText color={"white"} fontSize={8}>
                    Time Left
                  </AppText>
                  <AppText color={"white"} fontSize={12}>
                    19:25
                  </AppText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.breakLine} />
          <View style={styles.summaryContainer}>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Mileage
              </AppText>
              <AppText color={"white"} fontSize={10}>
                133319 km
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Year
              </AppText>
              <AppText color={"white"} fontSize={10}>
                2004
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Color
              </AppText>
              <AppText color={"white"} fontSize={10}>
                True Blue
              </AppText>
            </View>
            <View style={styles.summaryBox}>
              <AppText color={"#cccccc"} fontSize={10}>
                Engine
              </AppText>
              <AppText color={"white"} fontSize={10}>
                996 cc
              </AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.InspectionBoardContainer}>
        <View style={styles.headingAndButton}>
          <View style={styles.headingWithIcon}>
            <AppText fontSize={12} color={"#323232"}>
              Inspection Details
            </AppText>
          </View>
          <IconButton icon={"cancel"} color={"#D70000"} fontSize={12}>
            Discard
          </IconButton>
        </View>
        <View style={styles.inscpectionCardsBox}></View>
      </View>
    </AppScreen>
  );
};

export default InspectionBoard;

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  customerSummarycontainerbackgroundImage: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  customerSummarycontainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 10,
  },
  customerDetailsAndLogout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customerDetails: {
    gap: 2,
  },
  timer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  time: {
    justifyContent: "center",
    alignItems: "center",
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
    gap: 2,
  },
  headingAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  InspectionBoardContainer: {
    marginTop: 20,
  },
});
