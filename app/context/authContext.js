import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Context
const AuthContext = createContext();

//Provider
const AuthProvider = ({ children }) => {
  //Global
  const [user, setUser] = useState({
    token: "",
  });

  //Base URL
  axios.defaults.baseURL = "https://saadurrehman.com/inspectionapp/apis";

  // Local Storage Initial Data
  useEffect(() => {
    const localStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = JSON.parse(data);
      setUser({
        ...user,
        token: data?.token,
      });
    };
    localStorageData();
  }, []);
  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
