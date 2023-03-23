import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import Discover from "./src/screens/Discover";
import Home from "./src/screens/Home";
import Item from "./src/screens/Item";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
