import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card"
import classes from "./Cart.module.css"

const Cart =  () => {
  const ctx = useContext(CartContext);
  const render = ctx.items.map(item => {
        return (
          <div className={classes["card-items"]} key={item.id}>
            <p>{item.name}</p>
          </div>
        )
    } );


  return (
  <Card>
    {render}
  </Card>
  );
}

export default Cart;