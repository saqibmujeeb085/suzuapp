import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import AppTextInput from "../../components/formFields/TextInput";
import GradientButton from "../../components/buttons/GradientButton";

const CarDetails = ({ navigation }) => {
  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()}>
        Car Details
      </InspectionHeader>
      <View style={styles.InspectionformContainer}>
        <AppTextInput placeholder="Manufacturer" />
        <AppTextInput placeholder="Model" />
        <AppTextInput placeholder="Manufacturer Year" />
        <AppTextInput placeholder="Color" />
        <View style={styles.formButton}>
          <GradientButton onPress={() => navigation.navigate("CarBodyDetails")}>
            Next
          </GradientButton>
        </View>
      </View>
    </AppScreen>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  InspectionformContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  formButton: {
    marginTop: 10,
  },
});
