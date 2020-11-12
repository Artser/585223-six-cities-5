import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import ReviewItem from "../review-item/review-item";
import Offer from "../offer/offer";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";


const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});
const reviews = [
  {
    description: `test`,
    autor: `Mollie`,
    text: `The house is very good, very happy, hygienic and simple living conditions around it are also very good`,
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
    date: `2020-11-05T13:38:44.753Z`,
    rating: 4,
  },
];

const match = [{params: {id: `5`}}];
const offer = {
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
};
const img = `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`;

const good = `good`;
const authorizationStatus = `yes`;
const authInfo = {};
const nearPlaces = [{
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
}];
const loadCurrentOffer = jest.fn();
const loadNearPlaces = jest.fn();

it(`Добавление отзыва на страницу`, () => {

  const testHandle = jest.fn();

  const offereItem = shallow(
      <Provider store={store}>
        <Offer

          match={match}
          offer={offer}
          img={img}
          good={good}
          review={reviews}
          loadCurrentOffer={loadCurrentOffer}
          loadNearPlaces={loadNearPlaces}
          authorizationStatus={authorizationStatus}
          authInfo={authInfo}
          nearPlaces={nearPlaces}
        >
        </Offer>
      </Provider>
  );

  const reviewTextArea = offereItem.find(`#review`);
  /*   const reviewRating = offereItem.find(`.form__rating-input`);
  const reviewButton = offereItem.find(`.reviews__submit`); */
  reviewTextArea.simulate(`change`, `texttest`);
  /*  reviewRating.simulate(`click`);
  reviewButton.simulate(`click`); */

  expect(testHandle).toHaveBeenCalledTimes(1);

});
