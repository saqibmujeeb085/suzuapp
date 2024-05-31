import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import AppScreen from "../../components/screen/Screen";
import InspectionHeader from "../../components/header/InspectionHeader";
import RangeCard from "../../components/card/RangeCard";
import SelectCard from "../../components/card/SelectCard";
import axios from "axios";

const SingleInspection = ({ navigation, route }) => {
  const { carid, catid, catName } = route.params || {};
  const [questions, setQuestions] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `/auth/get_questions.php?id=${catid}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        const data = response.data;
        setQuestions(data);
        // Initialize the values state with the fetched data
        const initialValues = data.map((question) => ({
          carID: carid,
          catID: catid,
          IndID: question.id,
          value: "", 
          image: ""
        }));
        setValues(initialValues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [carid, catid]);

  const handleValueChange = (id, newValue) => {
    setValues(prevValues => 
      prevValues.map(item =>
        item.IndID === id ? { ...item, value: newValue } : item
      )
    );
  };

  return (
    <AppScreen>
      <InspectionHeader onPress={() => navigation.goBack()} rightBtn={"Next"}>
        {catName}
      </InspectionHeader>
      <ScrollView>
        <View style={styles.inspectionContainer}>
          {questions.map((question, index) => (
            question.rating === 'r' ? (
              <RangeCard
                key={question.id}
                indicator={question.indicators}
                value={values.find(val => val.IndID === question.id)?.value}
                onValueChange={(newValue) => handleValueChange(question.id, newValue)}
                num={index}
              />
            ) : (
              <SelectCard
                key={question.id}
                indicator={question.indicators}
                value={values.find(val => val.IndID === question.id)?.value}
                onValueChange={(newValue) => handleValueChange(question.id, newValue)}
                num={index}
              />
            )
          ))}
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
    marginBottom: 30,
  },
});
