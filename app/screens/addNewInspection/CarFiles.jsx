import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import ImagePicker from "../../components/imagePicker/ImagePicker";
import GradientButton from "../../components/buttons/GradientButton";
import IconButton from "../../components/buttons/IconButton";

const CarFiles = ({ navigation }) => {
  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()}>
        Uploads
      </InspectionHeader>
      <View style={styles.UploadScreenContainer}>
        <ImagePicker />
        <View style={styles.addMoreButton}>
          <IconButton icon={"plus"} color={"#525252"} fontSize={10}>
            Add More
          </IconButton>
        </View>
        <View style={styles.formButton}>
          <GradientButton onPress={() => navigation.navigate("CarBodyDetails")}>
            Start Inspection
          </GradientButton>
        </View>
      </View>
    </AppScreen>
  );
};

export default CarFiles;

const styles = StyleSheet.create({
  UploadScreenContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  addMoreButton: {
    alignItems: "flex-end",
  },
  formButton: {
    marginTop: 10,
  },
});
