import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinLoader = styled.div`
	border-radius: 50%;
	border: ${props =>
    props.thickness && props.pColor
      ? `${props.thickness}px solid ${props.pColor}`
      : props.thickness
        ? `${props.thickness}px solid #f3f3f3`
        : props.pColor
          ? `10px solid ${props.pColor}`
          : '10px solid #f3f3f3'};
	border-top: ${props =>
    props.thickness && props.sColor
      ? `${props.thickness}px solid ${props.sColor}`
      : props.thickness
        ? `${props.thickness}px solid #555`
        : props.sColor
          ? `10px solid ${props.sColor}`
          : '10px solid #555'};
	height: ${props => (props.height ? `${props.height}px` : '50px')};
	width: ${props => (props.width ? `${props.width}px` : '50px')};
	animation: ${spin} 1s linear infinite;
`;

SpinLoader.propTypes = {
  width: number,
  height: number,
  thickness: number,
  loading: bool.isRequired,
  pColor: string,
  sColor: string
};

SpinLoader.defaultProps = {
  width: 50,
  height: 50,
  thickness: 10,
  pColor: '#f3f3f3',
  sColor: '#555',
  loading: true
};

export default SpinLoader;
