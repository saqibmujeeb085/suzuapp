import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../text/Text";
import { colors } from "../../constants/colors";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const InspectionCard = ({ car, model, date, customer, carImage }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.inspectionDestailsContainer}>
        <Image source={carImage} style={styles.image} />
        <View style={styles.contentContainer}>
          <AppText color={colors.black} fontSize={11}>
            {car}
          </AppText>
          <View style={styles.clientAndCarDetail}>
            <AppText color={colors.black} fontSize={8}>
              Model: {model}
            </AppText>
            <AppText color={colors.black} fontSize={8}>
              Customer: {customer}
            </AppText>
          </View>
          <AppText color={colors.lightGrey} fontSize={8}>
            {date}
          </AppText>
        </View>
      </View>

      <View style={styles.inspectionRating}>
        <AnimatedCircularProgress
          size={55}
          width={8}
          fill={91}
          tintColor="#009E10"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#F4F4F4"
        >
          {(fill) => {
            <AppText color="black">9.1</AppText>;
          }}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default InspectionCard;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    overflow: 'hidden',
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
  clientAndCarDetail: {},
});
