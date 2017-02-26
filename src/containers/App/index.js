import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  background: state.background,
  title: state.title,
});


export default connect(mapStateToProps)(App);
