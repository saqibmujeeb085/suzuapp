import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Context
const InspecteCarContext = createContext();

//Provider
const InspecteCarProvider = ({ children }) => {
  //Global
  const [carData, setCarData] = useState({
    dealershipId: "",
    duserId: "",
    customerID: "",
    registrationNo: "",
    chasisNo: "",
    EngineNo: "",
    inspectionDate: "",
    mfgId: "",
    carId: "",
    varientId: "",
    model: "",
    cplc: "",
    buyingCode: "",
    NoOfOwners: "",
    transmissionType: "",
    mileage: "",
    registrationCity: "",
    FuelType: "",
    color: "",
    status: "draft",
  });

  //Base URL
  axios.defaults.baseURL = "https://saadurrehman.com/inspectionapp/apis";

  // Local Storage Initial Data
  useEffect(() => {
    const localStorageData = async () => {
      let data = await AsyncStorage.getItem("@InspectingCarData");
      let InspectingCarData = JSON.parse(data);
      setCarData({
        dealershipId: "",
        duserId: "",
        customerID: "",
        registrationNo: "",
        chasisNo: "",
        EngineNo: "",
        inspectionDate: "",
        mfgId: "",
        carId: "",
        varientId: "",
        model: "",
        cplc: "",
        buyingCode: "",
        NoOfOwners: "",
        transmissionType: "",
        mileage: "",
        registrationCity: "",
        FuelType: "",
        color: "",
        status: "draft",
      });
    };
    localStorageData();
  }, []);
  return (
    <InspecteCarContext.Provider value={[carData, setCarData]}>
      {children}
    </InspecteCarContext.Provider>
  );
};

export { InspecteCarContext, InspecteCarProvider };
