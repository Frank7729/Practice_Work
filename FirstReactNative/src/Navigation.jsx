import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Services from './screens/Services';
import { Ionicons } from '@expo/vector-icons';
import Contact from './screens/Contact';
import { StatusBar } from 'react-native';
import SubHome from './subscreens/SubHome';
import { createDrawerNavigator } from '@react-navigation/drawer';

const home = "Home";
const services = "Services";
const contact = "Contact";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === services) {
            iconName = focused ? 'construct' : 'construct-outline';
          } else if (rn === contact) {
            iconName = focused ? 'call' : 'call-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={home}
        component={Home}
        options={() => ({
          headerStyle: { backgroundColor: '#192f6a' },
          headerTitleStyle: { fontWeight: 'bold', color: 'white' },
        })}
      />
      <Tab.Screen
        name={services}
        component={Services}
        options={() => ({
          headerStyle: { backgroundColor: '#697eb8' },
          headerTitleStyle: { fontWeight: 'bold', color: 'white' },
        })}
      />
      <Tab.Screen
        name={contact}
        component={Contact}
        options={() => ({
          headerStyle: { backgroundColor: '#3ac7b7' },
          headerTitleStyle: { fontWeight: 'bold', color: 'white' },
        })}
      />
    </Tab.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={MyTabs} />
      <Drawer.Screen name="Contact" component={MyTabs} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
        <Stack.Screen name="SubHome" component={SubHome} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Navigatiodn = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabsNavigator"
          component={MyTabsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation