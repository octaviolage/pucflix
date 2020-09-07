import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  margin:auto;
  height: 50px;
  max-width: 80%;
  border-radius: 10px;
  border: 2px solid;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
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
  font-weight: bold;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    background-color: #005983;
    color: white;
  }
`;

export default VideoCardContainer;
