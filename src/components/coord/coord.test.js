import React from "react";
import renderer from "react-test-renderer";
import {Coord} from "./coord";

describe(`Render Coord`, () => {
  const coords = [[48.877610000000004, 2.333499]];
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
          />, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
