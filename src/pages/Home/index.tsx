import React, { useState, useEffect } from "react"
import { saveList, getList, removeList } from "../../components/saveData";
import { IdGenerator } from "../../components/IdGenerator";
import Icon from 'react-native-vector-icons/Octicons'
import IconI from 'react-native-vector-icons/Ionicons'
import {
   Alert, FlatList,
   Modal,
   ScrollView,
   useWindowDimensions,
   TouchableOpacity
} from "react-native"
import {
   Container,
   HeaderBox,
   CustomText,
   Background,
   BottomPlus,
   ButtomPlus,
   ItemModal,
   ModalContent,
   CustomInput,
   CustomButton,
   CustomView,
   BoxItem,
   ButtonDelete
} from './homeStyles'
import { useNavigation } from "@react-navigation/native"

export const Home = () => {

   const window = useWindowDimensions()
   const [list, setList] = useState([])
   const [exData, setExData] = useState(false)
   const navigation = useNavigation();
   const [nameList, setNameList] = useState('')
   const [showModal, setShowModal] = useState(false)
   const [teste, setTeste] = useState()
   const [data, setData] = useState('')

   useEffect(()=>{
      getList(setList, '@minhaLista')
      console.log('Teste--',teste)
   },[])

   const NewList = () => {
      if (nameList === '') {
         Alert.alert('Atenção', 'A lista deve ter um nome.')
         return
      }
      let listTmp = [...list, { nameList: nameList, id: IdGenerator() }]
      console.log('Lista: ', listTmp)
      setList(listTmp)
      saveList(listTmp,'@minhaLista')
      setNameList('')
      setShowModal(false)
   }

   const OpenModal = (type = 'normal', item = 'Edit') => {
      if(type === 'edit'){
         setData(item)
      }
      console.log('Noame: ', data.nameList)
      console.log('Setou')
      setShowModal(true)
   }

   const editNameList = () => {
      if (nameList === '') {
         Alert.alert('Atenção', 'A lista deve ter um nome.')
         return
      }
      let rename = list.filter(n => n.id === data.id, data.nameList = nameList)
      saveList(list,'@minhaLista')
      setData('')
      setShowModal(false)
      console.log(list)
   }

   const renderItem = (item) => {
      return (
         <TouchableOpacity onPress={()=> navigation.navigate('NewList', {id: item.id, listName: item.nameList })}>
            <BoxItem top={12}>
               <TouchableOpacity style={{position:'absolute', right:'6%'}} onPress={()=> OpenModal('edit',item)}>
                  <IconI name='menu' size={25} color={'#777'}/>
               </TouchableOpacity>
               <CustomText size={20} weight={800}>
                  {item.nameList}
               </CustomText>
               <ButtonDelete onPress={() => DeleteItem(item)}>
                  <CustomText color={'#941'} size={20} weight={600}>
                     X
                  </CustomText>
               </ButtonDelete>
            </BoxItem>
         </TouchableOpacity>
      )
   }
   const DeleteItem = (item) => {
      Alert.alert(
         'Deletar item?',
         `Deseja remover a Lista: ${item.nameList}`,
         [
            {
               text: "Sim",
               onPress: () => {
                  const l = list.filter(i => i.id !== item.id)
                  setList(l)
                  saveList(l, '@minhaLista')
                  removeList(item.id)
                  getList(setTeste,item.id)
                  console.log('TesteValue', teste)
               }
            },
            {
               text: "Não",
            },
         ]
      );
   }


   return (
      <Container style={{ flex: 1 }}>
         <HeaderBox>
            <Icon name='checklist' size={75} color={'rgba(155,155,155,.2)'} style={{position:'absolute'}}/>
            <CustomText size={25} weight={800}>MINHAS LISTAS</CustomText>
         </HeaderBox>
         <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
         >
            <ScrollView contentContainerStyle={{ height: window.height }}>
               <ItemModal>
                  <ModalContent>
                     <CustomText size={20} weight={800}>
                        {data.nameList !== '' ? 'Editar Nome da Lista' : 'Criar nova lista'}
                     </CustomText>
                     <CustomText size={16} weight={800} marginT={15} marginB={4}>
                        {data.nameList !== '' ? 'Novo Nome' : 'Nome da Lista'}
                     </CustomText>
                     <CustomInput width={'85%'} maxLength={25} onChangeText={(text) => setNameList(text)} />
                     <CustomView marginT={18} height={50}>
                        <CustomButton width={'38%'} marginR={4}>
                           <CustomText size={18} weight={700} color={'#941'} onPress={() => setShowModal(false)}>
                              Cancelar
                           </CustomText>
                        </CustomButton>
                        <CustomButton width={'38%'} marginL={4}>
                           <CustomText size={18} weight={700} color={'#5a5'} onPress={() => {data.id !== '' ? editNameList() : NewList()}}>
                              Salvar
                           </CustomText>
                        </CustomButton>
                     </CustomView>
                  </ModalContent>
               </ItemModal>
            </ScrollView>
         </Modal>
         <Background>
            {list.length < 1 &&
               <CustomView height={'100%'}>
                  <CustomText size={23} weight={600} align={'center'}>Não existem listas criadas!</CustomText>
               </CustomView>
            }
            <FlatList
               contentContainerStyle={styleFlat}
               data={list}
               extraData={exData}
               renderItem={({ item }) => renderItem(item)}
            />
         </Background>
         <BottomPlus>
            <ButtomPlus onPress={() => setShowModal(true)}>
               <CustomText size={40} weight={400} color={'#bbb'}>
                  +
               </CustomText>
            </ButtomPlus>
         </BottomPlus>
      </Container>
   )

}

const styleFlat = {
   flexGrow: 1,
   height: 'auto',
   width: '100%',
}