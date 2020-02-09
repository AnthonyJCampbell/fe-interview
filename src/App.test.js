import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App'; 

const testAppComponent = (
    <App />
)

describe("App", () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      testAppComponent
    );
    const AppComponent = getByTestId('App');
    expect(AppComponent).toBeInTheDocument();
  
  });

})  
