import React, { useState, useEffect } from "react";
import { Alert, FlatList, TouchableOpacity, SectionList } from 'react-native'
import CurrencyInput from 'react-native-currency-input';
import { IdGenerator } from "../../components/IdGenerator";
import AsyncStorage from '@react-native-community/async-storage';
import {
   Container,
   Background,
   BoxItem,
   Topo,
   ContainerTop,
   InputValues,
   Row,
   Column,
   CustomText,
   BtAdd,
   ContainerCurrency,
   CustomButton,
   CustomContainer,
   ViewValue
} from "./newListStyle";

export const NewList = ({route, navigate}) => {

   const [value, setValue] = useState(0)
   const [nameItem, setNameItem] = useState('')
   const [multiply, setMultiply] = useState(1)
   const [itens, setItens] = useState([])
   const [exData, setExData] = useState(true)
   const [total, setTotal] = useState('')
   const [initial, setInitial] = useState()

   const { id, listName } = route.params;

   useEffect(() => {
      getList()
   }, [])

   const saveList = async (value) => {
      console.log('SAVE')
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id, jsonValue)
      } catch (e) {
        // saving error
      }
    }

    const getList = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(id)
        const lis = jsonValue != null ? JSON.parse(jsonValue) : [];
        setItens(lis)
      } catch(e) {
        // error reading value
      }
    }

   useEffect(() => {
      setItens(itens)
      setTotal(itens.filter(i => i.select === true).map(item => item.value).reduce((prev, curr) => +prev + +curr, 0).toFixed(2))
   }, [itens, exData])

   const AddValue = () => {
      const newId = IdGenerator()
      let addItem = [...itens, { id: newId, name: nameItem, value: (value * multiply).toFixed(2), quantidade: multiply, select: true }]
      setItens(addItem)
      saveList(addItem)
      setValue(0)
      setNameItem('')
      setMultiply(1)
      console.log(addItem, multiply)
   }
   const DeleteItem = (item) => {
      Alert.alert(
         'Deletar item?',
         `Deseja remover o item ${item.name}`,
         [
            {
               text: "Sim",
               onPress: () => {
                  const i = itens.filter(i => i.id !== item.id)
                  setItens(i)
                  saveList(i)
               }
            },
            {
               text: "Não",
            },
         ]
      );
   }
   const selectItem = (item) => {
      item.select = !item.select;
      setExData(!exData)
   }
   const renderBox = (item) => {
      return (
         <TouchableOpacity onPress={() => selectItem(item)}>
            <BoxItem top={10} color={item.select ? '' : '#111'}>
               <CustomContainer width={'auto'}>
                  <CustomText color={item.select ? '' : '#555'}>Item</CustomText>
                  <CustomText size={'18px'} weight={800} color={item.select ? '' : '#555'}>{item.name}</CustomText>
               </CustomContainer>
               <CustomContainer width={'auto'}>
                  <CustomText color={item.select ? '' : '#555'}>Qtd</CustomText>
                  <CustomText size={'18px'} weight={800} color={item.select ? '' : '#555'}>{item.quantidade}</CustomText>
               </CustomContainer>
               <CustomContainer width={'auto'}>
                  <CustomText color={item.select ? '' : '#555'}>Valor</CustomText>
                  <CustomText size={'18px'} weight={800} color={item.select ? '' : '#555'}>{item.value}</CustomText>
               </CustomContainer>
               <CustomButton width={'10%'} height={'45%'} radius={'10px'} bgColor={item.select ? '#a31' : '#555'}
                  onPress={() => DeleteItem(item)}
               >
                  <CustomText color={item.select ? '' : '#999'}>X</CustomText>
               </CustomButton>
            </BoxItem>
         </TouchableOpacity>
      )
   }
   return (
      <Container>
         <Topo>
            <CustomText weight={800} size={25}>
               {listName}
            </CustomText>
         </Topo>
         <ContainerTop>
            <Row>
               <Column size={'75%'} >
                  <Column height={'50%'} >
                     <CustomText weight={800} padL={10}>Nome Item</CustomText>
                     <InputValues size={'100%'} value={nameItem} onChangeText={(n) => setNameItem(n)} />
                  </Column>
                  <Row height={'50%'} >
                     <Column size={'60%'} >
                        <CustomText weight={800} size={16} padL={10}>Valor</CustomText>
                        <ContainerCurrency size={'95%'}>
                           <CurrencyInput
                              style={{ fontSize: 19, fontWeight: '600', color: '#fff' }}
                              value={value}
                              onChangeValue={setValue}
                              prefix="R$ "
                              maxLength={15}
                              delimiter="."
                              separator=","
                              ignoreNegative
                              precision={2}
                           />
                        </ContainerCurrency>
                     </Column>
                     <Column size={'41%'}>
                        <CustomText weight={800} padL={6}>Quantidade</CustomText>
                        <InputValues size={'95%'} keyboardType='numeric' value={multiply} onChangeText={(v) => setMultiply(v)} />
                     </Column>
                  </Row>
               </Column>
               <Column size={'25%'} justify={'center'} align={'center'}>
                  <BtAdd size={'80%'} height={'80%'} color={'#a31'} onPress={() => AddValue()}>
                     <CustomText size={45} weight={600}>
                        +
                     </CustomText>
                  </BtAdd>
               </Column>
            </Row>
         </ContainerTop>
         <Background>
            <FlatList
               contentContainerStyle={styleFlat}
               data={itens}
               extraData={exData}
               renderItem={({ item }) => renderBox(item)}
            />
         </Background>
         {itens.length > 0 &&
            <ViewValue>
               <CustomText size={'18px'} weight={600}>
                  Valor Total: {total}
               </CustomText>
            </ViewValue>
         }
      </Container>
   )
}

const styleFlat = {
   flexGrow: 1,
   height: 'auto',
   width: '100%',
}




