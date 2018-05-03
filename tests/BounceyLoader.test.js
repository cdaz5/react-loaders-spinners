import React from 'react';
import renderer from 'react-test-renderer';

import BounceyLoader from '../src/components/BounceyLoader';

describe('BounceyLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<BounceyLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
