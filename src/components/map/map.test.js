import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";

describe(`Render Map`, () => {
  const coords = [[48.877610000000004, 2.333499]];
  const activeCity = {
    name: `Amsterdam`,
    coordinate: [54, 45],
    id: 2
  };

  it(`Render Map`, () => {

    const tree = renderer
      .create(
          <Map
            coords={coords}
            activeCity={activeCity}
          />, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
