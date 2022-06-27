import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul>
      {ctx.items.map((item) => (
        <CartItem item={item.id} key={item.id} name={item.name} price={item.price} amount={item.count} />
      ))}
    </ul>
  );

  
  return (
    <Modal>
      <div className={classes['cart-items']}>
        {cartItems}
        <div className={classes['actions']}>
          <button onClick={ctx.setIsOpen} className={classes['button--alt']}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
