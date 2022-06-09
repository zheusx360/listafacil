import React, { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IdGenerator } from "../../components/IdGenerator";
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


   const NewList = () => {

      if (nameList === '') {
         Alert.alert('Atenção', 'A lista deve ter um nome.')
         return
      }
      let listTmp = [...list, { nameList: nameList, id: IdGenerator() }]
      console.log('Lista: ', listTmp)
      setList(listTmp)
      setNameList('')
      setShowModal(false)
   }

   const renderItem = (item) => {
      return (
         <TouchableOpacity onPress={()=> navigation.navigate('NewList', {id: item.id, listName: item.nameList })}>
            <BoxItem top={12}>
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
                  setList(list.filter(i => i.id !== item.id))
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
                        Criar nova lista
                     </CustomText>
                     <CustomText size={16} weight={800} marginT={15} marginB={4}>
                        Nome da Lista
                     </CustomText>
                     <CustomInput width={'85%'} maxLength={25} onChangeText={(text) => setNameList(text)} />
                     <CustomView marginT={18} height={50}>
                        <CustomButton width={'38%'} marginR={4}>
                           <CustomText size={18} weight={700} color={'#941'} onPress={() => setShowModal(false)}>
                              Cancelar
                           </CustomText>
                        </CustomButton>
                        <CustomButton width={'38%'} marginL={4}>
                           <CustomText size={18} weight={700} color={'#5a5'} onPress={() => NewList()}>
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