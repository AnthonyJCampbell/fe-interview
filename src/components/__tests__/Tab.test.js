import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tab from '../Tab';

import { Provider } from 'react-redux';
import { store } from '../../index'

const testComponent = (
    <Provider store={store}>
        <Tab />
    </Provider>
)

describe("Tab", () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            testComponent
        );
        const testTab = getByTestId('Tab');
        expect(testTab).toBeInTheDocument();

    });

    it('shows the bills by default', () => {
        return false
    });

    it('renders a message when there are no transactions', () => {
        return false
    })
})  
