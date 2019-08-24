import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center' }}>
      <div>{count}</div>
      <br />
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}

export default Counter
