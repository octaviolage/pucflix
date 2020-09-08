import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';

const planilha = 'https://docs.google.com/spreadsheets/d/1CTrQ6UvqUG_s-z_9AsdWko108U01B8iOqHoDWK0RyAg/view#gid=1685467578';
const repositorio = 'https://github.com/octaviolage/pucflix';

const Conteudo = styled.div`
  align-content: center;
  margin: 10%;
  margin-top: 5%;
  background-color: var(--black);
  border-radius: 10px;
  border: solid 2px var(--primary);
`;

const Titulo = styled.h1`
    margin-left: 5%;
    padding-top: 2%;
`;

const Texto = styled.p`
    margin-left: 8%;
    margin-right: 5%;
`;

const HyperLink = styled.a`
    text-decoration: none;
`;


function Contribuir() {
  
  return (
    <PageDefault>
      <Conteudo>
        <Titulo>● Sugestões, Links e Críticas</Titulo>
        <Texto>Você pode contribuir com a página dando seu feedback. Basta acessar 
            <HyperLink href={planilha}> esta planilha!</HyperLink>
        </Texto>
        <Titulo>● Contribuir com o Banco de Dados</Titulo>
        <Texto>O banco de dados dessa página é a planilha do Google Sheets <HyperLink href={planilha}> deste link.</HyperLink>. <br /><br />
            Se tiver interesse em contribuir com algum link de aula que você baixou ou apenas quer adicionar 
            basta colocar na folha de sugestões que após as aulas eu devo adicionar na planilha 
            a ser lida pela página.
        </Texto>
        <Titulo>● Contribuir com o código</Titulo>
        <Texto>Você pode contribuir com o código desse site por <HyperLink href={repositorio}> este link</HyperLink> do GitHub. <br /><br />
            O código é o básico do básico de React.js. Como eu fiz um pouco na pressa então não reparem os 
            nomes das variáveis e dos componentes, não tenho tanto conhecimento com o React assim 😅.
        </Texto>
        <br />
      </Conteudo>

    </PageDefault>
  );
}

export default Contribuir;
