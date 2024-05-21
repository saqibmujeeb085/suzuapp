import { Text } from "react-native";
import React from "react";
import { mainStyles } from "../../constants/style";

function AppText({
  fontSize = 10,
  fontFamily = mainStyles.appFontRegular,
  numberOfLines,
  ellipsizeMode,
  children,
  ...styles
}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={{
        ...styles,
        fontFamily: fontFamily,
        fontSize: fontSize,
        textTransform: "capitalize",
      }}
    >
      {children}
    </Text>
  );
}

export default AppText;
