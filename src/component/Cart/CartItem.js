import classes from './CartItem.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  console.log(props);
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={(e) => ctx.removeItems(e, props.item)}>−</button>
        <button onClick={(e) => ctx.addItems(e, props.item, 1)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
