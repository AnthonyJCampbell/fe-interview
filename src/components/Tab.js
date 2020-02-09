import React from 'react';
import { useSelector } from 'react-redux';

import TransactionCard from './TransactionCard'
import {  } from './style/Tab.style'

const Tab = ({ type = "Expenses" }) => {
    const transactions = useSelector(state => state.reducer.bills) || [];

    const billsArray = transactions.filter(trans => trans.isBill)
    const expenseArray = transactions.filter(trans => !trans.isBill)

    return (
        <div data-testid="Tab">
            <h2 data-testid={type === "Bills" ? "Expenses" : "Bills"}>
                {type}
            </h2>
            <div>
                <div>
                    {
                        (type === "Bills" && billsArray.length === 0) || (type === "Expenses" && expenseArray.length === 0)
                            ? <div data-testid="NoRecordsMessage">There are no records in this category</div>
                            : null
                    }
                </div>
                {
                    transactions.map((trans, idx) => {
                        if (type === "Bills" && trans.isBill) {
                            return <TransactionCard key={idx} transaction={trans} />
                        } else if (type === "Expenses" && !trans.isBill) {
                            return <TransactionCard key={idx} transaction={trans} />
                        } else {
                            // Catch-all (in case of isBill === null or other edge-case.)
                            return null
                        }

                    })
                }
            </div>
        </div>
    );
}



export default Tab;