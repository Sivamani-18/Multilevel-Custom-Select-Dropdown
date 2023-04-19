import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { options } from './userdata';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleSelect = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <CustomSelect data={options} onSelect={handleSelect} />
      <div>Selected item: {selectedItem ? selectedItem.name : '-'}</div>
    </div>
  );
};

export default App;
