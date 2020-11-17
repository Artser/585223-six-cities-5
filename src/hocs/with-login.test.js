import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withLogin from "./with-login";


const MockComponent = (props) => {
  const {email} = props;

  return (
    <div>
      {email}
    </div>
  );
};
MockComponent.propTypes = {
  email: PropTypes.string.isRequired,
  /*   password: PropTypes.string.isRequired,
  handlePassword: PropTypes.func.isRequired, */
  handleEmail: PropTypes.func.isRequired,
};

const MockComponentWrapped = withLogin(MockComponent);

it(`withActivePlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
