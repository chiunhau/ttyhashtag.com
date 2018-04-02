import { connect } from 'react-redux';
import Sandbox from './pure';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  handleSetColor: color => dispatch({type: 'SET_COLOR', color: color})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sandbox);
