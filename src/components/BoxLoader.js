import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Box = styled.div`
  position: relative;
  display: ${props => props.loading ? 'flex' : 'none'};
  width: ${props => props.width ? `${props.width}px` : '100px'};
  height: ${props => props.height ? `${props.height}px` : '100px'};

    div {
      width: 45%;
      height: 45%;
      background: ${props => props.pColor ? `${props.pColor}` : '#555'}
      opacity: 0;
      filter: blur(1px);
      animation: ${fadeInOut} 1s linear infinite;
    }

    div:nth-of-type(1) {
      position: absolute;
      top: 2.5%;
      left: 2.5%;
    }
    div:nth-of-type(2) {
      position: absolute;
      top: 2.5%;
      right: 2.5%;
      animation-delay: -0.25s;
    }
    div:nth-of-type(3) {
      position: absolute;
      bottom: 2.5%;
      right: 2.5%;
      animation-delay: -0.5s;
    }
    div:nth-of-type(4) {
      position: absolute;
      bottom: 2.5%;
      left: 2.5%;
      animation-delay: -0.75s;
    }
`;

const BoxLoader = props => (
  <Box {...props}>
    <div />
    <div />
    <div />
    <div />
  </Box>
);

BoxLoader.propTypes = {
  width: number,
  height: number,
  loading: bool.isRequired,
  pColor: string,
};

BoxLoader.defaultProps = {
  width: 100,
  height: 100,
  pColor: '#555',
  loading: true
};

export default BoxLoader;
