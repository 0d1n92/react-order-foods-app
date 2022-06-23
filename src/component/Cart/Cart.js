import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card"
import classes from "./Cart.module.css"

const Cart =  () => {
  const ctx = useContext(CartContext);
  const render = ctx.items.map(item => {
        return (
          
            <div>{item.name}</div>
          
        )
    } );

  return (
  <Card customClass="card-white">
    <div className={classes["cart-items"]}>
    {render}
    </div>
  </Card>
  );
}

export default Cart;