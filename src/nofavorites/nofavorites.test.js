import React from 'react';
import renderer from 'react-test-renderer';
import NoFavorites from './nofavorites';

describe(`Render NoFavorites`, () => {
  it(`Render NoFavorites`, () => {
    const tree = renderer
    .create(

        <NoFavorites

        />

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
