import styles from './NewCollections.module.css'
import new_collctions from '../Assets/new_collections'
import Item from '../item/Item'
function NewCollections() {
    return (
        <div className={styles.newCollctions}>
            <h1 className={styles.head}>New Collections</h1>
            <hr className={styles.hr}/>
            <div className={styles.collections}>
                {new_collctions.map((item,i)=> {
                    return <Item key={i} id={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections
