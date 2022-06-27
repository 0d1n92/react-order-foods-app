import React, { useContext } from 'react';
import DUMMY_MEALS from './dummy-meals';
import classes from './MealItem.module.css';
import CartContext from '../../store/cart-context';

const MealItem = () => {
  const ctx = useContext(CartContext);
  let amount = 1;
  const addAmountItems = (e) => {
   let value = parseInt(e.target.value);
   
    if ( value > 1) {
      amount = value;
    } 
  } 

  const item = DUMMY_MEALS.map((item) => {
    return (
      <div className={classes['meal']} key={item.id}>
        <div>
          <h3>{item.name}</h3>
          <p className={classes['description']}>{item.description}</p>
          <p className={classes['price']}>{item.price}</p>
        </div>
        <div className={classes['form']}>
          <b>Amount </b>
          <input type="number" onChange={addAmountItems}></input>
          <button onClick={(e) => ctx.addItems(e, item.id, amount)}>+ Add</button>
        </div>
      </div>
    );
  });

  return <React.Fragment>{item}</React.Fragment>;
};

export default MealItem;
