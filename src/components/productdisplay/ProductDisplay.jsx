import styles from './ProductDisplay.module.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { UseShopContext } from '../../contexts/ShopContext'

function ProductDisplay({product}) {
    const {addToCart} = UseShopContext();
    return (
        <div className={styles.product_display}>
            <div className={styles.product_dispay_left}>
                <div className={styles.product_display_images}>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className={styles.ProductDisplay_image}>
                    <img className ={styles.productDisplay_main_img} src={product.image} alt="" />
                </div>
            </div>
            <div className={styles.product_dispay_right}>
                <h1>{product.name}</h1>
                <div className={styles.productdisplay_right_stars}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className={styles.productDisplay_prices}>
                    <div className={styles.product_dispay_old_prices}>{product.old_price}</div>
                    <div className={styles.product_dispay_new_prices}>{product.new_price}</div>
                </div>
                <div>
                    A lightweight, usually knitted, pullover shirts, close-fitting and with 
                    around neckline and short sleeves worn as undershirt or outer garment. 
                </div>
                <div className={styles.productDisplay_size}>
                    <h1>Select size</h1>
                    <div className={styles.sizes}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className={styles.prductDisplay_right_category}><span>Category:</span>Woman T-shirt, Crop Top</p>
                    <p className={styles.prductDisplay_right_category}><span>Tags:</span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
