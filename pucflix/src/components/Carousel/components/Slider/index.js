import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  align-content: center;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 300px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

export const SliderItem = styled.li`
  margin-top: 5px;
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      vertical: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
