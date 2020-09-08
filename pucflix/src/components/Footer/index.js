import React from 'react';
import styled from 'styled-components';
import banco from '../../assets/img/banco.png'
import git from '../../assets/img/github.png'
import dolar from '../../assets/img/dolar.png'

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
`;

const Image = styled.img`
  padding-left: 16px;
  padding-right: 16px;
`;

function Footer() {
  return (
    <FooterBase>
      <p>
        Saiba como contribuir
        {' '}
        <a href="https://github.com/octaviolage/pucflix/">
          aqui. 
        </a>
      </p>
      <p>
        <Image src={git} alt='Banco de Dados'/>
        {' '}
        <Image src={dolar} alt='Banco de Dados'/>
        {' '}
        <Image src={banco} alt='Banco de Dados'/>
      </p>
    </FooterBase>
  );
}

export default Footer;
