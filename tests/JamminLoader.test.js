import React from 'react';
import renderer from 'react-test-renderer';

import JamminLoader from '../src/components/JamminLoader';

describe('JamminLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<JamminLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
