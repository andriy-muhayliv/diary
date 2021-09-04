import style from './App.module.css';
import Items from './Component/Items/Items';
import { useState, useEffect } from 'react';
import Comments from './Component/Comments/Comments';
import { NavLink, Route } from 'react-router-dom';

function App() {
  let [localStore, setLocalStore] = useState(JSON.parse(localStorage.getItem('data')));
  let [data, setData] = useState();
  console.log(data)
  useEffect(() => {
    setData(localStore);
  }, [localStore])



  return (
    <div className={style.app}>
      <div className={style.left}>
        <div className={style.text}>
          <NavLink to='/' className={style.link}>
            <h1>DAIRY APP</h1>
            <p>Comment with no sense</p>
          </NavLink>
        </div>
      </div>
      <div className={style.main}>
        <Items setData={setData} setLocalStore={setLocalStore} localStore={localStore} data={data} />
        <Route exact path={`/`}> <Comments /></Route>
        {data ? data.map((i, index) => (<Route path={`/${index}`}> <Comments
          index={index}
          key={i.id}
          id={i.id}
          data={data}
          setData={setData}
          comments={i.comments}
          setLocalStore={setLocalStore}
        /></Route>)) : null}
      </div>
    </div>
  );
}

export default App;
