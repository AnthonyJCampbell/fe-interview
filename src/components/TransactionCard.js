import React from 'react';
import { } from './style/TransactionCard.style';

import TransactionsList from './TransactionsList'

const TransactionCard = (props) => {
    const { transaction } = props
    
    return (
        <div data-testid="TransactionCard">
            {transaction.name}
            <TransactionsList
                transactions={transaction.transactions}
            />
        </div>
    );
}

export default TransactionCard;