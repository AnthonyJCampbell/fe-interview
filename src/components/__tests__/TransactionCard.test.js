import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

const testBillComponent = (
    <Provider store={store}>
        <TransactionCard transaction={testBillObject} />
    </Provider>
)

const testExpenseComponent = (
    <Provider store={store}>
        <TransactionCard transaction={testExpenseObject} />
    </Provider>
)
describe("TransactionCard", () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            testBillComponent
        );
        const testTransactionCard = getByTestId('TransactionCard');
        expect(testTransactionCard).toBeInTheDocument();

    });

    it('renders a "Remove Bill"-button when the card is configured as a bill', () => {
        const { queryByTestId } = render(
            testBillComponent
        );
        expect(queryByTestId('RemoveButton')).toBeInTheDocument()
        expect(queryByTestId('AddButton')).not.toBeInTheDocument()

    })

    it('renders an "Add Bill"-button when the card is configured as an expense', () => {
        const { queryByTestId } = render(
            testExpenseComponent
        );
        expect(queryByTestId('AddButton')).toBeInTheDocument()
        expect(queryByTestId('RemoveButton')).not.toBeInTheDocument()
    })

    it('toggles TransactionsList when clicked', () => {
        const { queryByTestId } = render(
            testExpenseComponent
        ); 

        expect(queryByTestId("TransactionsList")).not.toBeVisible();

        fireEvent.click(queryByTestId("MiddleRow"));
        expect(queryByTestId("TransactionsList")).toBeVisible();
        
        fireEvent.click(queryByTestId("MiddleRow"));
        expect(queryByTestId("TransactionsList")).not.toBeVisible();

    })
})  
