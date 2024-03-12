import { NavigationContainer } from "@react-navigation/native";
import FeedNavigation from "./app/navigation/FeedNavigation";
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./app/assets/fonts/Madimi.ttf'),
  });

  return (
    <NavigationContainer>
      <FeedNavigation />
    </NavigationContainer>


  );
}
