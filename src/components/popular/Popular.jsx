import React from "react";
import styles from './Popular.module.css'
import data_product from "../Assets/data";
import Item from "../item/Item";

function Popular() {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr className={styles.hr}/>
      <div className={styles.popular_item}>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
