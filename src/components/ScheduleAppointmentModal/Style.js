import styled from "styled-components";
import Arrowselect from "../../assets/images/setaselect.svg"

export const Title = styled.Text`
    font-size: 20px;
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 5px;
`

export const TitlePicker = styled(Title)`
    margin-bottom: 29px;
`

export const TitleWithInput = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-bottom: 10px;
`
export const PatientContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.6);
`

export const ScheduleContainer = styled(PatientContainer)`
    justify-content: flex-end;
`

export const ContentStatus = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;

    margin: 38px 0px 20px;
`

export const ContentLevelQuery = styled(ContentStatus)`
    margin: 0px 0px 20px 0px;
    width: 100%;
`
export const ContentLinkCenter = styled.View`
    width: 100%;
    align-items: center;
`
export const InputWithTitleContent = styled.View`
    width: 320px;
    align-items: flex-start;
`
export const ModalContent = styled.View`
    width: 90%;
    height: 310px;
    padding: 30px 30px 10px;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`

export const ModalContentSchedule = styled(ModalContent)`
    width: 100%;
    height: 518px;
    background-color: #FAFAFA;
    padding-bottom: 35px;
`

export const SelectPicker = styled.View`
    width: 100%;
    height: 53px;
    border-radius: 5px;
    border: solid 2px #60BFC5;

    padding: 16px;
    justify-content: space-between;
    flex-direction: row;

    margin-bottom: 20px;
`
export const IconSelect = styled(Arrowselect)`
    width: 22px;
    height: 22px;
`