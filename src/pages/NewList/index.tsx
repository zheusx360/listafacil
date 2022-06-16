import React, { useState, useEffect } from "react";
import { Alert, FlatList, TouchableOpacity, BackHandler, Modal, ScrollView, useWindowDimensions, Keyboard } from 'react-native'
import CurrencyInput from 'react-native-currency-input';
import { IdGenerator } from "../../components/IdGenerator";
import { saveList, getList } from "../../components/saveData";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconI from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native"
import { BannerAd, BannerAdSize } from "@react-native-admob/admob";
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
   ViewValue,
   CustomView,
   ItemModal,
   ModalContent,
   CustomInput,
   ButtonDelete,
   ButtonEdit
} from "./newListStyle";

export const NewList = ({ route, navigate }) => {

   const [value, setValue] = useState(0)
   const [nameItem, setNameItem] = useState('')
   const [multiply, setMultiply] = useState(1)
   const [itens, setItens] = useState([])
   const [exData, setExData] = useState(true)
   const [total, setTotal] = useState('')
   const [showModal, setShowModal] = useState(false)
   const [initial, setInitial] = useState()
   const window = useWindowDimensions()
   const [tmpItem, setTmpItem] = useState('')
   const [tmpValor, setTmpValor] = useState('')
   const [tmpQuant, setTmpQuant] = useState('')
   const [tmpId, setTmpId] = useState('')
   const [tmpList, setTmpList] = useState([])


   const navigation = useNavigation();

   const { id, listName } = route.params;

   useEffect(() => {
      getList(setItens, id)
   }, [])

   useEffect(() => {
      const backAction = () => {
         navigation.navigate('Home')
         return true;
      };

      const backHandler = BackHandler.addEventListener(
         "hardwareBackPress",
         backAction
      );

      return () => backHandler.remove();
   }, []);


   useEffect(() => {
      setItens(itens)
      setTotal(itens.filter(i => i.select === true).map(item => item.value).reduce((prev, curr) => +prev + +curr, 0).toFixed(2))
   }, [itens, exData])

   const AddValue = () => {
      if (nameItem === '') {
         Alert.alert('Atenção', 'O item deve ter um nome.')
         return
      }
      const newId = IdGenerator()
      let addItem = [...itens, { id: newId, name: nameItem, value: (value * multiply).toFixed(2), quantidade: multiply, select: true }]
      setItens(addItem)
      saveList(addItem, id)
      setValue(0)
      setNameItem('')
      setMultiply(1)
      console.log(addItem, multiply)
      Keyboard.dismiss()
   }

   const EditItem = (item) => {
      let quantidade = item.quantidade === '' || item.quantidade === '0' ? '1' : item.quantidade

      setTmpId(item.id)
      setTmpItem(item.name)
      setTmpValor((item.value / quantidade))
      setTmpQuant(quantidade)
      setTmpList(item)

      setShowModal(true)
   }

   const SaveEdit = () =>{

      let quantidade = tmpQuant === '' || tmpQuant === '0' ? '1' : tmpQuant

      itens.filter(n => n.id === tmpList.id, tmpList.name = tmpItem, 
                   tmpList.value = (tmpValor * quantidade).toFixed(2), 
                   tmpList.quantidade = quantidade
                   )
      saveList(itens, id)
      setShowModal(false)
      setExData(!exData)
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
                  saveList(i, id)
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
               {/* <CustomButton width={'6%'} height={'45%'} bgColor={'transparent'}
                  onPress={() => DeleteItem(item)}
               >
                  <IconI name='menu' size={25} color={'#999'} />
               </CustomButton> */}
               <ButtonEdit onPress={()=> EditItem(item)}>
                 <IconI name='edit' size={28} color={item.select ? '#777' : '#333'} />
               </ButtonEdit>
               <ButtonDelete border={item.select ? '#721' : '#422'} bgColor={item.select ? '#333' : '#222'}
                  onPress={() => DeleteItem(item)}
               >
                  <CustomText color={item.select ? '#941' : '#421'} size={20} weight={600}>
                     X
                  </CustomText>
               </ButtonDelete>
            </BoxItem>
         </TouchableOpacity>
      )
   }
   return (
      <>
         <Container>
            <Topo>
               <TouchableOpacity style={{ position: 'absolute', left: '4%' }} onPress={() => navigation.navigate('Home')}>
                  <Icons name='chevron-left' color={'#ccc'} size={40} />
               </TouchableOpacity>
               <CustomText weight={800} size={25}>
                  {listName}
               </CustomText>
            </Topo>
            <ContainerTop>
               <Row>
                  <Column size={'75%'} >
                     <Column height={'50%'} >
                        <CustomText weight={800} padL={10}>Nome Item</CustomText>
                        <InputValues size={'100%'} maxLength={18} value={nameItem} onChangeText={(n) => setNameItem(n)} />
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
            <Modal
               animationType="slide"
               transparent={true}
               visible={showModal}
            >
               <ScrollView contentContainerStyle={{ height: window.height }}>
                  <ItemModal>
                     <CustomText size={22} weight={800} marginB={10}>ALTERAR ITEM</CustomText>
                     <ModalContent>
                        <CustomText size={16} weight={800} marginT={15} marginB={4}>
                           Nome Item
                        </CustomText>
                        <CustomInput width={'70%'} maxLength={25} value={tmpItem} onChangeText={(text) => setTmpItem(text)} />
                        <CustomText size={16} weight={800} marginT={15} marginB={4}>
                           Valor
                        </CustomText>
                        <ContainerCurrency size={'70%'}>
                           <CurrencyInput
                              style={{ fontSize: 19, fontWeight: '600', color: '#fff' }}
                              value={tmpValor}
                              onChangeValue={setTmpValor}
                              prefix="R$ "
                              maxLength={15}
                              delimiter="."
                              separator=","
                              ignoreNegative
                              precision={2}
                           />
                        </ContainerCurrency>
                        <CustomText size={16} weight={800} marginT={15} marginB={4}>
                           Quantidade 
                        </CustomText>
                        <CustomInput width={'70%'} maxLength={2} value={tmpQuant.toString()} 
                                     onChangeText={(text) => setTmpQuant(text)} keyboardType={'numeric'} />
                        <CustomView marginT={28} height={50}>
                           <CustomButton width={'38%'} marginR={4} radius={8} bgColor={'#333'}>
                              <CustomText size={18} weight={700} color={'#941'} onPress={() => setShowModal(false)}>
                                 Cancelar
                              </CustomText>
                           </CustomButton>
                           <CustomButton width={'38%'} marginL={4} radius={8} bgColor={'#333'}>
                              <CustomText size={18} weight={700} color={'#5a5'} onPress={() => SaveEdit()}>
                                 Salvar
                              </CustomText>
                           </CustomButton>
                        </CustomView>
                     </ModalContent>
                  </ItemModal>
               </ScrollView>
            </Modal>
            <Background>
               {itens.length < 1 &&
                  <CustomView height={'100%'}>
                     <CustomText size={23} weight={600} align={'center'}>Não existem itens criados!</CustomText>
                  </CustomView>
               }
               <FlatList
                  contentContainerStyle={styleFlat}
                  data={itens}
                  extraData={exData}
                  renderItem={({ item }) => renderBox(item)}
               />
            </Background>
            {itens.length > 0 &&
               <ViewValue>
                  <Icons name='cart-outline' color={'#fff'} size={22} />
                  <CustomText marginL={10} size={'18px'} weight={600}>
                     Valor Total: {total}
                  </CustomText>
               </ViewValue>
            }
         </Container>
         <BannerAd
            unitId="ca-app-pub-6519598545358317/7351149822"
            size={BannerAdSize.ADAPTIVE_BANNER}
            requestOptions={{
               requestNonPersonalizedAdsOnly: false
            }}
         />
      </>
   )
}

const styleFlat = {
   flexGrow: 1,
   height: 'auto',
   width: '100%',
}




