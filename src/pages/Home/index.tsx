import React, {useState} from "react"
import { FlatList } from "react-native"
import { Container, HeaderBox, CustomText, Background, BottomPlus, ButtomPlus } from './homeStyles'
import { useNavigation } from "@react-navigation/native"

export const Home = () => {

   const [list, setList] = useState([])
 
   const navigation = useNavigation();  
    
   return(
      <Container style={{flex:1}}>
        <HeaderBox>
            <CustomText size={25} weight={800}>MINHAS LISTAS</CustomText>
        </HeaderBox>
        <Background>
            <FlatList
              data={list}
            />
        </Background>
        <BottomPlus>
           <ButtomPlus>
              <CustomText size={40} weight={400} color={'#bbb'}>
                 +
              </CustomText>
           </ButtomPlus>
        </BottomPlus>
      </Container>
   )

}