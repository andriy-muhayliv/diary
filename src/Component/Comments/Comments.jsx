import React, { useEffect, useState } from 'react'
import styles from './Comments.module.css'



const Comments = (props) => {
    const [commentValue, setCommentValue] = useState()
    let value = (e) => {
        let val = e.target.value;
        let newData = Object.assign([], props.data)
        newData[props.index].commentValue = val;
        setCommentValue(val);
        props.setData(newData);
    }

    useEffect(() => {
        document.body.addEventListener('keydown', f1);
        return document.body.addEventListener('keydown', f1)
    }, [props.data])


    const f1 = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            let newData = Object.assign([], props.data)
            let indexL;
            newData.map((i, index) => {
                if (i.id === props.id) {
                    return indexL = index;
                }
            })

            if (props.data[indexL].commentValue !== undefined && props.data[indexL].commentValue.trim().length >= 1) {
                newData[indexL].comments.push(newData[indexL].commentValue);
                newData[indexL].commentValue = '';
                props.setData(newData);
                localStorage.setItem('data', JSON.stringify(newData));
                setCommentValue('');
                props.setLocalStore(JSON.parse(localStorage.getItem('data')));

            }

            // localStorage.setItem('data', JSON.stringify(newData));
            // props.setLocalStore(JSON.parse(localStorage.getItem('data')))
        }
    }



    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <h2>Comments # {props.data ? props.index + 1 : null}</h2>
                {props.comments ? props.comments.map((i, index) => (<p key={index}>{i}</p>)) : null}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {props.data && (<input onChange={value} value={commentValue} />)}
            </div>
        </div>
    )
}

export default Comments;