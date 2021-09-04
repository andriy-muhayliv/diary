import React from 'react'
import styles from './ItemsContainer.module.css'
import { NavLink } from 'react-router-dom'

const ItemsContainer = (props) => {


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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>{props.inputText}</p>
                    <div className={styles.counter}>{props.item.comments.length ? props.item.comments.length - 1 : null}</div>
                </div>
                <button style={{ width: '20%' }} onClick={deleteItem}>Delete</button>
            </div>
        </NavLink>

    )
}

export default ItemsContainer;