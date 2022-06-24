import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.count} />
      ))}
    </ul>
  );

  return (
    <Card customClass="card-white">
      <div className={classes['cart-items']}>{cartItems}</div>
    </Card>
  );
};

export default Cart;
