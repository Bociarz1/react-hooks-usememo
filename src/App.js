import { useMemo, useState } from "react"

function App() {
  const [count,setCount] = useState(0)
  const [randomNum,setRandomNum] = useState(0)

//  2. create increase function
  const increase = () => {
    setCount(count+1)
  }
  
  // 5. wrap with useMemo funcions that you want to check if there are changes/ isEven cache VALUE
  const isEven = useMemo(() => {
    let i = 0
    while(i<1000000000) i++
    if(count % 2 === 0) return "even" 
    else return "odd"
  },[count])

  // 4. create other functions
  const random = () => {
    setRandomNum(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <h4>Counter: {count} <br/> Number is:{isEven}</h4>
      {/* 1. create increase counter button */}
      <button onClick={increase}>Increase</button>
      <h4>Random number:{randomNum}</h4>
      {/* 3. create other functionality */}
      <button onClick={random}>Generate random number</button>
    </>
  );
}

export default App;
