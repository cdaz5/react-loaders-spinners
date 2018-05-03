import React from 'react';
import renderer from 'react-test-renderer';

import PulseLoader from '../src/components/PulseLoader';

describe('PulseLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<PulseLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
