import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TransactionCard from '../TransactionCard';

const testComponent = (
    <TransactionCard />
)

describe("TransactionCard", () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            testComponent
        );
        const testTransactionCard = getByTestId('TransactionCard');
        expect(testTransactionCard).toBeInTheDocument();

    });

    it('renders a "Remove Bill"-button when the card is configured as a bill', () => {
        return false;
    })

    it('renders an "Add Bill"-button when the card is configured as an expense', () => {
        return false;
    })

    it('opens up TransactionsList when clicked', () => {
        return false;
    })
})  
