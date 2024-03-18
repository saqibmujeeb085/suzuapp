import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import ImagePicker from "../../components/imagePicker/ImagePicker";
import GradientButton from "../../components/buttons/GradientButton";
import IconButton from "../../components/buttons/IconButton";
import ProcessModal from "../../components/modals/ProcessModal";

const CarFiles = ({ navigation }) => {
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
          text={"You have to complete the inspection in 20 minutes."}
          pbtn={"Start Inspection Now"}
          pbtnPress={() => navigation.navigate("Inspection")}
          sbtn={"Save for later"}
        />
      )}
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
          <GradientButton onPress={ShowModal}>Start Inspection</GradientButton>
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
