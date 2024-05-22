import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import AppImagePicker from "../../components/imagePicker/ImagePicker";
import GradientButton from "../../components/buttons/GradientButton";
import ProcessModal from "../../components/modals/ProcessModal";
import { InspecteCarContext } from "../../context/newInspectionContext";
import axios from "axios";

const CarFiles = ({ navigation }) => {
  const [carData, setCarData] = useContext(InspecteCarContext);
  const [selectedImage, setSelectedImage] = useState(null);
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
    const month = padZero(date.getMonth() + 1); 
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
    selectedImageName
  ) => {
    currentDateAndTime();
    setCarData((prevData) => ({
      ...prevData,
      inspectionDate: currentDateTime,
    }));

    let data = new FormData();
    data.append("dealershipId", "1");
    data.append("duserId", "1");
    data.append("customerID", "1");
    data.append("registrationNo", "5234532523");
    data.append("chasisNo", "26667");
    data.append("EngineNo", "5324523523");
    data.append("inspectionDate", currentDateTime);
    data.append("mfgId", "1");
    data.append("carId", "2");
    data.append("varientId", "1");
    data.append("model", "corola");
    data.append("cplc", "gkkjhgj");
    data.append("buyingCode", "");
    data.append("NoOfOwners", "7");
    data.append("transmissionType", "Automatic");
    data.append("mileage", "10000");
    data.append("registrationCity", "City123");
    data.append("FuelType", "Petrol");
    data.append("color", "Red");
    data.append("carPic", {
      uri: selectedImage,
      name: selectedImageName,
      type: "image/jpeg",
    });
    data.append("status", "draft");


    try {
      setLoading(true);
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.post("/auth/addcarInfo.php", data, {
        headers: headers,
      });

      
      console.log("Response:", response.data);
      
      setLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      
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
      <AppImagePicker
          onImageSelected={setSelectedImage}
          onSelectedImageName={setSelectedImageName}
        />
        <View style={styles.formButton}>
          <GradientButton
            onPress={() => postCarDetails(selectedImage, selectedImageName)}
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
