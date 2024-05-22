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
        fontFamily: fontFamily,
        fontSize: fontSize,
        textTransform: "capitalize",
        ...styles,
      }}
    >
      {children}
    </Text>
  );
}

export default AppText;
