import React from 'react';
import TimerField from './Field';

class Timer extends React.Component {
  timerId;
  turn = 3000;
  tickSize = 100;
  audio = new Audio('/alert.wav');

  constructor(props) {
    super(props);
    this.state ={
      value: this.turn,
    }
  }

  tick = () => {
    let newValue = this.state.value - 100;
    if (newValue <= 0) {
      this.stop();
      newValue = 0;
      this.playSound();
    }
    this.setState({
      value: newValue,
    });
  };

  start = () => {
    console.log('start');
    this.timerId = setInterval(this.tick, 100);
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  stop = () => {
    console.log('stop');
    clearInterval(this.timerId);
  };

  refresh = () => {
    this.setState({
      value: this.turn,
    });
    this.start();
  };

  playSound = () => {
    this.audio.play();
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (<div>
      <span onClick={this.refresh}>
        <TimerField
          value={this.state.value}
          tick={this.tickSize}
        />
      </span>
    </div>)
  }
}

export default Timer;