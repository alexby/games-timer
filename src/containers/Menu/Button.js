import React, { PropTypes } from 'react';
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

MenuButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuButton;
