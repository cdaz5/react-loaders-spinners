import React from 'react';
import styled, { keyframes } from 'styled-components';
import { number, bool } from 'prop-types';

const fadeLeftRight = props =>
  keyframes`
    from {
      background-position: -${props.width}px 0;
    }
    to {
      background-position: ${props.width}px 0;
    }
`;

const Content = styled.div`
  display: ${props => (props.loading ? 'flex' : 'none')};
  flex-direction: column;
  background: linear-gradient(to right, #eeeeee 8%, #e2e2e2 18%, #eeeeee 33%);
  animation: ${props => `${fadeLeftRight(props)} 2s linear infinite`};
  width: 100%;

    div {
      border: 8px solid #fff;
      height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '20px')};
    }
}
`;

const divFactory = (num) => {
  const divs = [];
  for (let i = num; i > 0; i--) {
    divs.push(<div key={i} />);
  }
  return divs;
};

const ContentLoader = ({ rows, ...props }) => <Content {...props}>{divFactory(rows)}</Content>;

ContentLoader.propTypes = {
  width: number.isRequired,
  loading: bool.isRequired,
  rows: number.isRequired,
  lineHeight: number
};

ContentLoader.defaultProps = {
  width: 200,
  rows: 4,
  loading: true,
  lineHeight: 20
};

export default ContentLoader;
