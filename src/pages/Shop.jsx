import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newcollections/NewCollections";
import NewsLetter from "../components/newsletter/NewsLetter";
import styles from './CSS/Shop.module.css'
function Shop() {
  return (
    <div className={styles.shop}>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
}

export default Shop;
