import React, { useContext } from 'react';
import DUMMY_MEALS from './dummy-meals';
import classes from './MealItem.module.css';
import CartContext from '../../store/cart-context';

const MealItem = () => {
  const ctx = useContext(CartContext);
  
  const item = DUMMY_MEALS.map((item) => {
    return (
      <div className={classes['meal']} key={item.id}>
        <div>
          <h3>{item.name}</h3>
          <p className={classes['description']}>{item.description}</p>
          <p className={classes['price']}>{item.price}</p>
        </div>
        <div>
          <b>Amount</b>
          <input type="number"></input>
          <br />
          <button onClick={(e) => ctx.addItems(e, item.id)}>+ Add</button>
        </div>
      </div>
    );
  });

  return <React.Fragment>{item}</React.Fragment>;
};

export default MealItem;
