import styles from './RelatedProducts.module.css'
import data_products from '../Assets/data'
import Item from '../item/Item'
function RelatedProducts() {
    return (
        <div className={styles.relatedproducts}>
            <h1>Related Products</h1>
            <hr />
            <div className={styles.relatedproducts_item}>
                {data_products.map((item, i)=>{
                    return <Item item={item} key={i}/>
                })}
            </div>
            
        </div>
    )
}

export default RelatedProducts
