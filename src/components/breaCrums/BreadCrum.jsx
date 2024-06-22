import styles from './BreadCrum.module.css'
function BreadCrum({product}) {
    return (
        <div className={styles.breadcrum}>
            HOME &#8594; SHOP  &#8594; {product.category}  &#8594;  {product.name}
        </div>
    )
}

export default BreadCrum
