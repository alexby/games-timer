import React, { PropTypes } from 'react';
import TimerField from './Field';
import { browserHistory } from 'react-router';

class Timer extends React.Component {
  tickSize = 100;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setHeadTitle('game');
  };

  componentDidMount() {
    this.props.startTimer();
  }

  componentWillUnmount() {
    this.props.stopTimer();
  }

  render() {
    return (<div>
      <div>
        <span onClick={this.props.startTimer}>
          <TimerField remainTime={this.props.time} tick={this.tickSize} />
        </span>
      </div>
      <div>
        <a onClick={() => {this.props.disableAlert(); browserHistory.goBack()}} href="#">Back</a>
      </div>
    </div>)
  }
}

Timer.propTypes = {
  setHeadTitle: PropTypes.func.isRequired,
  disableAlert: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  time: 3000,
};

export default Timer;