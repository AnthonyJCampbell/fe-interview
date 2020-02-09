import React from 'react';
import { } from './style/TransactionsList.style'

const TransactionsList = ({ transactions, visible = false}) => {
    return (
        <div 
            data-testid="TransactionsList"
            style={{display: visible ? "inline" : "none"}}
        >
            {
                // TO-DO: Reverse the array and remove the latest transaction (since it's already shown in the Card)
                transactions.slice(0).reverse().slice(1).map((trans, idx) =>
                    <div data-testid={`item${idx}`} key={idx}>
                        <div>
                            - ${trans.amount} 
                        </div>
                        <div>
                            On: {trans.date} 
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default TransactionsList;