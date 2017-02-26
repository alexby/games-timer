import React from 'react';

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

export default TimerField;
