import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';
import {MemoryRouter} from 'react-router-dom';

describe(`Render ReviewItem`, () => {

  const review = {
    id: 5,
    offerId: 3,
    avatar: `img/avatar-angelina.jpg`,
    author: `Max`,
    rating: 3,
    date: {
      months: `april`,
      day: 15
    },

    text: `text`,
  };

  const reviewItem = {
    id: 5,
    offerId: 3,
    avatar: `img/avatar-angelina.jpg`,
    author: `Max`,
    rating: 3,
    date: new Date(2020, 10, 17, 2, 3, 4, 567),

    text: `text`,
  };
  it(`Render ReviewItem`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>

          <ReviewItem
            reviewItem={reviewItem}
            review={review}
          />
        </MemoryRouter>

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


