import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

it(`Header render correctly with active feature`, () => {
  const tree = renderer.create(<Header
    authInfo={false}
    authorizationStatus={false}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header render correctly without active feature`, () => {
  const tree = renderer.create(<Header
    authInfo={true}
    authorizationStatus={true}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
