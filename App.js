import React from 'react';
import { Container, Texto, Botao, Textobtn } from "./src/styles"



export default function App() {
  return (
    <Container>

      <Texto cor="red" tamanho={20}> Ola mundo </Texto>

      <Botao onPress={() => alert('clicou')}  >

        <Textobtn >CLique aqui</Textobtn>

      </Botao>

    </Container>
  );
}


