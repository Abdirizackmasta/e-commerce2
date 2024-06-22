import React from "react";
import {useParams} from 'react-router-dom'
import { UseShopContext } from "../contexts/ShopContext";
import BreadCrum from "../components/breaCrums/BreadCrum";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

function Product() {
  const {all_products} = UseShopContext();
  const{productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return <div>
    <BreadCrum product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox />
    <RelatedProducts/>
  </div>;
}

export default Product;
