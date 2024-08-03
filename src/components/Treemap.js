import React, { useState } from 'react';
import TreemapBox from './TreemapBox';
import ControlPanel from './ControlPanel';

const Treemap = () => {
  const [items, setItems] = useState([]);

  const addItem = (name, percentage, color) => {
    const newItem = {
      id: Date.now(),
      name,
      percentage,
      color,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="treemap-container">
      <div className="treemap green-side">
        {items.filter(item => item.color === "76, 175, 80").map(item => (
          <TreemapBox key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>
      <div className="treemap red-side">
        {items.filter(item => item.color === "244, 67, 54").map(item => (
          <TreemapBox key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>
      <ControlPanel onAddItem={addItem} />
    </div>
  );
};

export default Treemap;
