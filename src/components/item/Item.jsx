import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
function Item({item}) {
  const {name,image,old_price,new_price} = item;
  return (
    <div className="item">
      <Link to={`/product/${item.id}`}>
      <img src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-old">${old_price}</div>
        <div className="item-price-new">${new_price}</div>
      </div>
    </div>
  );
}

export default Item;
