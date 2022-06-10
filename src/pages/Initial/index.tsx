import React, {useEffect} from "react";
import { View, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native"


export const Initial = () => {

   const navigation = useNavigation();

   useEffect(()=>{
      setTimeout(() => {
         navigation.navigate('Home')
      }, 3200);
   },[])

   return (
      <View style={{flex:1, backgroundColor:'#181818', justifyContent:'center', alignItems:'center'}}>
         <Animatable.Image
         animation={'flipInY'}
         duration={2000}
         style={{width:250, height: 250}}
         source={require('../../image/Logo.png')}
         />
      </View>
   )

}