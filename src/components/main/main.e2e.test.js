import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {AuthorizationStatus} from "../../reducer/user/user";
import {PlaceListWrapped} from "./main";

configure({adapter: new Adapter()});
const offers = [
  {
    description: `test`,
    id: 1,
    title: `Beautiful & luxurious apartment at graet location`,
    imgLink: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    coord: [52.3909553943508, 4.85309666406198],
    city: `am`,
    cityId: 10,
    isFavorite: true,
    bedrooms: 4,
    adults: 3,
    goods: [`tennis`, `room`],
    avatar: `little`,
    name: `Angelina`,

  },
];

let Paris = {
  name: `2`,
  coord: [1, 2],
  id: 5
};

it(`Наведение карточку предложения`, () => {

  const testHandle = jest.fn();

  const screen = shallow(<Main
    offers={offers}
    activeCity={Paris}
    authorizationStatus={AuthorizationStatus.AUTH}
    authInfo={{}}
    handleOfferChange={testHandle}
    activeOfferIndex={3}

  >
  </Main>
  );

  const PlaceListTest = screen.find(PlaceListWrapped);

  PlaceListTest.invoke(`onHover`)();

  expect(testHandle).toHaveBeenCalledTimes(1);

});

