import React from 'react';

const TreemapBox = ({ item, onRemove }) => {
  const { id, name, percentage, color } = item;

  const colorIntensity = 1 - (percentage / 100);
  const backgroundColor = `rgba(${color}, ${colorIntensity})`;

  return (
    <div
      className="treemap-box"
      style={{
        width: `${percentage}%`,
        height: `${percentage}%`,
        backgroundColor,
      }}
    >
      <button onClick={() => onRemove(id)} className="remove-btn">X</button>
      <div className="content">
        {name} ({percentage}%)
      </div>
    </div>
  );
};

export default TreemapBox;
