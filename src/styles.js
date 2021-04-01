import styled from "styled-components/native";


export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:#dddd;
`;

export const Texto = styled.Text`
color:${props => props.cor};
font-size: ${props => props.tamanho}px;

`;

export const Botao = styled.TouchableOpacity`
width:90%;
background-color:blue;
border-radius:5px;
justify-content:center;
align-items:center;
height:50px;
`;

export const Textobtn = styled.Text`
color:white;
font-size:16px;

`;