import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./city-list";

describe(`CitiesList`, () => {
  it(`CitiesList render `, () => {
    const activeCity = {
      name: `Amsterdam`,
      coord: [54, 45],
      id: 2
    };
    const setCurrentCityAsActiveMock = jest.fn();
    const activeCityId = 2;
    const component = (<CitiesList
      cities={[activeCity]}
      setCurrentCityAsActive={setCurrentCityAsActiveMock}
      activeCityId={activeCityId}
    />);

    const tree = renderer.create(
        component
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
