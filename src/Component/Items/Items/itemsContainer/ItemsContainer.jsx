import React from 'react'
import styles from './ItemsContainer.module.css'
import { NavLink } from 'react-router-dom'

const ItemsContainer = (props) => {

    console.log(styles)

    const deleteItem = () => {
        let arr = props.data.slice();

        props.data.map((i, index) => {
            if (i.id === props.id) {
                arr.splice(index, 1)
                props.setData([...arr])
                localStorage.setItem('data', JSON.stringify(arr))
            }
        });
    }

    return (
        <NavLink className={styles.text} activeClassName={styles.active} to={`/${props.index}`}>
            <div className={styles.container}>
                <p>{props.inputText}</p>
                <button style={{ width: '20%' }} onClick={deleteItem}>Delete</button>
            </div>
        </NavLink>

    )
}

export default ItemsContainer;