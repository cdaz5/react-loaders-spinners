import React from 'react';
import renderer from 'react-test-renderer';

import BoxLoader from '../src/components/BoxLoader';

describe('BoxLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<BoxLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
