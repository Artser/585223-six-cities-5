import React from 'react';
import renderer from 'react-test-renderer';
import {Sorting} from './sorting';

describe(`Render Sorting`, () => {

  const setSortingType = jest.fn();
  const toggleSortingList = jest.fn();
  const isOpened = false;
  const currentSortType = `Popular`;

  it(`Render Sorting`, () => {
    const tree = renderer
    .create(

        <Sorting
          setSortingType = {setSortingType}
          toggleSortingList = {toggleSortingList}
          isOpened = {isOpened}
          currentSortType = {currentSortType}
        />

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
