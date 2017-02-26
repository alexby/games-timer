import React from 'react';
import MenuButton from './Button';

class MenuGame extends React.Component {
  gamesModes = {
    codenames: [
      {
        name: 'regular',
        title: 'Regular',
      },
      {
        name: 'hard',
        title: 'Hard',
      },
    ],
    settlers_of_catan: [
      'normal',
    ],
  };

  menuModesList = (name) => {
    console.log(this.gamesModes[name]);
    return this.gamesModes[name].map((mode) => {
        let link = this.props.params.name + '/' + mode.name;
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

  render() {
    //this.menuModesList(this.props.params.name);
    return (
      <ul>
        {this.menuModesList(this.props.params.name)}
          <MenuButton
            to="/"
            title="Back"
          />
      </ul>
    );

  }
}

export default MenuGame;
