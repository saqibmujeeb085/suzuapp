import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather, Ionicons } from "@expo/vector-icons";
import AppText from "../text/Text";
import RNFetchBlob from "react-native-fetch-blob";

const AppImagePicker = ({
  onImageSelected,
  onSelectedImageName,
  onImageType,
}) => {
  // const [image, setImage] = useState(null);
  // const [imageName, setImageName] = useState("");

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: false,
  //     width: "100%",
  //     height: "100%",
  //     quality: 0.5,
  //   });

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //     setImageName(result.assets[0].fileName);
  //     onImageSelected(result.assets[0].uri); // Pass the selected image URI to the callback function
  //     onSelectedImageName(result.assets[0].fileName);
  //   }
  // };

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageType, setImageType] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      width: "100%",
      height: "100%",
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageName(result.assets[0].fileName);
      onImageSelected(result.assets[0].uri); // Pass the selected image URI to the callback function
      onSelectedImageName(result.assets[0].fileName);
      getImageType(result.assets[0].uri); // Get the image type
    }
  };

  // Function to get the image type
  const getImageType = async (imageUri) => {
    try {
      const response = await RNFetchBlob.fetch("GET", imageUri);
      const contentType = response.info().headers["Content-Type"];
      setImageType(contentType); // Set the image type state
      onImageType(contentType); // Pass the image type to the callback function
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.pickerContainer}>
      <View style={styles.pickerImageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : (
          <View style={styles.pickerIconContainer}>
            <Ionicons name="image-outline" size={50} color={"#C9C9C9"} />
            <AppText fontSize={12} color={"#525252"}>
              Add Photos and Videos
            </AppText>
          </View>
        )}
      </View>
      <View>
        <TouchableWithoutFeedback onPress={pickImage}>
          <View style={styles.UploadButton}>
            {image ? (
              <AppText
                color={"#BBBBBB"}
                fontSize={10}
                numberOfLines={1}
                ellipsizeMode="tail"
                width={"80%"}
              >
                {imageName}
              </AppText>
            ) : (
              <AppText color={"#BBBBBB"} fontSize={10}>
                Upload Document
              </AppText>
            )}
            <Feather name="upload" size={12} color={"#BBBBBB"} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  pickerContainer: {
    gap: 10,
  },
  pickerImageContainer: {
    backgroundColor: "white",
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  pickerIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  UploadButton: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
});
