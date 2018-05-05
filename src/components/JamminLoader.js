import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const grow1 = keyframes`
	0% { 
    height: 10px; 
  }
	50% { 
    height:50px; 
  }
	100% { 
    height: 10px; 
  }
`;

const grow2 = keyframes`
	0% { 
    height: 20px; 
  }
	50% { 
    height: 65px; 
  }
	100% { 
    height: 20px; 
  }
`;

const Jammin = styled.div`
	display: ${props => (props.loading ? 'flex' : 'none')};
	position: fixed;
	margin: auto;
	left: 0;
	right: 0;
	top: 50 %;
	width: 90px;

	ul {
		margin: 0;
		list-style: none;
		width: 90px;
		position: relative;
		padding: 0;
		height: 10px;

		li {
			position: absolute;
			width: ${props => (props.thickness ? `${props.thickness}px` : '10px')};
			height: 0;
			background-color: ${props => (props.pColor ? `${props.pColor}` : '#555')};
			bottom: 0;
		}
	}

	li:nth-child(1) {
		left: 0;
		animation: ${grow1} 1s ease infinite 0;
	}
	li:nth-child(2) {
		left: 15px;
		animation: ${grow2} 1s ease infinite 0.1s;
	}
	li:nth-child(3) {
		left: 30px;
		animation: ${grow1} 1s ease-in-out infinite 0.2s;
	}
	li:nth-child(4) {
		left: 45px;
		animation: ${grow2} 1s ease-in infinite 0.3s;
	}

	li:nth-child(5) {
		left: 60px;
		animation: ${grow1} 1s ease-in-out infinite 0.4s;
	}
	li:nth-child(6) {
		left: 75px;
		animation: ${grow2} 1s ease infinite 0.5s;
	}
`;

const JamminLoader = props => (
  <Jammin {...props}>
    <ul>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </Jammin>
);

JamminLoader.propTypes = {
  thickness: number,
  loading: bool.isRequired,
  pColor: string
};

JamminLoader.defaultProps = {
  thickness: 10,
  pColor: '#555',
  loading: true
};

export default JamminLoader;
