import React, { useState } from 'react';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Counter Component</h2>
      <p data-testid="count-value">Current Count: {count}</p>
      <button onClick={() => setCount(count - 1)} aria-label="decrement">
        Decrease
      </button>
      <button onClick={() => setCount(count + 1)} aria-label="increment" style={{ marginLeft: '10px' }}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
