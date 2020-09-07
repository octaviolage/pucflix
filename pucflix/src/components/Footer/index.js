import React from 'react';
import styled from 'styled-components';

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

function Footer() {
  return (
    <FooterBase>
      <p>
        Caso queira contribuir, acesse o
        {' '}
        <a href="https://github.com/octaviolage/pucflix/">
          repositório aqui. 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
