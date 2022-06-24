import React, { useEffect, useState } from 'react';
import DUMMY_MEALS from '../component/Meals/dummy-meals';

const CartContext = React.createContext({
  isOpen: false,
  items: [],
  addItems: (e, id) => {},
  setIsOpen: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenCart = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (!localStorage.cartItems) localStorage.setItem('cartItems', JSON.stringify([]));
    const storedCardItems = JSON.parse(localStorage.getItem('cartItems'));
    setItems(storedCardItems);
  }, []);

  const addItems = (e, idItems) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (!cartItems.some((e) => e.id === idItems)) {
      let item = DUMMY_MEALS.find(({ id }) => id === idItems);
      item = { ...item, count: 1 };
      cartItems.push(item);
    } else {
      cartItems.find((element) => {
        element.count += 1;
        return element.id === idItems;
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
        addItems: addItems,
        setIsOpen: onOpenCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
