import { connect } from 'react-redux';
import SyncExample from './pure';

const mapStateToProps = (state, ownProps) => ({
  times: state.syncExample.times
})

//Only start with 'on' for naming dispatch for props
//You can also seperate actions to another file.
const mapDispatchToProps = (dispatch) => ({
  onClickIncrement: () => dispatch({type: 'INCREMENT_TIME'}),
  onClickDecrement: () => dispatch({type: 'DECREMENT_TIME'}),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncExample);
