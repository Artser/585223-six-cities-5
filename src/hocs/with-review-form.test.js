import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewForm from "./with-place-list";


const MockComponent = (props) => {
  const {rating} = props;

  return (
    <div>
      {rating}
    </div>
  );
};
MockComponent.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withActivePlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

