import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/comps/pages/Home";
import Profile from "./src/comps/pages/Profile";
import Signin from "./src/comps/pages/Signin";
import Signup from "./src/comps/pages/Signup";
import Settings from "./src/comps/pages/Settings";
import Splash from "./src/comps/pages/Splash";
import { useStoreStr } from "./src/stores/storeStr";
import { Gstr } from "./src/libs/global";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const setStr = useStoreStr(state=>state.setStr)
  const token = useStoreStr(state=>state.token)

  useEffect(() => {

    const bootstrapAsync = async () => {
      try{
        const token = await AsyncStorage.getItem("token");
        setStr('token', token)
        Gstr.token = token
        setIsLoading(false);
      } catch(error){console.log(error)}
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token === null ? 
          <>
            <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin}/>
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup}/>
          </>
          : 
          <Stack.Screen name="Tab" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray" }} >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                          title: "My App",
                          headerStyle: { backgroundColor: "red" },
                          headerTitleStyle: { color: "white" },
                        }}
                      />
                      <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                          title: "User Profile",
                        }}
                      />
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSettings"
                  options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"settings"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                          title: "Settings",
                        }}
                      />
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
