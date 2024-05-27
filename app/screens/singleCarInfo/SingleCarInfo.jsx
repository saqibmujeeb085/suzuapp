import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AppScreen from "../../components/screen/Screen";
import AppText from "../../components/text/Text";
import { mainStyles } from "../../constants/style";
import InspectionHeader from "../../components/header/InspectionHeader";
import { colors } from "../../constants/colors";

const SingleCarInfo = ({ route, navigation }) => {
  const { id } = route.params || {}; // Add a default empty object to avoid destructuring error

  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(carInfo);

  useEffect(() => {
    if (!id) {
      setError(new Error("No ID provided"));
      setLoading(false);
      return;
    }

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://saadurrehman.com/inspectionapp/apis/auth/get_singlecarinfos.php?id=${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setCarInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <AppText>Error: {error.message}</AppText>
      </View>
    );
  }

  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()}>
        Car Details
      </InspectionHeader>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: `${process.env.IMAGE_URL}/${carInfo.carPic}` }}
          style={styles.bannerImage}
        />
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Inspection Date:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.inspectionDate}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>Car:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.car}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Variant:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.varientId}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Model:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.model}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Registration No:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.registrationNo}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Chasis No:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.chasisNo}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Manufacturer:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.mfgId}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>CPLC:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.cplc}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              No Of Owners:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.NoOfOwners}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Transmission Type:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.transmissionType}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Mileage:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.mileage}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Registration City:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.registrationCity}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Fuel Type:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.FuelType}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>
              Color:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.color}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h1FontSize }}>Rank:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h2FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.rank}
            </AppText>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default SingleCarInfo;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: colors.whiteBg,
  },
  container: {
    padding: 16,
  },
  bannerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  infoKey: {
    fontWeight: "bold",
    marginRight: 8,
  },
  infoValue: {
    flexShrink: 1,
  },
});
