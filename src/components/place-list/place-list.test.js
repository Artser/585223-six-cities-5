import React from 'react';
import renderer from 'react-test-renderer';
import {PLaceList} from './place-list';
import {MemoryRouter} from 'react-router-dom';

describe(`Render PLaceList`, () => {

  const handleHover = jest.fn();
  const activePlaceIndex = 2;
  const offers = [{
    adults: 3,
    avatar: `img/avatar-angelina.jpg`,
    bedrooms: 1,
    city: `Amsterdam`,
    cityId: 4,
    coordinate: [52.388540000000006, 4.899976],
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
  }];
  it(`Render PLaceList`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>

          <PLaceList
            offers={offers}
            handleHover={handleHover}
            activePlaceIndex={activePlaceIndex}
          />
        </MemoryRouter>

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

