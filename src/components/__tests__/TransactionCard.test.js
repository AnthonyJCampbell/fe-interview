import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TransactionCard from '../TransactionCard';

import { Provider } from 'react-redux';
import { store } from '../../index'

const testBillObject = {
    "categoryId": 1,
    "iconUrl": "https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg",
    "id": "5a5caa1efe33900100fd8ed5",
    "isBill": true,
    "name": "Vodafone",
    "transactions": [
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
    ]
}

const testExpenseObject = {
    "categoryId": 1,
    "iconUrl": "https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg",
    "id": "5a5caa1efe33900100fd8ed5",
    "isBill": false,
    "name": "Vodafone",
    "transactions": [
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
    ]
}

const testComponent = (
    <Provider store={store}>
        <TransactionCard />
    </Provider>
)

describe("TransactionCard", () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            testComponent
        );
        const testTransactionCard = getByTestId('TransactionCard');
        expect(testTransactionCard).toBeInTheDocument();

    });

    // it('renders a "Remove Bill"-button when the card is configured as a bill', () => {
    //     return false;
    // })

    // it('renders an "Add Bill"-button when the card is configured as an expense', () => {
    //     return false;
    // })

    // it('opens up TransactionsList when clicked', () => {
    //     return false;
    // })
})  
