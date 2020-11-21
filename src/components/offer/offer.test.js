import React from 'react';
import renderer from 'react-test-renderer';
import {Offer} from './offer';
import {MemoryRouter} from 'react-router-dom';

jest.mock(`../review-list/review-list`, () => `ReviewList`);
jest.mock(`../review-form/review-form`, () => `ReviewForm`);
jest.mock(`../coord/coord`, () => `Coord`);

describe(`Render Offer`, () => {
  const match = {params: {id: `5`}};

  const offer = {
    adults: 3,
    avatar: `img/avatar-angelina.jpg`,
    bedrooms: 1,
    city: `Amsterdam`,
    cityId: 4,
    coord: [52.388540000000006, 4.899976],
    description: `A new spacious villa, one floor.`,
    id: 5,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
    imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    isFavorite: true,
    isPremium: false,
    name: `Angelina`,
    price: 134,
    type: `test`,
    rating: 2.2,
    goods: [`goods`],
    threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
    title: `The house among olive`
  };

  const loadCurrentOffer = jest.fn();
  const loadNearPlaces = jest.fn();
  const authorizationStatus = `yes`;
  const authInfo = {
    login: `Dusseldorf@mail.ru`,
    password: 1111
  };

  const updateFavorite = jest.fn();
  const good = `good`;
  const nearPlaces = [{
    name: `Amsterdam`,
    coord: [54, 45],
    id: 2
  }];
  const img = {id: 1, picture: `picture`};
  it(`Render Offer`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Offer

              match={match}
              offer={offer}
              updateFavorite={updateFavorite}
              img={img}
              good={good}
              loadCurrentOffer={loadCurrentOffer}
              loadNearPlaces={loadNearPlaces}
              authorizationStatus={authorizationStatus}
              authInfo={authInfo}
              nearPlaces={nearPlaces}
              id={match}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

