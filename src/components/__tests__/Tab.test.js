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
        const { getByTestId, queryByTestId } = render(
            testComponent
        );
        const Bills = getByTestId('Bills');
        expect(Bills).toBeInTheDocument();
        // Additionally, the Expenses should not be rendered
        expect(queryByTestId('Expenses')).not.toBeInTheDocument()
    });

    it('renders a message when there are no transactions', () => {
        // By default, no transactions are passed. They're retrieved from store after initial render.
        const { getByTestId } = render(
            testComponent
        );
        const NoRecordsMessage = getByTestId('NoRecordsMessage');
        expect(NoRecordsMessage).toBeInTheDocument();
    })
})  
