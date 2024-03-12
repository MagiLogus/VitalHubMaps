import { Container, InputMedium, InputWithTitleContent, TitleWithInput } from "./Style";

export function InputWithTitleMedium({ title, placeholder, }) {
    return (
        <Container>
            <InputWithTitleContent>
                <TitleWithInput>{title}</TitleWithInput>
                <InputMedium placeholder={placeholder} />
            </InputWithTitleContent>
        </Container>
    );
};