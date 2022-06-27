import React, { useContext } from 'react';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = () => {
  const ctx = useContext(CartContext);

  const onClickHandler = () => {
    ctx.setIsOpen();
  };
  return (
    <React.Fragment>
      <div style={{ position: 'relative' }}>
        <div className={classes.badge}>{ctx.items.length}</div>
      </div>
      <button className={classes['button']} onClick={onClickHandler}>
        {'Cart'}
        <CardIcon customClass={classes['icon']} />
      </button>
    </React.Fragment>
  );
};

export default HeaderCardButton;
