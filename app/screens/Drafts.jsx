import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useCallback, useState } from "react";
import AppScreen from "../components/screen/Screen";
import AppText from "../components/text/Text";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import DraftInspectionCard from "../components/card/DraftInspectionCard";
import { useFocusEffect } from "@react-navigation/native";

const Drafts = ({ navigation }) => {
  const [userData] = useContext(AuthContext);
  const [inspectedCar, setInspectedCar] = useState([]);

  const fetchInspectedCars = useCallback(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `/auth/get_carinfosdraft.php?duserId=${userData.user.duserid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setInspectedCar(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userData]);

  useFocusEffect(
    useCallback(() => {
      fetchInspectedCars();
    }, [fetchInspectedCars])
  );

  return (
    <AppScreen>
      <View style={styles.recentInspectionContainer}>
        <View style={styles.headingAndButton}>
          <AppText fontSize={14} color={"#323232"}>
            Draft Inspections
          </AppText>
        </View>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, marginBottom: 30 }}
          data={inspectedCar}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DraftInspectionCard
              carId={item?.id}
              car={item?.car}
              customer={item?.customerName}
              model={item?.model}
              date={item?.inspectionDate}
              carImage={item?.carPic}
              onPress={() =>
                navigation.navigate("DraftSingleCar", { id: item?.id })
              }
            />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Drafts;

const styles = StyleSheet.create({
  customerSummarycontainerbackgroundImage: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  customerSummarycontainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  customerDetailsAndLogout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customerDetails: {
    gap: 5,
  },
  logOutButton: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  breakLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#255BB3",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  summaryBox: {
    gap: 5,
  },
  recentInspectionContainer: {
    marginTop: 20,
  },
  headingAndButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  pageHeading: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
