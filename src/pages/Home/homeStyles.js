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