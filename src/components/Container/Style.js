import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FAFAFA;
`

export const ContentSubtitle = styled.View`
width: 90%;
align-self: center;
justify-content: center;
flex-direction: row;
margin-top: 5px;
`

export const InputContainer = styled.View`
width: 90%;
align-self: center;
justify-content: space-between;
flex-direction: row;
margin-top: 20px;
`

export const ImageContainer = styled.Image`
width: 100%;
height: 40%;
background-size: cover;
`

export const ImageDoctor = styled.Image`
width: 77px;
height: 80px;
border-radius: 5px;
background-image: cover;
margin-left: 10px;

`

export const TextBoxContainer = styled.View`
margin-top: 24px;
width: ${props => props.fieldWidth ? `${props.fieldWidth}%` : '100%'};
`

export const TextBoxArea = styled.View`
margin-top: 10px;
background-color: #F5F3F3;
min-height: 53px;
border-radius: 5px;
padding: 16px 16px;
`

export const TextBoxAreaImage = styled(TextBoxArea)`
justify-content: center;
align-items: center;
`

export const TextBoxContainerRow = styled(TextBoxContainer)`
flex-direction: row;
justify-content: space-between;
`

export const TopBar = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
width: 100%;
height: 22.5%;
background-color: #60BFC5;
border-radius: 0px 0px 15px 15px;
align-items: center;
`

export const ImageTopBar = styled.Image`
width: 60px;
height: 60px;
background-size: cover;
border-radius: 5px;
`

export const TopBarContainer = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
width: 90%;
align-items: center;
justify-content: space-between;
flex-direction: row;
margin-top: 62px;
`

export const TopBarImageContainer = styled.View`
align-items: center;
justify-content: center;
margin-left: 10px;
`

export const TopBarTitleContainer = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
align-items: center;
justify-content: space-between;
flex-direction: row;
`

export const FilterAppointment = styled.View`
width: 90%;
flex-direction: row;
justify-content: space-between;
margin-top: 38px;
`

export const AgeContainer = styled.View`
flex-direction: row;
gap: 20px;
align-self: center;
`

export const ScrollViewContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
width: ${(props) => props.width || '90%'};
`
export const PatientModal = styled.View`
    flex: 1;
    align-items:center ;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.6) ;
`

export const ModalContent = styled.View`
    width: 90% ;
    padding: 30px 30px 10px ;
    border-radius: 10px ;
    background-color: #fff ;
    align-items:center ;
`

export const BoxAreaImage = styled.View`
 align-items: center;
 justify-content: center;
 gap: 5px;
 flex-direction: row;
 margin-top: 28px ;
 margin-bottom: 28px;
`

export const ButtonContainer = styled.View`
width: 90%;
align-items: center;
justify-content: space-between;
flex-direction: row;
gap: 60px;
`


export const MapInformation = styled.View`
flex: 1;
width: 100%;
border-radius: 10px 10px 0px 0px;
background: #fff;
elevation: 4; 
shadow-color: rgba(0, 0, 0, 0.1);
shadow-offset: 0px -4px;
shadow-opacity: 1;
shadow-radius: 15px;
margin-top: -25px;
align-items: center;
`
export const MapInformationContainer = styled.View`
width: 90%;
justify-content: center;
align-items: center;
`

export const CardContainer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
gap: 12px;
margin-top: 35px;
padding: 10px;
`

export const DoctorCard = styled.View`
width: 100%;
height: 102px;
border-radius: 5px;
background: #FFF;
elevation: 4;
shadow-color: #000;
shadow-offset: 4px 4px;
shadow-opacity: 0.15;
shadow-radius: 15px;
flex-direction: row;
align-items: center;
`

export const TextContainer = styled.View`
height: 100%;
margin-left: 10px;
`

export const ClockCard = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    gap: 6px ;
    border-radius: 5px ;
    background-color: ${(props) => props.situacao == "agendadas" ? "#E8FCFD" : "#F1F0F5"} ;
`

export const ContainerCardsList = styled.View`
    width: 100% ;
    margin-bottom:12px ;
    padding: 10px 10px;
    border-radius: 5px ;
    flex-direction: row ;
    background-color:#fff ;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    gap: 10px ;
`


export const ContainerCardsListCard = styled(ContainerCardsList)`
    width: 90%;
    flex-direction: column;
    padding: 18px 18px 10px 18px;
`
export const ContentSelectClinic = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`
export const IconContent = styled.View`
    width: 42px;
    height: 20px;
    flex-direction: row;
    gap: 2px;
`
