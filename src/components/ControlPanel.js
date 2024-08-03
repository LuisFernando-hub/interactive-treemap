import React, { useState } from 'react';

const ControlPanel = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [color, setColor] = useState('76, 175, 80'); // Verde por padrão

  const handleAdd = () => {
    if (name && percentage) {
      onAddItem(name, parseFloat(percentage), color);
      setName('');
      setPercentage('');
    }
  };

  return (
    <div className="control-panel">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Porcentagem"
        value={percentage}
        onChange={e => setPercentage(e.target.value)}
      />
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="76, 175, 80">Verde</option>
        <option value="244, 67, 54">Vermelho</option>
      </select>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default ControlPanel;
