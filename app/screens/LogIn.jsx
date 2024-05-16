import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import axios from "axios";
import AppScreen from "../components/screen/Screen";
import AppTextInput from "../components/formFields/TextInput";
import Dropdown from "../components/formFields/Dropdown";
import IconButton from "../components/buttons/IconButton";
import GradientButton from "../components/buttons/GradientButton";
import { Dimensions } from "react-native";
import AppText from "../components/text/Text";

const LogIn = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  const [selectedDealership, setSelectedDealership] = useState(null);
  console.log(selectedDealership);

  const [dealershipList, setDealershipList] = useState([]);
  const [dealershipUserList, setDealershipUserList] = useState([]);

  useEffect(() => {
    dealershipName();
  }, []);

  useEffect(() => {
    dealershipUserName();
  }, []);

  const dealershipName = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://saadurrehman.com/inspectionapp/apis/auth/get_dealerships.php",
      headers: {},
    };

    try {
      const response = await axios.request(config);
      let dealerships = response.data;
      setDealershipList(
        dealerships.map((object) => ({
          key: object.did,
          value: object.dname,
        }))
      );
    } catch (error) {
      console.error("Error fetching dealership data:", error);
    }
  };

  const dealershipUserName = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://saadurrehman.com/inspectionapp/apis/auth/get_duser.php?did=${1}`,
      headers: {},
    };

    try {
      const response = await axios.request(config);
      const dealershipsUsers = response.data;

      console.log("API response:", dealershipsUsers);

      if (Array.isArray(dealershipsUsers)) {
        setDealershipUserList(
          dealershipsUsers.map((object) => ({
            key: object.duserid,
            value: object.userName,
          }))
        );
      } else {
        console.error("Unexpected API response format:", dealershipsUsers);
      }
    } catch (error) {
      console.error("Error fetching dealership data:", error);
    }
  };

  const DealershipSelected = (selected) => {
    setSelectedDealership(selected);
  };

  return (
    <AppScreen>
      <ImageBackground
        style={styles.fullScreenBackground}
        source={require("../assets/login/screen-background.png")}
      >
        <KeyboardAwareScrollView>
          <View style={{ height: windowHeight }}>
            <ImageBackground
              style={styles.headerBackground}
              source={require("../assets/login/header-background.png")}
            >
              <Text style={styles.headerHeading}>
                Welcome to Suzuki Vehcile Valuation Portal.
              </Text>
            </ImageBackground>
            <View style={styles.formAndCopyright}>
              <View style={styles.formContainer}>
                <Text style={styles.pageHeading}>Sign In</Text>
                <View style={styles.formFieldContainer}>
                  {/* <AppTextInput placeholder="Name" /> */}
                  <Dropdown
                    DropItems="Dealership Name"
                    Data={dealershipList}
                    Search={true}
                    save={"key"}
                    selectedItem={DealershipSelected}
                  />
                  <Dropdown
                    DropItems="Dealership UserName"
                    Data={dealershipUserList}
                    save={"value"}
                  />
                  <AppTextInput
                    autoComplete="off"
                    placeholder="Enter Your Password Here"
                  />
                  <View style={styles.forgetBtn}>
                    <IconButton
                      icon={"account-key-outline"}
                      onPress={() => navigation.navigate("ForgetPassword")}
                    >
                      Forget Password
                    </IconButton>
                  </View>
                  <GradientButton onPress={() => navigation.navigate("Home")}>
                    Sign in
                  </GradientButton>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AppText
                      width={200}
                      fontSize={10}
                      color={"#8b8b8b"}
                      textAlign={"center"}
                      lineHeight={14}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </AppText>
                  </View>
                </View>
              </View>
              <AppText
                marginBottom={30}
                textAlign={"center"}
                color={"#6B6B6B"}
                fontSize={10}
              >
                &copy; Powered by Suzuki
              </AppText>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </AppScreen>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
  },
  formAndCopyright: {
    flex: 1,
    justifyContent: "flex-start",
  },
  headerBackground: {
    justifyContent: "center",
  },
  headerHeading: {
    color: "white",
    fontSize: 33,
    fontFamily: "Roboto",
    lineHeight: 45,
    width: 320,
    paddingLeft: 20,
    paddingTop: 70,
    paddingBottom: 100,
  },
  formContainer: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  pageHeading: {
    fontSize: 30,
    color: "#003790",
    borderBottomWidth: 2,
    borderColor: "#003790",
    paddingBottom: 5,
    fontWeight: "600",
    marginBottom: 20,
  },
  formFieldContainer: {
    width: "100%",
    gap: 10,
  },
  forgetBtn: {
    alignItems: "flex-end",
    marginTop: 5,
    marginBottom: 20,
  },
});
