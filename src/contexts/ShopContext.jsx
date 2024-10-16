import { createContext, useContext, useEffect, useState } from "react"

const ShopContextProvider = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300+ 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


function ShopContext({ children }) {
  const [all_products, set_allproducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());


 useEffect(() => {
  // Fetch all products
  fetch('http://localhost:4000/allproducts')
    .then((res) => {
      return res.json();
    })
    .then((data) => set_allproducts(data))

  // Fetch cart data if the auth token exists
  const token = localStorage.getItem('auth-token');
  if (token) {
    fetch('http://localhost:4000/getcartdata', {
      method: 'POST',
      headers: {
         Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), 
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setCartItems(data))
  }
}, []);

  

  function addToCart(itemId){
    setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId]+1}));
    if (localStorage.getItem("auth-token")) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId})
      }).then(res => res.json()).then(data => console.log(data))
    }
  }
  
    function removeFromCart(itemId){
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (localStorage.getItem('auth-token')) {
           fetch('http://localhost:4000/removefromcart', {
              method: 'POST',
              headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({"itemId": itemId})
            }).then(res => res.json()).then(data => console.log(data))
            }
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
