import React from 'react';
import { BannerMainContainer, ContentAreaContainer } from './styles';


export default function BannerMain() {
  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            Bem vindo(a)!
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            Aqui nos teremos as aulas de Engenharia de Software atualizadas diariamente =) <br />
            É necessário estar logado na sua conta do Teams para assistir as aulas.
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}