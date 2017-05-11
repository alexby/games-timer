import React, { PropTypes } from 'react';

class TimerField extends React.Component {
  render() {
    return (
      <span>
        {Math.floor(this.props.remainTime / 60000)}
        :{Math.floor(this.props.remainTime / 1000)}
        :{(this.props.remainTime % 1000)/this.props.tick}
      </span>
    )
  }
}

TimerField.propTypes = {
  remainTime : PropTypes.number.isRequired,
  tick: PropTypes.number,
};

TimerField.defaultProps = {
  tick: 1000,
};

export default TimerField;
