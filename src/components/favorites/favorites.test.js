import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Favorites} from './favorites';

describe(`Render Favorites`, () => {

  it(`Render Favorites`, () => {
    const updateFavorite = jest.fn();
    const loadFavorites = jest.fn();
    const authorizationStatus = `yes`;
    const authInfo = {
      login: `123`,
      password: `111`,
    };
    const favorites = [{
      id: 3,
      title: `The house among olive`,
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      price: 218,
      type: `apartment`,
      isPremium: false,
      isFavorite: true,
      rating: 4.6
    }];
    const tree = renderer
      .create(
          <MemoryRouter>
            <Favorites
              authorizationStatus={authorizationStatus}
              authInfo={authInfo}
              updateFavorite={updateFavorite}
              favorites={favorites}
              loadFavorites={loadFavorites}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
