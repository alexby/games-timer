import React from 'react';

class TimerField extends React.Component {
  render() {
    return (
      <span>
        {Math.floor(this.props.value / 60000)}
        :{Math.floor(this.props.value / 1000)}
        :{(this.props.value % 1000)/this.props.tick}
      </span>
    )
  }
}

export default TimerField;