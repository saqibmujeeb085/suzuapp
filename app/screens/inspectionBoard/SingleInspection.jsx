import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import AppText from "../../components/text/Text";
import { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

const SingleInspection = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(undefined);
  const [selectedId2, setSelectedId2] = useState(undefined);
  const [selectedId3, setSelectedId3] = useState(undefined);
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: true,
      },
      {
        id: "2",
        label: "No",
        value: false,
      },
    ],
    []
  );
  const radioButtons2 = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: true,
      },
      {
        id: "2",
        label: "No",
        value: false,
      },
    ],
    []
  );
  const radioButtons3 = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: true,
      },
      {
        id: "2",
        label: "No",
        value: false,
      },
    ],
    []
  );
  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()} rightBtn={"Next"}>
        Mechanical & electrical
      </InspectionHeader>
      <ScrollView>
        <View style={styles.inspectionContainer}>
          <View style={styles.inspectionBox}>
            <AppText
              fontSize={12}
              color={"#1d1d1d"}
              lineHeight={18}
              maxWidth={218}
            >
              1. Engine mounting, seals & gaskets: condition, no visible leaks
            </AppText>
            <RadioGroup
              containerStyle={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
              color="red"
              borderColor="red"
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
          {/* //////////////////////////////////// */}
          <View style={styles.inspectionBox}>
            <AppText
              fontSize={12}
              color={"#1d1d1d"}
              lineHeight={18}
              maxWidth={218}
            >
              2. Engine Oil, Power Steering and Brake Fluids Level.
            </AppText>
            <RadioGroup
              containerStyle={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
              color="red"
              borderColor="red"
              radioButtons={radioButtons2}
              onPress={setSelectedId2}
              selectedId={selectedId2}
            />
          </View>
          {/* //////////////////////////////////// */}
          <View style={styles.inspectionBox}>
            <AppText
              fontSize={12}
              color={"#1d1d1d"}
              lineHeight={18}
              maxWidth={218}
            >
              3. Engine Belts & Hoses: operation and condition.
            </AppText>
            <RadioGroup
              containerStyle={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
              color="red"
              borderColor="red"
              radioButtons={radioButtons3}
              onPress={setSelectedId3}
              selectedId={selectedId3}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default SingleInspection;

const styles = StyleSheet.create({
  inspectionContainer: {
    gap: 20,
    paddingHorizontal: 20,
  },
  inspectionBox: {
    backgroundColor: "white",
    borderRadius: 5,
    minHeight: 10,
    padding: 20,
    gap: 20,
  },
});
