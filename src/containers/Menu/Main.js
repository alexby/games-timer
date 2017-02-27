import React, { PropTypes } from 'react';
import MenuButton from './Button';

class MenuMain extends React.Component {
  componentWillMount() {
    this.props.setHeadTitle('Main');
  }

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

MenuMain.propTypes = {
  setHeadTitle: PropTypes.func.isRequired,
};

export default MenuMain;
