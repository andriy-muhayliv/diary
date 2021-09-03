import React from 'react'
import style from './ItemsContainer.module.css'
import { Link } from 'react-router-dom'

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
        <div className={style.container}>
            <Link to={`/${props.index}`}><p>{props.inputText}</p></Link>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default ItemsContainer;