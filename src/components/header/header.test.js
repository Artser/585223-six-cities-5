import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { AuthorizationStatus } from '../../utils/functions';
import {Header} from './header';

it(`Header render correctly with active feature`, () => {
  const tree = renderer.create(<MemoryRouter>
  <Header
    authInfo={false}
    authorizationStatus={AuthorizationStatus.NO_AUTH}
  />
  </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header render correctly without active feature`, () => {
  const tree = renderer.create(<MemoryRouter>

  <Header
    authInfo={`Dusseldorf@mail.ru`}
    authorizationStatus={AuthorizationStatus.AUTH}
  />
  </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
