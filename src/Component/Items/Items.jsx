import React, { useState } from 'react'
import style from './Items.module.css'
import ItemsContainer from './Items/itemsContainer/ItemsContainer';

const Items = (props) => {

    let [inputValue, setInputValue] = useState(localStorage.getItem('ItemsInputValue'));

    const valueChange = (e) => {
        let value = e.target.value;
        setInputValue(value)
        localStorage.setItem('ItemsInputValue', value)
    }

    let addItem = () => {
        if (inputValue.trim(' ').length >= 1) {
            let id = Date.now();

            let obj = { 'id': id, 'inputText': inputValue.trim(' '), 'comments': [], commentValue: '' }

            let newData = () => {
                if (props.data === null) {
                    return [obj]
                } else if (props.data) {
                    return [...props.data, obj]
                }
            }
            localStorage.setItem('data', JSON.stringify(newData()))
            props.setLocalStore(JSON.parse(localStorage.getItem('data')))
            localStorage.setItem('ItemsInputValue', '');
            setInputValue('');
        }
    }

    return (
        <div className={style.box}>
            <div className={style.content}>
                <h2>Items</h2>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                    <input placeholder='Type name here...' onChange={valueChange} value={inputValue} />
                    <button onClick={addItem}>Add new</button>
                </div>
                <div style={{ marginTop: '10px' }}>
                    {props.data ? props.data.map((i, index) => (<ItemsContainer
                        index={index}
                        data={props.data}
                        setData={props.setData}
                        key={i.id}
                        id={i.id}
                        inputText={i.inputText}
                        text={i.text}
                        item={i} />))
                        : null}
                </div>

            </div>
        </div>
    )
}

export default Items;