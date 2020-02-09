import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchingBills, fetchingCategories } from './store/actions/actions';

import {
  TabsContainer,
  Button,
  StyledApp,
} from './App.style';

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
    <StyledApp data-testid="App">
      <TabsContainer className="switchBetweenTabs">
        <Button
          active={openTab === "bills"}
          onClick={() => setOpenTab("bills")}
        >
          Bills
        </Button>
        <Button
          active={openTab === "expenses"}
          onClick={() => setOpenTab("expenses")}
        >
          Expenses
        </Button>
      </TabsContainer>
      {
        openTab === "bills"
          ?
          <Tab type="Bills" />
          :
          <Tab type="Expenses" />
      }
    </StyledApp>
  );
}


export default App;
