import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const bounce = keyframes`
  0%, 75%, 100% {
    transform: translateY(0px)
  } 
  25% {
    transform: translateY(-30px)
  }
`;

const BounceLoader = styled.div`
	display: ${props => (props.loading ? 'flex' : 'none')};
	align-items: center;

	span {
		margin: ${props => (props.spaceBetween ? `0 ${props.spaceBetween}px` : '0 10px')};
		display: block;
		width: ${props => (props.width ? `${props.width}px` : '20px')};
		height: ${props => (props.height ? `${props.height}px` : '20px')};
		border-radius: 50%;
		background: ${props => (props.pColor ? props.pColor : 'red')};

		&:nth-child(1) {
			animation: ${bounce} 1s ease-in-out infinite;
		}

		&:nth-child(2) {
			animation: ${bounce} 1s ease-in-out 0.33s infinite;
		}

		&:nth-child(3) {
			animation: ${bounce} 1s ease-in-out 0.66s infinite;
		}

		&:nth-child(4) {
			animation: ${bounce} 1s ease-in-out 0.66s infinite;
		}
	}
`;

const BounceyLoader = props => (
  <BounceLoader {...props}>
    <span />
    <span />
    <span />
  </BounceLoader>
);

BounceyLoader.propTypes = {
  width: number,
  height: number,
  loading: bool.isRequired,
  pColor: string,
  spaceBetween: number
};

BounceyLoader.defaultProps = {
  width: 20,
  height: 20,
  pColor: 'red',
  loading: true,
  spaceBetween: 10
};

export default BounceyLoader;
