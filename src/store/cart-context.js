import React, { useEffect, useState } from 'react';
import DUMMY_MEALS from '../component/Meals/dummy-meals';

const CartContext = React.createContext({
  isOpen: false,
  items: [],
  cartTotal: 0,
  addItems: (e, id, amount) => {},
  removeItems: (e, id, amount) => {},
  setIsOpen: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenCart = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let total = 0;
    items.forEach((element) => {
      let singleTotal = element.count * element.price;
      total += singleTotal;
    });

    setCartTotal(total.toFixed(2));
  }, [items]);

  useEffect(() => {
    if (!localStorage.cartItems) localStorage.setItem('cartItems', JSON.stringify([]));
    const storedCardItems = JSON.parse(localStorage.getItem('cartItems'));
    setItems(storedCardItems);
  }, []);

  const removeItems = (e, idItems) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems.forEach((element) => {
      if (element.id === idItems && element.count > 1){
         element.count -= 1;
      }  else {
        cartItems = cartItems.filter((item)=> item.count > 1)
      }
    });
    setItems(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const addItems = (e, idItems, amount) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (!cartItems.some((e) => e.id === idItems)) {
      let item = DUMMY_MEALS.find(({ id }) => id === idItems);
      item = { ...item, count: amount };
      cartItems.push(item);
    } else {
      cartItems.forEach((element) => {
        if (element.id === idItems) element.count += amount;
      });
    }
    setItems(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        isOpen: isOpen,
        cartTotal: cartTotal,
        addItems: addItems,
        setIsOpen: onOpenCart,
        removeItems: removeItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
