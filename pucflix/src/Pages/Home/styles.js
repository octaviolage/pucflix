import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ url }) => `url(https://upload.wikimedia.org/wikipedia/commons/b/b4/Entradapucminas.jpg)`}; 
  background-size: cover;
  background-position: center;
  border-radius: 0;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }
  &:before {
    top: 0;
    height: 100%;
    border-radius: 0px;
    background: rgba(0,0,0,0.5);
  }
  &:after {
    bottom: 0;
    background: linear-gradient(1deg, #141414 0%, transparent 100%);
  }
`;

export default BannerMainContainer;