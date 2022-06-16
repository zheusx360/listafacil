import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #222;
`
export const Background = styled(LinearGradient).attrs({
   colors: ['#aaa','#111'],
   start: { x: 0, y: 10 },
   end: { x: 1, y: 0 },
  })`
   height: 70%;
   width: 100%;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   padding-bottom: 7.5%;
`;

export const Topo = styled.View`
  width: 100%;
  height: 5%;
  justify-content: center;
  align-items: center;
`
export const BoxItemBtton = styled(LinearGradient).attrs({
   colors: ['rgba(255,180,0,.5)', 'rgba(255,100,0,.5)'],
   start: { x: 0, y: 1 },
   end: { x: 1, y: 0 },
  })`
   height: 50;
   width: 50;
   border-radius: 25px;
   align-self: center;
`;

export const InputValues = styled.TextInput`
  background-color: #656;
  width: ${props => props.size ? props.size : '50%'};
  height: 50px;
  padding-left: 15px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: aliceblue;
`
export const ContainerCurrency = styled.View`
  background-color: #656;
  width: ${props => props.size ? props.size : '50%'};
  height: 50px;
  padding-left: 15px;
  border-radius: 8px;
`

export const ContainerTop = styled.View`
  width: 100%;
  height: 20%;
  padding-left: 1%;
`

export const BoxItem = styled(LinearGradient).attrs({
   colors: ['#333', '#111'],
   start: { x: 0, y: 0 },
   end: { x: .02, y: 1 },
  })`
  justify-content: center;
  background-color: beige;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: ${props => props.top || 0};
  width: 78%;
  height: 85px;
  background-color: black;
  border-radius: 10px;
  padding-left: 3%;
  padding-right: 3%;
  border-width: 3;
  border-color: ${props => props.color || '#941'};
`
export const Row = styled.View`
   flex-direction: row;
   width: ${props => props.size ? props.size : '100%'};
   background-color: #f11;
   width: ${props => props.size ? props.size : '100%'};
   height: ${props => props.height || '100%'};
   background-color: ${props => props.color || 'transparent'};
   justify-content: ${props => props.justify || 'flex-start'};
   align-items: ${props => props.align || 'flex-start'};
`
export const Column = styled.View`
   flex-direction: column;
   width: ${props => props.size ? props.size : '100%'};
   height: ${props => props.height || '100%'};
   background-color: ${props => props.color || 'transparent'};
   justify-content: ${props => props.justify || 'flex-start'};
   align-items: ${props => props.align || 'flex-start'};
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
`
export const BtAdd = styled.TouchableOpacity`
  width: ${props => props.size || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.color || '#941'};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 13%;
`
export const CustomButton = styled.TouchableOpacity`
  background-color: ${props => props.bgColor || '#f51'};
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: ${props => props.radius || 0};
  align-self: ${props => props.align || 'auto'};
  margin-left: ${props => props.marginL || 0};
  margin-right: ${props => props.marginR || 0};
  margin-top: ${props => props.marginT || 0};
  margin-bottom: ${props => props.marginB || 0};  
`
export const CustomContainer = styled.View`
  flex-direction: ${props => props.direction || 'column'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.bgColor || 'transparent'};
  padding-left: ${props => props.padLeft || 0};
  padding-right: ${props => props.padRight || 0};
  justify-content: center;
  align-items: center;
`
export const ViewValue = styled.View`
  width: 100%;
  height: 45px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: absolute;
  background-color: #111;
  top: 94%;
  bottom: 0;
  left: 0;
  right: 0;
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
export const ModalContent = styled.View`
  width: 85%;
  height: 50%;
  background-color: #222;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 2;
  border-color: #941;
`
export const ItemModal = styled.View`
   width: 100%;
   height: 99%;
   justify-content: center;
   align-items: center;
   background-color: rgba(1,1,1,.7);
   border-radius: 10px;
`
export const ButtonDelete = styled.TouchableOpacity`
position: absolute;
width: 30;
height: 34;
border-radius: 12;
top: 27%;
bottom: 0;
left: 112%;
right: 0;
background-color: ${props => props.bgColor || '#333'};
justify-content: center;
align-items: center;
border-width: 1;
border-color: ${props => props.border || '#721'};
`
export const ButtonEdit = styled.TouchableOpacity`
position: absolute;
width: 30;
height: 34;
border-radius: 12;
top: 27%;
bottom: 0;
left: -14.5%;
right: 0%;
background-color: ${props => props.bgColor || 'transparent'};
justify-content: center;
align-items: center;
border-width: 1;
border-color: ${props => props.border || 'transparent'};
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