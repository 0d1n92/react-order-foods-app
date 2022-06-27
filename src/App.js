import './App.css';
import React, { useContext } from 'react';
import Header from './component/Layout/Header';
import Card from './component/UI/Card';
import MealsSummary from './component/Meals/MealsSummary';
import MealItem from './component/Meals/MealItem';
import CartContext from './store/cart-context';
import Cart from './component/Cart/Cart';

function App() {
  const ctxCart = useContext(CartContext);

  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      {ctxCart.isOpen === true ? <Cart></Cart> : ''}
      <Card customClass={'card-white'}>
        <MealItem />
      </Card>
    </React.Fragment>
  );
}

export default App;
