import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 248px;
  height: 147px;
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
    width: calc(248px + 3vw);
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 800px) {
    width: 158px;
    height: 97px;
    &:hover {
      width: 148px;
  }
  }
`;

export default VideoCardContainer;
