import { Container, DoctorCard, ImageDoctor, TextContainer } from "../Container/Style";
import { DoctorSubtitle, EmailTitle, Title, TitleDoctor } from "../Title/Style";

export const SelectDoctorCard = () => {
    return (
        <>
            <DoctorCard>
                <ImageDoctor source={require("../../assets/images/dra_alessandra.png")} />
                <TextContainer>
                    <TitleDoctor>Dra Alessandra</TitleDoctor>
                    <DoctorSubtitle>Demartologa, Esteticista</DoctorSubtitle>
                </TextContainer>
            </DoctorCard>
        </>
    );
};