import React from "react";
import renderer from "react-test-renderer";
import {Coord} from "./coord";

describe(`Render Coord`, () => {
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
  const coords = [[42, 54]];
  const activeCity = {
    name: `Amsterdam`,
    coord: [54, 45],
    id: 2
  };

  it(`Render Coord`, () => {

    const tree = renderer
      .create(
          <Coord
            coords={coords}
            activeCity={activeCity}
            activeOffer={[offer]}
            offer={offer}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
