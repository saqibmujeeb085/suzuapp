import { NavigationContainer } from "@react-navigation/native";
import FeedNavigation from "./app/navigation/FeedNavigation";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { AuthProvider } from "./app/context/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./app/assets/fonts/Madimi.ttf"),
  });

  return (
    <NavigationContainer>
      <AuthProvider>
      <FeedNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
