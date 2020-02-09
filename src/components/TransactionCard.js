import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { patchingBill } from '../store/actions/actions';

import {
    CardContainer,
    Card,
    UpperRow,
    MiddleRow,
    BottomRow,
    StyledButton,
    ExpandButton,
} from './style/TransactionCard.style'

import TransactionsList from './TransactionsList'

const TransactionCard = (props) => {
    const { transaction } = props
    const [transactionsVisible, setTransactionsVisible] = useState(false)

    const lastTransaction = transaction.transactions[transaction.transactions.length - 1]

    const dispatch = useDispatch()

    const updateTransactionHandler = (isBill, id = transaction.id) => {
        dispatch(patchingBill(isBill, id))
    }

    return (
        <CardContainer data-testid="TransactionCard">
            <Card>
                <UpperRow>
                    {/* 
                        TO-DO: Add icon support. Image src seems to be defective.
                        <img src={transaction.iconUrl} /> 
                    */}
                    <div className="name">{transaction.name}</div>
                    {
                        transaction.isBill ?
                            <StyledButton
                                onClick={() => updateTransactionHandler(false)}
                                data-testid="RemoveButton"
                            >
                                Remove Bill
                            </StyledButton>
                            :
                            <StyledButton
                                onClick={() => updateTransactionHandler(true)}
                                data-testid="AddButton"
                            >
                                Add as Bill
                            </StyledButton>
                    }
                </UpperRow>

                <MiddleRow
                    onClick={() => setTransactionsVisible(!transactionsVisible)}
                >
                    <div style={{ minWidth: "30%" }}>{transaction.transactions.length} Transactions</div>
                    <ExpandButton
                        visible={transactionsVisible}
                    >
                        V
                    </ExpandButton>
                </MiddleRow>

                <BottomRow
                    onClick={() => setTransactionsVisible(!transactionsVisible)}
                >
                    <div style={{ minWidth: "30%" }}>- $ {lastTransaction.amount} </div>
                    <div>On: {lastTransaction.date}</div>
                </BottomRow>

            </Card>
            <TransactionsList
                transactions={transaction.transactions}
                visible={transactionsVisible}
            />
        </CardContainer>
    );
}

export default TransactionCard;