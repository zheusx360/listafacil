import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from '../pages/Home'
import { NewList } from "../pages/NewList"

export default function Routes(){

   const Stack = createNativeStackNavigator();

   return(

      <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
             <Stack.Screen name='NewList' component={NewList} options={{headerShown:false}}/>
         </Stack.Navigator>
      </NavigationContainer>

   )
}