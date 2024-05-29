import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AppScreen from "../../components/screen/Screen";
import AppText from "../../components/text/Text";
import { mainStyles } from "../../constants/style";
import InspectionHeader from "../../components/header/InspectionHeader";
import { colors } from "../../constants/colors";
import GradientButton from "../../components/buttons/GradientButton";
import DeleteButton from "../../components/buttons/DeleteButton";
import { AntDesign } from "@expo/vector-icons";

const DraftSingleCar = ({ route, navigation }) => {
  const { id } = route.params || {}; // Add a default empty object to avoid destructuring error

  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError(new Error("No ID provided"));
      setLoading(false);
      return;
    }

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `/auth/get_singledraftcarinfos.php?id=${id}`,
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

  const handleDelete = () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://saadurrehman.com/inspectionapp/apis/auth/delete-car.php?id=${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Drafts"); // Navigate back to Drafts
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        Draft Car Details
      </InspectionHeader>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: `${process.env.IMAGE_URL}/${carInfo.carPic}` }}
          style={styles.bannerImage}
        />
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Inspection Date:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.inspectionDate}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>Car:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.car}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Variant:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.varientId}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Model:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.model}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Registration No:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.registrationNo}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Chasis No:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.chasisNo}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Manufacturer:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.mfgId}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>CPLC:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.cplc}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              No Of Owners:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.NoOfOwners}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Transmission Type:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.transmissionType}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Mileage:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.mileage}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Registration City:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.registrationCity}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Fuel Type:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.FuelType}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>
              Color:
            </AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.color}
            </AppText>
          </View>
          <View style={styles.infoContainer}>
            <AppText style={{ fontSize: mainStyles.h3FontSize }}>Rank:</AppText>
            <AppText
              style={{
                fontSize: mainStyles.h3FontSize,
                color: colors.fontGrey,
              }}
            >
              {carInfo.rank}
              {carInfo.status}
            </AppText>
          </View>
        </View>
        <View style={styles.ActionButtons}>
          <GradientButton>Save ANd Start Rating</GradientButton>
          <DeleteButton onPress={handleDelete}>
            <AntDesign name={"delete"} color={colors.fontRed} size={20} />
          </DeleteButton>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default DraftSingleCar;

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
  ActionButtons: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
});
