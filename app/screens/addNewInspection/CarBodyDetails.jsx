import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/screen/Screen";
import GradientButton from "../../components/buttons/GradientButton";
import AppTextInput from "../../components/formFields/TextInput";
import InspectionHeader from "../../components/header/InspectionHeader";

const CarBodyDetails = ({ navigation }) => {
  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()}>
        Car Details
      </InspectionHeader>
      <View style={styles.InspectionformContainer}>
        <AppTextInput placeholder="Fuel Type" />
        <View style={styles.inlineFormContainer}>
          <AppTextInput placeholder="Chassis No" />
          <AppTextInput placeholder="Engine No" />
        </View>
        <AppTextInput placeholder="Transmission Type" />
        <AppTextInput placeholder="Milage" />
        <AppTextInput placeholder="Engine Capacity" />
        <View style={styles.formButton}>
          <GradientButton onPress={() => navigation.navigate("CarFiles")}>
            Next
          </GradientButton>
        </View>
      </View>
    </AppScreen>
  );
};

export default CarBodyDetails;

const styles = StyleSheet.create({
  InspectionformContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  inlineFormContainer: {
    flexDirection: "row",
    gap: 10,
  },
  formButton: {
    marginTop: 10,
  },
});
