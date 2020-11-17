import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Main} from './main';
jest.mock(`../city-list/city-list`, () => `CitiesList`);
jest.mock(`../sorting/sorting`, () => `Sorting`);
jest.mock(`../place-list/place-list`, () => `PLaceList`);
jest.mock(`../coord/coord`, () => `Coord`);
jest.mock(`../no-offers/no-offers`, () => `NoOffers`);

describe(`Render Main`, () => {
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
    goods: [test],
    threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
    title: `The house among olive`
  };
  const activeCity = {
    name: `Amsterdam`,
    coord: [54, 45],
    id: 2
  };
  const authorizationStatus = `yes`;
  const authInfo = {
    login: `Dusseldorf@mail.ru`,
    password: 1111
  };
  const handleOfferChange = jest.fn();
  const activeOfferIndex = 5;
  const activeOffer = 5;
  it(`Render Main`, () => {

    const tree = renderer
      .create(
          <MemoryRouter>
            <Main
              offers={[offer]}
              activeCity={activeCity}
              authInfo={authInfo}
              handleOfferChange={handleOfferChange}
              activeOfferIndex={activeOfferIndex}
              authorizationStatus={authorizationStatus}
              activeOffer={activeOffer}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
