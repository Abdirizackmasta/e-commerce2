import { createContext, useContext, useState } from "react"
import all_products from '../components/Assets/all_product'
const ShopContextProvider = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


function ShopContext({children}) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  function addToCart(itemId){
    setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }
  
    function removeFromCart(itemId){
    setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId]-1}));
    console.log(cartItems);
  }
 function getTotalAmount() {
  let totalAmount = 0;

  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = all_products.filter((product) => product.id === Number(item));
      // Use filter instead of find and check if the itemInfo array is not empty
      if (itemInfo && itemInfo.length > 0) {
        totalAmount += itemInfo[0].new_price * cartItems[item];
      }
    }
  }

  return totalAmount;
}

  function getTotalCartItems(){
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalItem+= cartItems[item]
      }
    }
    return totalItem;
  }
  const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalCartItems};
    return (
        <ShopContextProvider.Provider value={contextValue}>
            {children}
        </ShopContextProvider.Provider>
    )
}
function UseShopContext() {
  const context = useContext(ShopContextProvider);
  if (context === undefined)
    throw new Error("ShopContext was used outside the shopProvider");
  return context;
}

export  {ShopContext,UseShopContext}
