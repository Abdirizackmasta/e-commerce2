import styles from './DescriptionBox.module.css'
function DescriptionBox() {
    return (
        <div className={styles.descriptionBox}>
            <div className={styles.descriptionBox_navigator}>
                <div className={styles.descriptionBox_navBox}>Description</div>
                <div className={`${styles.descriptionBox_navBox} ${styles.fade}`}>Reviews(133)</div>
            </div>
            <div className={styles.description}>
                <p>
                    An e-commerce website is an online platform that facilitates the buying and selling of products and services over the internet.it serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence. E-commerce ⚚ websites have gained immense popularity due to their convenient accessibility, and global reach they offer .
                </p>
            </div>
        </div>
    )

}

export default DescriptionBox
