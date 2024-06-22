import React from "react";
import styles from './CSS/ShopCategory.module.css'
import { UseShopContext } from "../contexts/ShopContext";
import dropdown from '../components/Assets/dropdown_icon.png'
import Item from "../components/item/Item";


function ShopCategory({category, banner}) {
  const {all_products} = UseShopContext()
  return  (<div className={styles.ShopCategory}>
    <img src={banner} alt="banner" className={styles.banner}/>
    <div className={styles.ShopCategory_indexSort}>
      <p><span>Showing 1-12 </span>out of {all_products.length} products</p>
      <div className={styles.shopCategory_sort}>
        sort by <img src={dropdown} alt="dropdown-icon" />
      </div>
    </div>
    <div className={styles.shopCategory_products}>
      {all_products.map((item, i)=>{
        if(category === item.category){
          return <Item item={item} key={i}/>
        }else{
          return null;
        }

      })}
    </div>
    <div className={styles.ShopCategory_loadmore}>
      Explore More
    </div>
  </div>);
}

export default ShopCategory;
