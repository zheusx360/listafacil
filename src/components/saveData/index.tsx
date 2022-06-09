import AsyncStorage from '@react-native-community/async-storage';

export const saveList = async (value, nameData) => {
   try {
     const jsonValue = JSON.stringify(value)
     await AsyncStorage.setItem(nameData, jsonValue)
   } catch (e) {
     // saving error
   }
 }

 export const getList = async (setValue, nameData) => {
   try {
     const jsonValue = await AsyncStorage.getItem(nameData)
     const lis = jsonValue != null ? JSON.parse(jsonValue) : [];
     setValue(lis)
   } catch(e) {
     // error reading value
   }
 }

 export const removeList = async (nameData) => {
   try {
       await AsyncStorage.removeItem(key);
       return true;
   }
   catch(exception) {
       return false;
   }
 }