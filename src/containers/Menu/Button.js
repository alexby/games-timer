import React from 'react';
import { Link } from 'react-router';

class MenuButton extends React.Component {
  render() {
    return (
      <li>
        <Link to={this.props.to}>{this.props.title}</Link>
      </li>
    )
  }
}

export default MenuButton;