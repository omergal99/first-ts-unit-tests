import React, { useState, useEffect } from 'react';

function Counter() {

  const [myNum, setMyNum] = useState<number>(0);
  const [numHistory, setNumHistory] = useState<Array<number>>([]);

  useEffect(()=>{
    // console.log('fff')
  })

  const increment = () => {
    setMyNum(myNum + 1);
    const copy = [myNum + 1,...numHistory];
    setNumHistory(copy);
  }
  const decrement = () => {
    setMyNum(myNum - 1);
    const copy = [myNum - 1,...numHistory];
    setNumHistory(copy);
  }

  return (
    <div className="counter">
      <h3>{myNum}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {numHistory.map((num,idx)=>{
          return <div key={idx}>{num}</div>
        })}
      </div>
    </div>
  )
}

export default Counter;