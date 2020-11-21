import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list';

describe(`Render ReviewList`, () => {
  const match = {params: {id: `5`}};
  const loadCurrentReview = jest.fn();
  const review = [{
    id: 5,
    offerId: 3,
    avatar: `img/avatar-angelina.jpg`,
    author: `Max`,
    rating: 3,
    date: new Date(2020, 10, 17, 2, 3, 4, 567),

    text: `text`,
  }];
  it(`Render ReviewList`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>

          <ReviewList
            loadCurrentReview={loadCurrentReview}
            comments={review}
            match={match}
          />
        </MemoryRouter>

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
