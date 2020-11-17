import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});

it(`Отправка формы`, () => {

  const ratingChange = jest.fn();
  const reviewChange = jest.fn();
  const formSubmit = jest.fn();
  const setReviews = jest.fn();
  const evtPrevent = jest.fn();
  const id = `1`;
  const review = `test`;
  const rating = 4;

  const submitPress = shallow(<ReviewForm
    onRatingChange={ratingChange}
    onReviewChange={reviewChange}
    review={review}
    setReviews={setReviews}
    id={id}
    rating={rating}
    onFormSubmit={formSubmit}
  />

  );

  const form = submitPress.find(`.form`);

  form.simulate(`submit`, {
    preventDefault: evtPrevent
  });


  expect(formSubmit).toHaveBeenCalledTimes(1);
  expect(setReviews).toHaveBeenCalledTimes(1);
  expect(evtPrevent).toHaveBeenCalledTimes(1);
  expect(setReviews).toHaveBeenNthCalledWith(1, id, review, rating);

});

it(`Ввод текста`, () => {

  const ratingChange = jest.fn();
  const reviewChange = jest.fn();
  const formSubmit = jest.fn();
  const setReviews = jest.fn();
  const id = `1`;
  const review = `test`;
  const rating = 4;

  const reviewTest = shallow(<ReviewForm
    onRatingChange={ratingChange}
    onReviewChange={reviewChange}
    review={review}
    setReviews={setReviews}
    id={id}
    rating={rating}
    onFormSubmit={formSubmit}
  />

  );

  const form = reviewTest.find(`.reviews__textarea`);

  form.simulate(`change`, `texttest`);

  expect(reviewChange).toHaveBeenCalledTimes(1);

});

it(`Изменение рейтинга`, () => {

  const ratingChange = jest.fn();
  const reviewChange = jest.fn();
  const setReviews = jest.fn();
  const id = `1`;
  const review = `test`;
  const rating = 4;

  const ratingTest = shallow(<ReviewForm
    onRatingChange={ratingChange}
    onReviewChange={reviewChange}
    review={review}
    setReviews={setReviews}
    id={id}
    rating={rating}
  />

  );

  const form = ratingTest.find(`#stars-4`);

  form.simulate(`change`, `texttest`);

  expect(ratingChange).toHaveBeenCalledTimes(1);

});
