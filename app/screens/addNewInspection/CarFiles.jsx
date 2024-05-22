import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import ImagePicker from "../../components/imagePicker/ImagePicker";
import GradientButton from "../../components/buttons/GradientButton";
import ProcessModal from "../../components/modals/ProcessModal";
import { InspecteCarContext } from "../../context/newInspectionContext";
import axios from "axios";

const CarFiles = ({ navigation }) => {
  const [carData, setCarData] = useContext(InspecteCarContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageType, setSelectedImageType] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState("");

  const [show, setShow] = useState(false);
  const ShowModal = () => {
    setShow(!show);
  };

  const currentDateAndTime = () => {
    const padZero = (number) => (number < 10 ? `0${number}` : number);

    const date = new Date();
    const month = padZero(date.getMonth() + 1); // Months are 0-based
    const day = padZero(date.getDate());
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    setCurrentDateTime(`${month}/${day}/${year} - ${hours}:${minutes}${ampm}`);
  };

  const postCarDetails = async (
    selectedImage,
    selectedImageName,
    selectedImageType
  ) => {
    currentDateAndTime();
    setCarData((prevData) => ({
      ...prevData,
      inspectionDate: currentDateTime,
    }));

    try {
      let carData = new FormData();
      data.append("dealershipId", "1");
      data.append("duserId", "1");
      data.append("customerID", "");
      data.append("registrationNo", "5234532523");
      data.append("chasisNo", "3452353523");
      data.append("EngineNo", "5324523523");
      data.append("inspectionDate", "333333444444444444");
      data.append("mfgId", "1");
      data.append("carId", "2");
      data.append("varientId", "1");
      data.append("model", "yaris");
      data.append("cplc", "gkkjhgj");
      data.append("buyingCode", "");
      data.append("NoOfOwners", "7");
      data.append("transmissionType", "bjvkjhkj");
      data.append("mileage", "fgjhfjhgfjhf");
      data.append("registrationCity", "itgiugyjhgkj");
      data.append("FuelType", "");
      data.append("color", "");
      data.append("carPic", {
        uri: selectedImage,
        type: selectedImageType,
        name: selectedImageName,
      });
      data.append("status", "draft");

      setLoading(true);
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.post("/auth/addcarInfo.php", carData, {
        headers: headers,
      });

      // Handle the response accordingly
      console.log("Response:", response.data);

      setLoading(false);
      navigation.navigate("CarFiles");
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      // Handle error
    }
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
        <ImagePicker
          onImageSelected={setSelectedImage}
          onSelectedImageName={setSelectedImageName}
          onImageType={setSelectedImageType}
        />
        <View style={styles.formButton}>
          <GradientButton
            onPress={() => postCarDetails(selectedImage)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Start Inspection"}
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
