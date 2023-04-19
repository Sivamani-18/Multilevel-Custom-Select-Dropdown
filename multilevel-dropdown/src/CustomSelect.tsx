import React, { useState } from 'react';

interface Props {
  data: any;
  onSelect?: (item: any) => void;
}

interface State {
  selectedItem: any;
  showMenu: boolean;
}

const CustomSelect: React.FC<Props> = ({ data, onSelect }) => {
  const [state, setState] = useState<State>({
    selectedItem: null,
    showMenu: false,
  });

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      showMenu: !prevState.showMenu,
    }));
  };

  const handleSelect = (item: any) => {
    setState({ selectedItem: item, showMenu: false });
    if (onSelect) {
      onSelect(item);
    }
  };

  const { selectedItem, showMenu } = state;

  return (
    <div className='custom-select'>
      <div className='selected-item' onClick={toggleMenu}>
        {selectedItem ? selectedItem.name : 'Select an item'}
      </div>
      {showMenu && (
        <div className='menu'>
          {data.map((item: any) => (
            <MenuItem key={item.id} item={item} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  item: any;
  onSelect?: (item: any) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onSelect }) => {
  const handleClick = () => {
    if (item.children && item.children.length > 0) {
      return;
    }
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      className='menu-item'
      onClick={handleClick}
      style={{ paddingLeft: `${item.level * 20}px` }}
    >
      {item.name}
      {item.children && item.children.length > 0 && (
        <div className='submenu'>
          {item.children.map((child: any) => (
            <MenuItem key={child.id} item={child} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
