import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
flex: 1;
background-color: #333;
justify-content: center;
align-items: center;
`

export const HeaderBox = styled.View`
width: 100%;
height: 15%;
justify-content: center;
align-items: center;
`
export const CustomText = styled.Text`
  font-size: ${props => props.size || 16};
  font-weight: ${props => props.weight || 400};
  color: ${props => props.color || '#fff'};
  padding-left: ${props => props.padL || 0};
  padding-right: ${props => props.padR || 0};
  margin-left: ${props => props.marginL || 0};
  margin-right: ${props => props.marginR || 0};
  margin-top: ${props => props.marginT || 0};
  margin-bottom: ${props => props.marginB || 0};
  align-self: ${props => props.align || 'auto'};
` 

export const Background = styled(LinearGradient).attrs({
   colors: ['#aaa','#111'],
   start: { x: 0, y: 10 },
   end: { x: 1, y: 0 },
  })`
   height: 80%;
   width: 100%;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   padding-bottom: 7.5%;
`;

export const BottomPlus = styled.View`
 width: 100%;
 height: 6%;
 justify-content: center;
 align-items: center;
 background-color: #333;
 border-top-width: 3;
 border-top-color: #111;
`

export const ButtomPlus = styled.TouchableOpacity`
  width: 64;
  height: 64;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12%;
  border-width: 5;
  border-color: #111;
  background-color: #333;
`

export const ItemModal = styled.View`
 width: 100%;
 height: 99%;
 justify-content: center;
 align-items: center;
 background-color: rgba(1,1,1,.7);
 border-radius: 10px;
`

export const ModalContent = styled.View`
width: 85%;
height: 30%;
background-color: #222;
justify-content: center;
align-items: center;
border-radius: 10px;
border-width: 2;
border-color: #941;
`

export const CustomInput = styled.TextInput`
width: ${props => props.width || '100%'};
height: ${props => props.height || 50};
background-color: ${props => props.bgColor || '#656'};
font-size: ${props => props.fontSize || 20};
font-weight: ${props => props.fontWeight || 600};
color: ${props => props.color || '#ccc'};
border-radius: ${props => props.radius || 8};
padding-left: ${props => props.pad || 25};
`
export const CustomButton = styled.TouchableOpacity`
width: ${props => props.width || '100%'};
height: ${props => props.height || 50};
background-color: ${props => props.bgColor || '#333'};
justify-content: center;
align-items: center;
font-size: ${props => props.fontSize || 18};
font-weight: ${props => props.fontWeight || 600};
color: ${props => props.color || '#ccc'};
border-radius: ${props => props.radius || 8};
margin-left: ${props => props.marginL || 0};
margin-right: ${props => props.marginR || 0};
margin-top: ${props => props.marginT || 0};
margin-bottom: ${props => props.marginB || 0};
`

export const CustomView = styled.View`
width: ${props => props.width || '100%'};
height: ${props => props.height || '100%'};
justify-content: center;
align-items: center;
flex-direction: ${props => props.direction || 'row'};
background-color: ${props => props.bgColor || 'transparent'};
margin-left: ${props => props.marginL || 0};
margin-right: ${props => props.marginR || 0};
margin-top: ${props => props.marginT || 0};
margin-bottom: ${props => props.marginB || 0};
`

export const BoxItem = styled(LinearGradient).attrs({
   colors: ['#333', '#111'],
   start: { x: 0, y: 0 },
   end: { x: .02, y: 1 },
  })`
  justify-content: center;
  background-color: beige;
  align-items: center;
  text-align: center;
  align-self: center;
  margin-top: ${props => props.top || 0};
  width: 75%;
  height: 80px;
  background-color: black;
  border-radius: 10px;
  padding-left: 3%;
  padding-right: 3%;
  border-width: 2;
  border-color: ${props => props.color || '#941'};
`

