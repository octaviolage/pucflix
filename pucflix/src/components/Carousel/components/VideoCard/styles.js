import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 298px;
  height: 197px;
  border-radius: 10px;
  border: 2px solid;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  text-decoration: none;
  overflow: hidden;
  color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  flex: 0 0 298px;
  align-items: flex-end;
  transition: width 0.3s;
  &:hover {
    width: calc(298px + 6vw);
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  & > span {
    width: 100%;
    height: 40%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-weight: bold;
    font-size: 16px;
    display: none;
  }

  @media (max-width: 800px) {
    span {
      display: flex;
    }
  }
`;

export default VideoCardContainer;
