import React, { useEffect, useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    console.log("Hello")
  }, [count])


  return (
    <div className='text-center mt-5'>
      <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button className="btn btn-primary mx-2" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
