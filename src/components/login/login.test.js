import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from './login';

describe(`Render Login`, () => {

  const email = `test@mail.ru`;
  const password = `111`;
  const login = jest.fn();
  const handlePassword = jest.fn();
  const handleEmail = jest.fn();
  const authorizationStatus = `yes`;

  it(`Render Login`, () => {

    const tree = renderer
      .create(
          <Login
            email={email}
            password={password}
            login={login}
            handlePassword={handlePassword}
            handleEmail={handleEmail}
            authorizationStatus={authorizationStatus}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
