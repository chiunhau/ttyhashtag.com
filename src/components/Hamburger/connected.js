import { connect } from 'react-redux';
import Sandbox from './pure';

const mapStateToProps = (state, ownProps) => ({
  infoboxIsActive: state.infobox.isActive
})

const mapDispatchToProps = (dispatch) => ({
  onOpenInfobox: () => dispatch({type: "OPEN_INFOBOX"})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sandbox);
