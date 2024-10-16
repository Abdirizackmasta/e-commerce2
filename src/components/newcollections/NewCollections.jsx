import styles from './NewCollections.module.css'
import Item from '../item/Item'
import { useEffect, useState } from 'react'
function NewCollections() {
    const [new_collections, setNew_newcollections] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/newcollections').then(res => res.json()).then(data=> setNew_newcollections(data))
    }, [])
    return (
        <div className={styles.newCollctions}>
            <h1 className={styles.head}>New Collections</h1>
            <hr className={styles.hr}/>
            <div className={styles.collections}>
                {new_collections.map((item,i)=> {
                    return <Item key={i} id={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections
