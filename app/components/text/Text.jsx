import { Text } from "react-native";
import React from "react";
import { mainStyles } from "../../constants/style";

function AppText({ fontSize = 14, fontFamily = mainStyles.appFontRegular.fontFamily, numberOfLines, ellipsizeMode, children, ...styles }) {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={{ ...styles, fontFamily: fontFamily }}
    >
      {children}
    </Text>
  );
}

export default AppText;

