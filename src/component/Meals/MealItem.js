import React from 'react';
import DUMMY_MEALS from './dummy-meals';
import classes from './MealItem.module.css';

const MealItem = () => {

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
          <button>
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