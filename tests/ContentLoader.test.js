import React from 'react';
import renderer from 'react-test-renderer';

import ContentLoader from '../src/components/ContentLoader';

describe('ContentLoader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ContentLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
