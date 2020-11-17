import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlaceList from "./with-place-list";


const MockComponent = (props) => {
  const {activePlaceIndex} = props;

  return (
    <div>
      {activePlaceIndex}
    </div>
  );
};
MockComponent.propTypes = {
  onHover: PropTypes.func,
  activePlaceIndex: PropTypes.number.isRequired,
  handleHover: PropTypes.func.isRequired,
};

const MockComponentWrapped = withPlaceList(MockComponent);

it(`withActivePlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
