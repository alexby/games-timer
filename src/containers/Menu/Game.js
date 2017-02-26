import React from 'react';
import MenuButton from './Button';

class MenuGame extends React.Component {
  gamesModes = {
    codenames: {
      name: 'Codenames',
      submenus: [
        {
          name: 'regular',
          title: 'Regular',
        },
        {
          name: 'hard',
          title: 'Hard',
        },
      ]
    },
    settlers_of_catan: {
      name: 'Settlers of catan',
      submenus: [
        'normal'
      ]
    },
  };

  menuModesList = (name) => {
    return this.gamesModes[name].submenus.map((mode) => {
        let link = '/game/' + this.props.params.name + '/' + mode.name;
        return (
          <MenuButton
            to={link}
            title={mode.title}
            key={mode.name}
          />
        )
      }
    )
  };

  componentWillMount() {
    this.props.setHeadTitle(this.gamesModes[this.props.params.name].name);
  }

  render() {
    return (
      <ul>
        {this.menuModesList(this.props.params.name)}
        <MenuButton
          to="/"
          title="Back"
          key="/"
        />
      </ul>
    );

  }
}

export default MenuGame;
