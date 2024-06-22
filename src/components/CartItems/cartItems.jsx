import { UseShopContext } from "../../contexts/ShopContext";
import styles from "./cartItems.module.css";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_products, cartItems, removeFromCart, getTotalAmount } =
    UseShopContext();
  console.log(all_products.new_price);
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div
                className={`${styles.cartItems_format} ${styles.cartItems_format_main}`}
              >
                <img src={e.image} alt="" className={styles.product_icon} />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className={styles.cartItems_quantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className={styles.cartItems_remove_icon}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartItems_down}>
        <div className={styles.cartItems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartItems_total_item}>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartItems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartItems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
        <div className={styles.cartItems_promocode}>
          <p>if you have a promo code, Enter it here</p>
          <div className={styles.cartItems_promobx}>
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
