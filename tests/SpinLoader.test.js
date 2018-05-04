import React from 'react';
import renderer from 'react-test-renderer';

import SpinLoader from '../src/components/SpinLoader';

describe('SpinLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<SpinLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
