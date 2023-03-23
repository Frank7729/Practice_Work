import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import User from "../screens/User.jsx";
import Home from "../screens/Home.jsx";
"react-router-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const home = "Home";
const user = "User";

const Mycomponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === home) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === user) {
            iconName = focused ? "call" : "call-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={home}
        component={Home}
        options={() => ({
          headerStyle: { backgroundColor: "#3b6492" },
          headerTitleStyle: { color: "#ffffff" },
        })}
      />
      <Tab.Screen
        name={user}
        component={User}
        options={() => ({
          headerStyle: { backgroundColor: "#3b6492" },
          headerTitleStyle: { color: "#ffffff" },
        })} />
    </Tab.Navigator>
  );
};

const SubMyComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
        component={Mycomponent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Pantalla Principal"
          component={SubMyComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;