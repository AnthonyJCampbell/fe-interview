import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { patchingBill } from '../store/actions/actions';

import { } from './style/TransactionCard.style';

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
        <div data-testid="TransactionCard">
            <div>
                <div>
                    {/* 
                        TO-DO: Add icon support. Image src seems to be defective.
                        <img src={transaction.iconUrl} /> 
                    */}
                    <div className="name">{transaction.name}</div>
                    {
                        transaction.isBill ?
                            <div
                                onClick={() => updateTransactionHandler(false)}
                                data-testid="RemoveButton"
                            >
                                Remove Bill
                            </div>
                            :
                            <div
                                onClick={() => updateTransactionHandler(true)}
                                data-testid="AddButton"
                            >
                                Add as Bill
                            </div>
                    }
                </div>

                <div
                    onClick={() => setTransactionsVisible(!transactionsVisible)}
                >
                    V
                </div>

                <div>
                    <div>- $ {lastTransaction.amount} </div>
                    <div>On: {lastTransaction.date}</div>
                </div>

            </div>
            <TransactionsList
                transactions={transaction.transactions}
                visible={transactionsVisible}
            />
        </div>
    );
}

export default TransactionCard;