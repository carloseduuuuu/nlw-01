import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

export type RootStackParamList = {
  Home: undefined;
  Points: {
    city: string,
    uf: string
  };
  Detail: {point_id: number};
};

const AppStack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ 
        headerShown: false,
        cardStyle: {
          backgroundColor:'#f0f0f5'
        }
       }}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Points" component={Points}/>
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes