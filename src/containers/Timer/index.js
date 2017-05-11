import { connect } from 'react-redux';
import Timer from './Timer';
import {
  THROW_ALERT,
  DISABLE_ALERT,
  SET_HEAD_TITLE,
} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  setHeadTitle: (title) => dispatch({ type: SET_HEAD_TITLE, payload: { title: title }}),
  throwAlert: () => dispatch({ type: THROW_ALERT }),
  disableAlert: () => dispatch({ type: DISABLE_ALERT }),
});

export default connect(null, mapDispatchToProps)(Timer);
