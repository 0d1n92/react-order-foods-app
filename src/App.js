
import './App.css';
import React from 'react';
import Header from './component/Layout/Header';
import Card from './component/UI/Card';
import MealsSummary from './component/Meals/MealsSummary';
import MealItem from './component/Meals/MealItem'

function App() {
  return (
    <React.Fragment>
      <Header />
  
         <MealsSummary />
      
      <Card customClass={'card-white'}>
        <MealItem />
      </Card>
    </React.Fragment>
  
  );
}

export default App;
