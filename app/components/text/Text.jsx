import { StyleSheet, Text } from "react-native";
import React from "react";
import { CommonStyles } from "../../constants/style";

function AppText({ numberOfLines, ellipsizeMode, children, ...otherStyles }) {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[styles.font, { ...otherStyles }]}
    >
      {children}
    </Text>
  );
}

export default AppText;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 16,
    fontFamily: CommonStyles.fontFamily,
  },
});
