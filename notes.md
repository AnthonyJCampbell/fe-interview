- On initial render, execute GET requests for bills and categories
- Separate bills into separate Tabs based on isBill = true/false

BILLS
- Render all bills in card/row
- Toggle list of transactions when the bill card/row is clicked
- Show the number of transactions associated with the bill
- Add a button that sets the `isBill` to false when clicked. Use PATCH request & re-retrieve bills

POTENTIAL BILLS:
- Render all expenses that are not bills
- Button on expense that sets `isBill` to true. Use PATCH request.

APPROACH:
- Store bills & categories in reducer
- Retain scss for app-wide styling. Styled-Components for everything else.

- Generate two tabs
    - Renders tab cards, containing name, last transaction, number of transactions, and button.
    - Add list of transactions associated with each. Make them hidden by default until clicked.

