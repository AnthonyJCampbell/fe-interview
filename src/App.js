import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchingBills, fetchingCategories } from './store/actions/actions';

import Tab from './components/Tab'

const App = props => {
  const [openTab, setOpenTab] = useState("bills")

  const dispatch = useDispatch()

  // On first render, retrieve bills and categories
  useEffect(() => {
    dispatch(fetchingBills())
    dispatch(fetchingCategories())
  }, [])

  return (
    <div data-testid="App">
      <div className="switchBetweenTabs">
        <div
          active={toString(openTab === "bills")}
          onClick={() => setOpenTab("bills")}
        >
          Bills
        </div>
        <div
          active={toString(openTab === "expenses")}
          onClick={() => setOpenTab("expenses")}
        >
          Expenses
        </div>
      </div>
      {
        openTab === "bills"
          ?
          <Tab type="Bills" />
          :
          <Tab type="Expenses" />
      }
    </div>
  );
}


export default App;
