import React, { useEffect, useState } from "react";
import styles from './Popular.module.css'
import Item from "../item/Item";

function Popular() {
  const [popularInWomen, setPopularInWomen] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen').then(res => res.json()).then(data=> setPopularInWomen(data))
    }, [])
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr className={styles.hr}/>
      <div className={styles.popular_item}>
        {popularInWomen.map((item, i) => {
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
