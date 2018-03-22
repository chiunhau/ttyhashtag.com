import { connect } from 'react-redux';
import AsyncExample from './pure';
import { fetchData } from '../fetchActions';

const mapStateToProps = (state, ownProps) => ({
  book: state.fetchedData.randomPage
})

//Only start with 'on' for naming dispatch for props
//You can also seperate actions to another file.
const mapDispatchToProps = (dispatch) => ({
  onClickFetch: (config) => {
    dispatch(fetchData(config))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncExample);
