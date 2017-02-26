import React from 'react';
import MenuButton from './Button';

class MenuMain extends React.Component {
  render() {
    return (
      <ul>
        <MenuButton
          to="game/codenames"
          title="Codenames"
        />
        <MenuButton
          to="game/settlers_of_catan"
          title="The settlers of Catan"
        />
      </ul>
    );
  }
}

export default MenuMain;
