import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const PulseLoader = styled.div`
	display: ${props => (props.loading ? 'flex' : 'none')};
	width: ${props => (props.width ? `${props.width}px` : '100px')};
	height: ${props => (props.height ? `${props.height}px` : '100px')};
	background: transparent;
	border-radius: 50%;
	&:before {
		content: '';
		display: block;
		width: ${props => (props.width ? `${props.width}px` : '100px')};
		height: ${props => (props.height ? `${props.height}px` : '100px')};
		background: ${props => (props.pColor ? props.pColor : 'red')};
		border-radius: 50%;
		animation: ${pulse} 3s linear infinite;
	}
	&:after {
		content: '';
		display: block;
		position: absolute;
		width: ${props => (props.width ? `${props.width}px` : '100px')};
		height: ${props => (props.height ? `${props.height}px` : '100px')};
		background: ${props => (props.sColor ? props.sColor : 'red')};
		border-radius: 50%;
		animation: ${pulse} 2.3s linear infinite;
	}
`;

PulseLoader.propTypes = {
  width: number,
  height: number,
  loading: bool,
  pColor: string,
  sColor: string
};

export default PulseLoader;
