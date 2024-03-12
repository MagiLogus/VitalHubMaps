import styled from 'styled-components/native';

export const LinkMedium = styled.Text`
font-size: 14px;
color: #8C8A97;
font-family: "MontserratAlternates_500Medium";
margin-top: 10px;
align-self: flex-start;
margin-left: 5%;
text-decoration: underline;
`

export const LinkBold = styled.Text`
font-size: 16px;
color: #4D659D;
font-family: "MontserratAlternates_600SemiBold";
text-decoration: underline;
`

export const LinkAction = styled(LinkBold)`
color: #344F8F;
margin-top: 30px;
align-self: center;
`
export const LinkActionRed = styled(LinkBold)`
color: #C81D25;
text-decoration: none;
margin-top: 20px;
margin-right: 32px;
`