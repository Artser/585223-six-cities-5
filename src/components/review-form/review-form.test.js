import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';

describe(`Render ReviewForm`, () => {

  const onRatingChange = jest.fn();
  const onReviewChange = jest.fn();
  const setReviews = jest.fn();
  const onFormSubmit = jest.fn();
  const review = `review`;
  const id = `2`;
  const rating = 3;

  it(`Render ReviewForm`, () => {
    const tree = renderer
    .create(

        <ReviewForm
          onRatingChange={onRatingChange}
          onReviewChange={onReviewChange}
          review={review}
          setReviews={setReviews}
          id={id}
          rating={rating}
          onFormSubmit={onFormSubmit}
        />

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

