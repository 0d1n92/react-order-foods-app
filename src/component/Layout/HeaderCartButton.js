import React from 'react'
import CardIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

const HeaderCardButton = () => {
  return(
    <button className={classes['button']}>
    {"Cart"}
     <CardIcon customClass={classes["icon"]} />
    </button>
  ) 
}

export default HeaderCardButton;