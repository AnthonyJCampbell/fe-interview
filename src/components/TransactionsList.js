import React from 'react';
import { 
    List,
    ListItem
} from './style/TransactionsList.style'

const TransactionsList = ({ transactions, visible = false}) => {
    return (
        <List 
            data-testid="TransactionsList"
            style={{display: visible ? "inline" : "none"}}
        >
            {
                // TO-DO: Reverse the array and remove the latest transaction (since it's already shown in the Card)
                transactions.slice(0).reverse().slice(1).map((trans, idx) =>
                    <ListItem data-testid={`item${idx}`} key={idx}>
                        <div>
                            - ${trans.amount} 
                        </div>
                        <div>
                            On: {trans.date} 
                        </div>
                    </ListItem>
                )
            }
        </List>
    );
}
export default TransactionsList;