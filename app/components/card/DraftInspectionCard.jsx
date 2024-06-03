import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../text/Text";
import { colors } from "../../constants/colors";
import { mainStyles } from "../../constants/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

const DraftInspectionCard = ({
  carId,
  car,
  model,
  date,
  customer,
  carImage,
  onPress,
}) => {
  console.log(carImage);

  const deleteCar = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `/auth/delete-car.php?id=${carId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.Container}>
      <View style={styles.inspectionDestailsContainer}>
        <Image
          source={{ uri: `${process.env.IMAGE_URL}/${carImage}` }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <AppText color={colors.fontBlack} fontSize={mainStyles.h2FontSize}>
            {car}
          </AppText>
          <View style={styles.clientAndCarDetail}>
            <AppText color={colors.fontBlack} fontSize={mainStyles.h3FontSize}>
              Model: {model}
            </AppText>
            <AppText color={colors.fontBlack} fontSize={mainStyles.h3FontSize}>
              Customer: {customer}
            </AppText>
          </View>
          <AppText color={colors.fontGrey} fontSize={mainStyles.h4FontSize}>
            {date}
          </AppText>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.IconButton}
          onPress={onPress}
          activeOpacity={0.6}
        >
          <MaterialCommunityIcons
            name={"eye-outline"}
            size={20}
            color={colors.blueColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DraftInspectionCard;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.whiteBg,
    elevation: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  inspectionDestailsContainer: {
    flexDirection: "row",
    gap: 14,
  },
  image: {
    width: 61,
    height: 56,
    resizeMode: "cover",
    borderRadius: 4,
    overflow: "hidden",
  },
  contentContainer: {
    justifyContent: "space-between",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: colors.ligtGreyBg,
    height: "100%",
    paddingRight: 10,
    paddingLeft: 25,
  },
  IconButton: {
    marginRight: 10,
  },
});
