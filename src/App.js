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
          active={openTab === "bills"} 
          onClick={() => setOpenTab("bills")}
        >
          Bills
        </div>
        <div 
          active={openTab === "expenses"}
          onClick={() => setOpenTab("expenses")}
        >
          Expenses
        </div>
      </div>
      {openTab}
    </div>
  );
}


export default App;
