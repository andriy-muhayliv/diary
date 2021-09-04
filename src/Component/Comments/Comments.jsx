import React, { useEffect, useState } from 'react'
import styles from './Comments.module.css'



const Comments = (props) => {
    const [commentValue, setCommentValue] = useState(localStorage.getItem(`comment${props.id}`))

    let value = (e) => {
        let val = e.target.value;
        localStorage.setItem(`comment${props.id}`, val);
        setCommentValue(val);

    }

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === 'Enter') {
                let newData = Object.assign([], props.data)
                newData.map((i, index) => {
                    if (i.id === props.id) {
                        return newData[index].comments = [...newData[index].comments, commentValue];
                    }
                })

                localStorage.setItem('data', JSON.stringify(newData));
                setCommentValue('');
                localStorage.setItem(`comment${props.id}`, '')
                props.setLocalStore(JSON.parse(localStorage.getItem('data')));

            }
        });
    }, [commentValue])



    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <h2>Comments # {props.index + 1}</h2>
                {props.comments ? props.comments.map((i, index) => (<p key={index}>{i}</p>)) : null}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {props.data ? (<input onChange={value} value={commentValue} />) : null}
            </div>
        </div>
    )
}

export default Comments;