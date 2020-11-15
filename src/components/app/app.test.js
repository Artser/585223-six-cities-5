import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {createStore} from "redux";
import {reducer} from "../../reducer/user/user";
import App from "./app";

describe(`Render App`, () => {

  it(`Render App`, () => {
    const store = createStore(
        reducer,
        {
          offers: [{
            adults: `3`,
            avatar: `img/avatar-angelina.jpg`,
            bedrooms: `1`,
            city: `Amsterdam`,
            cityId: 4,
            coord: [52.388540000000006, 4.899976],
            description: `A new spacious villa, one floor.`,
            id: `5`,
            images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
            imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
            isFavorite: `true`,
            isPremium: `false`,
            name: `Angelina`,
            price: `134`,
            rating: `2.2`,
            threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
            title: `The house among olive`
          }],
          cities: [{
            id: 1,
            name: `Paris`,
            coord: [48, 52]
          }],
          activeCityId: 1
        }
    );
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
