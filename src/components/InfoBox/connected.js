import { connect } from 'react-redux';
import Sandbox from './pure';

const mapStateToProps = (state, ownProps) => ({
  infoboxIsActive: state.infobox.isActive,
  activePageNum: state.infobox.activePage
})

const mapDispatchToProps = (dispatch) => ({
  onCloseInfobox: () => dispatch({type: "CLOSE_INFOBOX"}),
  onSetActivePage: pageNumber => {dispatch({type: 'SET_ACTIVE_PAGE', pageNumber})}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sandbox);
