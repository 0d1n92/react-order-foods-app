import React ,{useEffect, useState } from "react";

const CartContext = React.createContext(
  { 
    isOpen : false,
    items: [],
    setIsOpen: () => {}

  } );

  export const CartContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const onOpenCart = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };

    useEffect(() =>{
      if (!localStorage.cartItems) localStorage.setItem('cartItems', JSON.stringify([]));
      const storedCardItems = JSON.parse(localStorage.getItem('cartItems'));
      setItems(storedCardItems);
    }, []); 

    return (
    <CartContext.Provider
      value={{
        items: items,
        isOpen: isOpen,
        setIsOpen: onOpenCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
  }
  export default CartContext;