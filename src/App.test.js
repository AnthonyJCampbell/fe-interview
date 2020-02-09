import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

import { Provider } from 'react-redux';
import { store } from './index'

const testComponent = (
  <Provider store={store}>
    <App />
  </Provider>
)

describe("App", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      testComponent
    );
    const AppComponent = getByTestId('App');
    expect(AppComponent).toBeInTheDocument();
  });
})  
