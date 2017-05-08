import React, { PropTypes } from 'react';
import TimerField from './Field';
import { browserHistory } from 'react-router';

class Timer extends React.Component {
  timerId;
  turn = 3000;
  tickSize = 100;

  constructor(props) {
    super(props);
    this.state ={
      remainTime: this.turn,
    }
  }

  tick = () => {
    let newRemainTime = this.state.remainTime - 100;
    if (newRemainTime <= 0) {
      this.stop();
      newRemainTime = 0;
      this.props.throwAlert();
      this.props.setBackground('red');
    }
    this.setState({
      remainTime: newRemainTime,
    });
  };

  start = () => {
    this.timerId = setInterval(this.tick, 100);
    this.props.disableAlert();
  };

  stop = () => {
    clearInterval(this.timerId);
    this.props.setBackground('white');
  };

  refresh = () => {
    this.stop();
    this.setState({
      remainTime: this.turn,
    });
    this.start();
  };

  componentWillMount() {
    this.props.setHeadTitle('game');
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (<div>
      <div>
        <span onClick={this.refresh}>
          <TimerField
            remainTime={this.state.remainTime}
            tick={this.tickSize}
          />
        </span>
      </div>
      <div>
        <a onClick={browserHistory.goBack} href="#">Back</a>
      </div>
    </div>)
  }
}

Timer.propTypes = {
  setBackground: PropTypes.func.isRequired,
  setHeadTitle: PropTypes.func.isRequired,
  throwAlert: PropTypes.func.isRequired,
  disableAlert: PropTypes.func.isRequired,
};

export default Timer;