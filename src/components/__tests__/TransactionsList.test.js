import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TransactionsList from '../TransactionsList';

const testComponent = (
    <TransactionsList />
)

describe("TransactionsList", () => {
    it('is not visible by default', () => {
        const { getByTestId } = render(
            testComponent
        );
        const testTransactionList = getByTestId('TransactionsList');
        expect(testTransactionList).not.toBeVisible();

    });
})  
