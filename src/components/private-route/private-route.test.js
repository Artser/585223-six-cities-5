import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {MemoryRouter} from 'react-router-dom';

describe(`Render PrivateRoute`, () => {

  const render = jest.fn();
  const authorizationStatus = `yes`;
  const path = `path`;

  it(`Render PrivateRoute`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>

          <PrivateRoute
            path={path}
            authorizationStatus={authorizationStatus}
            render={render}
          />
        </MemoryRouter>

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
