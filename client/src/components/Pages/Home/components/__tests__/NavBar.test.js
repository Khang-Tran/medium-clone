import { shallow, mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { GET_CURRENT_USER } from '../../../../../queries/userQueries';
import MockComponent from '../../../../test-utils/MockComponent';
import NavigationBar from '../NavigationBar';
import AuthNav from '../NavigationBar/components/AuthNav';


jest.mock('../NavigationBar/components/AuthNav', () => MockComponent);

const authMocks = [
  {
    request: {
      query: GET_CURRENT_USER
    },
    result: {
      data: {
        getCurrentUser: {
          name: 'test12345',
          email: 'test@gmail.com'
        }
      }
    }
  }
];

const unAuthMock = [
  {
    request: {
      query: GET_CURRENT_USER
    },
    result: {
      data: {
        getCurrentUser: null
      }
    }
  }
];

it('renders <UnauthNav /> when user not login', async () => {
  const component = mount(
    <MockedProvider mocks={unAuthMock} addTypename={false}>
      <NavigationBar/>
    </MockedProvider>
  );
  await wait(0);

  expect(component.update()
    .find(MockComponent)
    .prop('session'))
    .toMatchObject({
      getCurrentUser: {
        name: 'test12345',
        email: 'test@gmail.com'
      }
    });
});
describe('<NavigationBar /> ', () => {

  it('renders <AuthNav /> when user login', () => {
    const component = shallow(
      <MockedProvider mocks={authMocks} addTypename={false}>
        <NavigationBar/>
      </MockedProvider>
    );


    expect(component.find(AuthNav).length)
      .toEqual(1);
  });
});


