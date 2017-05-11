import { connect } from 'react-redux';
import Timer from './Timer';
import {
  DISABLE_ALERT,
  SET_HEAD_TITLE,
  START_TIMER,
  STOP_TIMER,
} from '../../actions';

const mapStateToProps = (state) => ({
  time: state.time,
});

const mapDispatchToProps = (dispatch) => ({
  setHeadTitle: (title) => dispatch({ type: SET_HEAD_TITLE, payload: { title: title }}),
  disableAlert: () => dispatch({ type: DISABLE_ALERT }),
  startTimer: (time) => dispatch({ type: START_TIMER }),
  stopTimer: (time) => dispatch({ type: STOP_TIMER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
