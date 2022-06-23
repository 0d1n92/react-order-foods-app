import React from 'react';
import DUMMY_MEALS from './dummy-meals';
import classes from './MealItem.module.css';

/* const addItems = (idItems) => {
   const item = DUMMY_MEALS.find(({id})=> id === idItems);
   const cartItems= JSON.parse(localStorage.getItems('cartItems'));
   cartItems.push(item);
} */

const MealItem = () => {

  const addItems = (e, idItems) => {

   const item = DUMMY_MEALS.find(({id})=> id === idItems);
   const cartItems= JSON.parse(localStorage.getItem('cartItems'));
   cartItems.push(item);
   localStorage.setItem('cartItems',JSON.stringify(cartItems) );
} 
  
  const item = DUMMY_MEALS.map((item)=>{
    return (
      <div className={classes["meal"]} key={item.id}>
        <div>
          <h3>{item.name}</h3>
          <p className={classes["description"]}>{item.description}</p>
          <p className={classes["price"]}>{item.price}</p>
        </div>
        <div>
          <b>Amount</b>
          <input type="number"></input>
          <br />
          <button onClick={e => addItems(e,item.id)}>
            + Add
          </button>
        </div>
      </div>
    );
  });

   return (
    <React.Fragment>
      {item}
    </React.Fragment>
   );
}

export default MealItem;