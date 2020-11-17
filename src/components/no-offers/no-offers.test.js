import React from 'react';
import renderer from 'react-test-renderer';
import {NoOffers} from './no-offers';

describe(`Render NoOffers`, () => {

  const city = `Paris`;
  it(`Render NearPlace`, () => {
    const tree = renderer
    .create(
        <NoOffers
          city={city}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
