import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TransactionsList from '../TransactionsList';

import { Provider } from 'react-redux';
import { store } from '../../index'

const testTransactionsObject = [
    {
        "amount": 12.34,
        "date": "2018-01-13",
        "id": 36
    },
    {
        "amount": 14.34,
        "date": "2018-02-13",
        "id": 37
    },
    {
        "amount": 15.54,
        "date": "2018-03-13",
        "id": 38
    },
    {
        "amount": 11.34,
        "date": "2018-04-13",
        "id": 39
    },
    {
        "amount": 18.99,
        "date": "2018-05-13",
        "id": 40
    }
]


const testComponent = (
    <Provider store={store}>
        <TransactionsList transactions={testTransactionsObject} />
    </Provider>
)

const visibleTestComponent = (
    <Provider store={store}>
        <TransactionsList visible={true} transactions={testTransactionsObject} />
    </Provider>
)


describe("TransactionsList", () => {
    it('is not visible by default', () => {
        const { getByTestId } = render(
            testComponent
        );
        const testTransactionList = getByTestId('TransactionsList');
        expect(testTransactionList).not.toBeVisible();

    });

    it('renders all but the last item in the transactions array', () => {
        const { queryByTestId } = render(
            visibleTestComponent
        );
        expect(queryByTestId('item4')).not.toBeInTheDocument()
        expect(queryByTestId('item3')).toBeInTheDocument()

    });
})  
