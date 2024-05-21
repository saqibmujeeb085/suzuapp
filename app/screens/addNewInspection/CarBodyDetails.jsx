import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppScreen from "../../components/screen/Screen";
import GradientButton from "../../components/buttons/GradientButton";
import AppTextInput from "../../components/formFields/TextInput";
import InspectionHeader from "../../components/header/InspectionHeader";
import Dropdown from "../../components/formFields/Dropdown";
import axios from "axios";
import { InspecteCarContext } from "../../context/newInspectionContext";

const CarBodyDetails = ({ navigation }) => {
  const [carData, setCarData] = useContext(InspecteCarContext);

  
  const [fuelTypes, setFuelTypes] = useState([]);
  const [transmissionsTypes, setTransmissionsTypes] = useState([]);
  const [engineCapacities, setEngineCapacities] = useState([]);
  const [registrationCities, setRegistrationCities] = useState([]);
  
  const [fuelType, setFuelType] = useState("");
  const [transmissionsType, setTransmissionsType] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [registrationCity, setRegistrationCity] = useState("");
  const [chasisNo, setChasisNo] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [milage, setMilage] = useState("");
  
  const FuelTypeSelected = (selected) => {
    setFuelType(selected);
  };
  const TransmissionsTypeSelected = (selected) => {
    setTransmissionsType(selected);
  };
  const EngineCapacitySelected = (selected) => {
    setEngineCapacity(selected);
  };
  const RegistrationCitySelected = (selected) => {
    setRegistrationCity(selected);
  };




  useEffect(() => {
    fetchFuelTypes();
    fetchTransmissionsTypes();
    fetchEngineCapacity();
    fetchRegistrationCity();
    }, []);


  const fetchFuelTypes = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/auth/get_fuelType.php",
      headers: {},
    };

    try {
      const response = await axios.request(config);
       console.log(response.data)
      const FuelTypes = response.data;
      setFuelTypes(
        FuelTypes.map((object) => ({
          key: object.did,
          value: object.type,
        }))
      );
    } catch (error) {
      console.error("Error fetching FuelTypes:", error);
    }
  };



  const fetchTransmissionsTypes = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/auth/get_fuelType.php",
      headers: {},
    };

    try {
      const response = await axios.request(config);
       console.log(response.data)
      const TransmissionsTypes = response.data;
      setTransmissionsTypes(
        TransmissionsTypes.map((object) => ({
          key: object.did,
          value: object.type,
        }))
      );
    } catch (error) {
      console.error("Error fetching FuelTypes:", error);
    }
  };

  const fetchEngineCapacity = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/auth/get_engdis.php",
      headers: {},
    };

    try {
      const response = await axios.request(config);
       console.log(response.data)
      const EngineCapacity = response.data;
      setEngineCapacities(
        EngineCapacity.map((object) => ({
          key: object.id,
          value: object.displacement,
        }))
      );
    } catch (error) {
      console.error("Error fetching FuelTypes:", error);
    }
  };


  const fetchRegistrationCity = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/auth/get_cities.php",
      headers: {},
    };

    try {
      const response = await axios.request(config);
       console.log(response.data)
      const RegistrationCity = response.data;
      setRegistrationCities(
        RegistrationCity.map((object) => ({
          key: object.id,
          value: object.city,
        }))
      );
    } catch (error) {
      console.error("Error fetching FuelTypes:", error);
    }
  };

  
  const addCarDetails = () => {
    setCarData((prevData) => ({
      ...prevData,
    chasisNo: chasisNo,
    EngineNo: engineNo,
    transmissionType: transmissionsType,
    mileage: milage,
    registrationCity: registrationCity,
    FuelType: fuelType,
    }));
    navigation.navigate("CarFiles");
  };

  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()}>
        Car Details
      </InspectionHeader>
      <View style={styles.InspectionformContainer}>
        {/* <AppTextInput placeholder="Fuel Type" /> */}
        <Dropdown
          DropItems="Fuel Type"
          Data={fuelTypes}
          save={"value"}
          selectedItem={FuelTypeSelected}
        />
        <View style={styles.inlineFormContainer}>
          <AppTextInput placeholder="Chassis No" onChangeText={(value) =>
                      setChasisNo(value)} />
          <AppTextInput placeholder="Engine No" onChangeText={(value) =>
                      setEngineNo(value)}/>
        </View>
        {/* <AppTextInput placeholder="Transmission Type" /> */}
        <Dropdown
          DropItems="Transmission Type"
          Data={transmissionsTypes}
          save={"value"}
          selectedItem={TransmissionsTypeSelected}
        />
        <AppTextInput placeholder="Milage" onChangeText={(value) =>
                      setMilage(value)}/>
        {/* <AppTextInput placeholder="Engine Capacity" /> */}
        <Dropdown
          DropItems="Engine Capacity"
          Data={engineCapacities}
          save={"value"}
          selectedItem={EngineCapacitySelected}
        />
        <Dropdown
          DropItems="Registration City"
          Data={registrationCities}
          save={"value"}
          selectedItem={RegistrationCitySelected}
          Search={true}
        />
        <View style={styles.formButton}>
          <GradientButton onPress={addCarDetails}>
            Next
          </GradientButton>
        </View>
      </View>
    </AppScreen>
  );
};

export default CarBodyDetails;

const styles = StyleSheet.create({
  InspectionformContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  inlineFormContainer: {
    flexDirection: "row",
    gap: 10,
  },
  formButton: {
    marginTop: 10,
  },
});
