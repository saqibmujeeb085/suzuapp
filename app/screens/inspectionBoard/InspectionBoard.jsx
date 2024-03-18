import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/screen/Screen";
import AppText from "../../components/text/Text";
import IconButton from "../../components/buttons/IconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GradientButton from "../../components/buttons/GradientButton";
import ProcessModal from "../../components/modals/ProcessModal";

const InspectionBoard = ({ navigation }) => {
  const inpection = () => {
    navigation.navigate("SingleInspection");
  };
  const [show, setShow] = useState(false);
  const ShowModal = () => {
    setShow(!show);
  };
  return (
    <AppScreen>
      {show && (
        <ProcessModal
          show={show}
          setShow={setShow}
          icon
          heading={"Customer ID: 0KD560PLF"}
          text={"If you cancel inspection, customer will be removed."}
          pbtn={"Continue Inspection"}
          pbtnPress={setShow}
          sbtnPress={() => navigation.navigate("home")}
          sbtn={"Save for later"}
          sbtnColor={"#D20000"}
        />
      )}
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
          <IconButton
            onPress={ShowModal}
            icon={"cancel"}
            color={"#D70000"}
            fontSize={12}
          >
            Discard
          </IconButton>
        </View>
        <View style={styles.inscpectionCardsBox}>
          <TouchableWithoutFeedback onPress={inpection}>
            <View style={styles.inscpectionCard}>
              <View style={styles.inpsectionContent}>
                <MaterialCommunityIcons
                  name="steering"
                  color={"#1d1d1d"}
                  size={20}
                />
                <View style={styles.inpectionContentText}>
                  <AppText color={"#1d1d1d"} fontSize={10}>
                    Test drive
                  </AppText>
                  <AppText color={"#BBBBBB"} fontSize={8}>
                    Click to Edit
                  </AppText>
                </View>
              </View>
              <View style={styles.inpsectionRating}>
                <AppText color={"#BBBBBB"} fontSize={8} textAlign={"right"}>
                  Overall Rating
                </AppText>
                <AppText color={"#212121"} fontSize={14} textAlign={"right"}>
                  0.0/10
                </AppText>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* ////////////////////////////////////////////// */}
          <TouchableWithoutFeedback onPress={inpection}>
            <View style={styles.inscpectionCard}>
              <View style={styles.inpsectionContent}>
                <MaterialCommunityIcons
                  name="car"
                  color={"#1d1d1d"}
                  size={20}
                />
                <View style={styles.inpectionContentText}>
                  <AppText color={"#1d1d1d"} fontSize={10}>
                    Exterior
                  </AppText>
                  <AppText color={"#BBBBBB"} fontSize={8}>
                    Click to Edit
                  </AppText>
                </View>
              </View>
              <View style={styles.inpsectionRating}>
                <AppText color={"#BBBBBB"} fontSize={8} textAlign={"right"}>
                  Overall Rating
                </AppText>
                <AppText color={"#212121"} fontSize={14} textAlign={"right"}>
                  0.0/10
                </AppText>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* ////////////////////////////////////////////// */}
          <TouchableWithoutFeedback onPress={inpection}>
            <View style={styles.inscpectionCard}>
              <View style={styles.inpsectionContent}>
                <MaterialCommunityIcons
                  name="car-child-seat"
                  color={"#1d1d1d"}
                  size={20}
                />
                <View style={styles.inpectionContentText}>
                  <AppText color={"#1d1d1d"} fontSize={10}>
                    Interior
                  </AppText>
                  <AppText color={"#BBBBBB"} fontSize={8}>
                    Click to Edit
                  </AppText>
                </View>
              </View>
              <View style={styles.inpsectionRating}>
                <AppText color={"#BBBBBB"} fontSize={8} textAlign={"right"}>
                  Overall Rating
                </AppText>
                <AppText color={"#212121"} fontSize={14} textAlign={"right"}>
                  0.0/10
                </AppText>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* ////////////////////////////////////////////// */}
          <TouchableWithoutFeedback onPress={inpection}>
            <View style={styles.inscpectionCard}>
              <View style={styles.inpsectionContent}>
                <MaterialCommunityIcons
                  name="car-clutch"
                  color={"#1d1d1d"}
                  size={20}
                />
                <View style={styles.inpectionContentText}>
                  <AppText color={"#1d1d1d"} fontSize={10}>
                    Mechanical & electrical
                  </AppText>
                  <AppText color={"#BBBBBB"} fontSize={8}>
                    Click to Edit
                  </AppText>
                </View>
              </View>
              <View style={styles.inpsectionRating}>
                <AppText color={"#BBBBBB"} fontSize={8} textAlign={"right"}>
                  Overall Rating
                </AppText>
                <AppText color={"#212121"} fontSize={14} textAlign={"right"}>
                  0.0/10
                </AppText>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* ////////////////////////////////////////////// */}
          <TouchableWithoutFeedback onPress={inpection}>
            <View style={styles.inscpectionCard}>
              <View style={styles.inpsectionContent}>
                <MaterialCommunityIcons
                  name="tire"
                  color={"#1d1d1d"}
                  size={20}
                />
                <View style={styles.inpectionContentText}>
                  <AppText color={"#1d1d1d"} fontSize={10}>
                    Wheels
                  </AppText>
                  <AppText color={"#BBBBBB"} fontSize={8}>
                    Click to Edit
                  </AppText>
                </View>
              </View>
              <View style={styles.inpsectionRating}>
                <AppText color={"#BBBBBB"} fontSize={8} textAlign={"right"}>
                  Overall Rating
                </AppText>
                <AppText color={"#212121"} fontSize={14} textAlign={"right"}>
                  0.0/10
                </AppText>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.inscpectionButton}>
            <GradientButton>Submit Inspection Report</GradientButton>
          </View>
        </View>
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
  inscpectionCardsBox: {
    paddingHorizontal: 20,
    marginVertical: 15,
    gap: 10,
  },
  inscpectionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
  },
  inpsectionContent: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  inscpectionButton: {
    marginTop: 10,
  },
});
