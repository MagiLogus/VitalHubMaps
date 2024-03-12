import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
width: ${(props) => props.width || '100%'};
height: 44px;
background-color: #496BBA;
border-radius: 5px;
padding: 12px 8px;
margin-top: 30px;
border: 1px solid #496BBA;
align-items: center;
justify-content: center;
`

export const ButtonGoogle = styled(Button)`
background-color: #FAFAFA;
gap: 10px;
margin-top: 15px;
margin-bottom: 15px;
flex-direction: row;
`

export const ButtonLogoff = styled(Button)`
background-color: #ACABB7;
width: 60%;
align-self: center;
border: 1px solid #ACABB7;
`

export const ButtonSecondary = styled(Button)`
background-color: transparent;
border: none;
`

export const ButtonTitle = styled.Text`
color: #FFFFFF ;
text-align:  center ;
font-size: 16px ;
font-family:'MontserratAlternates_700Bold' ;
text-transform: uppercase ;
`

export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`

export const ButtonModal = styled(Button)`
    width: 80% ;
`

export const ButtonCancel = styled.TouchableOpacity`
  width: 148px;
  height: 44px;
  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;

export const AppointmentButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 7px;
  background: #49B3BA;
  position: absolute;
  right: 21px;
  bottom: 15px;
  align-items: center;
  justify-content: center;
  elevation: 5; 
`;

export const ButtonImage = styled(Button)`
background-color: #49B3BA;
border: 1px solid #49B3BA;
flex-direction: row;
gap: 10px;
`
