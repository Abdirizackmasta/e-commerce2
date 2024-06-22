import styles from './NewsLetter.module.css'
function NewsLetter() {
    return (
        <div className={styles.newsLetter}>
            <h1>Get exclusive offers on your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id'/>
                <button>Subscribe</button>
            </div>
            
        </div>
    )
}

export default NewsLetter
