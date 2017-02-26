import { connect } from 'react-redux';
import Main from './Main';
import Game from './Game';
import { SET_HEAD_TITLE } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  setHeadTitle: (title) => dispatch({ type: SET_HEAD_TITLE, title: title }),
});

const MenuMain = connect(null, mapDispatchToProps)(Main);
const MenuGame = connect(null, mapDispatchToProps)(Game);

export { MenuMain, MenuGame }
