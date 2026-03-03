import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Shopping List</h2>
      <form onSubmit={addItem} style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new item..."
          aria-label="New item input"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit">Add Item</button>
      </form>

      {items.length === 0 ? (
        <p>Your list is empty.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ flexGrow: 1 }}>{item}</span>
              <button 
                onClick={() => removeItem(index)}
                aria-label={`Remove ${item}`}
                style={{ padding: '4px 8px', fontSize: '0.8em' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
